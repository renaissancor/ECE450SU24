import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
// import { instructors } from "@/data/faculty"; // Adjust the import path based on your actual file structure
// import { Instructor } from "@/data/faculty";
import { Button } from "@/components/ui/button";
// Assuming your faculty data is exported as an array of Instructor objects
import { Professor, professors } from "./data";

const FacultyMember = ({ professor }: { professor: Professor }) => {
  return (
    <Card className="faculty-member p-4 flex flex-col h-full">
      <CardHeader className="flex flex-col items-center">
        <Image
          src={`/faculty/${professor.name.replace(" ", "_").toLowerCase()}.jpg`}
          alt={professor.name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-center mt-4">Dr. {professor.name}</CardTitle>
        <p className="text-center">{professor.title}</p>
        <p className="text-center">Office : {professor.office}</p>
        <p className="text-center">{professor.telephone}</p>
        {/*  <p className="text-center">{professor.email}</p> */}
      </CardContent>
      <CardFooter>
        <Link
          className="w-full"
          href={`/faculty/${professor.name.replace(" ", "_").toLowerCase()}`}
        >
          <Button className="w-full">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function FacultyPage() {
  return (
    <div className="m-4">
      <div className="grid grid-cols-3 gap-4">
        {professors.map((professor, index) => (
          <FacultyMember key={index} professor={professor} />
        ))}
      </div>
    </div>
  );
}
