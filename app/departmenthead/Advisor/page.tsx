import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import DashboardTable from "@/components/dashboard/Tables";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const page = () => {
  const advisorHeaders = [
    { key: "advisor", label: "Name", className: "text-left" },
    {
      key: "studentsAssigned",
      label: "Students assigned",
      className: "hidden sm:table-cell",
    },
    {
      key: "phoneNumber",
      label: "Phone Number",
      className: "hidden md:table-cell",
    },
    {
      key: "email",
      label: "Email",
      className: "hidden md:table-cell",
    },
  ];

  const advisorData = [
    {
      advisor: "Emily Carter",
      studentsAssigned: "20",
      phoneNumber: "0909090909",
      email: "xxx@gmail.com",
      // className: "", // optional, for additional styling
      // badgeVariant: "outline", // variant for the badge, assuming you use a badge to visualize status
    },
    {
      advisor: "Robertson Carter",
      studentsAssigned: "20",
      phoneNumber: "0909090909",
      email: "aaa@gmail.com",
      // className: "bg-accent", // optional, for additional styling
      // badgeVariant: "secondary",
    },
    {
      advisor: "Millie Carter",
      studentsAssigned: "20",
      phoneNumber: "0909090909",
      email: "yyy@gmail.com",
      // className: "",
      // badgeVariant: "outline",
    },
    {
      advisor: "Carter Emmanuel",
      studentsAssigned: "20",
      phoneNumber: "0909090909",
      email: "zzz@gmail.com",
      // className: "bg-accent",
      // badgeVariant: "outline",
    },
  ];
  return (
    <div>
      <Link
        className="flex btn m-2 justify-end text-sm text-blue-400 hover:underline"
        href={"/departmenthead/createUser"}
      >
        Create Advisor
      </Link>
      <DashboardTable
        tableName="Advisors"
        tableDescription="List of advisors to be approved"
        data={advisorData}
        headers={advisorHeaders}
      />
    </div>
  );
};

export default page;
