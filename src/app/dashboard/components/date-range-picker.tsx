"use client";

import * as React from "react";
import { CalendarIcon } from "@radix-ui/react-icons";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const semesters = ["SUMMER", "FALL"];
const years = [2016, 2017, 2018, 2019, 2020, 2021, 2022, 2023, 2024]; // 根据需要添加年份

export function CalendarDateRangePicker({
  startYear,
  startSemester,
  endYear,
  endSemester,
  setStartYear,
  setStartSemester,
  setEndYear,
  setEndSemester,
  className,
}: {
  startYear: number;
  startSemester: string;
  endYear: number;
  endSemester: string;
  setStartYear: (year: number) => void;
  setStartSemester: (semester: string) => void;
  setEndYear: (year: number) => void;
  setEndSemester: (semester: string) => void;
  className?: string;
}) {
  return (
    <div className={cn("grid gap-2", className)}>
      <div className="flex space-x-2 mb-4">
        <select value={startYear} onChange={(e) => setStartYear(parseInt(e.target.value))}>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
        <select value={startSemester} onChange={(e) => setStartSemester(e.target.value)}>
          {semesters.map(semester => <option key={semester} value={semester}>{semester}</option>)}
        </select>
        <span>to</span>
        <select value={endYear} onChange={(e) => setEndYear(parseInt(e.target.value))}>
          {years.map(year => <option key={year} value={year}>{year}</option>)}
        </select>
        <select value={endSemester} onChange={(e) => setEndSemester(e.target.value)}>
          {semesters.map(semester => <option key={semester} value={semester}>{semester}</option>)}
        </select>
      </div>
    </div>
  );
}