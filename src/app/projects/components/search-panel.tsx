"use client";
import React, { useState, useEffect } from "react";
import axios from "axios";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input"; // Assuming you have an Input component
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import ProjectViewCard from "./project-view";
import { CapstoneProject } from "@/types/types"; // Adjust the import path as needed  

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

function PaginationDemo({ currentPage, totalPages, onPageChange }: PaginationDemoProps) {
  const getPageNumbers = () => {
    const maxPagesToShow = 5;
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
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(1);
            }}
          >
            First
          </PaginationLink>
        </PaginationItem>
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
        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={(e) => {
              e.preventDefault();
              onPageChange(totalPages);
            }}
          >
            Last
          </PaginationLink>
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}

const courses = [
  { id: "Major Design Experience(MDE)", label: "ECE4500J Major Design Experience(MDE)" },
  { id: "Design and Manufacturing III", label: "ME4500J Design and Manufacturing III" },
  { id: "Product Design and Manufacturing", label: "MSE4500J Product Design and Manufacturing" },
  { id: "Laboratory II", label: "ME4950J Laboratory II" },
  { id: "VLSI Design", label: "ECE4270J VLSI Design" },
  { id: "Computer Architecture", label: "ECE4700J Computer Architecture" },
  { id: "App Development for Entrepreneurs", label: "ECE4410J App Development for Entrepreneurs" },
  { id: "Advanced Embedded System", label: "ECE4730J Advanced Embedded System" },
] as const;

const semesters = [
  { id: "24SU", label: "2024 Summer" },
  { id: "23FA", label: "2023 Fall" },
  { id: "23SU", label: "2023 Summer" },
  { id: "22FA", label: "2022 Fall" },
  { id: "22SU", label: "2022 Summer" },
  { id: "21FA", label: "2021 Fall" },
  { id: "21SU", label: "2021 Summer" },
  { id: "20FA", label: "2020 Fall" },
  { id: "20SU", label: "2020 Summer" },
  { id: "19FA", label: "2019 Fall" },
  { id: "19SU", label: "2019 Summer" },
] as const;

const Checkboxes: React.FC<{ checkedCourses: string[]; setCheckedCourses: React.Dispatch<React.SetStateAction<string[]>> }> = ({ checkedCourses, setCheckedCourses }) => {
  const handleCheckboxChange = (id: string) => {
    setCheckedCourses((prev) =>
      prev.includes(id) ? prev.filter((course) => course !== id) : [...prev, id]
    );
  };

  return (
    <Card>
      <CardHeader>Select Capstone Design Courses</CardHeader>
      <CardContent className="grid grid-rows-8 gap-2 p-4">
        {courses.map((course) => (
          <div key={course.id} className="flex items-center">
            <Checkbox
              id={course.id}
              checked={checkedCourses.includes(course.id)}
              onCheckedChange={() => handleCheckboxChange(course.id)}
            />
            <Label className="ml-2" htmlFor={course.id}>
              {course.label}
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

type SliderSemesterProps = React.ComponentProps<typeof Slider>;

const SliderSemester: React.FC<SliderSemesterProps & { semesterRange: number[]; setSemesterRange: (range: number[]) => void }> = ({
  className,
  semesterRange,
  setSemesterRange,
  ...props
}: SliderSemesterProps & { semesterRange: number[]; setSemesterRange: (range: number[]) => void }) => {
  return (
    <Card>
      <CardHeader>Select Semester Range</CardHeader>
      <CardContent className="space-y-4 m-6">
        <div className="grid grid-cols-11 gap-4">
          {semesters.map((semester) => (
            <Label key={semester.id} className="text-xs text-center">
              {semester.id}
            </Label>
          ))}
        </div>
        <div className="relative">
          <Slider
            defaultValue={semesterRange}
            min={1}
            max={semesters.length}
            step={1}
            value={semesterRange}
            onValueChange={setSemesterRange}
            className={cn("absolute w-full", className)}
            {...props}
          />
        </div>
      </CardContent>
    </Card>
  );
};

const SearchPanel: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [data, setData] = useState<CapstoneProject[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [checkedCourses, setCheckedCourses] = useState<string[]>(courses.map(course => course.id)); // Default all checked
  const [semesterRange, setSemesterRange] = useState<number[]>([1, 5]);
  const [searchText, setSearchText] = useState<string>(""); // Text search state
  const projectsPerPage = 3;

  const handleSearch = async () => {
    setCurrentPage(1); // Reset to first page
    setLoading(true);
    setError(null);

    const selectedSemesters = semesters.slice(semesterRange[0] - 1, semesterRange[1]).map(semester => semester.label);

    const requestData = {
      courses: checkedCourses.length > 0 ? checkedCourses : [], // Ensure empty array if no courses are checked
      semesters: selectedSemesters,
      project_search: searchText.trim(), // Add search text
    };

    try {
      const response = await axios.post("http://123.57.48.172:5000/list", requestData);
      setData(response.data.list || []);
      setError(null);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    handleSearch(); // Automatically search when the component is mounted
  }, []);

  // Calculate the total number of pages
  const totalPages = Math.ceil(data.length / projectsPerPage);

  // Get the projects for the current page
  const indexOfLastProject = currentPage * projectsPerPage;
  const indexOfFirstProject = indexOfLastProject - projectsPerPage;
  const currentProjects = data.slice(indexOfFirstProject, indexOfLastProject);

  return (
    <div className="m-4 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Checkboxes checkedCourses={checkedCourses} setCheckedCourses={setCheckedCourses} />
        <SliderSemester semesterRange={semesterRange} setSemesterRange={setSemesterRange} />
      </div>
      <div className="mt-4 mx-auto w-1/2">
        <Input 
          type="text" 
          placeholder="Search projects..." 
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)} 
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="flex justify-end my-6">
        <Button onClick={handleSearch} disabled={loading || checkedCourses.length === 0}>
          {loading ? "Searching..." : "Search"}
        </Button>
      </div>
      <Separator className="mt-4" />
      <Card className="m-4 gap-4">
        <CardContent>
          {error && <p className="text-red-500">Error: {error}</p>}
          <div className="grid grid-cols-3 gap-4 mt-4 h-96 mb-6">
            {currentProjects.map((project: CapstoneProject) => (
              <ProjectViewCard key={project.projectid} project={project} />
            ))}
          </div>
          {data.length > 0 && (
            <PaginationDemo
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={(page: number) => setCurrentPage(page)}
            />
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchPanel;