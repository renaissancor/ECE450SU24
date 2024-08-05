"use client";

import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { CalendarDateRangePicker } from "@/app/dashboard/components/date-range-picker";
import { Button } from "@/components/ui/button";

const COLORS = [
  "#8884d8",
  "#8dd1e1",
  "#82ca9d",
  "#a4de6c",
  "#d0ed57",
  "#ffc658",
  "#ff8042",
  "#ffbb28",
  "#ff7300",
  "#d0ed57",
  "#0088FE",
  "#00C49F",
];

interface SponsorData {
  sponsor: string;
  total: number;
}

const semesters = ["SUMMER", "FALL"];
const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]; // 根据需要添加年份

const SponsorsOverview: React.FC = () => {
  const [data, setData] = useState<SponsorData[]>([]);
  const [startYear, setStartYear] = useState(2022);
  const [startSemester, setStartSemester] = useState("FALL");
  const [endYear, setEndYear] = useState(2024);
  const [endSemester, setEndSemester] = useState("SUMMER");

  const fetchData = () => {
    fetch(
      `http://127.0.0.1:5000/projects-by-sponsor?startYear=${startYear}&startSemester=${startSemester}&endYear=${endYear}&endSemester=${endSemester}`
    )
      .then((response) => response.json())
      .then((data) => {
        if (Array.isArray(data.data)) {
          setData(data.data);
        } else {
          console.error("Invalid data format:", data);
          setData([]);
        }
      })
      .catch((error) =>
        console.error("Error fetching project data by sponsor:", error)
      );
  };

  useEffect(() => {
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [startYear, startSemester, endYear, endSemester]);

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4 pl-4">
        <CalendarDateRangePicker
          startYear={startYear}
          startSemester={startSemester}
          endYear={endYear}
          endSemester={endSemester}
          setStartYear={setStartYear}
          setStartSemester={setStartSemester}
          setEndYear={setEndYear}
          setEndSemester={setEndSemester}
        />
        <Button onClick={fetchData}>Search</Button>
      </div>
      <ResponsiveContainer width="100%" height={500}>
        <PieChart>
          <Pie
            data={data}
            dataKey="total"
            nameKey="sponsor"
            cx="50%"
            cy="50%"
            outerRadius={150}
            fill="#8884d8"
            label
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend
            layout="horizontal"
            verticalAlign="bottom"
            align="center"
            wrapperStyle={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
            }}
            payload={data.map((entry, index) => ({
              id: entry.sponsor,
              type: "square",
              value: `${entry.sponsor} (${entry.total})`,
              color: COLORS[index % COLORS.length],
            }))}
          />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default SponsorsOverview;
