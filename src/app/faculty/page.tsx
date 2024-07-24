interface Staff {
  ID: number;
  Name: string;
  Position: string;
  Office: string; // Room number
  Tel: string;
  Email: string; // Email address
  PhotoLink: string;
}

interface Instructor extends Staff {
  Title: string;
}

export default function FacultyPage() {
  return <div></div>;
}
