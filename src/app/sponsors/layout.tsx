import { Separator } from "@/components/ui/separator";
import { Title } from "@radix-ui/react-toast";
import { ReactNode } from "react";

type ProjectIDLayoutProps = {
  children: ReactNode;
};

export default function SponsorsLayout({ children }: ProjectIDLayoutProps) {
  return (
    <div>
      <Title className="m-4 text-bf">
        Sponsors of Capstone Design projects of University of Michigan-Shanghai
        Jiao Tong University Joint Institute
      </Title>
      <Separator />
      <main>{children}</main>
    </div>
  );
}
