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
    { id: "1", name: "Bereket Tadele", advisor: "Kuma" },
    { id: "2", name: "Tsion Tegene", advisor: "Alazar" },
    { id: "3", name: "Abel Zeleke", advisor: "Israel" },
    { id: "4", name: "Rebecca Asrat", advisor: "Joseph" },
  ];
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
                <TableHead>Evaluate</TableHead>
                <TableHead>Report</TableHead>
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
                  <TableCell>{student.advisor}</TableCell>
                  <TableCell>
                    <Button variant={"ghost"} className="border-2">
                      Evaluate
                    </Button>
                  </TableCell>
                  <TableCell>
                    <Button variant={"ghost"} className="border-2">
                      Report
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
};

export default page;
