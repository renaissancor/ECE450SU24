"use client";
import React, { useState } from "react";
import axios from "axios";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

const courses = [
  { id: "ECE4500J", label: "Major Design Experience(MDE)" },
  { id: "ME4500J", label: "Design and Manufacturing III" },
  { id: "MSE4500J", label: "Product Design and Manufacturing" },
  { id: "ME4950J", label: "Laboratory II" },
  { id: "ECE4270J", label: "VLSI Design" },
  { id: "ECE4700J", label: "Computer Architecture" },
  { id: "ECE4410J", label: "App Development for Entrepreneurs" },
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

const Checkboxes: React.FC = () => {
  return (
    <Card>
      <CardHeader>Select Capstone Design Courses</CardHeader>
      <CardContent className="grid grid-rows-8 gap-2 p-4">
        {courses.map((course) => (
          <div key={course.id} className="flex items-center">
            <Checkbox key={course.id} id={course.id} />
            <Label key={course.id} className="ml-2">
              {course.id} {course.label}
            </Label>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

type SliderSemesterProps = React.ComponentProps<typeof Slider>;

const SliderSemester: React.FC<SliderSemesterProps> = ({
  className,
  ...props
}: SliderSemesterProps) => {
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
            defaultValue={[1, 2]}
            min={1}
            max={semesters.length}
            step={1}
            className={cn("absolute w-full", className)}
            {...props}
          />
        </div>
      </CardContent>
      <CardFooter className="gap-4">
        <Input />
        <Button type="submit" className="w-full">
          Search
        </Button>
      </CardFooter>
    </Card>
  );
};

const SearchPanel: React.FC = () => {
  const [query, setQuery] = useState<string>("");
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await axios.post("http://your-backend-url.com/query", {
        query: `SELECT * FROM courses WHERE id = '${query}'`,
      });
      setData(response.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="m-4 gap-4">
      <div className="grid grid-cols-2 gap-4">
        <Card>
          <CardHeader>Select Capstone Design Courses</CardHeader>
          <CardContent className="grid grid-rows-8 gap-2 p-4">
            {courses.map((course) => (
              <div key={course.id} className="flex items-center">
                <Checkbox key={course.id} id={course.id} />
                <Label key={course.id} className="ml-2">
                  {course.id} {course.label}
                </Label>
              </div>
            ))}
          </CardContent>
        </Card>
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
                defaultValue={[1, 2]}
                min={1}
                max={semesters.length}
                step={1}
                className={cn("absolute w-full")}
              />
            </div>
          </CardContent>
          <CardFooter className="gap-4">
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Enter Project Info"
            />
            <Button onClick={handleSearch} disabled={loading}>
              {loading ? "Searching..." : "Search"}
            </Button>
          </CardFooter>
        </Card>
      </div>
      <Separator className="mt-4" />
      <Card className="m-4 gap-4">
        <CardContent>
          {error && <p className="text-red-500">Error: {error}</p>}
          {data && (
            <pre className="whitespace-pre-wrap">
              {JSON.stringify(data, null, 2)}
            </pre>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default SearchPanel;
