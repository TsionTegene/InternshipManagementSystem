"use client";

import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableHead,
  TableHeader,
  TableRow,
  TableCell
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import {
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useadvisorsStudents } from "@/hooks/useStudentsActions";
import { Input } from "@/components/ui/input";

const Page = () => {
  const { students, isLoading, totalstd } = useadvisorsStudents();
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    console.log("total Students data", totalstd);
  }, [students, isLoading]);

  const filteredStudents = students?.filter(
    (value) =>
      value.user?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      value.user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="grid">
      <div className="relative w-full max-w-md mb-8 justify-end">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input
          className="mb-3 pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white"
          placeholder="Search Students..."
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <p>Total Students: {totalstd}</p>
      <Card className="transition duration-700 bg-blue-100 dark:bg-gray-950 hover:bg-blue-200 hover:shadow-sm dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle>Students</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone No</TableHead>
                <TableHead>Organization</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredStudents.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>{student.user?.firstName} {student.user?.middleName}</TableCell>
                  <TableCell>{student.user?.email}</TableCell>
                  <TableCell>{student.user?.phoneNum}</TableCell>
                  <TableCell>{student.user?.company}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

export default Page;
