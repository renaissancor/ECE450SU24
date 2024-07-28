"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { getInstructor } from "@/data/faculty"; // Adjust the import path based on your actual file structure
import { Instructor } from "@/data/faculty";

const FacultyMember = ({ instructor }: { instructor: Instructor }) => {
  return (
    <div className="faculty-member">
      <Image
        src={`/faculty/${instructor.id}.jpg`}
        alt={instructor.name}
        width={150}
        height={150}
      />
      <h2>Dr. {instructor.name}</h2>
      <p>{instructor.telephone}</p>
      <p>Office: {instructor.office}</p>
      <p>
        Email: <a href={`mailto:${instructor.email}`}>{instructor.email}</a>
      </p>
      <p>
        Webpage:{" "}
        <a href={instructor.webpage} target="_blank" rel="noopener noreferrer">
          {instructor.webpage}
        </a>
      </p>

      <h3>Education</h3>
      <ul>
        {instructor.education.map((edu, index) => (
          <li key={index}>
            {edu.degree} in {edu.field}, {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h3>Work Experience</h3>
      <ul>
        {instructor.workExperience.map((work, index) => (
          <li key={index}>
            {work.period}: {work.position} at {work.institution}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function FacultyIDPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  if (!id) {
    return <div>Faculty ID is missing</div>;
  }

  const instructor: Instructor | undefined = getInstructor(id);
  if (!instructor) {
    return <div>Instructor not found</div>;
  }
  return (
    <div className="faculty-page">
      <div className="faculty-list">
        <FacultyMember key={instructor.id} instructor={instructor} />
      </div>
    </div>
  );
}
