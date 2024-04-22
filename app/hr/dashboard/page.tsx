import { CreditCard } from "lucide-react";
import { Users } from "lucide-react";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableList from "@/components/Table/table";

export default function Dashboard() {
  const headers = [
    { key: "customer", label: "Customer", className: "text-left" },
    { key: "type", label: "Type", className: "hidden sm:table-cell" },
    { key: "status", label: "Status", className: "hidden sm:table-cell" },
    { key: "date", label: "Date", className: "hidden md:table-cell" },
    { key: "amount", label: "Amount", className: "text-right" },
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
      cardDescription: "3 from last year",
      cardValue: 5,
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Enrolled Interns",
      cardDescription: "4 from last year",
      cardValue: 10,
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
  { key: "student",
  label: "Student Name",
  className: "text-left"
  },
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
  { key: "location", label: "Location", className: "text-right" },
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


  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 mb-2">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <WelcomeCard name="Abel" />
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

      {/* <div className="grid gap-4 md:gap-8 lg:grid-cols-2">
        <DashboardTable
          tableName="Orders Table"
          tableDescription="Recent orders from your store."
          data={data}
          headers={headers}
        /> */}
        <DashboardTable
          tableName="Internship Table"
          tableDescription="Posted Internship Applications."
          data={internshipData}
          headers={internshipHeaders}
        />
      </div>
    // </div>
  );
}

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import Cards from "@/components/dashboard/cards";
import DashboardTable from "@/components/dashboard/Tables";

export function Component() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Sales</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-8">
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/01.png" alt="Avatar" />
            <AvatarFallback>OM</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Olivia Martin</p>
            <p className="text-sm text-muted-foreground">
              olivia.martin@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$1,999.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/02.png" alt="Avatar" />
            <AvatarFallback>JL</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Jackson Lee</p>
            <p className="text-sm text-muted-foreground">
              jackson.lee@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/03.png" alt="Avatar" />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Isabella Nguyen</p>
            <p className="text-sm text-muted-foreground">
              isabella.nguyen@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$299.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/04.png" alt="Avatar" />
            <AvatarFallback>WK</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">William Kim</p>
            <p className="text-sm text-muted-foreground">will@email.com</p>
          </div>
          <div className="ml-auto font-medium">+$99.00</div>
        </div>
        <div className="flex items-center gap-4">
          <Avatar className="hidden h-9 w-9 sm:flex">
            <AvatarImage src="/avatars/05.png" alt="Avatar" />
            <AvatarFallback>SD</AvatarFallback>
          </Avatar>
          <div className="grid gap-1">
            <p className="text-sm font-medium leading-none">Sofia Davis</p>
            <p className="text-sm text-muted-foreground">
              sofia.davis@email.com
            </p>
          </div>
          <div className="ml-auto font-medium">+$39.00</div>
        </div>
      </CardContent>
    </Card>
  );
}
