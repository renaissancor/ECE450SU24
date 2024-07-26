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
      key={project.ProjectID}
    >
      <CardTitle className="text-xl font-bold text-gray-200 mb-2">
        {project.ProjectName}
      </CardTitle>
      <CardContent className="col-span-4">
        <div className="text-gray-300">
          <p>
            <span className="font-semibold">Year:</span> {project.Year}
          </p>
          <p>
            <span className="font-semibold">Semester:</span>{" "}
            {project.Semester === 1
              ? "FA"
              : project.Semester === 2
              ? "SP"
              : "SU"}
          </p>
          <p>
            <span className="font-semibold">Expense:</span> $
            {project.Expense.toFixed(2)}
          </p>
        </div>
        <div className="mt-4 flex items-center space-x-2">
          {project.Award !== "none" && (
            <span
              className={`inline-block px-3 py-1 text-sm font-semibold text-white rounded-full ${
                project.Award === "golden" ? "bg-yellow-500" : "bg-gray-400"
              }`}
            >
              {project.Award === "golden" ? "Golden Award" : "Silver Award"}
            </span>
          )}
        </div>
      </CardContent>
      {/* Button for navigation */}
      <CardFooter className="text-gray-300">
        <Link href={`/projects/${project.ProjectID}`} passHref>
          <Button type="button">View Project</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectViewCard;
