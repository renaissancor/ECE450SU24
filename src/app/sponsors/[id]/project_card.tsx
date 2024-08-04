"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { getProject } from "@/data/projects"; // Adjust the import path as needed
import { CapstoneProject } from "@/types/types"; // Adjust the import path as needed

interface ProjectIDPageProps {
  id: number;
}

export default function ProjectIDCard(props: ProjectIDPageProps) {
  const id = props.id;

  if (!id) {
    return <Card className="text-red-500">Error: Project ID is missing</Card>;
  }

  const project: CapstoneProject | undefined = getProject(id.toString());

  if (!project) {
    return (
      <Card>
        <CardHeader>
          <CardTitle>Loading project details...</CardTitle>
        </CardHeader>
      </Card>
    );
  }

  return (
    <Card id={id.toString()} className="p-8 max-w-4xl mx-auto">
      <CardHeader className="mb-4">
        <CardTitle className="text-4xl font-bold mb-4">
          {project.ProjectName}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-xl">
        <span className="font-semibold">Year:</span> {project.Year}
        <p className="text-xl">
          <span className="font-semibold">Semester:</span>{" "}
          {project.Semester === 1
            ? "Fall"
            : project.Semester === 2
            ? "Spring"
            : "Summer"}
        </p>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Instructors</h2>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Sponsor</h2>
          <p className="text-xl">{project.SponsorID}</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl font-semibold">Group</h2>
          <p className="text-xl">
            <span className="font-semibold">Leader ID:</span>{" "}
            {project.GroupLeaderID}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Members:</span>{" "}
            {project.GroupMember1}, {project.GroupMember2},{" "}
            {project.GroupMember3}, {project.GroupMember4}
          </p>
        </div>
      </CardContent>
      <CardFooter>
        <CardDescription className="mb-4">
          <h2 className="text-2xl font-semibold">Project Details</h2>
          <p className="text-xl">
            <span className="font-semibold">Proposal:</span> {project.Proposal}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Poster:</span> {project.Poster}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Final Presentation Video:</span>{" "}
            {project.VideoFinalPre}
          </p>
          <p className="text-xl">
            <span className="font-semibold">Expo Video:</span>{" "}
            {project.VideoExpo}
          </p>
        </CardDescription>
      </CardFooter>
    </Card>
  );
}
