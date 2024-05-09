"use client";

import React, { useEffect } from "react";
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
import { useStudentsFetchByDep } from "@/hooks/useStudentsActions";

const page = () => {
const {students} = useStudentsFetchByDep()

useEffect(()=>{
  console.log("Students data",students)
}, [students])
  const studentList = [
    {
      id: "1",
      name: "Bereket Tadele",
      advisor: "To be assigned",
      department: "Software Engineering",
      organization: "App Div",
    },
    {
      id: "2",
      name: "Tsion Tegene",
      advisor: "To be assigned",
      department: "Software Engineering",
      organization: "App Div",
    },
    {
      id: "3",
      name: "Abel Zeleke",
      advisor: "To be assigned",
      department: "Software Engineering",
      organization: "App Div",
    },
    {
      id: "4",
      name: "Rebecca Asrat",
      advisor: "To be assigned",
      department: "Software Engineering",
      organization: "App Div",
    },
  ];
  return (
    <div className="mb-2">
      <Card className="transition duration-700 bg-blue-100 dark:bg-gray-950 hover:bg-blue-200 hover:shadow-sm dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle>Students</CardTitle>
          <CardDescription>Click on the student's name to assign advisor to the student.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Advisor</TableHead>
                <TableHead>Organization</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={index}>
                  <TableCell style={{ listStyleType: "decimal" }}>
                    {" "}
                    <Link
                      key={student.id}
                      href={`/departmenthead/students/${student.id}`}
                    >
                      {student.user.firstName}
                    </Link>{" "}
                  </TableCell>
                  <TableCell>{student.advisor}</TableCell>
                  <TableCell>
                    {student.organization}
                  </TableCell>
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
