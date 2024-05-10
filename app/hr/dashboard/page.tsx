"use client";

import { useRouter } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import Cards from "@/components/dashboard/cards";
import DashboardTable from "@/components/dashboard/Tables";
import { CreditCard } from "lucide-react";
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
import { useFindMentorsByCompanyId } from "@/hooks/useCompanyActions";

export default function Dashboard() {
  const { mentors } = useFindMentorsByCompanyId();
  const internship = useFetchInternshipByCompanyId();
  const internships = internship.data;
  console.log(internships);
  const headers = [
    { key: "title", label: "Title", className: "text-left" },
    {
      key: "intenship_positions",
      label: "Intenship Positions",
      className: "hidden sm:table-cell",
    },
    {
      key: "startDate",
      label: "Start Date",
      className: "hidden sm:table-cell",
    },
    { key: "endDate", label: "End Date", className: "hidden md:table-cell" },
    { key: "compensations", label: "Compensations", className: "text-right" },
    { key: "schedule", label: "Schedule", className: "text-right" },
  ];

  const data = [
    {
      name: "John Doe",
      email: "john@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-10-01",
      amount: "$300.00",
      className: "bg-accent", // optional, for styling the row
      emailClass: "hidden text-sm text-muted-foreground md:inline", // class for the email
      badgeVariant: "secondary", // variant for the badge
    },
    {
      name: "Jane Smith",
      email: "jane@example.com",
      type: "Refund",
      status: "Pending",
      date: "2023-10-02",
      amount: "$200.00",
      className: "",
      emailClass: "hidden text-sm text-muted-foreground md:inline",
      badgeVariant: "outline",
    },
    {
      name: "Alice Johnson",
      email: "alice@example.com",
      type: "Subscription",
      status: "Renewed",
      date: "2023-10-03",
      amount: "$500.00",
      className: "bg-accent",
      emailClass: "hidden text-sm text-muted-foreground md:inline",
      badgeVariant: "secondary",
    },
    {
      name: "Bob Brown",
      email: "bob@example.com",
      type: "Sale",
      status: "Fulfilled",
      date: "2023-10-04",
      amount: "$450.00",
      className: "",
      emailClass: "hidden text-sm text-muted-foreground md:inline",
      badgeVariant: "secondary",
    },
  ];

  const cards = [
    {
      cardName: "Total Interns",
      cardDescription: "8 from last year",
      cardValue: 15,
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
      cardName: "Former Interns",
      cardDescription: "5 from last year",
      cardValue: 17,
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const internshipHeaders = [
    { key: "student", label: "Student Name", className: "text-left" },
    {
      key: "internship",
      label: "Internship Position",
      className: "hidden sm:table-cell",
    },
    {
      key: "status",
      label: "Application Status",
      className: "hidden sm:table-cell",
    },
    {
      key: "applicationDate",
      label: "Application Date",
      className: "hidden md:table-cell",
    },
  ];

  const internshipData = [
    {
      student: "Emily Carter",
      internship: "Software Engineering Intern",
      status: "Pending Review",
      applicationDate: "2023-09-15",
      location: "San Francisco, CA",
      // className: "", // optional, for additional styling
      // badgeVariant: "outline", // variant for the badge, assuming you use a badge to visualize status
    },
    {
      student: "Michael Lawson",
      internship: "Marketing Analyst Intern",
      status: "Accepted",
      applicationDate: "2023-09-20",
      location: "New York, NY",
      // className: "bg-accent", // optional, for additional styling
      // badgeVariant: "secondary",
    },
    {
      student: "Laura Jenkins",
      internship: "Human Resources Intern",
      status: "Declined",
      applicationDate: "2023-09-18",
      location: "Chicago, IL",
      // className: "",
      // badgeVariant: "outline",
    },
    {
      student: "David Clarke",
      internship: "Data Science Intern",
      status: "Pending Review",
      applicationDate: "2023-09-22",
      location: "Boston, MA",
      // className: "bg-accent",
      // badgeVariant: "outline",
    },
  ];
  const [posted_internships, setInternships] = useState([]);
  // useEffect(() => {
  //   // setInternships(internships);
  //   console.log("Internships: ", internships);
  // }, [internships])
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
      <DashboardTable
        tableName="Internship Table"
        tableDescription="Posted Internship Applications."
        data={internshipData}
        headers={internshipHeaders}
      />

      <div className="grid gap-4 md:gap-8">
        <div className="border rounded-lg w-full">
          <div className="relative w-full overflow-auto">
            <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
              <CardHeader>
                <CardTitle>Opportunities Posted</CardTitle>
                <CardDescription>Internship opportunities posted by your company.</CardDescription>
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
