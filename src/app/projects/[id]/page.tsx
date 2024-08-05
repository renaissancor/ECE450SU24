"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { CapstoneProject } from "@/types/types"; // Adjust the import path as needed

export default function ProjectIDPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  const [project, setProject] = useState<CapstoneProject | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) {
      setError("Error: Project ID is missing");
      return;
    }

    setLoading(true);
    fetch("http://127.0.0.1:5000/detail", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        projectid: parseInt(id, 10), // Assuming id should be parsed as integer
      }),
    })
      .then((response) => response.json())
      .then((data: CapstoneProject) => {
        setProject(data);
        setLoading(false);
        setError(null);
      })
      .catch((err) => {
        console.error("Error:", err);
        setError("Failed to load project details");
        setLoading(false);
      });
  }, [id]);

  if (error) {
    return <div className="text-red-500">{error}</div>;
  }

  if (loading) {
    return <div>Loading project details...</div>;
  }

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div className="p-8 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-4">{project.ProjectName}</h1>
      <div className="mb-4">
        <p className="text-xl">
          <span className="font-semibold">Year:</span> {project.Year}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Semester:</span> {project.Semester}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Sponsor ID:</span> {project.SponsorID}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Group Leader ID:</span>{" "}
          {project.GroupLeaderID}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Group Members:</span>{" "}
          {project.GroupMember1}, {project.GroupMember2}, {project.GroupMember3}
          , {project.GroupMember4}
        </p>
        <p className="text-xl">
          <span className="font-semibold">Instructors:</span>{" "}
          {project.InstructorID1}, {project.InstructorID2},{" "}
          {project.InstructorID3}, {project.InstructorID4},{" "}
          {project.InstructorID5}
        </p>
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
