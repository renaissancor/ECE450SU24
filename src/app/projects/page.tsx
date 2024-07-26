"use client";

import Checkboxes from "./components/project-search-panel";
import { exampleCapstoneProjects } from "./dummy";
import ProjectViewCard from "./components/project-view";
import { CapstoneProject } from "@/types/types";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

export function PaginationDemo() {
  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious href="#" />
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">1</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#" isActive>
            2
          </PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationLink href="#">3</PaginationLink>
        </PaginationItem>
        <PaginationItem>
          <PaginationEllipsis />
        </PaginationItem>
        <PaginationItem>
          <PaginationNext href="#" />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Checkboxes />
      <div className="col-span-4 grid grid-cols-4 m-2 gap-2">
        {exampleCapstoneProjects.map((project: CapstoneProject) => (
          <ProjectViewCard key={project.ProjectID} project={project} />
        ))}
        <div className="col-span-4">
          <PaginationDemo />
        </div>
      </div>
    </div>
  );
}
