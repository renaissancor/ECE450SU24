"use client";

import { Checkboxes } from "./components/project-search-panel";
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { exampleCapstoneProjects } from "./data";

export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-5 gap-2">
      <Checkboxes />
      <div className="col-span-4 grid grid-cols-3">
        {exampleCapstoneProjects.map((project) => (
          <Card
            className="col-span-1 grid shadow-lg rounded-lg p-6 hover:shadow-xl transition-shadow duration-300 ease-in-out"
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
                      project.Award === "golden"
                        ? "bg-yellow-500"
                        : "bg-gray-400"
                    }`}
                  >
                    {project.Award === "golden"
                      ? "Golden Award"
                      : "Silver Award"}
                  </span>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
