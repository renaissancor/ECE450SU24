"use client";

import { Card, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
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
      <Separator />
      <CardFooter className="mb-4">
        <Link className="w-full" href={`/project/${project.ProjectID}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}
