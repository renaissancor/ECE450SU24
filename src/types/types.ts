// Capstone Project Schema
interface CapstoneProject {
  ProjectID: number;
  Year: number;
  Semester: number; // (1-FA, 2-SP, 3-SU)
  ProjectName: string;
  InstructorID1: number;
  InstructorID2: number;
  InstructorID3: number;
  InstructorID4: number;
  InstructorID5: number;
  SponsorID: number;
  GroupLeaderID: number;
  GroupMember1: number;
  GroupMember2: number;
  GroupMember3: number;
  GroupMember4: number;
  Proposal: string;
  DR1: string;
  DR2: string;
  DR3: string;
  Poster: string;
  VideoFinalPre: string;
  VideoExpo: string;
  Award: "golden" | "silver" | "none";
  Expense: number;
}

// Mentor Schema
interface Mentor {
  MentorID: number;
  Name: string;
  Type: "industry" | "university";
  Company: string; // JI or others
  Position: string;
  ContactInfo: string;
}

// Company Schema
interface Company {
  CompanyID: number;
  Name: string;
  Country: string;
  LinkToHomePage: string;
  Funding: number;
}

// Student Schema
interface Student {
  StudentID: number;
  Name: string;
  Country: string;
  Gender: "F" | "M";
  Major: "ME" | "ECE" | "MSE";
  JointProgram: "DD" | "GDP" | "None";
}

// Example of using these interfaces
const exampleCapstoneProject: CapstoneProject = {
  ProjectID: 1,
  Year: 2023,
  Semester: 2,
  ProjectName: "AI Research Project",
  InstructorID1: 101,
  InstructorID2: 102,
  InstructorID3: 103,
  InstructorID4: 104,
  InstructorID5: 105,
  SponsorID: 201,
  GroupLeaderID: 301,
  GroupMember1: 302,
  GroupMember2: 303,
  GroupMember3: 304,
  GroupMember4: 305,
  Proposal: "link-to-proposal",
  DR1: "link-to-DR1",
  DR2: "link-to-DR2",
  DR3: "link-to-DR3",
  Poster: "link-to-poster",
  VideoFinalPre: "link-to-video-final-pre",
  VideoExpo: "link-to-video-expo",
  Award: "golden",
  Expense: 1000,
};

const exampleMentor: Mentor = {
  MentorID: 1,
  Name: "Dr. Smith",
  Type: "university",
  Company: "JI",
  Position: "Professor",
  ContactInfo: "email@example.com",
};

const exampleCompany: Company = {
  CompanyID: 1,
  Name: "Tech Innovations",
  Country: "USA",
  LinkToHomePage: "http://tech-innovations.com",
  Funding: 500000,
};

const exampleStudent: Student = {
  StudentID: 1,
  Name: "John Doe",
  Country: "USA",
  Gender: "M",
  Major: "ME",
  JointProgram: "DD",
};
