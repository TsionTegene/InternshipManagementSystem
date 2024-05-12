"use client";
import React, { useEffect } from "react";
import {
  Table,
  TableCaption,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrash } from "@fortawesome/free-solid-svg-icons";
import { Button } from "@/components/ui/button";
import {
  useApproveStudents,
  useStudentsFetchByDep,
} from "@/hooks/useStudentsActions";
import { approveStudent, rejectStudent } from "@/api/student/mutations";
import { useRouter } from "next/navigation";
const Page = () => {
  const router = useRouter();
  const { students, isLoading } = useApproveStudents();

  function approve(id: string): void {
    approveStudent(id);
    router.push("/departmenthead/students");
  }

  function reject(id: string): void {
    rejectStudent(id);
    router.push("/departmenthead/students");
  }
  useEffect(() => {}, [students, isLoading]);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">
        Students To Be Approved
      </h2>
      <Table>
        <TableCaption></TableCaption>

        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[80px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Gpa</TableHead>
            <TableHead>Actions</TableHead>{" "}
            {/* Changed from "Approval Status" */}
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {students.map((student, index) => (
            <TableRow key={index}>
              <TableCell>{index++}</TableCell>
              <TableCell>{student.user.firstName}</TableCell>
              <TableCell>{student.user.email}</TableCell>
              <TableCell>{student.gpa}</TableCell>

              <div className="flex gap-4">
                <Button
                  onClick={() => approve(student.id)}
                  className="bg-emerald-500"
                >
                  Approve
                </Button>
                <Button
                  onClick={() => reject(student.id)}
                  className="bg-red-600"
                >
                  Reject
                </Button>
              </div>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
