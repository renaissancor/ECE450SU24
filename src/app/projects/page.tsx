"use client";

import { Checkboxes } from "./components/checkboxes";
import { Separator } from "@/components/ui/separator";
export default function ProjectsPage() {
  return (
    <div className="grid grid-cols-2">
      <Checkboxes />
      <Checkboxes />
    </div>
  );
}
