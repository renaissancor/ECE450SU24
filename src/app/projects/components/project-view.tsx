
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
      className="col-span-1 grid shadow-lg rounded-lg p-6 transition-shadow duration-300 ease-in-out"
      key={project.projectid}
    >
      <CardTitle className="text-xl font-bold text-gray-200 mb-2" style={{color:'black'}}>
        {project.title}
      </CardTitle>
      <CardContent className="col-span-4">
        <div className="text-gray-300" style={{color:'black'}}>
          <p >
            <span className="font-semibold">Year:</span> {project.year}
          </p>
          <p>
            <span className="font-semibold">Semester:</span>{" "}
            {project.semester}
          </p>
          <p>
            <span className="font-semibold">Course:</span> 
            {project.course}
          </p>
        </div>
        {/* <div className="mt-4 flex items-center space-x-2">
          {project.Award !== "none" && (
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${
                project.Award === "golden" ? "bg-yellow-500" : "bg-gray-400"
              }`}
            >
              {project.Award === "golden" ? "Golden Award" : "Silver Award"}
            </span>
          )}
        </div> */}
      </CardContent>
      {/* Button for navigation */}
      <CardFooter className="text-gray-300">
        <Link href={`/projects/${project.projectid}`} passHref>
          <Button type="button">View Project</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectViewCard;
