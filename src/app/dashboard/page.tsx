import { Metadata } from "next";
import Image from "next/image";
import TotalProjectsCard from './TotalProjectsCard';
import MDEProjectsCard from './MDEProjectsCard';
import Projects2023Card from './Projects2023Card';
import JointInstituteProjectsCard from './JointInstituteProjectsCard';
import SponsorsOverview from './components/sponsor'; // Ensure the correct import path
import CoursesOverview from './components/course'; // Ensure the correct import path
import InstructorsOverview from './components/instructor'; // Ensure the correct import path

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { MainNav } from "@/app/dashboard/components/main-nav";
import { Overview } from "@/app/dashboard/components/overview";
import { RecentSales } from "@/app/dashboard/components/recent-sales";
import { Search } from "@/app/dashboard/components/search";
import TeamSwitcher from "@/app/dashboard/components/team-switcher";
import { UserNav } from "@/app/dashboard/components/user-nav";

export const metadata: Metadata = {
  title: "Dashboard",
  description: "Example dashboard app built using the components.",
};

export default function DashboardPage() {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
          </div>
          <Tabs defaultValue="overview" className="space-y-4">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="sponsor">Sponsors</TabsTrigger>
              <TabsTrigger value="course">Courses</TabsTrigger>
              <TabsTrigger value="instructor">Instructors</TabsTrigger>
            </TabsList>
            <TabsContent value="overview" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <TotalProjectsCard />
                <MDEProjectsCard />
                <Projects2023Card />
                <JointInstituteProjectsCard />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
                <Card className="col-span-4">
                  <CardHeader>
                    <CardTitle>Overview</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <Overview />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="sponsor" className="space-y-4">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Sponsors Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <SponsorsOverview />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="course" className="space-y-4">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Courses Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <CoursesOverview />
                </CardContent>
              </Card>
            </TabsContent>
            <TabsContent value="instructor" className="space-y-4">
              <Card className="col-span-4">
                <CardHeader>
                  <CardTitle>Instructors Overview</CardTitle>
                </CardHeader>
                <CardContent className="pl-2">
                  <InstructorsOverview />
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
}