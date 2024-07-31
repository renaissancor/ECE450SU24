import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { instructors } from "@/data/faculty"; // Adjust the import path based on your actual file structure
import { Instructor } from "@/data/faculty";
import { Button } from "@/components/ui/button";
// Assuming your faculty data is exported as an array of Instructor objects

const FacultyMember = ({ instructor }: { instructor: Instructor }) => {
  return (
    <Card className="faculty-member p-4 flex flex-col h-full">
      <CardHeader className="flex flex-col items-center">
        <Image
          src={`/faculty/${instructor.id}.jpg`}
          alt={instructor.name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-center mt-4">{`${instructor.name}`}</CardTitle>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={`/faculty/${instructor.id}`}>
          <Button className="w-full">View Profile</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function FacultyPage() {
  return (
    <div className="m-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        {instructors.map((instructor) => (
          <FacultyMember key={instructor.id} instructor={instructor} />
        ))}
      </div>
    </div>
  );
}
