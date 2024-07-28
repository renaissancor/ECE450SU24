import { sponsors, Sponsor } from "@/data/sponsors";
import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const SponsorCard = ({ sponsor }: { sponsor: Sponsor }) => {
  return (
    <Card className="sponsor-card p-4 flex flex-col h-full">
      <CardHeader className="flex flex-col items-center">
        {/* Assuming you have images for sponsors named by their id in the public/sponsors directory */}
        <Image
          src={`/sponsors/${sponsor.id}.jpg`}
          alt={sponsor.name}
          width={150}
          height={150}
          className="rounded-full"
        />
      </CardHeader>
      <CardContent className="flex-grow">
        <CardTitle className="text-center mt-4">{`${sponsor.name}`}</CardTitle>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={`/sponsors/${sponsor.id}`}>
          <Button className="w-full">View Details</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default function SponsorsPage() {
  return (
    <div className="m-4">
      <div className="grid grid-cols-2 gap-4">
        {sponsors.map((sponsor) => (
          <SponsorCard key={sponsor.id} sponsor={sponsor} />
        ))}
      </div>
    </div>
  );
}
