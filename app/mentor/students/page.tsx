/* eslint-disable react-hooks/rules-of-hooks */
"use client";

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
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Card } from "@/components/ui/card";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useFetchAssignedStudents } from "@/hooks/useMentorActions";

const page = () => {
  const { students, isLoading, error, studentsData } =
    useFetchAssignedStudents();
  console.log("Students: ", students);
  return (
    <div className="mb-2">
      <Card className="transition duration-700 bg-blue-100 dark:bg-gray-950 hover:bg-blue-200 hover:shadow-sm dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle>Assigned Students</CardTitle>
          <CardDescription>List of students assigned</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Advisor</TableHead>
                <TableHead>Internship Position</TableHead>
                <TableHead>University</TableHead>
                <TableHead>Department</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students?.map((student: any, index: any) => (
                <TableRow key={index}>
                  <TableCell style={{ listStyleType: "decimal" }}>
                    {" "}
                    <Link
                      key={student.id}
                      href={{
                        pathname: `/mentor/students/${student.id}`,
                        query: { studentId: student.id },
                      }}
                    >
                      {student.user.firstName + " " + student.user.middleName}
                    </Link>{" "}
                  </TableCell>
                  <TableCell>
                    {student.advisor.user.firstName +
                      " " +
                      student.advisor.user.middleName}
                  </TableCell>
                  <TableCell>{student.internship.title}</TableCell>
                  <TableCell>{student.University.name}</TableCell>
                  <TableCell>{student.department.name}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
};

export default page;
