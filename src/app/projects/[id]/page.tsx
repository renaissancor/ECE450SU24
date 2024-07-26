"use client";

import { usePathname } from "next/navigation";
import { getProject } from "../dummy";
import { CapstoneProject } from "@/types/types"; // Adjust the import path as needed
import * as Avatar from "@radix-ui/react-avatar";

export default function ProjectIDPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();

  if (!id) {
    return <div className="text-red-500">Error: Project ID is missing</div>;
  }

  const project: CapstoneProject | undefined = getProject(id.toString());

  if (!project) {
    return <div>Loading project details...</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.ProjectName}</h1>
      <div className="mb-4">
        <p className="text-xl">
          <span className="font-semibold">Year:</span> {project.Year}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Semester:</span>{" "}
          {project.Semester === 1
            ? "Fall"
            : project.Semester === 2
            ? "Spring"
            : "Summer"}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Instructors</h2>
        <p className="text-xl">
          {project.InstructorID1}, {project.InstructorID2},{" "}
          {project.InstructorID3}, {project.InstructorID4},{" "}
          {project.InstructorID5}
        </p>
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
          <span className="font-semibold">Members:</span> {project.GroupMember1}
          , {project.GroupMember2}, {project.GroupMember3},{" "}
          {project.GroupMember4}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Project Details</h2>
        <p className="text-xl">
          <span className="font-semibold">Proposal:</span> {project.Proposal}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Design Review 1:</span> {project.DR1}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Design Review 2:</span> {project.DR2}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Design Review 3:</span> {project.DR3}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Poster:</span> {project.Poster}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Final Presentation Video:</span>{" "}
          {project.VideoFinalPre}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Expo Video:</span> {project.VideoExpo}
        </p>
      </div>
      <div className="mb-4">
        <h2 className="text-2xl font-semibold">Awards and Expense</h2>
        <p className="text-xl">
          <span className="font-semibold">Award:</span> {project.Award}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Expense:</span> ${project.Expense}
        </p>
      </div>
    </div>
  );
}
