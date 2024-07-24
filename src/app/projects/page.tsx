"use client";

import { Checkboxes } from "./components/checkboxes";
import { Card, CardTitle } from "@/components/ui/card";

import { exampleCapstoneProjects } from "./data";

export default function ProjectsPage() {
  return (
    <div className="m-4">
      <Checkboxes />
      <div className="grid grid-cols-6">
        {exampleCapstoneProjects.map((project) => (
          <Card className="col-span-1" key={project.ProjectID}>
            <CardTitle>{project.ProjectName}</CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
}
