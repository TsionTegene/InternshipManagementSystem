"use client"
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
import {useAdvisorData} from '@/hooks/useUniversityActions'
import { CardContent } from "@/components/ui/card";
import { FaTrash } from "react-icons/fa";
const page = () => {

  const {user} = useAdvisorData();
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
    <CardContent>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Staff Members</h2>
        <Table>
          <TableCaption></TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Profile Picture</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          {Array.isArray(user) && user.length > 0 ? (

            <TableBody>
              {user?.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img src={student.user?.profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
                  </TableCell>
                  <TableCell  >
                    {student.user?.firstName}
                  </TableCell>
                  <TableCell>
                    {student.user?.email}
                  </TableCell>
                  <TableCell>
                    {student.user?.phoneNum}
                  </TableCell>
                  <TableCell>{student.user?.roleName}</TableCell>
                  <TableCell>
                  
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={6}>No staffs found</TableCell>
              </TableRow>
            </TableBody>
          )}
        </Table>
      </div>
    </CardContent>
  )
};

export default page;
