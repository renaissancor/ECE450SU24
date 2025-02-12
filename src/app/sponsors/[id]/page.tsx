"use client";

import { usePathname } from "next/navigation";
import Image from "next/image";
import { getSponsor, Sponsor } from "@/data/sponsors"; // Adjust the import path based on your actual file structure
import ProjectIDCard from "./project_card";

export default function SponsorIDPage() {
  const pathname = usePathname();
  const id = pathname.split("/").pop();
  if (!id) {
    return <div>Sponsor ID is missing</div>;
  }

  const sponsor: Sponsor | undefined = getSponsor(parseInt(id));

  if (!sponsor) {
    return <div>Sponsor not found</div>;
  }

  return (
    <div className="m-4">
      <div className="p-4 flex flex-col items-center">
        <Image
          src={`/sponsors/${sponsor.id}.jpg`}
          alt={sponsor.name}
          width={150}
          height={150}
          className="rounded-full"
        />
        <h1 className="text-2xl font-bold mt-4">{sponsor.name}</h1>
        <p className="mt-2">Country: {sponsor.country}</p>
        <p className="mt-2">Funding: ${sponsor.funding?.toLocaleString()}</p>
        <p className="mt-2">
          Homepage:{" "}
          <a href={sponsor.homepage} className="text-blue-500">
            {sponsor.homepage}
          </a>
        </p>
        <div className="grid grid-cols-2">
          {sponsor.projects.map((project_id, index) => (
            <ProjectIDCard id={project_id} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}
