"use client";

import { useEffect, useState } from "react";
// import { exampleCapstoneProjects } from "@/data/projects";
// import Checkboxes from "./components/project-search-panel";
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
  const getPageNumbers = () => {
    const maxPagesToShow = 4;
    const half = Math.floor(maxPagesToShow / 2);
    let startPage = Math.max(1, currentPage - half);
    let endPage = Math.min(totalPages, currentPage + half);

    if (currentPage <= half) {
      endPage = Math.min(totalPages, maxPagesToShow);
    }

    if (currentPage + half >= totalPages) {
      startPage = Math.max(1, totalPages - maxPagesToShow + 1);
    }

    const pages = [];
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  };

  const pageNumbers = getPageNumbers();

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
  const [exampleCapstoneProjects, setExampleCapstoneProjects] = useState<
    CapstoneProject[]
  >([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const projectsPerPage = 3;

  useEffect(() => {
    setLoading(true);
    fetch("http://127.0.0.1:5000/list", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectid: 1, // This might need to be adjusted based on your actual API requirements
      }),
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to fetch projects");
        }
        return response.json();
      })
      .then((data) => {
        setExampleCapstoneProjects(data["list"] || []);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Error fetching projects:", err);
        setError("Failed to fetch projects");
        setLoading(false);
      });
  }, []); // Empty dependency array means this effect runs once on mount

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

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (loading) {
    return <div>Loading projects...</div>;
  }

  return (
    <div className="grid grid-cols-5 gap-2">
      <div className="col-span-4 grid grid-cols-3 m-2 gap-2">
        {currentProjects.map((project: CapstoneProject) => (
          <ProjectViewCard key={project.ProjectID} project={project} />
        ))}
      </div>
      <div className="grid">
        <PaginationDemo
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page: number) => setCurrentPage(page)}
        />
      </div>
    </div>
  );
}
