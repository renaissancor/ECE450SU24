"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { useToast } from "@/components/ui/use-toast";

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

const courses = [
  { id: "ECE4500J", label: "Major Design Experience(MDE)" },
  { id: "ME4500J", label: "Design and Manufacturing III" },
  { id: "MSE4500J", label: "Product Design and Manufacturing" },
  { id: "ME4950J", label: "Laboratory II" },
  { id: "ECE4270J", label: "VLSI Design" },
  { id: "ECE4700J", label: "Computer Architecture" },
  { id: "ECE4410J", label: "App Development for Entrepreneurs" },
] as const;

const FormSchema = z.object({
  semesters: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one semester.",
  }),
  courses: z.array(z.string()).refine((value) => value.some((item) => item), {
    message: "You have to select at least one course.",
  }),
  student_search: z.string().optional(),
  project_search: z.string().optional(),
});

const Checkboxes: React.FC = () => {
  const { toast } = useToast();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      semesters: [...semesters.map((item) => item.id)],
      courses: [...courses.map((item) => item.id)],
      student_search: "",
      project_search: "",
    },
  });

  const allSemesterIds = semesters.map((item) => item.id);
  const allCourseIds = courses.map((item) => item.id);

  const onSubmit = (data: z.infer<typeof FormSchema>) => {
    console.log(data);
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
    // Future backend integration can be done here
  };

  const handleSelectAllSemesters = () => {
    form.setValue("semesters", allSemesterIds);
  };

  const handleDeselectAllSemesters = () => {
    form.setValue("semesters", []);
  };

  const handleSelectAllCourses = () => {
    form.setValue("courses", allCourseIds);
  };

  const handleDeselectAllCourses = () => {
    form.setValue("courses", []);
  };

  const handleSubmit = () => {
    form.handleSubmit(() => onSubmit)();
  };

  return (
    <Form {...form}>
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="m-2">
          <FormField
            control={form.control}
            name="student_search"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel>Student & Project Search</FormLabel>
                <FormControl>
                  <Input placeholder="Search students" {...field} />
                </FormControl>
                <FormDescription>
                  Search by student id, name, or email
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className="mt-2" />
          <FormField
            control={form.control}
            name="project_search"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormControl>
                  <Input placeholder="Search projects" {...field} />
                </FormControl>
                <FormDescription>Search by project information</FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />
          <Separator className="mt-2" />
          <FormField
            control={form.control}
            name="courses"
            render={() => (
              <FormItem className="flex-1">
                <div className="mb-4">
                  <FormLabel className="text-base">Courses</FormLabel>
                  <FormDescription>Capstone Design Courses</FormDescription>
                </div>
                {courses.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="courses"
                    render={({ field }) => (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage />
                <div className="mb-4 flex space-x-2">
                  <Button
                    className="p-2"
                    type="button"
                    onClick={handleSelectAllCourses}
                  >
                    Select All
                  </Button>
                  <Button
                    className="p-2"
                    type="button"
                    onClick={handleDeselectAllCourses}
                  >
                    Deselect All
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <Separator className="mt-2" />
          <FormField
            control={form.control}
            name="semesters"
            render={() => (
              <FormItem className="flex-1">
                <div className="mb-4">
                  <FormLabel className="text-base">Semesters</FormLabel>
                  <FormDescription>2024 Summer ~ 2021 Fall</FormDescription>
                </div>
                {semesters.map((item) => (
                  <FormField
                    key={item.id}
                    control={form.control}
                    name="semesters"
                    render={({ field }) => (
                      <FormItem
                        key={item.id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(item.id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, item.id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== item.id
                                    )
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="font-normal">
                          {item.label}
                        </FormLabel>
                      </FormItem>
                    )}
                  />
                ))}
                <FormMessage />
                <div className="mb-4 flex space-x-2">
                  <Button
                    className="p-2"
                    type="button"
                    onClick={handleSelectAllSemesters}
                  >
                    Select All
                  </Button>
                  <Button
                    className="p-1"
                    type="button"
                    onClick={handleDeselectAllSemesters}
                  >
                    Deselect All
                  </Button>
                </div>
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-4 w-full">
            Search
          </Button>
        </div>
      </form>
    </Form>
  );
};

export default Checkboxes;
