# UniCalc - Premium University CGPA Calculator

A modern, high-performance web application designed for students to calculate their SGPA and track eligibility for Minor and Major courses under different academic schemas (Old Course vs NEP).

## Features
- **Dual Schema Support**: Switch between "Old Course (2018-19)" and "NEP" structures.
- **Auto Group Mapping**: Automatically identifies Group A or Group B for 1st-year students based on their branch.
- **NEP Eligibility Engine**: 
    - **Minor Eligibility**: Checks if the student has a minimum 6.5 SGPA and no backlogs in the 1st semester (required for entry in the 3rd semester).
    - **Major Eligibility**: Checks for a minimum 7.5 SGPA in the 1st year.
- **Responsive Design**: Premium glassmorphism UI optimized for all devices.
- **Dynamic Grading**: Calculates points based on university standard (O=10, A+=9, etc.).

## How to Run
1. Navigate to `frontend` directory.
2. Run `npm install`.
3. Run `npm run dev`.

## Data Mapping
### Group A Branches
- Civil Engineering (CE)
- Mechanical Engineering (ME)
- Chemical Engineering (ChE)
- Industrial and Production Engineering (IPE)

### Group B Branches
- Electrical Engineering (EE)
- Computer Science and Engineering (CSE)
- Electronics and Communication Engineering (ECE)
- Electronics and Telecommunication Engineering (ETE)
- Instrumentation Engineering (IE)
- Power Electronics and Instrumentation (PEI)
- Electrical and Electronics Engineering (EEE)

### Eligibility Rules (NEP)
- **Minor**: Available to CE, ME, EE, CSE, ETE, ChE, IE, IPE. Requires 1st Sem SGPA ≥ 6.5 & No Backlogs.
- **Major**: Available to ME, IPE, IE, EE, ChE, ETE, PEI. Requires 1st Year SGPA ≥ 7.5.
