import { sponsors, Sponsor } from "./data";
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
      <CardHeader className="flex-grow">
        <CardTitle className="text-center mt-4">
          {sponsor.englishName}
        </CardTitle>
        <CardTitle className="text-center mt-2 text-sm text-gray-500">
          {sponsor.chineseName}
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col items-center justify-center flex-grow">
        <Card className="bg-white p-4 flex items-center justify-center">
          <Image
            src={`/sponsors/${sponsor.id}.jpg`}
            alt={sponsor.englishName}
            width={200}
            height={200}
          />
        </Card>
      </CardContent>
      <CardFooter>
        <Link className="w-full" href={sponsor.website || "#"}>
          <Button className="w-full">Visit Website</Button>
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
