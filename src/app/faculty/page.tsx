import Image from "next/image";
import facultyData from "@/data/faculty"; // Adjust the import path based on your actual file structure
import { Instructor } from "@/data/faculty";
// Assuming your faculty data is exported as an array of Instructor objects
const faculty: Instructor[] = facultyData;

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

      <h3>Education</h3>
      <ul>
        {member.education.map((edu, index) => (
          <li key={index}>
            {edu.degree} in {edu.field}, {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>

      <h3>Work Experience</h3>
      <ul>
        {member.workExperience.map((work, index) => (
          <li key={index}>
            {work.period}: {work.position} at {work.institution}
          </li>
        ))}
      </ul>

      {member.honorsAndAwards && (
        <div>
          <h3>Honors and Awards</h3>
          <ul>
            {member.honorsAndAwards.map((award, index) => (
              <li key={index}>
                {award.name} ({award.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {member.researchInterests && (
        <div>
          <h3>Research Interests</h3>
          <ul>
            {member.researchInterests.map((interest, index) => (
              <li key={index}>{interest}</li>
            ))}
          </ul>
        </div>
      )}

      {member.selectedPublications && (
        <div>
          <h3>Selected Publications</h3>
          <ul>
            {member.selectedPublications.map((pub, index) => (
              <li key={index}>
                {pub.title}, {pub.journal} ({pub.year})
              </li>
            ))}
          </ul>
        </div>
      )}

      {member.professionalService && (
        <div>
          <h3>Professional Service</h3>
          <ul>
            {member.professionalService.map((service, index) => (
              <li key={index}>{service}</li>
            ))}
          </ul>
        </div>
      )}

      <h3>Courses Taught</h3>
      <ul>
        {member.coursesTaught.map((course, index) => (
          <li key={index}>
            {course.code}: {course.title}
          </li>
        ))}
      </ul>

      <h3>Courses Taught</h3>
      <ul>
        {member.coursesTaught.map((course, index) => (
          <li key={index}>
            {course.code}: {course.title}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default function FacultyPage() {
  return (
    <div className="faculty-page">
      <h1>Faculty</h1>
      <div className="faculty-list">
        {faculty.map((member) => (
          <FacultyMember key={member.id} member={member} />
        ))}
      </div>
    </div>
  );
}
