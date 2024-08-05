"use client";

import React, { useEffect, useState } from "react";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";
import { Button } from "@/components/ui/button";

interface ProjectData {
  semester: string;
  total: number;
}

const semesters = ["SUMMER", "FALL"];
const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]; // 根据需要添加年份

export function Overview() {
  const [data, setData] = useState<ProjectData[]>([]);
  const [startYear, setStartYear] = useState(2016);
  const [startSemester, setStartSemester] = useState("FALL");
  const [endYear, setEndYear] = useState(2024);
  const [endSemester, setEndSemester] = useState("SUMMER");

  const fetchData = () => {
    fetch(
      `http://127.0.0.1:5000/projects-by-semester?startYear=${startYear}&startSemester=${startSemester}&endYear=${endYear}&endSemester=${endSemester}`
    )
      .then((response) => response.json())
      .then((data: ProjectData[]) => {
        // Sort the data from oldest to newest
        const sortedData = data.sort((a: ProjectData, b: ProjectData) => {
          const [yearA, semesterA] = a.semester.split(" ");
          const [yearB, semesterB] = b.semester.split(" ");

          if (yearA !== yearB) {
            return parseInt(yearA) - parseInt(yearB);
          }
          return semesters.indexOf(semesterB) - semesters.indexOf(semesterA);
        });
        setData(sortedData);
      })
      .catch((error) =>
        console.error("Error fetching project data by semester:", error)
      );
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startYear, startSemester, endYear, endSemester]);

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4 pl-8">
        <select
          value={startYear}
          onChange={(e) => setStartYear(parseInt(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          value={startSemester}
          onChange={(e) => setStartSemester(e.target.value)}
        >
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
        <span>to</span>
        <select
          value={endYear}
          onChange={(e) => setEndYear(parseInt(e.target.value))}
        >
          {years.map((year) => (
            <option key={year} value={year}>
              {year}
            </option>
          ))}
        </select>
        <select
          value={endSemester}
          onChange={(e) => setEndSemester(e.target.value)}
        >
          {semesters.map((semester) => (
            <option key={semester} value={semester}>
              {semester}
            </option>
          ))}
        </select>
        <Button onClick={fetchData}>Search</Button>
      </div>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="semester"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <Tooltip />
          <Bar
            dataKey="total"
            fill="currentColor"
            radius={[4, 4, 0, 0]}
            className="fill-primary"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
