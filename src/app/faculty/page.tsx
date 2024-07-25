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

import Image from "next/image";

export default function FacultyPage() {
  return (
    <div>
      <div className="">
        <Image
          src="/umji-logo.png"
          alt="UMJI Logo"
          width={400}
          height={400}
          className=""
        />
      </div>
    </div>
  );
}
