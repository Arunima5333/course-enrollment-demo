// Mock/local data source for the Course-wise Enrollment feature.
// No HTTP/backend calls are used - everything here is static, in-memory data.

export type EnrollmentStatus = 'Enrolled' | 'Dropped' | 'Pending';

export const ENROLLMENT_STATUSES: EnrollmentStatus[] = ['Enrolled', 'Dropped', 'Pending'];

export interface Student {
  id: number;
  name: string;
  candidateId: string;
  usn: string;
  // status is the raw seed value from this mock dataset. It is only read once, when
  // CourseWiseEnrollmentComponent first loads a student (to derive `enrolled` and
  // `isRejected` below) - nothing else in the app reads status directly. "Not enrolled"
  // and "rejected" are independent booleans, not two different status string values,
  // so a student can be not-enrolled without ever being rejected, and vice versa.
  status: EnrollmentStatus;
  // Whether the student is currently enrolled for this course. Optional here because raw
  // mock entries seed it from `status`; always populated on the runtime objects the
  // component works with.
  enrolled?: boolean;
  // Snapshot of `enrolled` taken when this student was loaded (or last saved), never
  // mutated afterward by checkbox changes. Compared against the live `enrolled` value to
  // tell "was enrolled, now unchecked" (deleting) apart from "never enrolled" (pending).
  originallyEnrolled?: boolean;
  // Whether the student has been genuinely rejected/marked inactive for this course.
  // Independent of `enrolled` - a student can be not-enrolled (Pending-like) without
  // being rejected. Optional here for the same reason as `enrolled`.
  isRejected?: boolean;
  // A backlog student is exempt from rejected styling even when isRejected is true.
  // Optional so existing hand-written entries don't need updating - absent/false both
  // mean "not a backlog student".
  isBacklog?: boolean;
}

export interface Course {
  code: string;
  name: string;
  students: Student[];
  // Explicit course-level rejected/deleted flag. Not derived from student data - a
  // course is only rejected when this is actually set. Optional/absent means false.
  isRejected?: boolean;
}

export interface SemesterNode {
  name: string;
  sections: string[];
}

export interface DepartmentNode {
  name: string;
  // Short form derived from this department's existing course-code prefix (its de facto
  // "Department ID" throughout this file - e.g. Computer Science's courses are all coded
  // CS101, CS201, CS501 etc., so its short form is "CS"). Not shown in the UI yet; kept
  // alongside the full name as the single source of truth for that abbreviation.
  shortForm: string;
  semesters: SemesterNode[];
}

export interface DegreeNode {
  name: string;
  departments: DepartmentNode[];
}

export interface AcademicYearNode {
  year: string;
  degrees: DegreeNode[];
}

// Builds `count` sequential semester nodes ("Semester 1".."Semester N"), each offering
// the same set of sections. Used to keep the larger branches below concise.
function semesterRange(count: number, sections: string[]): SemesterNode[] {
  return Array.from({ length: count }, (_, i) => ({ name: `Semester ${i + 1}`, sections }));
}

// Cascading dropdown source: Academic Year -> Degree -> Department -> Semester -> Section
//
// NOTE: The 2024-2025 branch's B.Tech > Computer Science path (degree list, department
// list, "Computer Science" semester list, and "Semester 1" sections) is asserted exactly
// by course-wise-enrollment.component.spec.ts and must not be reordered, renamed, or have
// siblings inserted/removed. Everything else here is free to grow.
export const ACADEMIC_YEARS: AcademicYearNode[] = [
  {
    year: '2022-2023',
    degrees: [
      {
        name: 'B.Tech',
        departments: [
          { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(4, ['A', 'B']) },
          { name: 'Electronics & Communication', shortForm: 'EC', semesters: semesterRange(4, ['A']) }
        ]
      },
      {
        name: 'B.Sc',
        departments: [
          { name: 'Physics', shortForm: 'PHY', semesters: semesterRange(6, ['A']) },
          { name: 'Mathematics', shortForm: 'MATH', semesters: semesterRange(6, ['A']) }
        ]
      }
    ]
  },
  {
    year: '2023-2024',
    degrees: [
      {
        name: 'B.Tech',
        departments: [
          { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(6, ['A', 'B', 'C']) },
          { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(6, ['A', 'B']) },
          { name: 'Civil', shortForm: 'CE', semesters: semesterRange(6, ['A']) }
        ]
      },
      {
        name: 'M.Tech',
        departments: [
          { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(4, ['A', 'B']) }
        ]
      },
      {
        name: 'MBA',
        departments: [
          { name: 'Marketing', shortForm: 'MKT', semesters: semesterRange(4, ['A', 'B']) },
          { name: 'Finance', shortForm: 'FIN', semesters: semesterRange(4, ['A']) }
        ]
      }
    ]
  },
  {
    year: '2024-2025',
    degrees: [
      {
        name: 'B.Tech',
        departments: [
          {
            name: 'Computer Science',
            shortForm: 'CS',
            semesters: [
              { name: 'Semester 1', sections: ['A', 'B'] },
              { name: 'Semester 2', sections: ['A', 'B', 'C'] }
            ]
          },
          {
            name: 'Mechanical',
            shortForm: 'ME',
            semesters: [
              { name: 'Semester 1', sections: ['A'] },
              { name: 'Semester 2', sections: ['A', 'B'] }
            ]
          }
        ]
      },
      {
        name: 'M.Tech',
        departments: [
          {
            name: 'Computer Science',
            shortForm: 'CS',
            semesters: [
              { name: 'Semester 1', sections: ['A'] },
              { name: 'Semester 2', sections: ['A', 'B'] }
            ]
          },
          { name: 'Electrical', shortForm: 'EE', semesters: semesterRange(4, ['A', 'B']) },
          { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(4, ['A']) }
        ]
      }
    ]
  },
  {
    year: '2025-2026',
    degrees: [
      {
        name: 'B.Tech',
        departments: [
          { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(6, ['A', 'B', 'C']) },
          { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(6, ['A', 'B']) },
          { name: 'Electrical', shortForm: 'EE', semesters: semesterRange(4, ['A', 'B']) },
          { name: 'Civil', shortForm: 'CE', semesters: semesterRange(4, ['A']) }
        ]
      },
      {
        name: 'M.Tech',
        departments: [
          { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(4, ['A', 'B']) },
          { name: 'Electrical', shortForm: 'EE', semesters: semesterRange(4, ['A']) }
        ]
      },
      {
        name: 'B.Sc',
        departments: [
          { name: 'Computer Science', shortForm: 'BCS', semesters: semesterRange(6, ['A', 'B']) },
          { name: 'Physics', shortForm: 'PHY', semesters: semesterRange(6, ['A']) }
        ]
      },
      {
        name: 'MBA',
        departments: [
          { name: 'Marketing', shortForm: 'MKT', semesters: semesterRange(4, ['A', 'B']) },
          { name: 'Finance', shortForm: 'FIN', semesters: semesterRange(4, ['A']) },
          { name: 'Human Resources', shortForm: 'HR', semesters: semesterRange(4, ['A']) }
        ]
      }
    ]
  },
  {
    year: '2026-2027',
    degrees: [
      {
        name: 'B.Tech',
        departments: [
          { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(2, ['A', 'B']) },
          { name: 'Mechanical', shortForm: 'ME', semesters: semesterRange(2, ['A']) }
        ]
      },
      {
        name: 'M.Tech',
        departments: [
          { name: 'Computer Science', shortForm: 'CS', semesters: semesterRange(2, ['A']) }
        ]
      }
    ]
  }
];

// Enrollment data keyed by the combination of all five selections.
// Key format: "<year>::<degree>::<department>::<semester>::<section>"
export function buildEnrollmentKey(
  year: string,
  degree: string,
  department: string,
  semester: string,
  section: string
): string {
  return [year, degree, department, semester, section].join('::');
}

// Sequential id generator + small builders used only for the entries appended below
// the original hand-written ones, to keep the larger dataset readable.
let nextStudentId = 15;
function student(name: string, status: EnrollmentStatus, isBacklog = false): Student {
  const id = nextStudentId++;
  return { id, name, candidateId: `CAND${1000 + id}`, usn: `USN${id.toString().padStart(4, '0')}`, status, isBacklog };
}
function course(code: string, name: string, students: Student[]): Course {
  return { code, name, students };
}

// Raw, hand-curated seed data - kept exactly as originally written, including which course
// each student was first entered against and with what status. This is never read directly
// by the app; expandCoursesToSharedPopulation() below turns it into the actual exported
// ENROLLMENT_DATA, where every course for a given selection shares one common student
// population instead of each course only listing its own partial list.
const RAW_ENROLLMENT_DATA: { [key: string]: Course[] } = {
  // Multiple courses; one with multiple students, one with a couple, one with zero students.
  [buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    {
      code: 'CS101',
      name: 'Data Structures',
      students: [
        { id: 1, name: 'Aarav Sharma', candidateId: 'CAND1001', usn: 'USN0001', status: 'Enrolled' },
        { id: 2, name: 'Priya Nair', candidateId: 'CAND1002', usn: 'USN0002', status: 'Enrolled' },
        { id: 3, name: 'Rohan Gupta', candidateId: 'CAND1003', usn: 'USN0003', status: 'Dropped' },
        { id: 4, name: 'Sneha Iyer', candidateId: 'CAND1004', usn: 'USN0004', status: 'Pending' },
        { id: 5, name: 'Karan Mehta', candidateId: 'CAND1005', usn: 'USN0005', status: 'Enrolled' }
      ]
    },
    {
      code: 'CS102',
      name: 'Database Systems',
      students: [
        { id: 6, name: 'Ananya Rao', candidateId: 'CAND1006', usn: 'USN0006', status: 'Enrolled' },
        { id: 7, name: 'Vikram Singh', candidateId: 'CAND1007', usn: 'USN0007', status: 'Pending' },
        student('Tanya Bhatt', 'Enrolled'),
        // Same person as CS101's Aarav Sharma - enrolled in both courses this semester.
        { id: 900, name: 'Aarav Sharma', candidateId: 'CAND1001', usn: 'USN0001', status: 'Enrolled' },
        student('Nitya Kulkarni', 'Enrolled'),
        student('Rehaan Shah', 'Pending'),
        student('Kiara Bhagat', 'Enrolled'),
        student('Arushi Bedi', 'Enrolled'),
        student('Yug Thakkar', 'Dropped'),
        student('Ishaani Kapoor', 'Pending'),
        student('Devansh Malviya', 'Enrolled')
      ]
    },
    {
      code: 'CS103',
      name: 'Operating Systems',
      students: [],
      // Explicitly marked rejected so the accordion header's delete/trash icon has at
      // least one course to demonstrate against - isCourseRejected() reads this flag
      // directly rather than deriving it from student data.
      isRejected: true
    },
    course('CS104', 'Computer Architecture', [
      student('Advika Menon', 'Enrolled'),
      student('Kartik Suri', 'Enrolled'),
      student('Palak Trivedi', 'Dropped'),
      student('Yashraj Bhalla', 'Pending'),
      student('Mannat Chadha', 'Enrolled'),
      student('Sarthak Bajwa', 'Enrolled'),
      student('Kyra Dalal', 'Pending'),
      student('Rian Fernandes', 'Dropped'),
      student('Niyati Salvi', 'Enrolled')
    ]),
    course('CS105', 'Discrete Mathematics', [
      student('Ojasvi Kohli', 'Enrolled'),
      student('Dhruv Malhotra', 'Enrolled'),
      student('Anaya Sinha', 'Pending'),
      student('Veer Ahluwalia', 'Enrolled'),
      student('Prisha Kamdar', 'Enrolled'),
      student('Aditya Wagh', 'Dropped'),
      student('Kashvi Bhalla', 'Pending'),
      student('Reyansh Save', 'Enrolled')
    ])
  ],

  // Valid combination with no courses defined yet.
  [buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'B')]: [],

  [buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 2', 'A')]: [
    {
      code: 'CS201',
      name: 'Algorithms',
      students: [
        { id: 8, name: 'Ishaan Kapoor', candidateId: 'CAND1008', usn: 'USN0008', status: 'Enrolled' },
        student('Rakesh Iyer', 'Pending'),
        // Same person as CS101's Priya Nair (Semester 1) - also enrolled in this Semester 2 course.
        { id: 901, name: 'Priya Nair', candidateId: 'CAND1002', usn: 'USN0002', status: 'Enrolled' },
        // Same person as CS202's Tarun Bajaj (Semester 2, Section C) - also enrolled in this course.
        { id: 904, name: 'Tarun Bajaj', candidateId: 'CAND2001', usn: 'USN2001', status: 'Enrolled' },
        student('Chirayu Deshpande', 'Enrolled'),
        student('Aahana Pillai', 'Pending'),
        student('Yuvraj Kohli', 'Enrolled'),
        student('Samaira Dutt', 'Enrolled'),
        student('Vihaan Raina', 'Dropped'),
        student('Tara Bhasin', 'Pending')
      ]
    },
    course('CS203', 'Operating Systems Lab', [
      student('Naman Chhabra', 'Enrolled'),
      student('Ishika Vora', 'Enrolled'),
      student('Rutuja Nair', 'Dropped'),
      student('Deepansh Rawat', 'Pending'),
      student('Aviral Sinha', 'Enrolled'),
      student('Myra Kohli', 'Enrolled'),
      student('Kabir Anand', 'Pending')
    ]),
    course('CS205', 'Computer Graphics', [
      student('Anvesha Pillai', 'Enrolled'),
      student('Ronit Bhagat', 'Enrolled'),
      student('Tvisha Sarin', 'Pending'),
      student('Yuvaan Chadha', 'Dropped'),
      student('Diya Wadhwani', 'Enrolled')
    ])
  ],

  [buildEnrollmentKey('2024-2025', 'B.Tech', 'Mechanical', 'Semester 1', 'A')]: [
    {
      code: 'ME101',
      name: 'Thermodynamics',
      students: [
        { id: 9, name: 'Divya Menon', candidateId: 'CAND1009', usn: 'USN0009', status: 'Enrolled' },
        { id: 10, name: 'Arjun Reddy', candidateId: 'CAND1010', usn: 'USN0010', status: 'Dropped' },
        student('Ojas Kulkarni', 'Enrolled'),
        student('Anvika Save', 'Enrolled'),
        student('Harshil Doshi', 'Pending'),
        student('Ishanvi Rege', 'Dropped')
      ]
    },
    {
      code: 'ME102',
      name: 'Fluid Mechanics',
      students: [
        student('Ritvik Nambiar', 'Pending'),
        // Same person as ME101's Divya Menon - also enrolled in this course.
        { id: 905, name: 'Divya Menon', candidateId: 'CAND1009', usn: 'USN0009', status: 'Enrolled' },
        student('Kavish Rao', 'Enrolled'),
        student('Tanish Bhide', 'Enrolled'),
        student('Ruhani Sarna', 'Pending')
      ]
    },
    course('ME103', 'Manufacturing Processes', [
      student('Yashvardhan Pandit', 'Enrolled'),
      student('Avantika Phadke', 'Enrolled'),
      student('Kian Vaidya', 'Pending'),
      student('Riddhima Pai', 'Dropped')
    ])
  ],

  [buildEnrollmentKey('2024-2025', 'M.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    {
      code: 'CS501',
      name: 'Advanced Algorithms',
      students: [
        { id: 11, name: 'Neha Joshi', candidateId: 'CAND1011', usn: 'USN0011', status: 'Enrolled' },
        { id: 12, name: 'Aditya Verma', candidateId: 'CAND1012', usn: 'USN0012', status: 'Enrolled' },
        { id: 13, name: 'Meera Pillai', candidateId: 'CAND1013', usn: 'USN0013', status: 'Pending' },
        student('Anushka Rao', 'Enrolled'),
        student('Ishaan Bhagwat', 'Enrolled'),
        student('Charvi Tandon', 'Dropped')
      ]
    },
    course('CS502', 'Computer Vision', [
      student('Reyansh Sarkar', 'Enrolled'),
      student('Aadya Chatterjee', 'Enrolled'),
      student('Vihaan Mitra', 'Pending'),
      student('Sanaya Dey', 'Dropped')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'B.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    {
      code: 'CS101',
      name: 'Data Structures',
      students: [
        { id: 14, name: 'Yash Patel', candidateId: 'CAND1014', usn: 'USN0014', status: 'Enrolled' },
        student('Devika Pillai', 'Pending'),
        student('Ridhima Sinha', 'Enrolled'),
        student('Arnav Shroff', 'Enrolled'),
        student('Ivana Khosla', 'Dropped')
      ]
    },
    course('CS102', 'Database Systems', [
      student('Kabir Talwar', 'Enrolled'),
      student('Anaisha Buch', 'Enrolled'),
      student('Dhruv Chatterjee', 'Pending')
    ])
  ],

  // Note: "2024-2025::B.Tech::Computer Science::Semester 2::B" is intentionally
  // absent from this map to demonstrate the "no data at all" edge case.

  // --- Additional combinations across the wider set of years/degrees/departments ---

  [buildEnrollmentKey('2022-2023', 'B.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    course('CS101', 'Introduction to Programming', [
      // Same person as CS102's Zoya Khan below - enrolled in both courses this semester.
      { id: 910, name: 'Zoya Khan', candidateId: 'CAND2003', usn: 'USN2003', status: 'Enrolled' },
      student('Imran Qureshi', 'Enrolled'),
      // Dropped but a backlog student, so the strike-through styling should not apply.
      student('Naina Chopra', 'Dropped', true),
      student('Siddhi Kamath', 'Enrolled'),
      student('Aarohi Lulla', 'Enrolled'),
      student('Kabir Sachdeva', 'Pending'),
      student('Myra Bhalla', 'Dropped')
    ]),
    course('CS102', 'Discrete Mathematics', [
      student('Rahul Verma', 'Pending'),
      student('Manish Tiwari', 'Enrolled'),
      { id: 911, name: 'Zoya Khan', candidateId: 'CAND2003', usn: 'USN2003', status: 'Enrolled' },
      student('Ridhi Oberoi', 'Enrolled'),
      student('Shaurya Dev', 'Pending'),
      student('Ananya Trehan', 'Enrolled')
    ]),
    {
      code: 'CS103',
      name: 'Computer Fundamentals',
      students: [
        student('Yashika Grover', 'Enrolled'),
        student('Advait Bhalerao', 'Enrolled'),
        student('Prisha Madan', 'Pending'),
        student('Rehan Vora', 'Dropped')
      ],
      // Explicitly marked rejected so this selection's accordion header also has a
      // course to demonstrate the delete/trash icon against - isCourseRejected() reads
      // this flag directly rather than deriving it from student data (see the same
      // pattern on 2024-2025::B.Tech::Computer Science::Semester 1::A's CS103 above).
      isRejected: true
    }
  ],

  // Valid combination with no courses defined yet (repeated edge case in a new branch).
  [buildEnrollmentKey('2022-2023', 'B.Tech', 'Computer Science', 'Semester 1', 'B')]: [],

  [buildEnrollmentKey('2022-2023', 'B.Sc', 'Physics', 'Semester 1', 'A')]: [
    course('PHY101', 'Classical Mechanics', [
      // Same person as PHY102's Devansh Rao below - enrolled in both courses this semester.
      { id: 912, name: 'Devansh Rao', candidateId: 'CAND2004', usn: 'USN2004', status: 'Enrolled' },
      student('Kavya Krishnan', 'Enrolled'),
      student('Tanvi Shah', 'Dropped'),
      student('Om Prakash', 'Pending'),
      student('Rhea Vora', 'Enrolled')
    ]),
    course('PHY102', 'Electromagnetism', [
      student('Kabir Malhotra', 'Pending'),
      { id: 913, name: 'Devansh Rao', candidateId: 'CAND2004', usn: 'USN2004', status: 'Enrolled' },
      student('Ananya Bhatt', 'Pending'),
      student('Vedaant Kulkarni', 'Enrolled'),
      student('Saisha Rane', 'Enrolled'),
      student('Arjun Deshpande', 'Dropped')
    ]),
    course('PHY103', 'Thermal Physics', [
      student('Ishita Phatak', 'Enrolled'),
      student('Kartikeya Pant', 'Enrolled'),
      student('Naysa Gokhale', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2023-2024', 'B.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    course('CS101', 'Data Structures', [
      // Same person as CS110's Aisha Malhotra below - enrolled in both courses this semester.
      { id: 914, name: 'Aisha Malhotra', candidateId: 'CAND2005', usn: 'USN2005', status: 'Enrolled' },
      student('Dev Anand', 'Enrolled'),
      student('Riya Kulkarni', 'Enrolled'),
      student('Sameer Khanna', 'Dropped'),
      student('Ansh Trivedi', 'Enrolled'),
      student('Kiara Nanda', 'Enrolled'),
      student('Aryan Dhillon', 'Pending'),
      student('Vanya Bhasin', 'Dropped')
    ]),
    course('CS102', 'Database Systems', [
      student('Pooja Bhatt', 'Pending'),
      student('Nikhil Saxena', 'Enrolled'),
      student('Nandini Rathi', 'Enrolled'),
      student('Rudra Sabharwal', 'Enrolled'),
      student('Aisha Tandon', 'Pending'),
      student('Veer Chopra', 'Dropped')
    ]),
    course('CS110', 'Web Development Basics', [
      student('Alok Mishra', 'Enrolled'),
      { id: 915, name: 'Aisha Malhotra', candidateId: 'CAND2005', usn: 'USN2005', status: 'Enrolled' },
      student('Pranav Acharya', 'Pending'),
      student('Ishaani Grewal', 'Enrolled'),
      student('Yuvan Sethi', 'Enrolled')
    ])
  ],

  // Course with zero students in a new branch.
  [buildEnrollmentKey('2023-2024', 'B.Tech', 'Computer Science', 'Semester 1', 'C')]: [
    course('CS120', 'Computer Ethics', [])
  ],

  [buildEnrollmentKey('2023-2024', 'M.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    course('CS510', 'Machine Learning', [
      // Same person as CS520's Harshita Rane below - enrolled in both courses this semester.
      { id: 916, name: 'Harshita Rane', candidateId: 'CAND2006', usn: 'USN2006', status: 'Enrolled' },
      student('Varun Kapoor', 'Enrolled'),
      student('Ishani Bhatt', 'Pending'),
      student('Rudransh Sinha', 'Enrolled'),
      student('Kavya Bhagat', 'Dropped')
    ]),
    course('CS520', 'Distributed Systems', [
      student('Simran Gill', 'Pending'),
      { id: 917, name: 'Harshita Rane', candidateId: 'CAND2006', usn: 'USN2006', status: 'Enrolled' },
      student('Aryan Kohli', 'Enrolled'),
      student('Naira Dsouza', 'Enrolled'),
      student('Yash Bora', 'Pending')
    ]),
    course('CS530', 'Natural Language Processing', [
      student('Advait Rane', 'Enrolled'),
      student('Ishita Kohli', 'Enrolled'),
      student('Karthik Iyer', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2023-2024', 'MBA', 'Marketing', 'Semester 1', 'A')]: [
    course('MKT101', 'Principles of Marketing', [
      // Same person as MKT102's Ritika Bose below - enrolled in both courses this semester.
      { id: 918, name: 'Ritika Bose', candidateId: 'CAND2007', usn: 'USN2007', status: 'Enrolled' },
      student('Farhan Ali', 'Enrolled'),
      student('Kabir Sen', 'Enrolled'),
      student('Ishita Dutta', 'Dropped'),
      student('Manav Joshi', 'Pending'),
      student('Preeti Nambiar', 'Enrolled'),
      student('Mira Sinha', 'Enrolled'),
      student('Devansh Kapadia', 'Enrolled'),
      student('Anaya Shroff', 'Pending')
    ]),
    course('MKT102', 'Consumer Behavior', [
      student('Yashvi Doshi', 'Pending'),
      { id: 919, name: 'Ritika Bose', candidateId: 'CAND2007', usn: 'USN2007', status: 'Enrolled' },
      student('Rehan Qureshi', 'Enrolled'),
      student('Kiara Wagh', 'Enrolled'),
      student('Samarth Bakshi', 'Dropped')
    ]),
    course('MKT103', 'Sales Management', [
      student('Trisha Kapadia', 'Enrolled'),
      student('Arnav Solanki', 'Enrolled'),
      student('Pihu Sarin', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 2', 'C')]: [
    course('CS202', 'Computer Networks', [
      // Same person as CS201's Tarun Bajaj (Semester 2, Section A) - also enrolled in that course.
      { id: 903, name: 'Tarun Bajaj', candidateId: 'CAND2001', usn: 'USN2001', status: 'Enrolled' },
      student('Nisha Pawar', 'Dropped'),
      student('Laksh Bafna', 'Enrolled'),
      student('Vedika Rane', 'Enrolled'),
      student('Aryan Mistry', 'Pending'),
      student('Ekansh Bali', 'Enrolled'),
      student('Ridhima Sabharwal', 'Enrolled'),
      student('Kian Dsilva', 'Pending')
    ]),
    course('CS204', 'Software Engineering', [
      student('Tanmay Bhalerao', 'Enrolled'),
      student('Sanjana Iyer', 'Enrolled'),
      student('Harshit Kapoor', 'Pending'),
      student('Riddhi Kamat', 'Enrolled'),
      student('Aditya Sabnis', 'Enrolled'),
      student('Navya Ranganathan', 'Dropped')
    ])
  ],

  [buildEnrollmentKey('2024-2025', 'M.Tech', 'Computer Science', 'Semester 2', 'A')]: [
    {
      code: 'CS530',
      name: 'Cloud Computing',
      students: [
        student('Gaurav Thakur', 'Enrolled'),
        student('Shreya Ghosh', 'Pending'),
        // Same person as CS501's Neha Joshi (Semester 1) - also enrolled in this Semester 2 course.
        { id: 902, name: 'Neha Joshi', candidateId: 'CAND1011', usn: 'USN0011', status: 'Enrolled' },
        // Same person as CS501's Aditya Verma (Semester 1) - also enrolled in this Semester 2 course.
        { id: 906, name: 'Aditya Verma', candidateId: 'CAND1012', usn: 'USN0012', status: 'Enrolled' },
        student('Riya Bhagwat', 'Enrolled'),
        student('Aarav Dandekar', 'Dropped')
      ]
    },
    course('CS531', 'Big Data Analytics', [
      student('Ishan Kelkar', 'Enrolled'),
      student('Mahi Purohit', 'Enrolled'),
      student('Yuvraj Sane', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2024-2025', 'M.Tech', 'Electrical', 'Semester 1', 'A')]: [
    course('EE501', 'Power Systems', [
      // Same person as EE502's Anjali Deshmukh below - enrolled in both courses this semester.
      { id: 907, name: 'Anjali Deshmukh', candidateId: 'CAND2002', usn: 'USN2002', status: 'Enrolled' },
      student('Radhika Menon', 'Pending'),
      student('Ishaan Verma', 'Enrolled'),
      student('Tanvi Ghosh', 'Enrolled'),
      student('Rian Kapadia', 'Dropped')
    ]),
    course('EE502', 'Control Systems', [
      student('Veer Chandel', 'Enrolled'),
      { id: 908, name: 'Anjali Deshmukh', candidateId: 'CAND2002', usn: 'USN2002', status: 'Enrolled' },
      student('Meher Chawla', 'Pending'),
      student('Aanya Rout', 'Enrolled')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'B.Tech', 'Computer Science', 'Semester 2', 'A')]: [
    course('CS201', 'Algorithms', [
      student('Rohit Chawla', 'Enrolled'),
      student('Megha Suri', 'Enrolled'),
      student('Aman Kohli', 'Dropped'),
      student('Samaira Joshi', 'Enrolled'),
      // Same person as this group's CS101 (Semester 1) Yash Patel - also enrolled in this course.
      { id: 909, name: 'Yash Patel', candidateId: 'CAND1014', usn: 'USN0014', status: 'Enrolled' },
      student('Kiara Solanki', 'Enrolled'),
      student('Dhruv Ranganathan', 'Pending')
    ]),
    course('CS202', 'Computer Networks', [
      student('Anvi Bhagwat', 'Enrolled'),
      student('Rehan Dsouza', 'Enrolled'),
      student('Ishani Wagh', 'Pending')
    ])
  ],

  // Valid combination with no courses defined yet.
  [buildEnrollmentKey('2025-2026', 'B.Tech', 'Computer Science', 'Semester 2', 'B')]: [],

  [buildEnrollmentKey('2025-2026', 'B.Tech', 'Mechanical', 'Semester 1', 'A')]: [
    course('ME101', 'Thermodynamics', [
      // Same person as ME102's Sahil Arora below - enrolled in both courses this semester.
      { id: 920, name: 'Sahil Arora', candidateId: 'CAND2008', usn: 'USN2008', status: 'Enrolled' },
      student('Pallavi Menon', 'Enrolled'),
      student('Chirag Dave', 'Pending'),
      student('Ishaani Bhide', 'Enrolled'),
      student('Aarav Ranade', 'Dropped')
    ]),
    course('ME102', 'Fluid Mechanics', [
      student('Yuvraj Solanki', 'Pending'),
      { id: 921, name: 'Sahil Arora', candidateId: 'CAND2008', usn: 'USN2008', status: 'Enrolled' },
      student('Tara Kapoor', 'Enrolled'),
      student('Nivedita Pai', 'Enrolled')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'M.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    course('CS501', 'Advanced Algorithms', [
      // Same person as CS502's Diya Kapadia below - enrolled in both courses this semester.
      { id: 922, name: 'Diya Kapadia', candidateId: 'CAND2009', usn: 'USN2009', status: 'Enrolled' },
      student('Arnav Bhatia', 'Enrolled'),
      student('Tanisha Roy', 'Pending'),
      student('Ojas Chatterjee', 'Enrolled'),
      student('Riya Basu', 'Dropped')
    ]),
    course('CS502', 'Cloud Infrastructure', [
      student('Aadhya Bhargava', 'Enrolled'),
      { id: 923, name: 'Diya Kapadia', candidateId: 'CAND2009', usn: 'USN2009', status: 'Enrolled' },
      student('Ronit Saxena', 'Pending'),
      student('Kabir Banerjee', 'Enrolled')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'B.Sc', 'Computer Science', 'Semester 1', 'A')]: [
    course('BCS101', 'Fundamentals of Computing', [
      // Same person as BCS102's Kiara D'Souza below - enrolled in both courses this semester.
      { id: 924, name: 'Kiara D\'Souza', candidateId: 'CAND2010', usn: 'USN2010', status: 'Enrolled' },
      student('Lakshay Grover', 'Dropped'),
      student('Aparna Iyer', 'Pending'),
      student('Nakul Sethi', 'Enrolled'),
      student('Ridhima Vora', 'Enrolled'),
      student('Yashraj Pant', 'Pending')
    ]),
    course('BCS102', 'Data Analytics Basics', [
      student('Ojasvi Rana', 'Pending'),
      { id: 925, name: 'Kiara D\'Souza', candidateId: 'CAND2010', usn: 'USN2010', status: 'Enrolled' },
      student('Ishita Rane', 'Enrolled'),
      student('Vedant Kelkar', 'Enrolled')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'MBA', 'Marketing', 'Semester 1', 'A')]: [
    course('MKT101', 'Principles of Marketing', [
      // Same person as MKT102's Rhea Kohli below - enrolled in both courses this semester.
      { id: 926, name: 'Rhea Kohli', candidateId: 'CAND2011', usn: 'USN2011', status: 'Enrolled' },
      student('Siddharth Rao', 'Enrolled'),
      student('Ayesha Siddiqui', 'Enrolled'),
      student('Vivaan Malhotra', 'Enrolled'),
      student('Trisha Banerjee', 'Dropped'),
      student('Kunal Oberoi', 'Pending'),
      student('Aditi Ranganathan', 'Enrolled'),
      student('Rajveer Chauhan', 'Pending')
    ]),
    course('MKT102', 'Digital Marketing', [
      student('Ishaan Dutta', 'Enrolled'),
      { id: 927, name: 'Rhea Kohli', candidateId: 'CAND2011', usn: 'USN2011', status: 'Enrolled' },
      student('Devansh Oberoi', 'Enrolled'),
      student('Anushka Menezes', 'Pending')
    ]),
    course('MKT103', 'Brand Management', [
      student('Karan Suri', 'Enrolled'),
      student('Naina Kapadia', 'Enrolled'),
      student('Rehaan Bhagat', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'MBA', 'Finance', 'Semester 1', 'A')]: [
    course('FIN101', 'Financial Accounting', [
      // Same person as FIN102's Mihika Sethi below - enrolled in both courses this semester.
      { id: 928, name: 'Mihika Sethi', candidateId: 'CAND2012', usn: 'USN2012', status: 'Enrolled' },
      student('Kritika Save', 'Pending'),
      student('Kiaan Mehta', 'Pending'),
      student('Arnav Ghatak', 'Enrolled'),
      student('Ishika Rout', 'Dropped')
    ]),
    course('FIN102', 'Corporate Finance', [
      student('Rudra Pandey', 'Enrolled'),
      { id: 929, name: 'Mihika Sethi', candidateId: 'CAND2012', usn: 'USN2012', status: 'Enrolled' },
      student('Aanya Ghosh', 'Enrolled'),
      student('Veer Kapadia', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2026-2027', 'B.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    course('CS101', 'Data Structures', [
      // Same person as CS102's Advait Krishnan below - enrolled in both courses this semester.
      { id: 930, name: 'Advait Krishnan', candidateId: 'CAND2013', usn: 'USN2013', status: 'Enrolled' },
      student('Sara Fernandes', 'Enrolled'),
      student('Vihaan Rathore', 'Pending'),
      student('Meher Bhide', 'Enrolled'),
      student('Aryaman Dutt', 'Dropped')
    ]),
    course('CS102', 'Database Systems', [
      student('Avani Shroff', 'Enrolled'),
      { id: 931, name: 'Advait Krishnan', candidateId: 'CAND2013', usn: 'USN2013', status: 'Enrolled' },
      student('Reyaan Shetty', 'Pending'),
      student('Ishanvi Kohli', 'Enrolled')
    ])
  ],

  [buildEnrollmentKey('2026-2027', 'M.Tech', 'Computer Science', 'Semester 1', 'A')]: [
    course('CS501', 'Advanced Algorithms', [
      // Same person as CS502's Ira Chandran below - enrolled in both courses this semester.
      { id: 932, name: 'Ira Chandran', candidateId: 'CAND2014', usn: 'USN2014', status: 'Enrolled' },
      student('Reyansh Puri', 'Dropped'),
      student('Vanya Kohli', 'Enrolled'),
      student('Om Bhargava', 'Enrolled'),
      student('Shanaya Dey', 'Pending')
    ]),
    course('CS502', 'Advanced Algorithms II', [
      student('Ojas Bhargava', 'Enrolled'),
      { id: 933, name: 'Ira Chandran', candidateId: 'CAND2014', usn: 'USN2014', status: 'Enrolled' },
      student('Arjun Bafna', 'Pending'),
      student('Trisha Kelkar', 'Enrolled')
    ])
  ],

  // --- Previously-uncovered degree/department combinations, now populated so every
  // branch of the dropdown tree has real course/student data to explore. ---

  [buildEnrollmentKey('2022-2023', 'B.Tech', 'Electronics & Communication', 'Semester 1', 'A')]: [
    course('EC101', 'Circuit Theory', [
      student('Yuvan Desai', 'Enrolled'),
      student('Anika Pillai', 'Enrolled'),
      student('Kabir Nair', 'Dropped'),
      student('Saanvi Rao', 'Pending'),
      student('Ritvik Chandra', 'Enrolled'),
      student('Manha Sethi', 'Enrolled')
    ]),
    course('EC102', 'Digital Electronics', [
      student('Aarush Bindra', 'Enrolled'),
      student('Ira Vaswani', 'Pending'),
      student('Nirvaan Chopra', 'Dropped')
    ])
  ],

  [buildEnrollmentKey('2022-2023', 'B.Sc', 'Mathematics', 'Semester 1', 'A')]: [
    course('MATH101', 'Calculus I', [
      student('Ojas Mehta', 'Enrolled'),
      student('Diya Kulkarni', 'Enrolled'),
      student('Farhan Sheikh', 'Pending'),
      student('Naisha Gupta', 'Enrolled'),
      student('Kabir Rastogi', 'Enrolled'),
      student('Avni Sachdev', 'Dropped')
    ]),
    course('MATH102', 'Linear Algebra', [
      student('Ishaan Pradhan', 'Enrolled'),
      student('Riya Chowdhury', 'Enrolled'),
      student('Veer Nanda', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2023-2024', 'B.Tech', 'Civil', 'Semester 1', 'A')]: [
    course('CE101', 'Surveying', [
      student('Aryan Malhotra', 'Enrolled'),
      student('Ishita Verma', 'Enrolled'),
      student('Devraj Singh', 'Dropped'),
      student('Kavya Shroff', 'Enrolled'),
      student('Aarav Bhalla', 'Pending')
    ]),
    course('CE102', 'Concrete Technology', [
      student('Naman Rege', 'Enrolled'),
      student('Diya Anand', 'Enrolled'),
      student('Yuvraj Sarin', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2024-2025', 'M.Tech', 'Mechanical', 'Semester 1', 'A')]: [
    course('ME510', 'Advanced Thermodynamics', [
      student('Kritika Joshi', 'Enrolled'),
      student('Rohan Desai', 'Pending'),
      student('Ananya Sharma', 'Enrolled'),
      student('Arjun Pillai', 'Enrolled'),
      student('Tanya Rout', 'Dropped')
    ]),
    course('ME511', 'Finite Element Analysis', [
      student('Ishaan Kapadia', 'Enrolled'),
      student('Myra Sinha', 'Enrolled'),
      student('Kabir Rane', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'B.Tech', 'Electrical', 'Semester 1', 'A')]: [
    course('EE101', 'Circuit Analysis', [
      student('Vivaan Kapoor', 'Enrolled'),
      student('Myra Iyer', 'Enrolled'),
      student('Aditya Rathi', 'Dropped'),
      student('Kyra Nambiar', 'Pending'),
      student('Reyansh Chandra', 'Enrolled'),
      student('Aadhya Ranade', 'Enrolled')
    ]),
    course('EE102', 'Digital Signal Processing', [
      student('Kabir Solanki', 'Enrolled'),
      student('Navya Bhide', 'Pending'),
      student('Yuvaan Save', 'Dropped')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'B.Tech', 'Civil', 'Semester 1', 'A')]: [
    course('CE101', 'Structural Engineering', [
      student('Reyansh Gupta', 'Enrolled'),
      student('Anvi Chauhan', 'Enrolled'),
      student('Sameer Bose', 'Pending'),
      student('Ishita Kapadia', 'Enrolled'),
      student('Vihaan Nanda', 'Dropped')
    ]),
    course('CE102', 'Geotechnical Engineering', [
      student('Aarohi Menon', 'Enrolled'),
      student('Kartikeya Ghosh', 'Enrolled'),
      student('Sanaya Bhalla', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'M.Tech', 'Electrical', 'Semester 1', 'A')]: [
    course('EE510', 'Power Electronics', [
      student('Ishani Kapadia', 'Enrolled'),
      student('Aarav Thakur', 'Enrolled'),
      student('Tanish Grover', 'Dropped'),
      student('Riya Sabharwal', 'Enrolled'),
      student('Om Deshpande', 'Pending')
    ]),
    course('EE511', 'Renewable Energy Systems', [
      student('Anaya Kelkar', 'Enrolled'),
      student('Dhruv Sane', 'Enrolled'),
      student('Ishaani Purohit', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'B.Sc', 'Physics', 'Semester 1', 'A')]: [
    course('PHY101', 'Mechanics', [
      student('Riya Sen', 'Enrolled'),
      student('Aryan Chandel', 'Pending'),
      student('Navya Rao', 'Enrolled'),
      student('Kabir Dutta', 'Enrolled'),
      student('Ishita Wadhwa', 'Enrolled'),
      student('Veer Kohli', 'Dropped')
    ]),
    course('PHY102', 'Optics', [
      student('Anvika Rout', 'Enrolled'),
      student('Reyansh Bhagat', 'Enrolled'),
      student('Kiara Sane', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2025-2026', 'MBA', 'Human Resources', 'Semester 1', 'A')]: [
    course('HR101', 'Organizational Behavior', [
      student('Simran Kohli', 'Enrolled'),
      student('Yash Malhotra', 'Enrolled'),
      student('Priyanka Shroff', 'Pending'),
      student('Nikhil Bhargava', 'Dropped'),
      student('Aditi Ranade', 'Enrolled'),
      student('Karthik Sabnis', 'Pending')
    ]),
    course('HR102', 'Talent Acquisition', [
      student('Anushka Rout', 'Enrolled'),
      student('Rehan Kapadia', 'Enrolled'),
      student('Ishaani Dev', 'Pending')
    ])
  ],

  [buildEnrollmentKey('2026-2027', 'B.Tech', 'Mechanical', 'Semester 1', 'A')]: [
    course('ME101', 'Engineering Mechanics', [
      student('Aditi Sethi', 'Enrolled'),
      student('Rudransh Verma', 'Enrolled'),
      student('Ishaan Oberoi', 'Pending'),
      student('Myra Chatterjee', 'Enrolled'),
      student('Kabir Ranganathan', 'Dropped')
    ]),
    course('ME102', 'Machine Design', [
      student('Naina Bhagwat', 'Enrolled'),
      student('Arjun Save', 'Enrolled'),
      student('Ridhima Sarna', 'Pending')
    ])
  ]

  // "2026-2027::B.Tech::Computer Science::Semester 2::A" and several other reachable
  // combinations are intentionally left without an entry, so the "no data at all"
  // case stays easy to hit while exploring the wider dropdown tree.
};

// Turns RAW_ENROLLMENT_DATA into the actual exported map: for each Degree+Department+
// Semester+Section key, every course that originally had at least one student is expanded
// to the FULL shared population for that key (every distinct student - by candidateId -
// across all of that key's courses), while each course keeps its own independent status per
// student (the status it originally had there, or 'Pending' for a population member who
// wasn't originally part of that specific course). A course seeded with zero students (e.g.
// the deliberate "no students enrolled" demo courses) is left untouched, since it was never
// meant to show real students in the first place.
//
// totalStudentsForDegreeAndDepartment (see the component) already dedupes by candidateId
// across `courses`, so giving every course the same population doesn't inflate that total -
// it only ever counts each distinct student once, exactly as before.
function buildPopulation(courses: Course[]): Student[] {
  const population: Student[] = [];
  const seenCandidateIds = new Set<string>();
  courses.forEach(course => {
    course.students.forEach(student => {
      if (!seenCandidateIds.has(student.candidateId)) {
        seenCandidateIds.add(student.candidateId);
        population.push({ id: student.id, name: student.name, candidateId: student.candidateId, usn: student.usn, status: student.status });
      }
    });
  });
  return population;
}

function expandCourseToPopulation(course: Course, population: Student[]): Course {
  const originalByCandidateId = new Map<string, Student>();
  course.students.forEach(student => originalByCandidateId.set(student.candidateId, student));

  return {
    ...course,
    students: population.map(member => {
      const original = originalByCandidateId.get(member.candidateId);
      return {
        id: member.id,
        name: member.name,
        candidateId: member.candidateId,
        usn: member.usn,
        status: original ? original.status : 'Pending',
        isRejected: original ? original.isRejected : undefined,
        isBacklog: original ? original.isBacklog : undefined
      };
    })
  };
}

function expandCoursesToSharedPopulation(data: { [key: string]: Course[] }): { [key: string]: Course[] } {
  const result: { [key: string]: Course[] } = {};
  Object.keys(data).forEach(key => {
    const courses = data[key];
    const population = buildPopulation(courses);
    result[key] = courses.map(course => course.students.length > 0 ? expandCourseToPopulation(course, population) : course);
  });
  return result;
}

export const ENROLLMENT_DATA: { [key: string]: Course[] } = expandCoursesToSharedPopulation(RAW_ENROLLMENT_DATA);

// --- Elective Course mock data ---
//
// Kept as its own map (same buildEnrollmentKey convention as ENROLLMENT_DATA above) rather
// than merged into ENROLLMENT_DATA's course lists, for two reasons: it lets a future Elective
// Course UI read this independently of Core Course, and it keeps ENROLLMENT_DATA - and
// therefore CourseWiseEnrollmentComponent.totalStudentsForDegreeAndDepartment, which sums
// unique candidateIds across `this.courses` (sourced only from ENROLLMENT_DATA) - completely
// unaffected by adding electives. No total is computed here at all; there is nothing for an
// elective entry to double-count or omit.
//
// Only a few Degree+Department combinations get elective data (not every branch), and every
// elective student is looked up from that same key's *existing* ENROLLMENT_DATA entry via
// findCoreStudent() rather than hand-copied, so it is structurally impossible for an elective
// roster to drift from "the exact same students already associated with that selection" -
// the same person can then appear under both Core Course and Elective Course, with their own
// independent status per course, matching how the existing core data already lets one person
// appear in two different core courses (e.g. CS101/CS102's Aarav Sharma above).

// Separate id range from the `student()` helper's counter above, so ids assigned here can
// never collide with a core-course student id (ids are only ever compared within a single
// course's own list for Angular's trackBy, but keeping the ranges apart avoids any doubt).
let nextElectiveStudentId = 5000;

// Reuses an existing core-course student's identity (name/candidateId/usn - candidateId is
// what totalStudentsForDegreeAndDepartment dedupes on) for an elective-course entry, with its
// own id and its own independent enrollment status for this elective, exactly like the
// existing "same person, different course" pattern used throughout ENROLLMENT_DATA above.
function electiveStudent(source: Student, status: EnrollmentStatus): Student {
  const id = nextElectiveStudentId++;
  return { id, name: source.name, candidateId: source.candidateId, usn: source.usn, status };
}

// Looks up a student by name within the given key's *core* course data, so elective rosters
// are always built from students who are genuinely already part of that Degree+Department+
// Semester+Section's Core Course population - never a hand-typed, possibly-diverging copy.
function findCoreStudent(key: string, name: string): Student {
  const courses = ENROLLMENT_DATA[key] || [];
  for (const c of courses) {
    const found = c.students.find(s => s.name === name);
    if (found) {
      return found;
    }
  }
  throw new Error(`Elective mock data: no core student named "${name}" found for key "${key}"`);
}

// Same raw/exported split as RAW_ENROLLMENT_DATA/ENROLLMENT_DATA above - never read directly.
const RAW_ELECTIVE_ENROLLMENT_DATA: { [key: string]: Course[] } = {
  // Same key as the richest, most-used Core Course combination above (CS101-CS105) - reuses
  // four of those courses' own students across two elective courses.
  [buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A')]: (() => {
    const key = buildEnrollmentKey('2024-2025', 'B.Tech', 'Computer Science', 'Semester 1', 'A');
    return [
      course('EL101', 'Cloud Computing Fundamentals', [
        electiveStudent(findCoreStudent(key, 'Aarav Sharma'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Priya Nair'), 'Pending'),
        electiveStudent(findCoreStudent(key, 'Advika Menon'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Arushi Bedi'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Sarthak Bajwa'), 'Pending')
      ]),
      course('EL102', 'Entrepreneurship Basics', [
        electiveStudent(findCoreStudent(key, 'Ananya Rao'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Karan Mehta'), 'Dropped'),
        electiveStudent(findCoreStudent(key, 'Kyra Dalal'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Prisha Kamdar'), 'Pending')
      ]),
      course('EL103', 'Technical Writing', [
        electiveStudent(findCoreStudent(key, 'Devansh Malviya'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Niyati Salvi'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Reyansh Save'), 'Pending')
      ])
    ];
  })(),

  // A different Degree+Department (M.Tech / Computer Science, a different Academic Year too)
  // so elective coverage isn't limited to a single branch of the dropdown tree.
  [buildEnrollmentKey('2023-2024', 'M.Tech', 'Computer Science', 'Semester 1', 'A')]: (() => {
    const key = buildEnrollmentKey('2023-2024', 'M.Tech', 'Computer Science', 'Semester 1', 'A');
    return [
      course('EL510', 'Research Methodology', [
        electiveStudent(findCoreStudent(key, 'Harshita Rane'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Varun Kapoor'), 'Pending'),
        electiveStudent(findCoreStudent(key, 'Simran Gill'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Rudransh Sinha'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Naira Dsouza'), 'Pending')
      ]),
      course('EL520', 'Technical Communication', [
        electiveStudent(findCoreStudent(key, 'Kavya Bhagat'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Yash Bora'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Advait Rane'), 'Dropped')
      ])
    ];
  })(),

  // A third, non-technical Degree+Department (MBA / Marketing) with two elective courses.
  [buildEnrollmentKey('2025-2026', 'MBA', 'Marketing', 'Semester 1', 'A')]: (() => {
    const key = buildEnrollmentKey('2025-2026', 'MBA', 'Marketing', 'Semester 1', 'A');
    return [
      course('EL201', 'Business Communication', [
        electiveStudent(findCoreStudent(key, 'Rhea Kohli'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Siddharth Rao'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Ishaan Dutta'), 'Pending'),
        electiveStudent(findCoreStudent(key, 'Kunal Oberoi'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Aditi Ranganathan'), 'Pending')
      ]),
      course('EL202', 'Negotiation Skills', [
        electiveStudent(findCoreStudent(key, 'Ayesha Siddiqui'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Vivaan Malhotra'), 'Dropped'),
        electiveStudent(findCoreStudent(key, 'Anushka Menezes'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Karan Suri'), 'Pending')
      ]),
      course('EL203', 'Public Speaking', [
        electiveStudent(findCoreStudent(key, 'Naina Kapadia'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Rehaan Bhagat'), 'Enrolled'),
        electiveStudent(findCoreStudent(key, 'Trisha Banerjee'), 'Dropped')
      ])
    ];
  })()

  // Deliberately no elective entry for several other combinations that DO have Core Course
  // data, so both "has electives" and "no electives" are easy to exercise once the UI reads
  // this map - e.g. 2024-2025::B.Tech::Mechanical::Semester 1::A (ME101/ME102) and
  // 2022-2023::B.Sc::Physics::Semester 1::A (PHY101/PHY102) each have Core Course students
  // but no Elective Course entry here. Likewise, only Semester 1/Section A has electives for
  // the B.Tech/Computer Science 2024-2025 key above - e.g. Semester 1/Section B and
  // Semester 2/Section A for that same Degree+Department are intentionally absent here, so
  // switching Semester/Section correctly shows no elective data for those combinations.
};

// Same expansion as ENROLLMENT_DATA above, but each elective course is expanded to that same
// key's CORE population (not a population built from the elective courses' own students) -
// so an Elective Course always shows the exact same students, with the exact same ids, as
// the Core Courses for that selection, never a separate elective-only population.
function expandElectiveCoursesToSharedPopulation(
  electiveData: { [key: string]: Course[] },
  coreData: { [key: string]: Course[] }
): { [key: string]: Course[] } {
  const result: { [key: string]: Course[] } = {};
  Object.keys(electiveData).forEach(key => {
    const corePopulation = buildPopulation(coreData[key] || []);
    result[key] = electiveData[key].map(course =>
      course.students.length > 0 ? expandCourseToPopulation(course, corePopulation) : course
    );
  });
  return result;
}

export const ELECTIVE_ENROLLMENT_DATA: { [key: string]: Course[] } =
  expandElectiveCoursesToSharedPopulation(RAW_ELECTIVE_ENROLLMENT_DATA, ENROLLMENT_DATA);
