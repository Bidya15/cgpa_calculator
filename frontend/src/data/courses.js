export const SCHEMAS = {
  OLD: 'Old Course (2018-19 onwards)',
  NEP: 'NEP (New Education Policy)'
};

export const GROUPS = {
  A: 'Group A',
  B: 'Group B'
};

export const BRANCHES = {
  CE: 'Civil Engineering',
  ME: 'Mechanical Engineering',
  ChE: 'Chemical Engineering',
  IPE: 'Industrial and Production Engineering',
  EE: 'Electrical Engineering',
  CSE: 'Computer Science and Engineering',
  ECE: 'Electronics and Communication Engineering',
  ETE: 'Electronics and Telecommunication Engineering',
  IE: 'Instrumentation Engineering',
  PEI: 'Power Electronics and Instrumentation Engineering',
  EEE: 'Electrical and Electronics Engineering'
};

export const OLD_COURSE_MAPPING = {
  GROUP_A: ['CE', 'ME', 'ChE', 'IPE'],
  GROUP_B: ['EE', 'CSE', 'ECE', 'ETE', 'IE', 'PEI', 'EEE']
};

export const NEP_COURSE_MAPPING = {
  GROUP_A: ['CE', 'ME', 'ChE', 'IPE'],
  GROUP_B: ['EE', 'ECE', 'ETE', 'IE', 'PEI', 'EEE', 'CSE']
};

export const MINOR_ELIGIBLE_BRANCHES = ['CE', 'ME', 'EE', 'CSE', 'ETE', 'ChE', 'IE', 'IPE'];
export const MAJOR_ELIGIBLE_BRANCHES = ['ME', 'IPE', 'IE', 'EE', 'ChE', 'ETE', 'PEI'];

export const GRADE_POINTS = {
  'O': 10,
  'A+': 9,
  'A': 8,
  'B+': 7,
  'B': 6,
  'C': 5,
  'P': 4,
  'F': 0,
  'Ab': 0,
  'R': 0,
  'I': 0,
  'X': 0,
  'WH': 0,
  'W': 0,
  'PP': 0,
  'NP': 0
};

export const COURSES = {
  NEP: {
    FIRST_YEAR: {
      GROUP_A: {
        1: [
          { name: 'Physics', credits: 4 },
          { name: 'Mathematics - I', credits: 4 },
          { name: 'Basic Electrical Engineering', credits: 3 },
          { name: 'Engineering Graphics', credits: 3 },
          { name: 'Technical Report Writing', credits: 2 },
          { name: 'Physics Lab', credits: 1 },
          { name: 'Basic Electrical Engineering Lab', credits: 1 },
          { name: 'Design Thinking', credits: 2 },
          { name: 'Digital fabrication/ Workshop', credits: 1 }
        ],
        2: [
          { name: 'Chemistry', credits: 4 },
          { name: 'Mathematics-II', credits: 4 },
          { name: 'Biology for Engineers', credits: 3 },
          { name: 'Programming for problem solving', credits: 3 },
          { name: 'Engineering Mechanics', credits: 3 },
          { name: 'Universal Human Values', credits: 3 },
          { name: 'Chemistry Lab', credits: 1 },
          { name: 'Sports and Yoga', credits: 0 }
        ]
      },
      GROUP_B: {
        1: [
          { name: 'Chemistry', credits: 4 },
          { name: 'Mathematics-I', credits: 4 },
          { name: 'Biology for Engineers', credits: 3 },
          { name: 'Programming for problem solving', credits: 3 },
          { name: 'Engineering Mechanics', credits: 3 },
          { name: 'Universal Human Values', credits: 3 },
          { name: 'Chemistry Lab', credits: 1 },
          { name: 'Sports and Yoga', credits: 0 }
        ],
        2: [
          { name: 'Physics', credits: 4 },
          { name: 'Mathematics - II', credits: 4 },
          { name: 'Basic Electrical Engineering', credits: 3 },
          { name: 'Engineering Graphics', credits: 3 },
          { name: 'Technical Report Writing', credits: 2 },
          { name: 'Physics Lab', credits: 1 },
          { name: 'Basic Electrical Engineering Lab', credits: 1 },
          { name: 'Design Thinking', credits: 2 },
          { name: 'Digital Fabrication/Workshop', credits: 1 }
        ]
      }
    },
    BRANCH_WISE: {
      CSE: {
        3: [
          { name: 'Data Structure and Algorithms', credits: 3 },
          { name: 'Object Oriented Programming', credits: 3 },
          { name: 'Software Engineering', credits: 3 },
          { name: 'Digital Systems', credits: 4 },
          { name: 'Mathematics III-D', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Data Structure and Algorithms Lab', credits: 1 },
          { name: 'Object Oriented Programming Lab', credits: 1 },
          { name: 'Python Programming Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Database Management System', credits: 3 },
          { name: 'Full Stack Application Development', credits: 2 },
          { name: 'Machine Learning', credits: 3 },
          { name: 'Computer Organization & Architecture', credits: 3 },
          { name: 'Design and Analysis of Algorithms', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Database Management System Lab', credits: 1 },
          { name: 'Full Stack Application Development Lab', credits: 2 },
          { name: 'Java Programming Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      EE: {
        3: [
          { name: 'Analog Electronics', credits: 3 },
          { name: 'Electrical Machines-I', credits: 3 },
          { name: 'Digital Electronics', credits: 3 },
          { name: 'Electrical Circuit Analysis', credits: 4 },
          { name: 'Mathematics III-C', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Analog Electronics Lab', credits: 1 },
          { name: 'Electrical Machines-I Lab', credits: 1 },
          { name: 'Digital Electronics Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Control Systems', credits: 3 },
          { name: 'Electric Machines-II', credits: 3 },
          { name: 'Microprocessors and Microcontrollers', credits: 3 },
          { name: 'Transmission and Distribution of Electric Power', credits: 3 },
          { name: 'Signals and Systems', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Control Systems Lab', credits: 1 },
          { name: 'Electric Machines Lab-II', credits: 1 },
          { name: 'Microprocessors and Microcontrollers Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      CE: {
        3: [
          { name: 'Fluid Mechanics', credits: 3 },
          { name: 'Engineering Survey', credits: 3 },
          { name: 'Construction Materials and Concrete Technology', credits: 3 },
          { name: 'Solid Mechanics', credits: 3 },
          { name: 'Mathematics III A', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'BCP Laboratory', credits: 2 },
          { name: 'Construction Materials and Concrete Technology Lab', credits: 1 },
          { name: 'Engineering Survey Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Structural Analysis-I', credits: 3 },
          { name: 'Geotechnical Engineering-I', credits: 3 },
          { name: 'Hydraulics and Hydraulic Machines', credits: 3 },
          { name: 'Transportation Engineering', credits: 3 },
          { name: 'Construction Engineering and Management', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Geotechnical Engineering Lab', credits: 1 },
          { name: 'Hydraulics and Hydraulic Machines Lab', credits: 1 },
          { name: 'Transportation Engineering Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      ME: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Basic Thermodynamics', credits: 3 },
          { name: 'Theory of Machines', credits: 4 },
          { name: 'Machine Tools and Metal Cutting', credits: 3 },
          { name: 'Mechanics of Materials', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Programming in Python Lab', credits: 1 },
          { name: 'Mechanics of Materials Lab', credits: 1 },
          { name: 'Machine shop', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Applied Thermodynamics', credits: 3 },
          { name: 'Dynamics of Machines', credits: 3 },
          { name: 'Machine Drawing', credits: 3 },
          { name: 'Material Science and Engineering', credits: 3 },
          { name: 'Fluid Mechanics-I', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Applied Thermodynamics Lab', credits: 1 },
          { name: 'Dynamics of Machine Lab', credits: 1 },
          { name: 'Material Science and Engineering Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      ETE: {
        3: [
          { name: 'Electronics Devices', credits: 3 },
          { name: 'Digital System Design', credits: 3 },
          { name: 'Network Theory', credits: 3 },
          { name: 'Signals and Systems', credits: 4 },
          { name: 'Mathematics III-B', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Electronics Devices Lab', credits: 1 },
          { name: 'Digital System Design Lab', credits: 1 },
          { name: 'Network Theory Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Analog Circuits', credits: 3 },
          { name: 'Analog and Digital Communication', credits: 3 },
          { name: 'Microprocessors', credits: 3 },
          { name: 'Electromagnetic Waves', credits: 3 },
          { name: 'Advanced Programming', credits: 4 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Analog Circuits Lab', credits: 1 },
          { name: 'Analog and Digital Communication Lab', credits: 1 },
          { name: 'Microprocessors Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      ECE: {
        3: [
          { name: 'Electronics Devices', credits: 3 },
          { name: 'Digital System Design', credits: 3 },
          { name: 'Network Theory', credits: 3 },
          { name: 'Signals and Systems', credits: 4 },
          { name: 'Mathematics III-B', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Electronics Devices Lab', credits: 1 },
          { name: 'Digital System Design Lab', credits: 1 },
          { name: 'Network Theory Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Analog Circuits', credits: 3 },
          { name: 'Analog and Digital Communication', credits: 3 },
          { name: 'Microprocessors', credits: 3 },
          { name: 'Electromagnetic Waves', credits: 3 },
          { name: 'Advanced Programming', credits: 4 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Analog Circuits Lab', credits: 1 },
          { name: 'Analog and Digital Communication Lab', credits: 1 },
          { name: 'Microprocessors Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      ChE: {
        3: [
          { name: 'Fluid Flow Operations', credits: 3 },
          { name: 'Chemical Process Industries', credits: 3 },
          { name: 'Mechanical Operations', credits: 3 },
          { name: 'Introduction to Chemical Engineering', credits: 4 },
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Languages other than MIL', credits: 0 },
          { name: 'Fluid Flow Operations Lab', credits: 1 },
          { name: 'Chemical Process Industries Lab', credits: 1 },
          { name: 'Mechanical Operations Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Heat Transfer Operations', credits: 3 },
          { name: 'Petroleum Refining and Petrochemicals', credits: 3 },
          { name: 'Chemical Engineering Thermodynamics', credits: 3 },
          { name: 'Chemical Reaction Engineering - I', credits: 3 },
          { name: 'Process Instrumentation', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Heat Transfer Operations Lab', credits: 1 },
          { name: 'Petroleum Refining and Petrochemicals Lab', credits: 1 },
          { name: 'Chemical Engineering Thermodynamics Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      IE: {
        3: [
          { name: 'Analog Electronics', credits: 3 },
          { name: 'Fundamentals of Instrumentation & Transducers', credits: 3 },
          { name: 'Digital Electronics', credits: 3 },
          { name: 'Electric Circuit Analysis', credits: 4 },
          { name: 'Mathematics III-C', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Analog Electronics Lab', credits: 1 },
          { name: 'Transducers Lab', credits: 1 },
          { name: 'Digital Electronics Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Control Systems', credits: 3 },
          { name: 'Industrial Instrumentation', credits: 3 },
          { name: 'Microprocessors and Microcontrollers', credits: 3 },
          { name: 'Modern Analytical Instrumentation', credits: 3 },
          { name: 'Signals and Systems', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Control Systems Lab', credits: 1 },
          { name: 'Industrial Instrumentation Lab', credits: 1 },
          { name: 'Microprocessors and Microcontrollers Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      IPE: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Basic Thermodynamics', credits: 3 },
          { name: 'Theory of Machines', credits: 3 },
          { name: 'Welding and Casting Technology', credits: 3 },
          { name: 'Mechanics of Materials', credits: 4 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Programming in Python Lab', credits: 1 },
          { name: 'Mechanics of Materials Lab', credits: 1 },
          { name: 'Welding and Casting Technology Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Basic Machining Processes', credits: 3 },
          { name: 'Dynamics of Machines', credits: 3 },
          { name: 'Machine Drawing', credits: 3 },
          { name: 'Material Science and Engineering', credits: 3 },
          { name: 'Engineering Inspection and Metrology', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Basic Machining Processes Lab', credits: 1 },
          { name: 'Dynamics of Machine Lab', credits: 1 },
          { name: 'Material Science and Engineering Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      EEE: {
        3: [
          { name: 'Semiconductor Devices and Circuits', credits: 3 },
          { name: 'Electrical Machines-I', credits: 3 },
          { name: 'Digital Electronics', credits: 3 },
          { name: 'Electrical Circuit Analysis', credits: 4 },
          { name: 'Mathematics III-C', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Basic Electronics Lab', credits: 1 },
          { name: 'Electrical Machines-I Lab', credits: 1 },
          { name: 'Digital Electronics Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Control Systems-I', credits: 3 },
          { name: 'Electric Machines-II', credits: 3 },
          { name: 'Microprocessors and Embedded Systems', credits: 3 },
          { name: 'Electromagnetic Waves and Radiation', credits: 3 },
          { name: 'Analog Electronics Circuits', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Control Systems-I Lab', credits: 1 },
          { name: 'Electric Machines-II Lab', credits: 1 },
          { name: 'Microprocessors and Embedded Systems Lab', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      },
      PEI: {
        3: [
          { name: 'Semiconductor Devices and Circuits', credits: 3 },
          { name: 'Digital Electronics', credits: 3 },
          { name: 'Electrical and Electronics Measurements', credits: 3 },
          { name: 'Network Analysis', credits: 4 },
          { name: 'Mathematics III-B', credits: 3 },
          { name: 'Indian Knowledge Systems', credits: 2 },
          { name: 'Language other than MIL', credits: 0 },
          { name: 'Semiconductor Devices and Circuits Lab', credits: 1 },
          { name: 'Digital Electronics Lab', credits: 1 },
          { name: 'Electrical and Electronics Measurements Lab', credits: 1 },
          { name: 'Social Internship', credits: 2 }
        ],
        4: [
          { name: 'Transducers and Sensors', credits: 3 },
          { name: 'Analog Circuits', credits: 3 },
          { name: 'Electrical Machines', credits: 3 },
          { name: 'Python Programming', credits: 3 },
          { name: 'Signals and Systems', credits: 3 },
          { name: 'Finance and Accounting', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Transducers and Sensors Laboratory', credits: 1 },
          { name: 'Analog Circuits Laboratory', credits: 1 },
          { name: 'Electrical Machines Laboratory', credits: 1 },
          { name: 'Micro Project (Skill Based)', credits: 2 }
        ]
      }
    }
  },
  OLD: {
    FIRST_YEAR: {
      GROUP_A: {
        1: [
          { name: 'Chemistry-101', credits: 4 },
          { name: 'Mathematics-I', credits: 4 },
          { name: 'Programming in C', credits: 3 },
          { name: 'Basic Electrical Engineering', credits: 3 },
          { name: 'Professional Skill', credits: 2 },
          { name: 'Chemistry Lab', credits: 1 },
          { name: 'Electrical Lab', credits: 1 }
        ],
        2: [
          { name: 'Physics-201', credits: 4 },
          { name: 'Mathematics-II', credits: 4 },
          { name: 'Engineering Graphics', credits: 3 },
          { name: 'Engineering Mechanics', credits: 3 },
          { name: 'Sociology', credits: 2 },
          { name: 'Physics Lab', credits: 1 },
          { name: 'Workshop', credits: 2 }
        ]
      },
      GROUP_B: {
        1: [
          { name: 'Physics-101', credits: 4 },
          { name: 'Mathematics-I', credits: 4 },
          { name: 'Engineering Graphics', credits: 3 },
          { name: 'Engineering Mechanics', credits: 3 },
          { name: 'Sociology', credits: 2 },
          { name: 'Physics Lab', credits: 1 },
          { name: 'Mechanics Lab', credits: 1 }
        ],
        2: [
          { name: 'Chemistry-201', credits: 4 },
          { name: 'Mathematics-II', credits: 4 },
          { name: 'Programming in C', credits: 3 },
          { name: 'Basic Electrical Engineering', credits: 3 },
          { name: 'Professional Skill', credits: 2 },
          { name: 'Chemistry Lab', credits: 1 },
          { name: 'Electrical Lab', credits: 1 },
          { name: 'Workshop', credits: 2 }
        ]
      }
    },
    BRANCH_WISE: {
      CSE: {
        3: [
          { name: 'Mathematics III-B', credits: 3 },
          { name: 'OOP using C++', credits: 3 },
          { name: 'Digital Systems', credits: 4 },
          { name: 'Data Structure and Algorithms', credits: 3 },
          { name: 'Signals and Systems', credits: 3 },
          { name: 'OOP Lab', credits: 2 },
          { name: 'DSA Lab', credits: 2 }
        ],
        4: [
          { name: 'Discrete Mathematics', credits: 4 },
          { name: 'Computer Architecture', credits: 4 },
          { name: 'Operating System', credits: 3 },
          { name: 'JAVA Programming', credits: 4 },
          { name: 'Graph Theory', credits: 3 },
          { name: 'OS Lab', credits: 2 },
          { name: 'IT Workshop', credits: 2 }
        ],
        5: [
          { name: 'Database Management System', credits: 3 },
          { name: 'Design and Analysis of Algorithm', credits: 4 },
          { name: 'Formal Language and Automata Theory', credits: 3 },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Microcontrollers and Applications', credits: 3 },
              { name: 'Queuing Theory and modelling', credits: 3 },
              { name: 'Information Retrieval', credits: 3 },
              { name: 'Computer Graphics', credits: 3 }
            ]
          },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Database Management System Lab', credits: 2 },
          { name: 'Web Programming', credits: 3 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Compiler Design', credits: 3 },
          { name: 'Computer Networks', credits: 3 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'Data Mining', credits: 3 },
              { name: 'Advanced Computer Architecture', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Image Processing', credits: 3 },
              { name: 'Ad hoc and Sensor Networks', credits: 3 },
              { name: 'Real Time Systems', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Software Engineering', credits: 3 },
              { name: 'Information Theory and Coding', credits: 3 },
              { name: 'Fault Tolerant Computing', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 },
          { name: 'Compiler Design Lab', credits: 1 },
          { name: 'Computer Networks Lab', credits: 1 },
          { name: 'Mini Project', credits: 3 }
        ],
        7: [
          {
            name: 'Program Elective-4', credits: 3, options: [
              { name: 'Cloud Computing', credits: 3 },
              { name: 'Computational Complexity', credits: 3 },
              { name: 'Principles of Programming Languages', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Machine Learning', credits: 3 },
              { name: 'Human Computer Interaction', credits: 3 },
              { name: 'Computer Vision and its Applications', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Distributed Systems', credits: 3 },
              { name: 'Computational Geometry', credits: 3 },
              { name: 'Embedded Systems', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project-1', credits: 6 },
          { name: 'Internship-III (SAI-Industry)', credits: 2 }
        ],
        8: [
          {
            name: 'Program Elective-5', credits: 3, options: [
              { name: 'Cryptography and Network Security', credits: 3 },
              { name: 'Speech and Natural Language Processing', credits: 3 },
              { name: 'Parallel Computing', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-6', credits: 3, options: [
              { name: 'Big Data Analytics', credits: 3 },
              { name: 'Computer Vision', credits: 3 },
              { name: 'Neural Networks and Deep Learning', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-4', credits: 3, options: [
              { name: 'Artificial Intelligence', credits: 3 },
              { name: 'Quantum Computing', credits: 3 },
              { name: 'Optimization Techniques in Machine Learning', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-5', credits: 3, options: [
              { name: 'Internet of Things', credits: 3 },
              { name: 'Computational Number Theory', credits: 3 },
              { name: 'Electronic Design Automation', credits: 3 },
              { name: 'Soft Computing', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 6 }
        ]
      },
      CE: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Solid Mechanics', credits: 3 },
          { name: 'Fluid Mechanics', credits: 4 },
          { name: 'Building Construction and Planning', credits: 3 },
          { name: 'Engineering Survey-I', credits: 4 },
          { name: 'Structural Analysis-I', credits: 4 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Civil Engineering Drawing and CAD Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Hydraulics and Hydraulics Machines', credits: 4 },
          { name: 'Structural Analysis-II', credits: 4 },
          { name: 'Engineering Survey-II', credits: 3 },
          { name: 'Engineering Geology', credits: 3 },
          { name: 'Construction Materials and Concrete Technology', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Hydraulics and Hydraulic Machines Lab', credits: 1 },
          { name: 'Engineering Survey Lab', credits: 2 },
          { name: 'Engineering Geology Lab', credits: 1 },
          { name: 'Construction Materials and Concrete Technology Lab', credits: 1 }
        ],
        5: [
          { name: 'Open Channel Flow and Irrigation Engineering', credits: 4 },
          { name: 'Structural Design-I', credits: 4 },
          { name: 'Environmental Engineering-I', credits: 4 },
          { name: 'Transportation Engineering-I', credits: 4 },
          { name: 'Geotechnical Engineering-I', credits: 4 },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Transportation Engineering Lab', credits: 1 },
          { name: 'Environmental Engineering Lab', credits: 1 },
          { name: 'Geotechnical Engineering Lab', credits: 1 },
          { name: 'Internship-II (SAI-Academia)', credits: 1 }
        ],
        6: [
          { name: 'Transportation Engineering-II', credits: 4 },
          { name: 'Engineering Hydrology', credits: 4 },
          { name: 'Structural Design-II', credits: 4 },
          { name: 'Environmental Engineering-II', credits: 3 },
          { name: 'Geotechnical Engineering-II', credits: 4 },
          { name: 'Accountancy', credits: 2 }
        ],
        7: [
          { name: 'Quantity Surveying', credits: 3 },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Advanced Structural Analysis', credits: 3 },
              { name: 'Water Resources Engineering', credits: 3 },
              { name: 'Ground Improvement Technique', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'Earthquake Engineering', credits: 3 },
              { name: 'River Engineering', credits: 3 },
              { name: 'Machine Foundation', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Optimization Techniques', credits: 3 },
              { name: 'Environmental Impact Assessment', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project-1', credits: 3 },
          { name: 'Internship-III (SAI-Industry)', credits: 2 }
        ],
        8: [
          { name: 'Construction Engineering and Management', credits: 3 },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Advanced Structural Design', credits: 3 },
              { name: 'Design of Hydraulic Structures', credits: 3 },
              { name: 'Geotechnical In-situ Testing', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-4', credits: 3, options: [
              { name: 'Design of Substructures', credits: 3 },
              { name: 'Pavement Design and Construction', credits: 3 },
              { name: 'Bridge Engineering', credits: 3 },
              { name: 'Water Power Engineering', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Disaster Risk Management', credits: 3 },
              { name: 'Solid and Hazardous Waste Management', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Finite Element Method', credits: 3 },
              { name: 'Remote Sensing and Geographical Information System', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 4 }
        ]
      },
      ME: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Electrical Technology', credits: 4 },
          { name: 'Basic Thermodynamics', credits: 4 },
          { name: 'Theory of Machines', credits: 3 },
          { name: 'Machine and Assembly Drawing', credits: 3 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Theory of Machines Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Applied Electronics', credits: 4 },
          { name: 'Workshop Theory and Practice-I', credits: 4 },
          { name: 'Fluid Mechanics-I', credits: 3 },
          { name: 'Materials Science', credits: 4 },
          { name: 'Mechanics of Materials', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Fluid Mechanics-I Lab', credits: 1 },
          { name: 'Mechanics of Materials Lab', credits: 1 }
        ],
        5: [
          { name: 'Applied Thermodynamics-I', credits: 4 },
          { name: 'Machine Design-I', credits: 4 },
          { name: 'Mechanisms and Dynamics of Machines', credits: 4 },
          { name: 'Heat Transfer-I', credits: 3 },
          { name: 'Engineering Inspection and Metrology', credits: 3 },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Heat Transfer-I Lab', credits: 1 },
          { name: 'Engineering Inspection and Metrology Lab', credits: 1 },
          { name: 'Internship-II (SAI-Academia)', credits: 1 }
        ],
        6: [
          { name: 'Machine Design-II', credits: 4 },
          { name: 'Fluid Mechanics-II', credits: 3 },
          { name: 'Mechanical Measurements and Instrumentation', credits: 3 },
          { name: 'Workshop Theory and Practice-II', credits: 4 },
          { name: 'Heat Transfer-II', credits: 3 },
          { name: 'Accountancy', credits: 2 },
          { name: 'Fluid Mechanics-II Lab', credits: 1 },
          { name: 'Mechanical Measurements and Instrumentation Lab', credits: 1 },
          { name: 'Heat Transfer-II Lab', credits: 1 }
        ],
        7: [
          { name: 'Vibration of Mechanical Systems', credits: 3 },
          { name: 'Applied Thermodynamics - II', credits: 3 },
          { name: 'Industrial Engineering and Management', credits: 3 },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Hydraulic Machines', credits: 3 },
              { name: 'Machine Tools', credits: 3 },
              { name: 'Power Plant Technology', credits: 3 },
              { name: 'Quality Engineering', credits: 3 },
              { name: 'Refrigeration', credits: 3 },
              { name: 'Rotordynamics', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Operation Research', credits: 3 },
              { name: 'Renewable Energy Sources', credits: 3 },
              { name: 'Solid Waste Management', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project-1', credits: 4 },
          { name: 'Grand Viva Voce-I', credits: 1 },
          { name: 'Internship-III (SAI - Industry)', credits: 2 }
        ],
        8: [
          { name: 'Manufacturing Methods', credits: 3 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'Air Conditioning', credits: 3 },
              { name: 'Mechatronics', credits: 3 },
              { name: 'Robotics and Applications', credits: 3 },
              { name: 'Compressors and Gas Turbines', credits: 3 },
              { name: 'Computational Fluid Dynamics', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Computer Integrated Manufacturing', credits: 3 },
              { name: 'Operations Management', credits: 3 },
              { name: 'Internal Combustion Engines', credits: 3 },
              { name: 'Composite Materials', credits: 3 },
              { name: 'Tribology', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Noise and Vibration Control', credits: 3 },
              { name: 'Industrial Safety Engineering', credits: 3 },
              { name: 'Engineering Economic Analysis', credits: 3 },
              { name: 'Automotive Mechanics', credits: 3 },
              { name: 'Machining and machine tools', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 6 },
          { name: 'Grand Viva Voce-II', credits: 1 }
        ]
      },
      EE: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Electrical Circuit Analysis', credits: 4 },
          { name: 'Analog Electronics', credits: 3 },
          { name: 'Electrical Machines-I', credits: 4 },
          { name: 'Digital Electronics', credits: 3 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Analog Electronics Lab', credits: 1 },
          { name: 'Electrical Machines-I Lab', credits: 1.5 },
          { name: 'Digital Electronics Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Electrical Measurements', credits: 4 },
          { name: 'Control Systems', credits: 4 },
          { name: 'Electrical Machines-II', credits: 4 },
          { name: 'Power System-I', credits: 4 },
          { name: 'Signals and Systems', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Control Systems Lab', credits: 1 },
          { name: 'Electrical Machines-II Lab', credits: 1.5 },
          { name: 'Electrical Measurements Lab', credits: 1 }
        ],
        5: [
          { name: 'Power System-II', credits: 4 },
          { name: 'Power Electronics', credits: 3 },
          { name: 'Microprocessors', credits: 3 },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Advanced Control System', credits: 3 },
              { name: 'Advanced Electrical Measurements', credits: 3 },
              { name: 'Computer Organization', credits: 3 },
              { name: 'Electrical System Design and Drawing', credits: 3 },
              { name: 'Electronic System Design', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Data Structures and Algorithms Basics', credits: 3 },
              { name: 'Computer Oriented Numerical Methods', credits: 3 },
              { name: 'Digital Signal Processing', credits: 3 }
            ]
          },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Power Electronics Lab', credits: 1 },
          { name: 'Microprocessors Lab', credits: 1 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Power System-III', credits: 4 },
          { name: 'Electric Drives', credits: 3 },
          { name: 'Electromagnetic Field Theory', credits: 3 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'Principles of Telecommunication Engineering', credits: 3 },
              { name: 'Embedded System', credits: 3 },
              { name: 'Optimal and Adaptive Control System', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Operating Systems', credits: 3 },
              { name: 'Complex Analysis', credits: 3 },
              { name: 'Digital Image Processing', credits: 3 },
              { name: 'Optimization Techniques in Engineering', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 },
          { name: 'Power System Lab', credits: 1 },
          { name: 'Electronics Design Lab', credits: 3 }
        ],
        7: [
          { name: 'Power System-IV', credits: 4 },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'High Voltage Engineering', credits: 3 },
              { name: 'Computer Networks', credits: 3 },
              { name: 'Pattern Recognition and Machine Learning', credits: 3 },
              { name: 'Speech Coding Techniques', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-4', credits: 3, options: [
              { name: 'FACTS', credits: 3 },
              { name: 'Renewable Energy Sources', credits: 3 },
              { name: 'Advanced Electrical Drives', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Optoelectronics', credits: 3 },
              { name: 'Computer Vision', credits: 3 },
              { name: 'Electromagnetic Waves', credits: 3 },
              { name: 'Electrical and Hybrid Vehicles', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project-1', credits: 3 },
          { name: 'Internship-III (SAI-Industry)', credits: 2 }
        ],
        8: [
          {
            name: 'Program Elective-5', credits: 3, options: [
              { name: 'Electrical Engineering Professional Practices', credits: 3 },
              { name: 'Smart Grid Technology', credits: 3 },
              { name: 'VLSI Signal processing', credits: 3 },
              { name: 'Microwave Theory and Techniques', credits: 3 },
              { name: 'HVDC', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-6', credits: 3, options: [
              { name: 'Power System Dynamics and Control', credits: 3 },
              { name: 'Illumination Engineering', credits: 3 },
              { name: 'Power Quality Analysis and Assessment', credits: 3 },
              { name: 'Industrial Electrical Systems', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-7', credits: 3, options: [
              { name: 'Utilization and Conservation of Electrical Energy', credits: 3 },
              { name: 'Artificial Intelligence Applications in Electrical Engineering', credits: 3 },
              { name: 'Power System Instrumentation', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-4', credits: 3, options: [
              { name: 'Reliability Engineering', credits: 3 },
              { name: 'Web Technology', credits: 3 },
              { name: 'Optical Communication Engineering', credits: 3 },
              { name: 'Computer Graphics', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 6 }
        ]
      },
      ETE: {
        3: [
          { name: 'Mathematics III-B', credits: 3 },
          { name: 'Semiconductor Devices and Circuits', credits: 3 },
          { name: 'Digital Circuits', credits: 3 },
          { name: 'Network Theory', credits: 3 },
          { name: 'Signals and Systems', credits: 4 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Basic Electronics Lab', credits: 1 },
          { name: 'Digital Circuits Lab', credits: 1 },
          { name: 'Network Theory Lab', credits: 1 },
          { name: 'Signals and Systems Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Linear Algebra and Random Processes', credits: 4 },
          { name: 'Analog Circuits', credits: 4 },
          { name: 'Analog Communication', credits: 3 },
          { name: 'Electrical Engineering Materials', credits: 3 },
          { name: 'Instrumentation', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Analog Circuits Lab', credits: 1 },
          { name: 'Analog Communication Lab', credits: 1 },
          { name: 'General Viva-I', credits: 1 },
          { name: 'General Aptitude, Proficiency and Behavioural Remodelling-I', credits: 1 }
        ],
        5: [
          { name: 'Microprocessor and Embedded System', credits: 3 },
          { name: 'Data Structure and Algorithm', credits: 3 },
          { name: 'Digital Communication', credits: 3 },
          { name: 'Control Systems', credits: 4 },
          { name: 'Computer Networks', credits: 3 },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Microprocessor and Embedded System Lab', credits: 1 },
          { name: 'Data Structure and Algorithm Lab', credits: 1 },
          { name: 'Digital Communication Lab', credits: 1 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Digital Signal Processing', credits: 3 },
          { name: 'Advanced Programming', credits: 3 },
          { name: 'Electromagnetic Waves', credits: 3 },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Advanced Microcontrollers', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Digital System Design using Verilog', credits: 3 },
              { name: 'Optical Fiber Communication', credits: 3 },
              { name: 'Integrated Circuit Technology', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 },
          { name: 'Advanced Programming Lab', credits: 1 },
          { name: 'General Viva-II', credits: 1 },
          { name: 'General Aptitude, Proficiency and Behavioural Remodelling-II', credits: 1 },
          { name: 'Mini Project', credits: 2 }
        ],
        7: [
          { name: 'Microwave Engineering', credits: 4 },
          { name: 'VLSI System Design', credits: 3 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'MEMS', credits: 3 },
              { name: 'Nanoelectronics', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Image Processing', credits: 3 },
              { name: 'Information Theory and Coding', credits: 3 },
              { name: 'IoT', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'VLSI System Design Lab', credits: 1 },
          { name: 'Project-1', credits: 3 },
          { name: 'Internship-III (SAI - Industry)', credits: 2 }
        ],
        8: [
          { name: 'Antenna and Wave Propagation', credits: 3 },
          { name: 'Mobile Communication', credits: 3 },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Mixed Signal Design', credits: 3 },
              { name: 'Low Power VLSI', credits: 3 },
              { name: 'Biomedical Electronics', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Machine Learning', credits: 3 },
              { name: 'Advanced Computer Architecture', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 8 },
          { name: 'General Viva-III', credits: 1 }
        ]
      },
      ECE: {
        3: [
          { name: 'Mathematics III-B', credits: 3 },
          { name: 'Semiconductor Devices and Circuits', credits: 3 },
          { name: 'Digital Circuits', credits: 3 },
          { name: 'Network Theory', credits: 3 },
          { name: 'Signals and Systems', credits: 4 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Basic Electronics Lab', credits: 1 },
          { name: 'Digital Circuits Lab', credits: 1 },
          { name: 'Network Theory Lab', credits: 1 },
          { name: 'Signals and Systems Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Linear Algebra and Random Processes', credits: 4 },
          { name: 'Analog Circuits', credits: 4 },
          { name: 'Analog Communication', credits: 3 },
          { name: 'Electrical Engineering Materials', credits: 3 },
          { name: 'Instrumentation', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Analog Circuits Lab', credits: 1 },
          { name: 'Analog Communication Lab', credits: 1 },
          { name: 'General Viva-I', credits: 1 },
          { name: 'General Aptitude, Proficiency and Behavioural Remodelling-I', credits: 1 }
        ],
        5: [
          { name: 'Microprocessor and Embedded System', credits: 3 },
          { name: 'Data Structure and Algorithm', credits: 3 },
          { name: 'Digital Communication', credits: 3 },
          { name: 'Control Systems', credits: 4 },
          { name: 'Computer Networks', credits: 3 },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Microprocessor and Embedded System Lab', credits: 1 },
          { name: 'Data Structure and Algorithm Lab', credits: 1 },
          { name: 'Digital Communication Lab', credits: 1 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Digital Signal Processing', credits: 3 },
          { name: 'Advanced Programming', credits: 3 },
          { name: 'Electromagnetic Waves', credits: 3 },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Advanced Microcontrollers', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Digital System Design using Verilog', credits: 3 },
              { name: 'Optical Fiber Communication', credits: 3 },
              { name: 'Integrated Circuit Technology', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 },
          { name: 'Advanced Programming Lab', credits: 1 },
          { name: 'General Viva-II', credits: 1 },
          { name: 'General Aptitude, Proficiency and Behavioural Remodelling-II', credits: 1 },
          { name: 'Mini Project', credits: 2 }
        ],
        7: [
          { name: 'Microwave Engineering', credits: 4 },
          { name: 'VLSI System Design', credits: 3 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'MEMS', credits: 3 },
              { name: 'Nanoelectronics', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Image Processing', credits: 3 },
              { name: 'Information Theory and Coding', credits: 3 },
              { name: 'IoT', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'VLSI System Design Lab', credits: 1 },
          { name: 'Project-1', credits: 3 },
          { name: 'Internship-III (SAI - Industry)', credits: 2 }
        ],
        8: [
          { name: 'Antenna and Wave Propagation', credits: 3 },
          { name: 'Mobile Communication', credits: 3 },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Mixed Signal Design', credits: 3 },
              { name: 'Low Power VLSI', credits: 3 },
              { name: 'Biomedical Electronics', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Machine Learning', credits: 3 },
              { name: 'Advanced Computer Architecture', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 8 },
          { name: 'General Viva-III', credits: 1 }
        ]
      },
      ChE: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Process Calculation', credits: 4 },
          { name: 'Chemical Process Industries', credits: 4 },
          { name: 'Material Science and Corrosion Engineering', credits: 3 },
          { name: 'Energy Engineering', credits: 4 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Introduction to Computational Methods in Chemical Engineering Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Fluid Flow Operations', credits: 4 },
          { name: 'Mechanical Operations', credits: 4 },
          { name: 'Chemical Engineering Thermodynamics', credits: 5 },
          { name: 'Process Engineering Economics and Optimization', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          {
            name: 'Programme Elective-1', credits: 3, options: [
              { name: 'Process Utilities', credits: 3 }
            ]
          }
        ],
        5: [
          { name: 'Chemical Reaction Engineering-I', credits: 4 },
          { name: 'Mass Transfer Operations-I', credits: 4 },
          { name: 'Heat Transfer Operations', credits: 5 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'Environmental Pollution Control Engineering', credits: 3 },
              { name: 'Nano Science And Nano Technology', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Petroleum Production Technology', credits: 3 },
              { name: 'Modelling and Simulation', credits: 3 }
            ]
          },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Chemical Reaction Engineering-II', credits: 5 },
          { name: 'Mass Transfer Operations - II', credits: 5 },
          { name: 'Process Control and Instrumentation', credits: 4 },
          { name: 'Petroleum Refining and Petrochemicals', credits: 4 },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Alternative Energy Resources', credits: 3 },
              { name: 'Fluidization Engineering', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 }
        ],
        7: [
          { name: 'Process Equipment Design-I', credits: 5 },
          { name: 'Polymer Science Engineering', credits: 3 },
          {
            name: 'Programme Elective-3', credits: 3, options: [
              { name: 'Biochemical Engineering', credits: 3 },
              { name: 'Nanomaterials', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project - I', credits: 4 },
          { name: 'Internship-III (SAI- Industry)', credits: 2 }
        ],
        8: [
          { name: 'Transport Phenomena', credits: 4 },
          { name: 'Process Equipment Design-II', credits: 4 },
          {
            name: 'Programme Elective-4', credits: 3, options: [
              { name: 'Advanced Separation Processes', credits: 3 },
              { name: 'Safety in Chemical Industry', credits: 3 }
            ]
          },
          { name: 'Project-II', credits: 4 }
        ]
      },
      IE: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Electrical Circuit Analysis', credits: 4 },
          { name: 'Analog Electronics', credits: 3 },
          { name: 'Transducers', credits: 3 },
          { name: 'Digital Electronics', credits: 3 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Analog Electronics Lab', credits: 1 },
          { name: 'Digital Electronics Lab', credits: 1 },
          { name: 'Instrumentation Lab-I', credits: 1.5 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Electrical Measurements', credits: 4 },
          { name: 'Control Systems', credits: 4 },
          { name: 'Industrial Instrumentation', credits: 4 },
          { name: 'Electrical Machines', credits: 4 },
          { name: 'Signals and Systems', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Control Systems Lab', credits: 1 },
          { name: 'Electrical Machines Lab', credits: 1 },
          { name: 'Instrumentation Lab-II', credits: 1 }
        ],
        5: [
          { name: 'Process Control', credits: 3 },
          { name: 'OOP and Data Structures with C++', credits: 3 },
          { name: 'Microprocessors', credits: 3 },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Electronic Instruments', credits: 3 },
              { name: 'Advanced Control System', credits: 3 },
              { name: 'Introduction to MEMS', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Digital Signal Processing', credits: 3 }
            ]
          },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'OOP and Data Structures with C++ Lab', credits: 1 },
          { name: 'Microprocessors Lab', credits: 1 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Optical Instrumentation', credits: 4 },
          { name: 'Modern Analytical Instrumentation', credits: 3 },
          { name: 'Biomedical Instrumentation', credits: 3 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'Introduction to Robotics', credits: 3 },
              { name: 'Fluid Power and Control', credits: 3 },
              { name: 'Embedded System', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Introduction to Internet of Things', credits: 3 },
              { name: 'Principles of Analog Communication Engineering', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 },
          { name: 'Instrumentation Lab-III', credits: 1 },
          { name: 'Electronics Design Lab', credits: 3 }
        ],
        7: [
          { name: 'Telemetry and Tele Control', credits: 4 },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Advanced Process Control', credits: 3 },
              { name: 'Computer Networks', credits: 3 },
              { name: 'Pattern Recognition and Machine Learning', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-4', credits: 3, options: [
              { name: 'Biomedical Signal Processing', credits: 3 },
              { name: 'Advanced Sensors and Instrumentation', credits: 3 },
              { name: 'Renewable Energy Sources', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Fundamental of Power Electronics', credits: 3 },
              { name: 'Principles of Safety and Fire', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project-1', credits: 3 },
          { name: 'Internship-III (SAI - Industry)', credits: 2 }
        ],
        8: [
          {
            name: 'Program Elective-5', credits: 3, options: [
              { name: 'Power Plant Instrumentation', credits: 3 },
              { name: 'Aerospace and Navigation Instrumentation', credits: 3 },
              { name: 'VLSI Signal Processing', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-6', credits: 3, options: [
              { name: 'Logic and Distributed Control System', credits: 3 },
              { name: 'Environmental Instrumentation', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-7', credits: 3, options: [
              { name: 'Petrochemical Instrumentation', credits: 3 },
              { name: 'Smart Sensors and Signal Processing', credits: 3 },
              { name: 'Micro Sensors and Micro Actuators', credits: 3 },
              { name: 'Instrumentation Project Documentation and Execution', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-4', credits: 3, options: [
              { name: 'Neural Network and Fuzzy logic', credits: 3 },
              { name: 'Digital Control Systems', credits: 3 },
              { name: 'VHDL and Embedded Based Systems Design', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 6 }
        ]
      },
      IPE: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Electrical Technology', credits: 4 },
          { name: 'Basic Thermodynamics', credits: 4 },
          { name: 'Theory of Machines', credits: 3 },
          { name: 'Machine and Assembly Drawing', credits: 3 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Theory of Machines Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Microprocessor Control and Mechatronics', credits: 4 },
          { name: 'Manufacturing Process - I', credits: 4 },
          { name: 'Fluid Mechanics - I', credits: 3 },
          { name: 'Materials Science', credits: 4 },
          { name: 'Mechanics of Materials', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Fluid Mechanics - I Lab', credits: 1 },
          { name: 'Mechanics of Materials Lab', credits: 1 }
        ],
        5: [
          { name: 'Manufacturing Process - II', credits: 4 },
          { name: 'Machine Tool Technology', credits: 3 },
          { name: 'Plant Layout and Material Handling', credits: 4 },
          { name: 'Mechanisms and Dynamics of Machines', credits: 3 },
          { name: 'Engineering Inspection and Metrology', credits: 3 },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Machine Tool Technology Lab', credits: 1 },
          { name: 'Engineering Inspection and Metrology Lab', credits: 1 },
          { name: 'Internship-II (SAI-Academia)', credits: 1 }
        ],
        6: [
          { name: 'Machine Design-II', credits: 4 },
          { name: 'Heat Transfer and Fluid Machines', credits: 3 },
          { name: 'Mechanical Measurements and Instrumentation', credits: 3 },
          { name: 'Ergonomics and Work Design', credits: 4 },
          { name: 'Numerical Methods and Computer Graphics', credits: 4 },
          { name: 'Accountancy', credits: 2 },
          { name: 'Heat Transfer and Fluid Machines Lab', credits: 1 },
          { name: 'Mechanical Measurements and Instrumentation Lab', credits: 1 }
        ],
        7: [
          { name: 'Production Planning and Control', credits: 3 },
          { name: 'Tool Design', credits: 3 },
          { name: 'Industrial Engineering and Operations Research', credits: 3 },
          {
            name: 'Program Elective -1', credits: 3, options: [
              { name: 'Environment Engineering and Renewable Energy Sources', credits: 3 },
              { name: 'Supply Chain Management', credits: 3 },
              { name: 'Project Planning and Appraisal', credits: 3 },
              { name: 'Micro Manufacturing Processes and Systems', credits: 3 },
              { name: 'Plant and Maintenance Engineering', credits: 3 },
              { name: 'Manufacturing System Simulation', credits: 3 }
            ]
          },
          {
            name: 'Open Elective -1', credits: 3, options: [
              { name: 'Total Quality Management', credits: 3 },
              { name: 'Production Economics and Financial Management', credits: 3 },
              { name: 'CNC Machines and Robotics', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project-1', credits: 4 },
          { name: 'Grand Viva Voce-I', credits: 1 },
          { name: 'Internship-III (SAI-Industry)', credits: 2 }
        ],
        8: [
          { name: 'Non-Traditional Production Process', credits: 3 },
          {
            name: 'Program Elective -2', credits: 3, options: [
              { name: 'Industrial Marketing', credits: 3 },
              { name: 'System dynamics and Modelling', credits: 3 }
            ]
          },
          {
            name: 'Program Elective -3', credits: 3, options: [
              { name: 'Industrial Statistics', credits: 3 },
              { name: 'Computer Aided Design and Manufacturing', credits: 3 }
            ]
          },
          {
            name: 'Open Elective - 2', credits: 3, options: [
              { name: 'Materials Management', credits: 3 },
              { name: 'Optimization in Operations Research', credits: 3 },
              { name: 'Management Information Systems', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 6 },
          { name: 'Grand Viva Voce-II', credits: 1 }
        ]
      },
      PEI: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Semiconductor Devices and Circuits', credits: 3 },
          { name: 'Digital Circuits', credits: 3 },
          { name: 'Network Theory', credits: 3 },
          { name: 'Transducers and Systems Components -I', credits: 3 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Digital Circuits Lab', credits: 1 },
          { name: 'Network Theory Lab', credits: 1 },
          { name: 'Transducer Lab-I', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Linear Algebra and Random Processes', credits: 4 },
          { name: 'Analog Circuits', credits: 4 },
          { name: 'Transducers and Systems Components -II', credits: 3 },
          { name: 'Electrical Machines', credits: 4 },
          { name: 'Signals and Systems', credits: 3 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Analog Circuits Lab', credits: 1 },
          { name: 'Transducers Lab-II', credits: 1 },
          { name: 'Electrical Machines Lab', credits: 1 }
        ],
        5: [
          { name: 'Microprocessor and Embedded System', credits: 3 },
          { name: 'Data Structure and Algorithm', credits: 3 },
          { name: 'Industrial Process Control', credits: 3 },
          { name: 'Control Systems', credits: 4 },
          { name: 'Electrical and Electronic Measurements', credits: 3 },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Microprocessor and Embedded System Lab', credits: 1 },
          { name: 'Data Structure and Algorithm Lab', credits: 1 },
          { name: 'Electrical and Electronic Measurements Lab', credits: 1 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Digital Signal Processing', credits: 3 },
          { name: 'Advanced Programming', credits: 3 },
          { name: 'Industrial Instrumentation', credits: 3 },
          {
            name: 'Open Elective- 1', credits: 3, options: [
              { name: 'Non-Conventional Energy Sources', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Electromagnetic Theory', credits: 3 },
              { name: 'Microelectro Mechanical Systems', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 },
          { name: 'Advanced Programming Lab', credits: 1 },
          { name: 'Instrumentation Lab', credits: 1 },
          { name: 'Mini Project', credits: 2 }
        ],
        7: [
          { name: 'Power Electronics Device and Circuits', credits: 3 },
          { name: 'Optical Instrumentation', credits: 3 },
          {
            name: 'Program Elective-2', credits: 3, options: [
              { name: 'Biomedical Instrumentation', credits: 3 },
              { name: 'Computer Networks', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-2', credits: 3, options: [
              { name: 'Artificial Intelligence and Machine Learning', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Power Electronics Lab', credits: 1 },
          { name: 'Project-1', credits: 3 },
          { name: 'Internship-III (SAI - Industry)', credits: 2 }
        ],
        8: [
          { name: 'Power Electronics Circuit and Application', credits: 3 },
          { name: 'Analytical Instrumentation', credits: 3 },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Advanced Process Control', credits: 3 },
              { name: 'Biomedical Electronics', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Biomedical Signal Processing', credits: 3 }
            ]
          },
          { name: 'Virtual Instrumentation lab', credits: 1 },
          { name: 'Project-2', credits: 6 },
          { name: 'General Viva', credits: 2 }
        ]
      },
      EEE: {
        3: [
          { name: 'Mathematics III-A', credits: 3 },
          { name: 'Electrical Circuit Analysis', credits: 4 },
          { name: 'Semiconductor Devices and Circuits', credits: 3 },
          { name: 'Electrical Machines-I', credits: 4 },
          { name: 'Digital Electronics', credits: 3 },
          { name: 'Constitution of India', credits: 0 },
          { name: 'Basic Electronics Lab', credits: 1 },
          { name: 'Electrical Machines-I Lab', credits: 1.5 },
          { name: 'Digital Electronics Lab', credits: 1 },
          { name: 'Internship-I (SAI - Social)', credits: 1 }
        ],
        4: [
          { name: 'Electromagnetic Waves', credits: 4 },
          { name: 'Communication Systems', credits: 3 },
          { name: 'Control Systems', credits: 4 },
          { name: 'Electrical Machines-II', credits: 4 },
          { name: 'Electrical Measurements', credits: 4 },
          { name: 'Environmental Science', credits: 0 },
          { name: 'Control Systems Lab', credits: 1 },
          { name: 'Electrical Machines-II Lab', credits: 1.5 },
          { name: 'Electrical Measurements Lab', credits: 1 }
        ],
        5: [
          { name: 'Microprocessor and Embedded System', credits: 3 },
          { name: 'Control Systems-II', credits: 4 },
          { name: 'Analog Electronics Circuits', credits: 4 },
          { name: 'Apparatus and Modelling of Power System-I', credits: 4 },
          { name: 'Fundamentals of Signals and Systems', credits: 3 },
          { name: 'Engineering Economics', credits: 3 },
          { name: 'Microprocessor and Embedded System Lab', credits: 1 },
          { name: 'Fundamentals of Signals and Systems Lab', credits: 1 },
          { name: 'Internship-II (SAI - Academia)', credits: 1 }
        ],
        6: [
          { name: 'Power System-II', credits: 3 },
          { name: 'Power Electronics', credits: 3 },
          { name: 'Energy Conservation and Auditing', credits: 3 },
          {
            name: 'Program Elective-1', credits: 3, options: [
              { name: 'Electrical Machine Design', credits: 3 },
              { name: 'Electrical and Hybrid Vehicle', credits: 3 },
              { name: 'Line-Commutated and Active PWM Rectifiers', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-1', credits: 3, options: [
              { name: 'Introduction to VLSI', credits: 3 }
            ]
          },
          { name: 'Accountancy', credits: 2 },
          { name: 'Power System Lab', credits: 1 },
          { name: 'General Viva-II', credits: 1 },
          { name: 'General Aptitude, Proficiency and Behavioural Remodelling-II', credits: 1 },
          { name: 'Mini Project', credits: 2 }
        ],
        7: [
          { name: 'Power System Optimisation', credits: 4 },
          {
            name: 'Program Elective-3', credits: 3, options: [
              { name: 'Reliability Engineering', credits: 3 },
              { name: 'Pattern Recognition and Machine Learning', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-4', credits: 3, options: [
              { name: 'Digital Signal Processing', credits: 3 },
              { name: 'Advanced Electrical Drives', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-3', credits: 3, options: [
              { name: 'Illumination Engineering', credits: 3 }
            ]
          },
          { name: 'Principles of Management', credits: 3 },
          { name: 'Project-1', credits: 3 },
          { name: 'Internship-III (SAI-Industry)', credits: 2 }
        ],
        8: [
          {
            name: 'Program Elective-5', credits: 3, options: [
              { name: 'Advanced Electric Drives', credits: 3 },
              { name: 'Smart Grid Technology', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-6', credits: 3, options: [
              { name: 'Industrial Electrical Systems', credits: 3 },
              { name: 'Power System Protection', credits: 3 }
            ]
          },
          {
            name: 'Program Elective-7', credits: 3, options: [
              { name: 'High Voltage Engineering', credits: 3 },
              { name: 'Power System Instrumentation', credits: 3 }
            ]
          },
          {
            name: 'Open Elective-4', credits: 3, options: [
              { name: 'Hybrid Energy Systems', credits: 3 },
              { name: 'FACTS', credits: 3 }
            ]
          },
          { name: 'Project-2', credits: 6 }
        ]
      }
    }
  }
};
