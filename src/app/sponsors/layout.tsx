import { sponsors } from "@/data/sponsors";
import { ReactNode } from "react";

type ProjectIDLayoutProps = {
  children: ReactNode;
};

export default function FacultyIDLayout({ children }: ProjectIDLayoutProps) {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
}
