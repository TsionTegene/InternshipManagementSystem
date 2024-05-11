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

const page = () => {
  const studentList = [
    {
      id: "1",
      name: "Bereket Tadele",
      email: "becka@gmail.com",
      pno: "0909090909",
      company: "INSA",
    },
    {
      id: "2",
      name: "Tsion Tegene",
      email: "tsi@gmail.com",
      pno: "0909090909",
      company: "INSA",
    },
    {
      id: "3",
      name: "Abel Zeleke",
      email: "abela@gmail.com",
      pno: "0909090909",
      company: "INSA",
    },
    {
      id: "4",
      name: "Rebecca Asrat",
      email: "rbki@gmail.com",
      pno: "0909090909",
      company: "INSA",
    },
  ];
  return (
    <div className="mb-2">
      <Card className="transition duration-700 bg-blue-100 dark:bg-gray-950 hover:bg-blue-200 hover:shadow-sm dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle>Assigned Students</CardTitle>
          <CardDescription>
            Click on the student's name to see their detail.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Phone Number</TableHead>
                <TableHead>Company</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {studentList.map((student, index) => (
                <TableRow key={index}>
                  <TableCell style={{ listStyleType: "decimal" }}>
                    {" "}
                    <Link
                      key={student.id}
                      href={`/mentor/students/${student.id}`}
                    >
                      {student.name}
                    </Link>{" "}
                  </TableCell>
                  <TableCell>{student.email}</TableCell>
                  <TableCell>{student.pno}</TableCell>
                  <TableCell>{student.company}</TableCell>
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
