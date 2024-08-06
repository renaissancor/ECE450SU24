// "use client";

// import { zodResolver } from "@hookform/resolvers/zod";
// import { useForm } from "react-hook-form";
// import { z } from "zod";

// import { Button } from "@/components/ui/button";
// import { Checkbox } from "@/components/ui/checkbox";
// import {
//   Form,
//   FormControl,
//   FormDescription,
//   FormField,
//   FormItem,
//   FormLabel,
//   FormMessage,
// } from "@/components/ui/form";
// import { Input } from "@/components/ui/input";
// import { Separator } from "@/components/ui/separator";
// import { useToast } from "@/components/ui/use-toast";

// const semesters = [
//   { id: "2024 Summer", label: "2024 Summer" },
//   { id: "2023 Fall", label: "2023 Fall" },
//   { id: "2023 Summer", label: "2023 Summer" },
//   { id: "2022 Fall", label: "2022 Fall" },
//   { id: "2022 Summer", label: "2022 Summer" },
//   { id: "2021 Fall", label: "2021 Fall" },
//   { id: "2021 Summer", label: "2021 Summer" },
//   { id: "2020 Fall", label: "2020 Fall" },
//   { id: "2020 Summer", label: "2020 Summer" },
// ] as const;

// const courses = [
//   { id: "Major Design Experience(MDE)", label: "Major Design Experience(MDE)" },
//   { id: "Design and Manufacturing III", label: "Design and Manufacturing III" },
//   {
//     id: "Product Design and Manufacturing",
//     label: "Product Design and Manufacturing",
//   },
//   { id: "Laboratory II", label: "Laboratory II" },
//   { id: "VLSI Design", label: "VLSI Design" },
//   { id: "Computer Architecture", label: "Computer Architecture" },
//   {
//     id: "App Development for Entrepreneurs",
//     label: "App Development for Entrepreneurs",
//   },
//   { id: "Advanced Embedded System", label: "Advanced Embedded System" },
// ] as const;

// const sponsors = [
//   { id: "Bosch (Shanghai) Smart Life Technology Ltd. (RBLC)", label: "Bosch" },
//   { id: "United Automotive Electronic Systems (UAES)", label: "UAES" },
//   { id: "HASCO Vision Technology Co., Ltd.", label: "HASCO" },
//   { id: "Rockwell", label: "Rockwell" },
//   { id: "AIMS", label: "AIMS" },
//   { id: "NIO", label: "NIO" },
//   { id: "AMD", label: "AMD" },
//   { id: "University of Michiga", label: "University of Michigan" },
//   { id: "Sunway", label: "Sunway" },
//   { id: "Builder[x]", label: "BuilderX" },
//   { id: "Joint Institute", label: "Joint Institute" },
//   { id: "TerraQuanta", label: "TerraQuanta" },
//   { id: "Others", label: "Others" },
// ] as const;

// const FormSchema = z.object({
//   semesters: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one semester.",
//   }),
//   courses: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one course.",
//   }),
//   sponsors: z.array(z.string()).refine((value) => value.some((item) => item), {
//     message: "You have to select at least one sponsor.",
//   }),
//   student_search: z.string().optional(),
//   project_search: z.string().optional(),
// });

// const Checkboxes: React.FC = (
//   {
//     /*onDataUpdate*/
//   }
// ) => {
//   const { toast } = useToast();

//   const form = useForm<z.infer<typeof FormSchema>>({
//     resolver: zodResolver(FormSchema),
//     defaultValues: {
//       semesters: [...semesters.map((item) => item.id)],
//       courses: [...courses.map((item) => item.id)],
//       sponsors: [...sponsors.map((item) => item.id)],
//       student_search: "",
//       project_search: "",
//     },
//   });

//   const allSemesterIds = semesters.map((item) => item.id);
//   const allCourseIds = courses.map((item) => item.id);
//   const allSponsorIds = sponsors.map((item) => item.id);

//   const onSubmit = (data: z.infer<typeof FormSchema>) => {
//     console.log("search ", data);
//     toast({
//       title: "You submitted the following values:",
//       description: (
//         <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
//           <code className="text-white">{JSON.stringify(data, null, 2)}</code>
//         </pre>
//       ),
//     });
//     // Future backend integration can be done here
//   };

//   const handleSelectAllSemesters = () => {
//     form.setValue("semesters", allSemesterIds);
//   };

//   const handleDeselectAllSemesters = () => {
//     form.setValue("semesters", []);
//   };

//   const handleSelectAllCourses = () => {
//     form.setValue("courses", allCourseIds);
//   };

//   const handleDeselectAllCourses = () => {
//     form.setValue("courses", []);
//   };

//   const handleSelectAllSponsors = () => {
//     form.setValue("sponsors", allSponsorIds);
//   };

//   const handleDeselectAllSponsors = () => {
//     form.setValue("sponsors", []);
//   };

//   const handleSubmit = () => {
//     console.log("submit");
//   };

//   const clickon = async () => {
//     console.log("aa");
//     console.log(form);
//     console.log(form.getValues("courses"));
//     console.log(form.getValues("semesters"));
//     console.log(form.getValues("sponsors"));
//     try {
//       const response = await fetch("http://127.0.0.1:5000/list", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify({
//           key: "value",
//           courses: form.getValues("courses"),
//           semesters: form.getValues("semesters"),
//           sponsors: form.getValues("sponsors"),
//           project_search: form.getValues("project_search"),
//         }),
//       });
//       const newData = await response.json();
//       // onDataUpdate(newData.list); // 假设返回的数据中有一个字段叫someField
//     } catch (error) {
//       console.error("请求失败:", error);
//     }
//   };

//   return (
//     <Form {...form}>
//       <form onSubmit={handleSubmit} className="space-y-8">
//         <div className="m-2">
//           <Separator className="mt-2" />
//           <FormField
//             control={form.control}
//             name="project_search"
//             render={({ field }) => (
//               <FormItem className="flex-1">
//                 <FormLabel>Project Search</FormLabel>
//                 <FormControl>
//                   <Input placeholder="Search projects" {...field} />
//                 </FormControl>
//                 <FormDescription>Search by project information</FormDescription>
//                 <FormMessage />
//               </FormItem>
//             )}
//           />
//           <Separator className="mt-2" />
//           <FormField
//             control={form.control}
//             name="courses"
//             render={() => (
//               <FormItem className="flex-1">
//                 <div className="mb-4">
//                   <FormLabel className="text-base">Courses</FormLabel>
//                   <FormDescription>Capstone Design Courses</FormDescription>
//                 </div>
//                 {courses.map((item) => (
//                   <FormField
//                     key={item.id}
//                     control={form.control}
//                     name="courses"
//                     render={({ field }) => (
//                       <FormItem
//                         key={item.id}
//                         className="flex flex-row items-start space-x-3 space-y-0"
//                       >
//                         <FormControl>
//                           <Checkbox
//                             checked={field.value?.includes(item.id)}
//                             onCheckedChange={(checked) => {
//                               return checked
//                                 ? field.onChange([...field.value, item.id])
//                                 : field.onChange(
//                                     field.value?.filter(
//                                       (value) => value !== item.id
//                                     )
//                                   );
//                             }}
//                           />
//                         </FormControl>
//                         <FormLabel className="font-normal">
//                           {item.label}
//                         </FormLabel>
//                       </FormItem>
//                     )}
//                   />
//                 ))}
//                 <FormMessage />
//                 <div className="mb-4 flex space-x-2">
//                   <Button
//                     className="p-2"
//                     type="button"
//                     onClick={handleSelectAllCourses}
//                   >
//                     Select All
//                   </Button>
//                   <Button
//                     className="p-2"
//                     type="button"
//                     onClick={handleDeselectAllCourses}
//                   >
//                     Deselect All
//                   </Button>
//                 </div>
//               </FormItem>
//             )}
//           />
//           <Separator className="mt-2" />
//           <FormField
//             control={form.control}
//             name="semesters"
//             render={() => (
//               <FormItem className="flex-1">
//                 <div className="mb-4">
//                   <FormLabel className="text-base">Semesters</FormLabel>
//                   <FormDescription>2024 Summer ~ 2021 Fall</FormDescription>
//                 </div>
//                 {semesters.map((item) => (
//                   <FormField
//                     key={item.id}
//                     control={form.control}
//                     name="semesters"
//                     render={({ field }) => (
//                       <FormItem
//                         key={item.id}
//                         className="flex flex-row items-start space-x-3 space-y-0"
//                       >
//                         <FormControl>
//                           <Checkbox
//                             checked={field.value?.includes(item.id)}
//                             onCheckedChange={(checked) => {
//                               return checked
//                                 ? field.onChange([...field.value, item.id])
//                                 : field.onChange(
//                                     field.value?.filter(
//                                       (value) => value !== item.id
//                                     )
//                                   );
//                             }}
//                           />
//                         </FormControl>
//                         <FormLabel className="font-normal">
//                           {item.label}
//                         </FormLabel>
//                       </FormItem>
//                     )}
//                   />
//                 ))}
//                 <FormMessage />
//                 <div className="mb-4 flex space-x-2">
//                   <Button
//                     className="p-2"
//                     type="button"
//                     onClick={handleSelectAllSemesters}
//                   >
//                     Select All
//                   </Button>
//                   <Button
//                     className="p-1"
//                     type="button"
//                     onClick={handleDeselectAllSemesters}
//                   >
//                     Deselect All
//                   </Button>
//                 </div>
//               </FormItem>
//             )}
//           />
//           <Separator className="mt-2" />
//           <FormField
//             control={form.control}
//             name="sponsors"
//             render={() => (
//               <FormItem className="flex-1">
//                 <div className="mb-4">
//                   <FormLabel className="text-base">Sponsors</FormLabel>
//                   <FormDescription>Project Sponsors</FormDescription>
//                 </div>
//                 {sponsors.map((item) => (
//                   <FormField
//                     key={item.id}
//                     control={form.control}
//                     name="sponsors"
//                     render={({ field }) => (
//                       <FormItem
//                         key={item.id}
//                         className="flex flex-row items-start space-x-3 space-y-0"
//                       >
//                         <FormControl>
//                           <Checkbox
//                             checked={field.value?.includes(item.id)}
//                             onCheckedChange={(checked) => {
//                               return checked
//                                 ? field.onChange([...field.value, item.id])
//                                 : field.onChange(
//                                     field.value?.filter(
//                                       (value) => value !== item.id
//                                     )
//                                   );
//                             }}
//                           />
//                         </FormControl>
//                         <FormLabel className="font-normal">
//                           {item.label}
//                         </FormLabel>
//                       </FormItem>
//                     )}
//                   />
//                 ))}
//                 <FormMessage />
//                 <div className="mb-4 flex space-x-2">
//                   <Button
//                     className="p-2"
//                     type="button"
//                     onClick={handleSelectAllSponsors}
//                   >
//                     Select All
//                   </Button>
//                   <Button
//                     className="p-2"
//                     type="button"
//                     onClick={handleDeselectAllSponsors}
//                   >
//                     Deselect All
//                   </Button>
//                 </div>
//               </FormItem>
//             )}
//           />
//           <Button type="button" className="mt-4 w-full" onClick={clickon}>
//             Search
//           </Button>
//         </div>
//       </form>
//     </Form>
//   );
// };

// export default Checkboxes;
