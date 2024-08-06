import { Card, CardContent, CardFooter, CardTitle } from "@/components/ui/card";
import { CapstoneProject } from "@/types/types";
import Link from "next/link"; // Import Link from next/link
import { Button } from "@/components/ui/button";

interface ProjectViewCardProps {
  project: CapstoneProject;
}

const ProjectViewCard: React.FC<ProjectViewCardProps> = ({ project }) => {
  return (
<Card
  className="col-span-1 grid shadow-lg rounded-lg p-6 transition-shadow duration-300 ease-in-out h-96"
  key={project.projectid}
>
  <div className="flex flex-col h-full">
    <CardTitle className="text-xl font-bold mb-2" style={{ color: 'black', height: '9rem' }}>
      {project.title}
    </CardTitle>
    <CardContent className="flex-grow">
      <div className="text-black">
        <p>
          <span className="font-semibold">Year:</span> {project.year}
        </p>
        <p>
          <span className="font-semibold">Semester:</span> {project.semester}
        </p>
        <p>
          <span className="font-semibold">Course:</span> {project.course}
        </p>
      </div>
    </CardContent>
    <CardFooter className="mt-auto">
      <Link href={`/projects/${project.projectid}`} passHref>
        <Button type="button">View Project</Button>
      </Link>
    </CardFooter>
  </div>
</Card>

  );
};

export default ProjectViewCard;
