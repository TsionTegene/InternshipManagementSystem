"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import Cards from "@/components/dashboard/cards";
import DashboardTable from "@/components/dashboard/Tables";
import { CreditCard, RotateCcw } from "lucide-react";
import { Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { useFetchInternshipByCompanyId } from "@/hooks/useInternshipActions";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useFetchApplicationsByCompanyId, useFindMentorsByCompanyId } from "@/hooks/useCompanyActions";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const { mentors } = useFindMentorsByCompanyId();
  const {internships, isILoading } = useFetchInternshipByCompanyId();
  console.log(internships);
  const { applications, isLoading } =
    useFetchApplicationsByCompanyId();

const acceptedInterns = applications?.filter((application: any) => application.status === "ACCEPTED");
  const cards = [
    {
      cardName: "Total Interns",
      cardDescription: "Overall interns who applied to your company",
      cardValue: applications?.length,
      icon: <Users color="blue" className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total Internships",
      cardDescription: "Total internships posted by the company.",
      cardValue: internships?.length,
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total Mentors",
      cardDescription: "Number of Emloyees assigned as mentors",
      cardValue: mentors?.length,
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Accepted Interns",
      cardDescription: "Number of accpted interns",
      cardValue: acceptedInterns?.length,
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  console.log("Internships: ", internships?.length);
  let user = null; // Default to null if no user data is available
  const userString = localStorage.getItem("user");

  if (userString) {
    try {
      user = JSON.parse(userString);
    } catch (error) {
      console.error("Error parsing user data:", error);
      // Handle the error, perhaps reset/clear the localStorage item if it's corrupt
    }
  }

  console.log("This is from useEffect: ", user);
  const name = `${user?.firstName} ${user?.middleName}`;
  console.log(name);
  console.log(user);
  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 mb-2">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          {user && (
            <WelcomeCard name={name}>
              <CardButton />
            </WelcomeCard>
          )}
        </div>
        <div className="grid gap-2 grid-cols-2">
          {cards.map((card, index) => (
            <Cards
              key={index}
              cardName={card.cardName}
              cardDescription={card.cardDescription}
              cardValue={card.cardValue}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
      <InternsTable applications = {applications} isLoading = {isLoading}/>
      <div className="grid gap-4 md:gap-8">
        <div className="border rounded-lg w-full">
          <div className="relative w-full overflow-auto">
            <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
              <CardHeader>
                <CardTitle>Opportunities Posted</CardTitle>
                <CardDescription>
                  Internship opportunities posted by your company.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Title</TableHead>
                      <TableHead>Start Date</TableHead>
                      <TableHead>End Date</TableHead>
                      <TableHead>Compensation</TableHead>
                      <TableHead>Schedule</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {internships?.map((internship: any, index: any) => (
                      <TableRow key={index}>
                        <TableCell>{internship.title}</TableCell>
                        <TableCell>
                          {new Date(internship.startDate).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </TableCell>
                        <TableCell>
                          {new Date(internship.endDate).toLocaleDateString(
                            "en-US",
                            {
                              weekday: "long",
                              year: "numeric",
                              month: "long",
                              day: "numeric",
                            }
                          )}
                        </TableCell>
                        <TableCell>
                          {internship.compensations
                            .replace(/_/g, " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (s: string) => s.toUpperCase())}
                        </TableCell>
                        <TableCell>
                          {internship.schedule
                            .replace(/_/g, " ")
                            .toLowerCase()
                            .replace(/\b\w/g, (s: string) => s.toUpperCase())}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}

function CardButton() {
  const router = useRouter();
  return (
    <Button
      className="dark:text-slate-900 max-w-48 font-semibold "
      onClick={() => {
        router.push("/hr/newapplication");
      }}
    >
      Create New Internship
    </Button>
  );
}

function InternsTable({applications, isLoading}: {applications: any, isLoading: boolean}) {
  console.log(applications)
  return (
    <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
      <CardHeader>
        <CardTitle>Interns</CardTitle>
        <CardDescription>Interns who applied to your company.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>GPA</TableHead>
              <TableHead>University</TableHead>
              <TableHead>Department</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              applications?.map((application: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>
                    {application?.student.user.firstName}{" "}
                    {application?.student.user.middleName}
                  </TableCell>
                  <TableCell>{application?.student.user.email}</TableCell>
                  <TableCell>{application?.internship.title}</TableCell>
                  <TableCell>
                    {application?.status === "PENDING" ? (
                      <Pending />
                    ) : application?.status === "ACCEPTED" ? (
                      <Accepted />
                    ) : application?.status === "REJECTED" ? (
                      <Rejected />
                    ) : (
                      <Canceled />
                    )}
                  </TableCell>
                  <TableCell>{application?.student.gpa}</TableCell>
                  <TableCell>{application?.student.University.name}</TableCell>
                  <TableCell>{application?.student.department.name}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function Pending() {
  return (
    <Badge
      className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
      variant="outline"
    >
      Pending
    </Badge>
  );
}

function Accepted() {
  return (
    <Badge
      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
      variant="outline"
    >
      Accepted
    </Badge>
  );
}

function Rejected() {
  return (
    <Badge
      className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
      variant="outline"
    >
      Rejected
    </Badge>
  );
}

function Canceled() {
  return (
    <Badge
      className="bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400"
      variant="outline"
    >
      Pending
    </Badge>
  );
}