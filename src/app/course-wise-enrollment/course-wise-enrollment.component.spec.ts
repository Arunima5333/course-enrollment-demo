import { async, fakeAsync, tick, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

import { CourseWiseEnrollmentComponent } from './course-wise-enrollment.component';

describe('CourseWiseEnrollmentComponent', () => {
  let component: CourseWiseEnrollmentComponent;
  let fixture: ComponentFixture<CourseWiseEnrollmentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [FormsModule],
      declarations: [CourseWiseEnrollmentComponent]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseWiseEnrollmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('cascading dropdowns', () => {
    it('should auto-select the first available option at every level on load', () => {
      expect(component.academicYears.length).toBeGreaterThan(0);
      expect(component.selectedYear).toBe(component.academicYears[0].year);
      expect(component.degrees.length).toBeGreaterThan(0);
      expect(component.selectedDegree).toBe(component.degrees[0].name);
      expect(component.departments.length).toBeGreaterThan(0);
      expect(component.selectedDepartment).toBe(component.departments[0].name);
      expect(component.semesters.length).toBeGreaterThan(0);
      expect(component.selectedSemester).toBe(component.semesters[0].name);
      expect(component.sections.length).toBeGreaterThan(0);
      expect(component.selectedSection).toBe(component.sections[0]);
    });

    it('should populate degrees once an academic year is selected', () => {
      component.selectedYear = '2024-2025';
      component.onYearChange();
      expect(component.degrees.length).toBe(2);
      expect(component.degrees.map(d => d.name)).toEqual(['B.Tech', 'M.Tech']);
    });

    it('should populate departments once a degree is selected', () => {
      component.selectedYear = '2024-2025';
      component.onYearChange();
      component.selectedDegree = 'B.Tech';
      component.onDegreeChange();
      expect(component.departments.map(d => d.name)).toEqual(['Computer Science', 'Mechanical']);
    });

    it('should populate semesters once a department is selected', () => {
      component.selectedYear = '2024-2025';
      component.onYearChange();
      component.selectedDegree = 'B.Tech';
      component.onDegreeChange();
      component.selectedDepartment = 'Computer Science';
      component.onDepartmentChange();
      expect(component.semesters.map(s => s.name)).toEqual(['Semester 1', 'Semester 2']);
    });

    it('should populate sections once a semester is selected', () => {
      component.selectedYear = '2024-2025';
      component.onYearChange();
      component.selectedDegree = 'B.Tech';
      component.onDegreeChange();
      component.selectedDepartment = 'Computer Science';
      component.onDepartmentChange();
      component.selectedSemester = 'Semester 1';
      component.onSemesterChange();
      expect(component.sections).toEqual(['A', 'B']);
    });

    it('should cascade-select the first available downstream option when an earlier dropdown changes', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      expect(component.courses).toBeDefined();

      // Changing the academic year should repopulate and auto-select every level below it,
      // rather than leaving them blank.
      component.selectedYear = '2025-2026';
      component.onYearChange();

      expect(component.selectedDegree).toBe('B.Tech');
      expect(component.selectedDepartment).toBe('Computer Science');
      expect(component.selectedSemester).toBe('Semester 1');
      expect(component.selectedSection).toBe('A');
      expect(component.departments.length).toBeGreaterThan(0);
      expect(component.semesters.length).toBeGreaterThan(0);
      expect(component.sections.length).toBeGreaterThan(0);
      expect(component.courses).toBeTruthy();
    });

    it('should cascade-select the first available downstream option when an intermediate dropdown changes', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');

      component.selectedDegree = 'M.Tech';
      component.onDegreeChange();

      expect(component.selectedDepartment).toBe('Computer Science');
      expect(component.selectedSemester).toBe('Semester 1');
      expect(component.selectedSection).toBe('A');
      expect(component.semesters.length).toBeGreaterThan(0);
      expect(component.sections.length).toBeGreaterThan(0);
      expect(component.courses).toBeTruthy();
    });
  });

  describe('rendering enrollment data', () => {
    it('should show course data immediately on load since all five dropdowns are auto-selected', () => {
      expect(component.isSelectionComplete).toBe(true);
      fixture.detectChanges();
      const compiled: HTMLElement = fixture.nativeElement;
      expect(compiled.textContent).not.toContain('Please select Academic Year, Degree, Department, Semester and Section');
    });

    it('should not show course data when a dropdown selection is incomplete', () => {
      component.selectedSection = '';
      expect(component.isSelectionComplete).toBe(false);
      fixture.detectChanges();
      const compiled: HTMLElement = fixture.nativeElement;
      expect(compiled.querySelector('.accordion')).toBeNull();
      expect(compiled.textContent).not.toContain('Please select Academic Year, Degree, Department, Semester and Section');
    });

    it('should render courses once the full combination is selected', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      fixture.detectChanges();

      expect(component.isSelectionComplete).toBe(true);
      expect(component.courses).toBeTruthy();
      expect((component.courses as any).length).toBe(5);

      const compiled: HTMLElement = fixture.nativeElement;
      expect(compiled.querySelectorAll('#courseAccordion .accordion-item').length).toBe(5);
      expect(compiled.textContent).toContain('Data Structures');
      expect(compiled.textContent).toContain('CS101');
    });

    it('should show a "no data" message for a combination with no entry at all', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 2', 'B');
      fixture.detectChanges();

      expect(component.courses).toBeNull();
      const compiled: HTMLElement = fixture.nativeElement;
      expect(compiled.textContent).toContain('Course enrollment configuration is not available for selected semester/section');
    });

    it('should show a "no courses" message for a valid combination with an empty course list', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'B');
      fixture.detectChanges();

      expect(component.courses).toEqual([]);
      const compiled: HTMLElement = fixture.nativeElement;
      expect(compiled.textContent).toContain('Course enrollment configuration is not available for selected semester/section');
    });
  });

  describe('expand/collapse', () => {
    beforeEach(() => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      fixture.detectChanges();
    });

    it('should not show student rows until a course is expanded', () => {
      const compiled: HTMLElement = fixture.nativeElement;
      // A header table above the accordion is always present once courses are loaded;
      // only the per-course student data table (identified by its <tbody>) should be
      // absent until a course is expanded.
      expect(compiled.querySelectorAll('table tbody').length).toBe(0);
    });

    it('should reveal students when a course is expanded and hide them again when collapsed', () => {
      const course = (component.courses as any)[0];
      expect(component.isExpanded(course)).toBe(false);

      component.toggleCourse(course);
      fixture.detectChanges();
      expect(component.isExpanded(course)).toBe(true);
      let compiled: HTMLElement = fixture.nativeElement;
      expect(compiled.textContent).toContain('Aarav Sharma');

      component.toggleCourse(course);
      fixture.detectChanges();
      expect(component.isExpanded(course)).toBe(false);
      compiled = fixture.nativeElement;
      expect(compiled.textContent).not.toContain('Aarav Sharma');
    });

    it('should show a "no students" message for a course with zero students when expanded', () => {
      const emptyCourse = (component.courses as any).find((c: any) => c.code === 'CS103');
      component.toggleCourse(emptyCourse);
      fixture.detectChanges();

      const compiled: HTMLElement = fixture.nativeElement;
      expect(compiled.textContent).toContain('No students are enrolled in this course.');
    });
  });

  describe('enrollment changes', () => {
    it('should compute the enrolled count live from each student\'s enrolled flag', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // CS101: 3 enrolled, 1 rejected, 1 not-yet-enrolled
      expect(component.enrolledCount(course)).toBe(3);
    });

    it('should update the enrolled count immediately when a student is (un)enrolled', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      const student = course.students[0]; // currently enrolled

      expect(component.enrolledCount(course)).toBe(3);

      component.setEnrolled(student, false);
      expect(component.enrolledCount(course)).toBe(2);

      const notYetEnrolledStudent = course.students[3]; // currently not enrolled
      component.setEnrolled(notYetEnrolledStudent, true);
      expect(component.enrolledCount(course)).toBe(3);
    });

    it('should count a student as "deleting" only once they were enrolled and are then unchecked', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // CS101
      const student = course.students[0]; // Aarav Sharma, enrolled since load

      expect(component.deletingCount(course)).toBe(0);

      component.setEnrolled(student, false);
      expect(component.deletingCount(course)).toBe(1);

      // Re-checking cancels the pending deletion.
      component.setEnrolled(student, true);
      expect(component.deletingCount(course)).toBe(0);
    });

    it('should count as "pending" only students who were never enrolled and are not rejected', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      // CS101 shows the full shared student population for this selection (every course does -
      // see mock-enrollment-data.ts's expandCoursesToSharedPopulation()), so most of them
      // default to "Pending" here since only a handful were originally enrolled in CS101
      // itself; the exact count isn't what this test cares about.
      const course = (component.courses as any)[0]; // CS101
      const pendingBefore = component.pendingCount(course);
      expect(pendingBefore).toBeGreaterThan(0);

      // Unchecking an already-enrolled student makes them "deleting", not "pending" -
      // pendingCount itself must stay unchanged.
      component.setEnrolled(course.students[0], false);
      expect(component.pendingCount(course)).toBe(pendingBefore);
      expect(component.deletingCount(course)).toBe(1);
    });

    it('should reflect the updated count in the rendered view', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      component.toggleCourse(course);
      fixture.detectChanges();

      const student = course.students[0];
      component.setEnrolled(student, false);
      fixture.detectChanges();

      const compiled: HTMLElement = fixture.nativeElement;
      const counts = compiled.querySelectorAll('.enrolled-count');
      expect((counts[0].textContent || '').trim()).toBe('2');
    });
  });

  describe('enrolling (saving) enrollment changes', () => {
    // Uses a combination no other test asserts on, since enrollStudents() intentionally
    // persists into the shared module-level ENROLLMENT_DATA (see mock-enrollment-data.ts).
    it('should persist enrollment changes so they survive reloading the same combination', () => {
      selectFullCombination('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // PHY101
      const student = course.students[0]; // Devansh Rao, currently enrolled

      component.setEnrolled(student, false);
      expect(component.enrolledCount(course)).toBe(2);

      component.enrollStudents();

      expect(component.enrollmentMessageType).toBe('success');
      expect(component.enrollmentMessage).toBeTruthy();

      // Reload the same combination from scratch - if the change hadn't been persisted
      // into ENROLLMENT_DATA, this would reset back to enrolled: true.
      selectFullCombination('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A');
      const reloadedCourse = (component.courses as any)[0];
      expect(reloadedCourse.students[0].enrolled).toBe(false);
      expect(component.enrolledCount(reloadedCourse)).toBe(2);
    });

    it('should show an error and not throw when enrolling with no course data', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'B'); // valid combo, no courses defined

      expect(() => component.enrollStudents()).not.toThrow();
      expect(component.enrollmentMessageType).toBe('danger');
      expect(component.enrollmentMessage).toBeTruthy();
    });
  });

  describe('success toast auto-dismiss', () => {
    it('should fade out and then remove the success message after a delay', fakeAsync(() => {
      selectFullCombination('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A');
      component.enrollStudents();

      expect(component.enrollmentMessageType).toBe('success');
      expect(component.enrollmentMessage).toBeTruthy();
      expect(component.successAlertVisible).toBe(true);

      tick(4000);
      expect(component.successAlertVisible).toBe(false); // fade-out started
      expect(component.enrollmentMessage).toBeTruthy(); // still present during the fade

      tick(200);
      expect(component.enrollmentMessage).toBeNull(); // fully removed once the fade finishes
    }));

    it('should not auto-dismiss an error message', fakeAsync(() => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'B'); // no courses -> error
      component.enrollStudents();

      expect(component.enrollmentMessageType).toBe('danger');
      expect(component.successAlertVisible).toBe(false);

      tick(5000);
      expect(component.enrollmentMessage).toBeTruthy(); // still there, never auto-dismissed
    }));

    it('should restart the timer for a new success message instead of cutting it short', fakeAsync(() => {
      selectFullCombination('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A');
      component.enrollStudents();
      tick(3000); // first message is 3s in, not yet auto-dismissed

      component.enrollStudents(); // a second success message arrives and should reset the timer
      tick(3000); // 3s since the second message - still under its own 4s delay

      expect(component.enrollmentMessage).toBeTruthy();
      expect(component.successAlertVisible).toBe(true);

      tick(1000); // now 4s since the second message - fade-out starts
      expect(component.successAlertVisible).toBe(false);

      tick(200); // past the fade transition - fully removed
      expect(component.enrollmentMessage).toBeNull();
    }));
  });

  describe('Enrollment Confirmation modal', () => {
    it('should track which course to show in the modal without saving anything yet', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // CS101
      const student = course.students[0];
      component.setEnrolled(student, false);

      expect(component.courseToSave).toBeNull();

      component.openSaveConfirmation(course);

      expect(component.courseToSave).toBe(course);
      // Opening the modal must not itself persist anything.
      expect(component.enrollmentMessage).toBeNull();
    });

    // Uses a combination no other test asserts on, since confirmEnrollment() -> enrollStudents()
    // intentionally persists into the shared module-level ENROLLMENT_DATA (see mock-enrollment-data.ts).
    it('should save and clear courseToSave when the modal\'s Save is confirmed', () => {
      selectFullCombination('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // PHY101
      const student = course.students[0];
      component.setEnrolled(student, false);
      component.openSaveConfirmation(course);

      component.confirmEnrollment();

      expect(component.courseToSave).toBeNull();
      expect(component.enrollmentMessageType).toBe('success');

      // Persisted: reloading the same combination keeps the change.
      selectFullCombination('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A');
      const reloadedCourse = (component.courses as any)[0];
      expect(reloadedCourse.students[0].enrolled).toBe(false);
    });
  });

  describe('Upload Elective Course modal', () => {
    function fileInputEvent(file: File | null): any {
      return { target: { files: file ? [file] : [] } };
    }

    it('should populate available elective courses from the currently loaded courses', () => {
      // Dropdowns are auto-selected on load, so courses (and therefore available elective
      // courses) are already populated before any manual selection is made.
      expect(component.availableElectiveCourses).toBe(component.courses as any);

      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      expect(component.availableElectiveCourses).toBe(component.courses as any);
      expect(component.availableElectiveCourses.length).toBe(5);
    });

    it('should update the selected course state and enable Download Template once a course is picked', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];

      expect(component.canDownloadElectiveTemplate).toBe(false);

      component.selectElectiveCourseForUpload(course);

      expect(component.electiveCourseForUpload).toBe(course);
      expect(component.canDownloadElectiveTemplate).toBe(true);
    });

    it('should accept a valid Excel file and reject an invalid one', () => {
      const validFile = new File(['dummy'], 'roster.xlsx', { type: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet' });
      component.onUploadFileSelected(fileInputEvent(validFile));
      expect(component.uploadFile).toBe(validFile);
      expect(component.uploadFileError).toBeNull();

      const invalidFile = new File(['dummy'], 'roster.txt', { type: 'text/plain' });
      component.onUploadFileSelected(fileInputEvent(invalidFile));
      expect(component.uploadFile).toBe(invalidFile);
      expect(component.uploadFileError).toBeTruthy();
    });

    it('should only enable Upload once both a course and a valid file are selected', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      const validFile = new File(['dummy'], 'roster.xlsx', { type: 'application/vnd.ms-excel' });

      expect(component.canUploadElectiveFile).toBe(false);

      component.selectElectiveCourseForUpload(course);
      expect(component.canUploadElectiveFile).toBe(false); // course only, no file yet

      component.onUploadFileSelected(fileInputEvent(validFile));
      expect(component.canUploadElectiveFile).toBe(true);

      const invalidFile = new File(['dummy'], 'roster.txt', { type: 'text/plain' });
      component.onUploadFileSelected(fileInputEvent(invalidFile));
      expect(component.canUploadElectiveFile).toBe(false); // invalid file disables it again
    });

    it('should reset course/file state on cancel without touching enrollment data', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      component.selectElectiveCourseForUpload(course);
      component.onUploadFileSelected(fileInputEvent(new File(['dummy'], 'roster.xlsx')));

      component.cancelUpload();

      expect(component.electiveCourseForUpload).toBeNull();
      expect(component.uploadFile).toBeNull();
      expect(component.uploadFileError).toBeNull();
      expect(component.enrollmentMessage).toBeNull();
    });

    it('should process the upload using the actual selected course/file and then reset state', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      const file = new File(['dummy'], 'my-roster.xlsx');
      component.selectElectiveCourseForUpload(course);
      component.onUploadFileSelected(fileInputEvent(file));

      component.uploadElectiveFile();

      expect(component.enrollmentMessageType).toBe('success');
      expect(component.enrollmentMessage).toContain('my-roster.xlsx');
      expect(component.enrollmentMessage).toContain(course.name);
      expect(component.enrollmentMessage).toContain(course.code);
      expect(component.electiveCourseForUpload).toBeNull();
      expect(component.uploadFile).toBeNull();
    });

    it('should do nothing when Upload is triggered without a valid course/file', () => {
      expect(() => component.uploadElectiveFile()).not.toThrow();
      expect(component.enrollmentMessage).toBeNull();
    });
  });

  describe('deleting a rejected course', () => {
    it('should read the explicit isRejected flag rather than deriving it from student enrollment', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // CS101

      expect(component.isCourseRejected(course)).toBe(false);

      // Unenrolling every student must NOT make the course rejected on its own.
      course.students.forEach((s: any) => component.setEnrolled(s, false));
      expect(component.isCourseRejected(course)).toBe(false);

      // Only the explicit course-level flag determines rejection.
      course.isRejected = true;
      expect(component.isCourseRejected(course)).toBe(true);
    });

    // Uses a combination no other test asserts on, since deleteCourse() now intentionally
    // persists into the shared module-level ENROLLMENT_DATA (see mock-enrollment-data.ts) -
    // same reasoning as the enrollStudents() persistence tests further up.
    it('should remove only the targeted course from the displayed list', () => {
      selectFullCombination('2023-2024', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const courses = component.courses as any;
      expect(courses.length).toBe(3);
      const [cs101, cs102] = courses;

      component.deleteCourse(cs101);

      expect((component.courses as any).length).toBe(2);
      expect((component.courses as any).find((c: any) => c.code === 'CS101')).toBeUndefined();
      expect((component.courses as any).find((c: any) => c.code === cs102.code)).toBeTruthy();
    });
  });

  describe('Delete Confirmation modal', () => {
    it('should track which course to show in the modal without deleting anything yet', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // CS101
      const coursesBefore = component.courses as any;

      expect(component.courseToDelete).toBeNull();

      component.openDeleteConfirmation(course);

      expect(component.courseToDelete).toBe(course);
      // Opening the modal must not itself delete anything.
      expect(component.courses).toBe(coursesBefore);
      expect((component.courses as any).length).toBe(5);
    });

    // Uses a combination no other test asserts on (and distinct from the isolated combination
    // the "deleting a rejected course" tests above already use), since confirmDeleteCourse() ->
    // deleteCourse() intentionally persists into the shared module-level ENROLLMENT_DATA (see
    // mock-enrollment-data.ts) - same reasoning as the enrollStudents() persistence tests above.
    it('should delete only the targeted course and clear courseToDelete when confirmed', () => {
      selectFullCombination('2023-2024', 'MBA', 'Marketing', 'Semester 1', 'A');
      const courses = component.courses as any;
      const [mkt101, mkt102] = courses;
      component.openDeleteConfirmation(mkt101);

      component.confirmDeleteCourse();

      expect(component.courseToDelete).toBeNull();
      expect((component.courses as any).length).toBe(2);
      expect((component.courses as any).find((c: any) => c.code === 'MKT101')).toBeUndefined();
      // Deleting one course must not affect an unrelated one.
      expect((component.courses as any).find((c: any) => c.code === mkt102.code)).toBeTruthy();
    });

    it('should do nothing when confirmed with no course selected', () => {
      expect(() => component.confirmDeleteCourse()).not.toThrow();
      expect(component.courseToDelete).toBeNull();
    });

    // Uses a combination no other test asserts on, for the same reason as the other
    // deleteCourse()-calling tests above.
    it('should persist a confirmed deletion so it survives reselecting the same combination', () => {
      selectFullCombination('2026-2027', 'B.Tech', 'Mechanical', 'Semester 1', 'A');
      const deletedCode = (component.courses as any)[0].code; // ME101

      component.openDeleteConfirmation((component.courses as any)[0]);
      component.confirmDeleteCourse();
      expect((component.courses as any).find((c: any) => c.code === deletedCode)).toBeUndefined();

      // Re-select the exact same combination from scratch - if the deletion hadn't been
      // persisted into ENROLLMENT_DATA, hydrateCourses() would bring the course right back.
      selectFullCombination('2026-2027', 'B.Tech', 'Mechanical', 'Semester 1', 'A');
      expect((component.courses as any).find((c: any) => c.code === deletedCode)).toBeUndefined();
    });

    // Uses the M.Tech/Computer Science elective combination (distinct from both the golden
    // Upload-Elective-Course fixture and the isolated combinations used by the other
    // deleteCourse()-calling tests above), since this test's own deletion also persists.
    it('should not affect Elective Course data when a Core Course is deleted', () => {
      selectFullCombination('2023-2024', 'M.Tech', 'Computer Science', 'Semester 1', 'A');
      const electiveCoursesBefore = (component.electiveCourses as any).map((c: any) => c.code);

      component.openDeleteConfirmation((component.courses as any)[0]); // CS510, not part of any elective
      component.confirmDeleteCourse();

      expect((component.electiveCourses as any).map((c: any) => c.code)).toEqual(electiveCoursesBefore);
    });
  });

  describe('student row rejected/backlog/light-row styling', () => {
    it('should strike through a genuinely rejected, non-backlog student row', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // CS101
      course.students[0].isRejected = true; // Aarav Sharma, not backlog

      const rows = expandFirstCourseAndGetRows();
      expect(rows[0].classList.contains('text-decoration-line-through')).toBe(true);
    });

    it('should not strike through a rejected backlog student row', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      const student = course.students[0];
      student.isRejected = true;
      student.isBacklog = true;

      const rows = expandFirstCourseAndGetRows();
      expect(rows[0].classList.contains('text-decoration-line-through')).toBe(false);
    });

    it('should show a not-enrolled, not-rejected student as a light (muted) row only, never struck through', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      component.setEnrolled(course.students[0], false); // not enrolled, but not rejected either

      const rows = expandFirstCourseAndGetRows();
      // text-muted is applied per-<td> (see the template comment), not on the <tr>.
      expect(rows[0].querySelector('td')!.classList.contains('text-muted')).toBe(true);
      expect(rows[0].classList.contains('text-decoration-line-through')).toBe(false);
    });

    it('should not apply the light-row styling to a backlog student', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0];
      const student = course.students[0];
      component.setEnrolled(student, false);
      student.isBacklog = true;

      const rows = expandFirstCourseAndGetRows();
      expect(rows[0].querySelector('td')!.classList.contains('text-muted')).toBe(false);
      expect(rows[0].classList.contains('text-decoration-line-through')).toBe(false);
    });

    it('should display an enrolled student row normally, with no rejected or light-row styling', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');

      const rows = expandFirstCourseAndGetRows(); // Aarav Sharma (row 0) is enrolled by default
      expect(rows[0].classList.contains('text-decoration-line-through')).toBe(false);
      expect(rows[0].querySelector('td')!.classList.contains('text-muted')).toBe(false);
    });

    it('should not treat an unchecked (not-enrolled) student as rejected, individually or via select-all', () => {
      selectFullCombination('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
      const course = (component.courses as any)[0]; // CS101
      const student = course.students[0]; // Aarav Sharma, currently enrolled

      // Individual checkbox unchecked (mirrors the template's setEnrolled(student, checked))
      component.setEnrolled(student, false);
      const rows = expandFirstCourseAndGetRows();
      expect(rows[0].classList.contains('text-decoration-line-through')).toBe(false);
      expect(student.isRejected).toBe(false);

      // Select-all unchecked must only change `enrolled`; it must never change `isRejected`
      // for any student (CS101 already has one genuinely-rejected student to begin with).
      const rejectedBefore = course.students.map((s: any) => s.isRejected);
      component.toggleAllStudents(course, false);
      fixture.detectChanges();
      const rejectedAfter = course.students.map((s: any) => s.isRejected);
      expect(rejectedAfter).toEqual(rejectedBefore);
      course.students.forEach((s: any) => expect(s.enrolled).toBe(false));
    });
  });

  function expandFirstCourseAndGetRows(): HTMLTableRowElement[] {
    const course = (component.courses as any)[0];
    component.toggleCourse(course);
    fixture.detectChanges();
    const compiled: HTMLElement = fixture.nativeElement;
    return Array.from(compiled.querySelectorAll('.accordion-body tbody tr')) as HTMLTableRowElement[];
  }

  function selectFullCombination(year: string, degree: string, department: string, semester: string, section: string): void {
    component.selectedYear = year;
    component.onYearChange();
    component.selectedDegree = degree;
    component.onDegreeChange();
    component.selectedDepartment = department;
    component.onDepartmentChange();
    component.selectedSemester = semester;
    component.onSemesterChange();
    component.selectedSection = section;
    component.onSectionChange();
  }
});
