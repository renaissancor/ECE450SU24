"use client"; // This marks the component as a Client Component

import { useEffect } from "react";
import { useRouter } from "next/navigation"; // Use next/navigation instead of next/router
import { ModeToggle } from "@/components/theme-toggle";

export default function Home() {
  const router = useRouter();
  const textTest = "shbds";

  useEffect(() => {
    // Redirect to another page
    router.push("/dashboard"); // Replace with your target page
  }, [router]);

  return (
    <div className="w-full h-screen">
      <div className="flex">
        <ModeToggle />
      </div>
    </div>
  );
}
