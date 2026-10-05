import { Component, OnInit } from '@angular/core';
import {
  ACADEMIC_YEARS,
  AcademicYearNode,
  buildEnrollmentKey,
  Course,
  DegreeNode,
  DepartmentNode,
  ELECTIVE_ENROLLMENT_DATA,
  ENROLLMENT_DATA,
  ENROLLMENT_STATUSES,
  EnrollmentStatus,
  SemesterNode,
  Student
} from './mock-enrollment-data';

// One course's independent pagination state - see corePagingState/electivePagingState. Search
// is no longer part of this: it's a single global search (see globalSearchText) rather than
// per-course state.
interface CoursePagingState {
  page: number;
  pageSize: number;
}

// Everything a course's controls row, table and "Showing X to Y of Z" footer need to render
// for one change-detection pass, computed together so the template only calls getPageInfo()
// once per course (via *ngIf="getPageInfo(course) as pageInfo") instead of recomputing the
// paged list separately for every binding that needs a piece of it.
interface CoursePageInfo {
  pageSize: number;
  currentPage: number;
  totalPages: number;
  // The full roster, unless globalSearchText matched this course only via one or more of its
  // students (not the course's own name/code) - then this is just the matching student count.
  totalStudents: number;
  showingFrom: number;
  showingTo: number;
  startIndex: number;
  pagedStudents: Student[];
  pageNumbers: number[];
}

@Component({
  selector: 'app-course-wise-enrollment',
  templateUrl: './course-wise-enrollment.component.html',
  styleUrls: ['./course-wise-enrollment.component.css']
})
export class CourseWiseEnrollmentComponent implements OnInit {

  readonly academicYears: AcademicYearNode[] = ACADEMIC_YEARS;
  readonly statuses: EnrollmentStatus[] = ENROLLMENT_STATUSES;

  degrees: DegreeNode[] = [];
  departments: DepartmentNode[] = [];
  semesters: SemesterNode[] = [];
  sections: string[] = [];

  selectedYear = '';
  selectedDegree = '';
  selectedDepartment = '';
  selectedSemester = '';
  selectedSection = '';

  // undefined = selection incomplete, null = no data found for the combination,
  // [] = valid combination but no courses defined, non-empty array = courses to show.
  courses: Course[] | null | undefined = undefined;

  // Same undefined/null/[]/array semantics as `courses` above, but for the Elective Course
  // section - sourced from ELECTIVE_ENROLLMENT_DATA instead of ENROLLMENT_DATA, and kept
  // entirely separate so it can never affect totalStudentsForDegreeAndDepartment (which only
  // ever reads `courses`) or Core Course's own state.
  electiveCourses: Course[] | null | undefined = undefined;

  // One global search box (in the heading row) that filters both Core and Elective course
  // lists - matching a course's own name/code, or any of its students' candidate ID/USN/name,
  // shows that course so it can be opened. Replaces the old per-course table search entirely;
  // it never touches `courses`/`electiveCourses` themselves, only which of them are displayed.
  globalSearchText = '';

  enrollmentMessage: string | null = null;
  enrollmentMessageType: 'success' | 'danger' = 'success';
  // Drives the success toast's Bootstrap `.show` class so it can fade out (not just
  // vanish instantly, which is what *ngIf removal alone would do).
  successAlertVisible = false;

  private successAlertHideTimer: any;
  private successAlertRemoveTimer: any;

  // The course whose Save button opened the Enrollment Confirmation modal - drives the
  // modal's displayed counts. The modal element itself is shared/single-instance rather
  // than duplicated per course.
  courseToSave: Course | null = null;

  // Upload Elective Course modal state.
  electiveCourseForUpload: Course | null = null;
  uploadFile: File | null = null;
  uploadFileError: string | null = null;

  // The course whose delete/trash icon opened the Delete Confirmation modal - drives the
  // modal's displayed course name/code. Shared/single modal instance, not one per course.
  courseToDelete: Course | null = null;

  // Which list courseToSave/courseToDelete belongs to, so the shared Enrollment Confirmation
  // and Delete Confirmation modals persist their action back to the correct data source
  // (ENROLLMENT_DATA vs ELECTIVE_ENROLLMENT_DATA) and reload the correct section. Defaults to
  // 'core' so every existing Core Course call site is unaffected.
  private courseToSaveList: 'core' | 'elective' = 'core';
  private courseToDeleteList: 'core' | 'elective' = 'core';

  private expandedCourseCodes = new Set<string>();
  private expandedElectiveCourseCodes = new Set<string>();

  readonly pageSizeOptions: number[] = [5, 10, 15, 20, 50, 100];

  // Per-course pagination/search state, keyed by course code - kept entirely separate from
  // Core/Elective's other independent state (expandedCourseCodes etc.) above, and separate
  // per list so a Core and an Elective course sharing the same code can never collide.
  private corePagingState = new Map<string, CoursePagingState>();
  private electivePagingState = new Map<string, CoursePagingState>();

  constructor() { }

  ngOnInit() {
    // Pre-select the first available option at each level on load, cascading down exactly
    // the way a user's own clicks would (reusing the same select*() methods), rather than
    // starting on a blank "please select..." screen.
    if (this.academicYears.length === 0) {
      return;
    }
    this.selectYear(this.academicYears[0].year);

    if (this.degrees.length === 0) {
      return;
    }
    this.selectDegree(this.degrees[0].name);

    if (this.departments.length === 0) {
      return;
    }
    this.selectDepartment(this.departments[0].name);

    if (this.semesters.length === 0) {
      return;
    }
    this.selectSemester(this.semesters[0].name);

    if (this.sections.length === 0) {
      return;
    }
    this.selectSection(this.sections[0]);
  }

  get isSelectionComplete(): boolean {
    return !!(this.selectedYear && this.selectedDegree && this.selectedDepartment &&
      this.selectedSemester && this.selectedSection);
  }

  // Total unique students across the courses currently on screen, i.e. for the exact
  // Academic Year, Degree, Department, Semester and Section combination selected.
  // A student enrolled in more than one course under that combination is counted once,
  // identified by candidateId (their real-world identity, distinct from the per-record id).
  get totalStudentsForDegreeAndDepartment(): number {
    if (!this.courses) {
      return 0;
    }

    const uniqueCandidateIds = new Set<string>();
    this.courses.forEach(c => c.students.forEach(s => uniqueCandidateIds.add(s.candidateId)));
    return uniqueCandidateIds.size;
  }

  // Elective courses available to upload against are simply the courses currently loaded
  // for the selected combination - there is no separate "elective" data source. Deliberately
  // not affected by globalSearchText: the upload dropdown should still offer every course
  // regardless of what's currently being searched for.
  get availableElectiveCourses(): Course[] {
    return this.courses || [];
  }

  // Mirrors what the old per-course search used to do on every keystroke: jump back to page 1,
  // since whatever page a course was on may no longer line up with its newly filtered results.
  // Applied to every course up front (not lazily inside getPageInfo) so a course that's back on
  // page 1 after a search still starts at page 1 if the user clears the search afterward, too.
  //
  // With no active search, accordion state is never touched here - every course keeps whatever
  // open/closed state the user last set manually, and toggleCourse()/toggleElectiveCourse() go
  // on working exactly as they always did.
  //
  // With an active search, both accordion levels are entirely RECOMPUTED from the current term
  // on every keystroke (not just added to), independently for Core and Elective:
  //  - The outer "Core Course"/"Elective Course" section - a plain Bootstrap collapse with no
  //    Angular state of its own (#coreCoursesCollapse/#electiveCoursesCollapse in the template)
  //    - opens whenever that list has at least one matching course (by name/code OR by a
  //    student), via the Bootstrap JS API the same way openDeleteConfirmation() already opens
  //    the delete modal, and closes again the moment nothing in that list matches anymore.
  //  - Each individual course's own accordion (expandedCourseCodes/expandedElectiveCourseCodes)
  //    is replaced outright with exactly the set of courses matched via a student this time -
  //    never courses matched only by name/code, and never anything left over from an earlier,
  //    different search term.
  setGlobalSearchText(searchText: string): void {
    this.globalSearchText = searchText;
    this.corePagingState.forEach(state => { state.page = 1; });
    this.electivePagingState.forEach(state => { state.page = 1; });

    const term = this.globalSearchText.trim().toLowerCase();
    if (!term) {
      return;
    }

    let coreHasAnyMatch = false;
    const coreStudentMatchedCodes = new Set<string>();
    (this.courses || []).forEach(course => {
      if (this.courseMatchesGlobalSearch(course)) {
        coreHasAnyMatch = true;
      }
      if (this.courseHasMatchingStudent(course, term)) {
        coreStudentMatchedCodes.add(course.code);
      }
    });
    this.expandedCourseCodes = coreStudentMatchedCodes;
    this.setOuterSectionOpen('coreCoursesCollapse', coreHasAnyMatch);

    let electiveHasAnyMatch = false;
    const electiveStudentMatchedCodes = new Set<string>();
    (this.electiveCourses || []).forEach(course => {
      if (this.courseMatchesGlobalSearch(course)) {
        electiveHasAnyMatch = true;
      }
      if (this.courseHasMatchingStudent(course, term)) {
        electiveStudentMatchedCodes.add(course.code);
      }
    });
    this.expandedElectiveCourseCodes = electiveStudentMatchedCodes;
    this.setOuterSectionOpen('electiveCoursesCollapse', electiveHasAnyMatch);
  }

  private setOuterSectionOpen(collapseElementId: string, open: boolean): void {
    const collapseElement = document.getElementById(collapseElementId);
    const bootstrapGlobal = (window as any).bootstrap;
    if (!collapseElement || !bootstrapGlobal) {
      return;
    }
    const instance = bootstrapGlobal.Collapse.getOrCreateInstance(collapseElement, { toggle: false });
    if (open) {
      instance.show();
    } else {
      instance.hide();
    }
  }

  // Core Course's own list, filtered down to the courses that match globalSearchText - either
  // the course's own name/code, or one of its students' candidate ID/USN/name. An empty search
  // matches everything, so this is a pure display filter: it never mutates `courses` itself,
  // and totalStudentsForDegreeAndDepartment/enrolledCount etc. all keep reading the unfiltered
  // `courses`/`electiveCourses` above, same as before search existed.
  get filteredCoreCourses(): Course[] | null | undefined {
    if (!this.courses) {
      return this.courses;
    }
    return this.courses.filter(course => this.courseMatchesGlobalSearch(course));
  }

  // Elective Course's equivalent of filteredCoreCourses above, entirely independent of it.
  get filteredElectiveCourses(): Course[] | null | undefined {
    if (!this.electiveCourses) {
      return this.electiveCourses;
    }
    return this.electiveCourses.filter(course => this.courseMatchesGlobalSearch(course));
  }

  private courseMatchesGlobalSearch(course: Course): boolean {
    const term = this.globalSearchText.trim().toLowerCase();
    if (!term) {
      return true;
    }
    if (this.courseMatchesByNameOrCode(course, term)) {
      return true;
    }
    return this.courseHasMatchingStudent(course, term);
  }

  private courseMatchesByNameOrCode(course: Course, term: string): boolean {
    return course.name.toLowerCase().includes(term) || course.code.toLowerCase().includes(term);
  }

  // Whether the search term matches one of this course's students specifically (as opposed to
  // the course's own name/code) - this is what decides both the student-level table filtering
  // in getPageInfo() and the auto-expand in setGlobalSearchText() above, searching this
  // course's complete student list regardless of which page is currently visible or whether
  // the course's accordion happens to be open right now.
  private courseHasMatchingStudent(course: Course, term: string): boolean {
    return course.students.some(student => this.studentMatchesGlobalSearch(student, term));
  }

  private studentMatchesGlobalSearch(student: Student, term: string): boolean {
    return student.candidateId.toLowerCase().includes(term) ||
      student.usn.toLowerCase().includes(term) ||
      student.name.toLowerCase().includes(term);
  }

  get canDownloadElectiveTemplate(): boolean {
    return !!this.electiveCourseForUpload;
  }

  get canUploadElectiveFile(): boolean {
    return !!this.electiveCourseForUpload && !!this.uploadFile && !this.uploadFileError;
  }

  // The Department ID column in the student tables (Core and Elective both draw from the
  // same selected Degree+Department+Semester+Section population) shows this same value for
  // every row, since Department is a property of the current selection, not of each student.
  get selectedDepartmentShortForm(): string {
    const departmentNode = this.departments.find(d => d.name === this.selectedDepartment);
    return departmentNode ? departmentNode.shortForm : '';
  }

  // Cascades down exactly like ngOnInit()'s own initial auto-select: whenever a parent
  // dropdown changes, the next level down is repopulated and, if it has any options,
  // immediately auto-selected to its first one (via select*(), which chains into the next
  // on*Change() in turn) rather than left blank - only a level with no options at all for the
  // new combination falls back to resetFrom(), clearing everything from there down.
  onYearChange(): void {
    const yearNode = this.academicYears.find(y => y.year === this.selectedYear);
    this.degrees = yearNode ? yearNode.degrees : [];
    if (this.degrees.length > 0) {
      this.selectDegree(this.degrees[0].name);
    } else {
      this.resetFrom('degree');
    }
  }

  onDegreeChange(): void {
    const degreeNode = this.degrees.find(d => d.name === this.selectedDegree);
    this.departments = degreeNode ? degreeNode.departments : [];
    if (this.departments.length > 0) {
      this.selectDepartment(this.departments[0].name);
    } else {
      this.resetFrom('department');
    }
  }

  onDepartmentChange(): void {
    const departmentNode = this.departments.find(dep => dep.name === this.selectedDepartment);
    this.semesters = departmentNode ? departmentNode.semesters : [];
    if (this.semesters.length > 0) {
      this.selectSemester(this.semesters[0].name);
    } else {
      this.resetFrom('semester');
    }
  }

  onSemesterChange(): void {
    const semesterNode = this.semesters.find(s => s.name === this.selectedSemester);
    this.sections = semesterNode ? semesterNode.sections : [];
    if (this.sections.length > 0) {
      this.selectSection(this.sections[0]);
    } else {
      this.resetFrom('section');
    }
  }

  onSectionChange(): void {
    this.loadCourses();
  }

  selectYear(year: string): void {
    this.selectedYear = year;
    this.onYearChange();
  }

  selectDegree(name: string): void {
    this.selectedDegree = name;
    this.onDegreeChange();
  }

  selectDepartment(name: string): void {
    this.selectedDepartment = name;
    this.onDepartmentChange();
  }

  selectSemester(name: string): void {
    this.selectedSemester = name;
    this.onSemesterChange();
  }

  selectSection(section: string): void {
    this.selectedSection = section;
    this.onSectionChange();
  }

  /**
   * Resets the selection chain starting at the given dropdown level (inclusive),
   * clearing every downstream dropdown's selection/options and any displayed
   * enrollment data.
   */
  private resetFrom(level: 'degree' | 'department' | 'semester' | 'section'): void {
    if (level === 'degree') {
      this.selectedDegree = '';
      this.departments = [];
    }
    if (level === 'degree' || level === 'department') {
      this.selectedDepartment = '';
      this.semesters = [];
    }
    if (level === 'degree' || level === 'department' || level === 'semester') {
      this.selectedSemester = '';
      this.sections = [];
    }
    this.selectedSection = '';
    this.courses = undefined;
    this.electiveCourses = undefined;
    this.expandedCourseCodes.clear();
    this.expandedElectiveCourseCodes.clear();
    this.corePagingState.clear();
    this.electivePagingState.clear();
    this.globalSearchText = '';
    this.enrollmentMessage = null;
  }

  private loadCourses(): void {
    this.expandedCourseCodes.clear();
    this.expandedElectiveCourseCodes.clear();
    this.corePagingState.clear();
    this.electivePagingState.clear();
    this.globalSearchText = '';
    this.enrollmentMessage = null;

    if (!this.isSelectionComplete) {
      this.courses = undefined;
      this.electiveCourses = undefined;
      return;
    }

    const key = buildEnrollmentKey(
      this.selectedYear,
      this.selectedDegree,
      this.selectedDepartment,
      this.selectedSemester,
      this.selectedSection
    );

    this.courses = this.hydrateCourses(ENROLLMENT_DATA, key);
    this.electiveCourses = this.hydrateCourses(ELECTIVE_ENROLLMENT_DATA, key);
  }

  // Shared by both Core and Elective Course loading. Clones the matched courses/students
  // rather than handing out live references into the given raw data source - setEnrolled()
  // etc. mutate a student in place, so without cloning, edits made for one selection would
  // permanently leak into that data source and reappear the next time the same combination
  // is loaded (e.g. after navigating away and back, or - as observed in tests - across
  // independent test cases sharing the same module-level mock data).
  //
  // `enrolled`/`isRejected` are hydrated here, once, from the raw `status` seed value - but
  // only when not already explicitly set (e.g. from a prior save, which persists these
  // fields back into the data source). From this point on, nothing reads `.status` again.
  private hydrateCourses(data: { [key: string]: Course[] }, key: string): Course[] | null {
    if (!data.hasOwnProperty(key)) {
      return null;
    }
    return data[key].map(course => ({
      ...course,
      isRejected: course.isRejected === true,
      students: course.students.map(student => {
        const enrolled = student.enrolled !== undefined ? student.enrolled : student.status === 'Enrolled';
        return {
          ...student,
          enrolled,
          originallyEnrolled: enrolled,
          isRejected: student.isRejected !== undefined ? student.isRejected : student.status === 'Dropped'
        };
      })
    }));
  }

  toggleCourse(course: Course): void {
    if (this.expandedCourseCodes.has(course.code)) {
      this.expandedCourseCodes.delete(course.code);
    } else {
      this.expandedCourseCodes.add(course.code);
    }
  }

  isExpanded(course: Course): boolean {
    return this.expandedCourseCodes.has(course.code);
  }

  // Elective Course's own expand/collapse state, entirely separate from expandedCourseCodes
  // above, so toggling an elective course can never affect - or be affected by - Core Course.
  toggleElectiveCourse(course: Course): void {
    if (this.expandedElectiveCourseCodes.has(course.code)) {
      this.expandedElectiveCourseCodes.delete(course.code);
    } else {
      this.expandedElectiveCourseCodes.add(course.code);
    }
  }

  isElectiveExpanded(course: Course): boolean {
    return this.expandedElectiveCourseCodes.has(course.code);
  }

  enrolledCount(course: Course): number {
    return course.students.filter(s => s.enrolled).length;
  }

  // Students who were enrolled as of the last load/save but have since been unchecked.
  deletingCount(course: Course): number {
    return course.students.filter(s => s.originallyEnrolled && !s.enrolled).length;
  }

  // Active/eligible students (not rejected) who were never enrolled and still aren't -
  // distinct from students being deleted, who WERE enrolled before being unchecked.
  pendingCount(course: Course): number {
    return course.students.filter(s => !s.originallyEnrolled && !s.enrolled && !s.isRejected).length;
  }

  // Light row: not enrolled, not rejected, not backlog. Applied per-<td> in the template
  // (see the comment there), so this one condition stays in a single place.
  isStudentLight(student: Student): boolean {
    return !student.enrolled && !student.isRejected && !student.isBacklog;
  }

  // Toggles only whether the student is currently enrolled. Never touches isRejected -
  // unchecking a student only ever makes them not-enrolled, never rejected.
  setEnrolled(student: Student, enrolled: boolean): void {
    student.enrolled = enrolled;
  }

  areAllStudentsEnrolled(course: Course): boolean {
    return course.students.length > 0 && course.students.every(s => s.enrolled);
  }

  toggleAllStudents(course: Course, enrolled: boolean): void {
    course.students.forEach(student => this.setEnrolled(student, enrolled));
  }

  // Discards unsaved checkbox edits for just this course, reverting every student's
  // `enrolled` back to `originallyEnrolled` (the state as of the last load/save - see
  // hydrateCourses()). Works identically for a Core or an Elective course, since it only
  // ever touches the given course's own students array - it never saves/persists anything,
  // and every derived value (enrolledCount, deletingCount, pendingCount, the checkboxes
  // themselves) picks the change up on the next change detection cycle automatically.
  resetCourse(course: Course): void {
    course.students.forEach(student => this.setEnrolled(student, !!student.originallyEnrolled));
  }

  // Course-level rejection is an explicit flag on the course, not derived from student
  // enrollment/rejection state.
  isCourseRejected(course: Course): boolean {
    return course.isRejected === true;
  }

  // `list` defaults to 'core' so every existing Core Course call site is unaffected.
  //
  // Also removes the course from the underlying ENROLLMENT_DATA/ELECTIVE_ENROLLMENT_DATA
  // entry for the current selection (mirroring how enrollStudents()/enrollElectiveStudents()
  // already persist their own changes back into the same module-level source) - otherwise
  // the deletion only ever existed on the local `courses`/`electiveCourses` clone and would
  // reappear the next time this exact combination is loaded via hydrateCourses().
  deleteCourse(course: Course, list: 'core' | 'elective' = 'core'): void {
    const key = buildEnrollmentKey(
      this.selectedYear,
      this.selectedDegree,
      this.selectedDepartment,
      this.selectedSemester,
      this.selectedSection
    );

    if (list === 'elective') {
      if (!this.electiveCourses) {
        return;
      }
      this.electiveCourses = this.electiveCourses.filter(c => c.code !== course.code);
      if (ELECTIVE_ENROLLMENT_DATA.hasOwnProperty(key)) {
        ELECTIVE_ENROLLMENT_DATA[key] = ELECTIVE_ENROLLMENT_DATA[key].filter(c => c.code !== course.code);
      }
      this.electivePagingState.delete(course.code);
      return;
    }
    if (!this.courses) {
      return;
    }
    this.courses = this.courses.filter(c => c.code !== course.code);
    if (ENROLLMENT_DATA.hasOwnProperty(key)) {
      ENROLLMENT_DATA[key] = ENROLLMENT_DATA[key].filter(c => c.code !== course.code);
    }
    this.corePagingState.delete(course.code);
  }

  // Opens the Delete Confirmation modal for the given course. Shown via the Bootstrap JS
  // API directly (rather than data-bs-toggle/data-bs-target) because this click handler
  // also needs to stopPropagation() so the click doesn't bubble into toggleCourse() on the
  // outer accordion-button - which would otherwise block Bootstrap's own delegated
  // data-bs-toggle listener (on the document ancestor) just as much as toggleCourse().
  openDeleteConfirmation(course: Course, list: 'core' | 'elective' = 'core'): void {
    this.courseToDelete = course;
    this.courseToDeleteList = list;
    const modalElement = document.getElementById('deleteConfirmModal');
    const bootstrapGlobal = (window as any).bootstrap;
    if (modalElement && bootstrapGlobal) {
      bootstrapGlobal.Modal.getOrCreateInstance(modalElement).show();
    }
  }

  // Modal's own Delete action: performs the actual deletion, then clears courseToDelete.
  // The modal closes itself via data-bs-dismiss="modal" on the same button.
  confirmDeleteCourse(): void {
    if (this.courseToDelete) {
      this.deleteCourse(this.courseToDelete, this.courseToDeleteList);
    }
    this.courseToDelete = null;
  }

  /**
   * Saves the currently displayed (locally-edited) student enrollment states back into
   * ENROLLMENT_DATA for the selected Academic Year/Degree/Department/Semester/Section, since
   * loadCourses() works on a clone of that data so in-progress checkbox edits don't leak into
   * ENROLLMENT_DATA until explicitly enrolled.
   */
  enrollStudents(): void {
    try {
      if (!this.isSelectionComplete) {
        throw new Error('Select an Academic Year, Degree, Department, Semester and Section before enrolling.');
      }
      if (!this.courses || this.courses.length === 0) {
        throw new Error('There are no courses available to enroll students for this combination.');
      }

      const key = buildEnrollmentKey(
        this.selectedYear,
        this.selectedDegree,
        this.selectedDepartment,
        this.selectedSemester,
        this.selectedSection
      );

      ENROLLMENT_DATA[key] = this.courses.map(course => ({
        ...course,
        students: course.students.map(student => ({ ...student }))
      }));

      // Refresh Core Course only (not loadCourses(), which would also reset
      // expandedElectiveCourseCodes/electiveCourses - a Core Course save must never touch
      // Elective Course's independent state) so the accordion, student table and counts all
      // reflect the persisted state.
      this.expandedCourseCodes.clear();
      this.courses = this.hydrateCourses(ENROLLMENT_DATA, key);

      this.enrollmentMessageType = 'success';
      this.enrollmentMessage = 'Enrollment updated successfully.';
      this.scheduleSuccessAutoDismiss();
    } catch (error) {
      this.enrollmentMessageType = 'danger';
      this.enrollmentMessage = error instanceof Error ? error.message : 'Failed to update enrollment. Please try again.';
    }
  }

  // Elective Course's own save, mirroring enrollStudents() above exactly but persisting to
  // ELECTIVE_ENROLLMENT_DATA/electiveCourses instead of ENROLLMENT_DATA/courses, so saving an
  // elective course's enrollment can never touch Core Course's data.
  private enrollElectiveStudents(): void {
    try {
      if (!this.isSelectionComplete) {
        throw new Error('Select an Academic Year, Degree, Department, Semester and Section before enrolling.');
      }
      if (!this.electiveCourses || this.electiveCourses.length === 0) {
        throw new Error('There are no elective courses available to enroll students for this combination.');
      }

      const key = buildEnrollmentKey(
        this.selectedYear,
        this.selectedDegree,
        this.selectedDepartment,
        this.selectedSemester,
        this.selectedSection
      );

      ELECTIVE_ENROLLMENT_DATA[key] = this.electiveCourses.map(course => ({
        ...course,
        students: course.students.map(student => ({ ...student }))
      }));

      // Refresh Elective Course only - see the matching comment in enrollStudents() above for
      // why this doesn't call the shared loadCourses().
      this.expandedElectiveCourseCodes.clear();
      this.electiveCourses = this.hydrateCourses(ELECTIVE_ENROLLMENT_DATA, key);

      this.enrollmentMessageType = 'success';
      this.enrollmentMessage = 'Enrollment updated successfully.';
      this.scheduleSuccessAutoDismiss();
    } catch (error) {
      this.enrollmentMessageType = 'danger';
      this.enrollmentMessage = error instanceof Error ? error.message : 'Failed to update enrollment. Please try again.';
    }
  }

  // Opens the Enrollment Confirmation modal for the given course. The modal itself is
  // shown by Bootstrap via the Save button's data-bs-toggle/data-bs-target attributes;
  // this just supplies which course's counts it should display. `list` defaults to 'core'
  // so every existing Core Course call site is unaffected.
  openSaveConfirmation(course: Course, list: 'core' | 'elective' = 'core'): void {
    this.courseToSave = course;
    this.courseToSaveList = list;
  }

  // Modal's own Save action: performs the actual save, then clears courseToSave. The
  // modal closes itself via data-bs-dismiss="modal" on the same button.
  confirmEnrollment(): void {
    if (this.courseToSaveList === 'elective') {
      this.enrollElectiveStudents();
    } else {
      this.enrollStudents();
    }
    this.courseToSave = null;
  }

  // Auto-dismisses the success toast after a short delay: first fades it out by dropping
  // Bootstrap's `.show` class (the `.fade` class handles the opacity transition), then
  // removes it from the DOM once that transition has had time to finish. Any previously
  // scheduled dismiss is cancelled first, so back-to-back success messages each get their
  // own full delay rather than being cut short by an earlier timer.
  private scheduleSuccessAutoDismiss(): void {
    clearTimeout(this.successAlertHideTimer);
    clearTimeout(this.successAlertRemoveTimer);

    this.successAlertVisible = true;
    this.successAlertHideTimer = setTimeout(() => {
      this.successAlertVisible = false;
      this.successAlertRemoveTimer = setTimeout(() => {
        this.enrollmentMessage = null;
      }, 200);
    }, 4000);
  }

  selectElectiveCourseForUpload(course: Course): void {
    this.electiveCourseForUpload = course;
  }

  onUploadFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    const file = input.files && input.files.length > 0 ? input.files[0] : null;

    this.uploadFile = file;
    this.uploadFileError = file && !this.isExcelFile(file)
      ? 'Please select a valid Excel file (.xlsx or .xls).'
      : null;
  }

  private isExcelFile(file: File): boolean {
    const name = file.name.toLowerCase();
    return name.endsWith('.xlsx') || name.endsWith('.xls');
  }

  // Generates and downloads a small CSV template named after the selected elective
  // course - there is no backend to fetch a real template from in this mock/local app.
  downloadElectiveTemplate(): void {
    if (!this.electiveCourseForUpload) {
      return;
    }

    const course = this.electiveCourseForUpload;
    const csvContent = 'Candidate ID,USN Number,Student Name\n';
    const blob = new Blob([csvContent], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);

    const link = document.createElement('a');
    link.href = url;
    link.download = `${course.code}-enrollment-template.csv`;
    link.click();
    URL.revokeObjectURL(url);
  }

  // Accepts the selected file for the selected elective course. There is no backend/Excel
  // parser in this mock/local app to actually read student rows out of the file, so this
  // just confirms the upload using the real course and file the user picked - nothing here
  // is hardcoded, and no enrollment data is mutated by an upload.
  uploadElectiveFile(): void {
    if (!this.canUploadElectiveFile || !this.electiveCourseForUpload || !this.uploadFile) {
      return;
    }

    this.enrollmentMessageType = 'success';
    this.enrollmentMessage = `Uploaded "${this.uploadFile.name}" for ${this.electiveCourseForUpload.name} (${this.electiveCourseForUpload.code}).`;
    this.scheduleSuccessAutoDismiss();
    this.resetUploadModalState();
  }

  cancelUpload(): void {
    this.resetUploadModalState();
  }

  private resetUploadModalState(): void {
    this.electiveCourseForUpload = null;
    this.uploadFile = null;
    this.uploadFileError = null;
  }

  trackByCourseCode(index: number, course: Course): string {
    return course.code;
  }

  trackByStudentId(index: number, student: Student): number {
    return student.id;
  }

  private pagingMapFor(list: 'core' | 'elective'): Map<string, CoursePagingState> {
    return list === 'elective' ? this.electivePagingState : this.corePagingState;
  }

  private getPagingState(course: Course, list: 'core' | 'elective' = 'core'): CoursePagingState {
    const map = this.pagingMapFor(list);
    let state = map.get(course.code);
    if (!state) {
      state = { page: 1, pageSize: this.pageSizeOptions[0] };
      map.set(course.code, state);
    }
    return state;
  }

  // Changing the page size always jumps back to page 1, since whatever page the user was on
  // may no longer exist against the new page size.
  setPageSize(course: Course, pageSize: number, list: 'core' | 'elective' = 'core'): void {
    const state = this.getPagingState(course, list);
    state.pageSize = pageSize;
    state.page = 1;
  }

  setPage(course: Course, page: number, list: 'core' | 'elective' = 'core'): void {
    this.getPagingState(course, list).page = page;
  }

  // Computes everything a course's pagination controls, table rows and "Showing X to Y of Z"
  // summary need for the current page size, without ever touching or reordering
  // `course.students` itself - pagination (and, below, the global search's student-level
  // filtering) only ever select a subset to display.
  //
  // globalSearchText drives which students this course displays, same as the old per-course
  // table search used to: if the term matches this course's own name/code, every student still
  // shows (that part of global search is unchanged - matching the course is enough to show its
  // full roster); otherwise, if the course is only in the filtered list because one or more of
  // its students matched, only those matching students show here - never the whole roster for
  // a single matching student. Matching runs over the complete `course.students` list, not just
  // the current page, and pagination then applies on top of that filtered result.
  getPageInfo(course: Course, list: 'core' | 'elective' = 'core'): CoursePageInfo {
    const state = this.getPagingState(course, list);
    const term = this.globalSearchText.trim().toLowerCase();
    const studentsToDisplay = term && !this.courseMatchesByNameOrCode(course, term)
      ? course.students.filter(student => this.studentMatchesGlobalSearch(student, term))
      : course.students;

    const totalStudents = studentsToDisplay.length;
    const totalPages = Math.max(1, Math.ceil(totalStudents / state.pageSize));
    if (state.page > totalPages) {
      state.page = totalPages;
    }
    const currentPage = state.page;
    const startIndex = (currentPage - 1) * state.pageSize;
    const pagedStudents = studentsToDisplay.slice(startIndex, startIndex + state.pageSize);

    return {
      pageSize: state.pageSize,
      currentPage,
      totalPages,
      totalStudents,
      showingFrom: totalStudents === 0 ? 0 : startIndex + 1,
      showingTo: Math.min(startIndex + state.pageSize, totalStudents),
      startIndex,
      pagedStudents,
      pageNumbers: Array.from({ length: totalPages }, (_, i) => i + 1)
    };
  }
}
