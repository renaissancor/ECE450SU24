// Capstone Project Schema
export interface CapstoneProject {
  projectid: number; // Adjusted naming to match coding style
  title: string; // Add title for project name
  year: number; // Add year
  semester: string; // Add semester
  course: string; // Add course
  sponsor: string; // Add sponsor
  members: string; // Add members
  companymentor: string; // Add company mentor
  instructor: string; // Add instructor
  problem: string; // Add problem statement
  concept: string; // Add concept generation
  description: string; // Add design description
  analysis: string; // Add modeling and analysis
  validation: string; // Add validation
  conclusion: string; // Add conclusion
  acknowledgement: string; // Add acknowledgement
  // Add other properties as needed
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
