"use client";

import { useState } from "react";
import Checkboxes from "./components/project-search-panel";
import { exampleCapstoneProjects } from "@/data/projects";
import ProjectViewCard from "./components/project-view";
import { CapstoneProject } from "@/types/types";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface PaginationDemoProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

function PaginationDemo({
  currentPage,
  totalPages,
  onPageChange,
}: PaginationDemoProps) {
  const pageNumbers = [];
  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage > 1) onPageChange(currentPage - 1);
            }}
          />
        </PaginationItem>
        {pageNumbers.map((pageNumber) => (
          <PaginationItem key={pageNumber}>
            <PaginationLink
              href="#"
              isActive={currentPage === pageNumber}
              onClick={(e) => {
                e.preventDefault();
                onPageChange(pageNumber);
              }}
            >
              {pageNumber}
            </PaginationLink>
          </PaginationItem>
        ))}
        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={(e) => {
              e.preventDefault();
              if (currentPage < totalPages) onPageChange(currentPage + 1);
            }}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

export default function ProjectsPage() {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const projectsPerPage = 3;

  // Calculate the total number of pages
  const totalPages = Math.ceil(
    exampleCapstoneProjects.length / projectsPerPage
  );

  // Get the projects for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = exampleCapstoneProjects.slice(
    indexOfFirstProject,
    indexOfLastProject
  );

  return (
    <div className="grid grid-cols-5 gap-2">
      <Checkboxes />
      <div className="col-span-4 grid grid-cols-3 m-2 gap-2">
        {currentProjects.map((project: CapstoneProject) => (
          <ProjectViewCard key={project.ProjectID} project={project} />
        ))}
      </div>
      <div className="col-span-5">
        <PaginationDemo
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
