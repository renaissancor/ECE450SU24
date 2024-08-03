import { cn } from "@/lib/utils";
import { Slider } from "@/components/ui/slider";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { FormField, FormItem, FormControl } from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

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
] as const;

const FormSchema = z.object({
  semester_begin: z.number().min(1).max(10),
});

type SliderSemesterProps = React.ComponentProps<typeof Slider>;
const SliderSemester: React.FC<SliderSemesterProps> = ({
  className,
  ...props
}: SliderSemesterProps) => {
  return (
    <Card>
      <CardHeader>Select Semester Range</CardHeader>
      <CardContent className="m-6">
        <Slider
          defaultValue={[2]}
          min={1}
          max={semesters.length - 1}
          step={1}
          className={cn("w-[100%]", className)}
          {...props}
        />
      </CardContent>
      <CardFooter className="m-6 grid grid-cols-10">
        <div></div>
        {semesters.map((semester) => (
          <Label key={semester.id} className="text-xs">
            {semester.id}
          </Label>
        ))}
      </CardFooter>
    </Card>
  );
};

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

const SearchPanel: React.FC = () => {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      semester_begin: 5,
    },
  });

  return (
    <FormProvider {...form}>
      <Card className="grid grid-cols-2">
        <Checkboxes />
        <SliderSemester />
      </Card>
      <Card className="m-4 gap-4"></Card>
    </FormProvider>
  );
};

export default SearchPanel;
