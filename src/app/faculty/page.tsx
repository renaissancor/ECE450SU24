import Image from "next/image";
import { instructors } from "@/data/faculty"; // Adjust the import path based on your actual file structure
import { Instructor } from "@/data/faculty";
// Assuming your faculty data is exported as an array of Instructor objects

const FacultyMember = ({ member }: { member: Instructor }) => {
  return (
    <div className="faculty-member">
      <Image
        src={`/faculty/${member.id}.jpg`}
        alt={member.name}
        width={150}
        height={150}
      />
      <h2>{member.name}</h2>
      <p>{member.telephone}</p>
      <p>Office: {member.office}</p>
      <p>
        Email: <a href={`mailto:${member.email}`}>{member.email}</a>
      </p>
      <p>
        Webpage:{" "}
        <a href={member.webpage} target="_blank" rel="noopener noreferrer">
          {member.webpage}
        </a>
      </p>
    </div>
  );
};

export default function FacultyPage() {
  return (
    <div className="faculty-page">
      <h1>Faculty</h1>
      <div className="faculty-list">
        {instructors.map((instructor) => (
          <FacultyMember key={instructor.id} member={instructor} />
        ))}
      </div>
    </div>
  );
}
