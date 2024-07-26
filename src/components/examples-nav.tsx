"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ArrowRightIcon } from "@radix-ui/react-icons";

import { cn } from "@/lib/utils";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

const examples = [
  {
    name: "Joint Institute",
    href: "https://www.ji.sjtu.edu.cn/",
  },
  {
    name: "Cards",
    href: "/cards",
  },
  {
    name: "Dashboard",
    href: "/dashboard",
  },
  {
    name: "Faculty",
    href: "/faculty",
  },
  {
    name: "Projects",
    href: "/projects",
  },
  {
    name: "Settings",
    href: "/settings",
  },
  {
    name: "Sponsors",
    href: "/sponsors",
  },
  {
    name: "Authentication",
    href: "/authentication",
  },
];

interface ExamplesNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExamplesNavProps) {
  const pathname = usePathname();

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] lg:max-w-none">
        <div className={cn("mb-4 flex items-center", className)} {...props}>
          <Link href="https://umich.edu/">
            <Image
              src="/umichLogo.png"
              alt="UMich"
              width={60}
              height={60}
              className="mr-4"
            />
          </Link>
          <Link href="https://www.sjtu.edu.cn/">
            <Image
              src="/sjtuBlueLogo.png"
              alt="SJTU"
              width={50}
              height={50}
              className="mr-4"
            />
          </Link>
          {examples.map((example, index) => (
            <Link
              href={example.href}
              key={example.href}
              className={cn(
                "flex h-7 items-center justify-center rounded-full px-4 text-center text-sm transition-colors hover:text-primary",
                pathname?.startsWith(example.href) ||
                  (index === 0 && pathname === "/")
                  ? "bg-muted font-medium text-primary"
                  : "text-muted-foreground"
              )}
            >
              {example.name}
            </Link>
          ))}
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}

interface ExampleCodeLinkProps {
  pathname: string | null;
}

export function ExampleCodeLink({ pathname }: ExampleCodeLinkProps) {
  const example = examples.find((example) =>
    pathname?.startsWith(example.href)
  );

  if (!example?.href) {
    return null;
  }

  return (
    <Link
      href={example?.href}
      target="_blank"
      rel="nofollow"
      className="absolute right-0 top-0 hidden items-center rounded-[0.5rem] text-sm font-medium md:flex"
    >
      View code
      <ArrowRightIcon className="ml-1 h-4 w-4" />
    </Link>
  );
}
