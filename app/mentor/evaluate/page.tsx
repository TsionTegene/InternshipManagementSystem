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

export default function page() {
  const { students, isLoading, error, studentsData } =
    useFetchAssignedStudents();
  console.log("Students: ", students);
const interns = students.filter((student: any) => {
  return student.MentorePoint === null || student.MentorePoint === "";
});

console.log("Interns: ", interns);

  return (
    <div className="mb-2">
      <Card className="transition duration-700 bg-blue-100 dark:bg-gray-950 hover:bg-blue-200 hover:shadow-sm dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle>Students To Be Evaluated</CardTitle>
          <CardDescription>List of students to be evaluated</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Internship Position</TableHead>
                <TableHead>University</TableHead>
                <TableHead>Department</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {interns?.map((student: any, index: any) => (
                <TableRow key={index}>
                  <TableCell style={{ listStyleType: "decimal" }}>
                    {student.user.firstName + " " + student.user.middleName}
                  </TableCell>
                  <TableCell>{student.internship.title}</TableCell>
                  <TableCell>{student.University.name}</TableCell>
                  <TableCell>{student.department.name}</TableCell>
                  <TableCell>
                    <Button variant="outline" asChild>
                    <Link
                      key={student.id}
                      href={{
                        pathname: `/mentor/evaluate/${student.id}`,
                        query: { studentId: student.id },
                      }}
                    >
                      Evaluate
                    </Link>
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}
