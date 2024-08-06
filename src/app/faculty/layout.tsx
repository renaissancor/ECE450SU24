import { Separator } from "@/components/ui/separator";
import { Title } from "@radix-ui/react-toast";

export default function FacultyLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Title className="m-4 text-bf">
        Faculty Members of University of Michigan-Shanghai Jiao Tong University
        Joint Institute
      </Title>
      <Separator />
      <main>{children}</main>
    </div>
  );
}
