"use client"

import React, { useState } from 'react';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaEdit, FaSave, FaTrash, FaTimes } from 'react-icons/fa';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import {useStudentRegister} from '@/hooks/useStudentsActions'
const Page = () => {
  const {students,isSLoading,isSError } = useStudentRegister()
  console.log(students)
  return (
    <CardContent>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Students</h2>
        <Table>
          <TableCaption></TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Profile Picture</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>MiddleName</TableHead>
              <TableHead>userName</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Year</TableHead>
              <TableHead>gpa</TableHead>
              {/* <TableHead>Action</TableHead> */}
            </TableRow>
          </TableHeader>
          {Array.isArray(students) && students.length > 0 ? (
            <TableBody>
              {students.map((student, index) => (
                <TableRow key={student.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    <img src={student.user?.profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
                  </TableCell>
                  <TableCell>
                    {student.user.firstName}
                  </TableCell>
                  <TableCell>
                    {student.user.middleName}
                  </TableCell>
                  <TableCell>
                    {student.user.userName}
                  </TableCell>
                  <TableCell>
                    {student?.department?.name || "null"}
                  </TableCell>
                  <TableCell>
                    {student.year}
                  </TableCell>
                  <TableCell>
                    {student.gpa}
                  </TableCell>
                  <TableCell>
                    {/* Render actions */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          ) : (
            <TableBody>
              <TableRow>
                <TableCell colSpan={8}>No students found</TableCell>
              </TableRow>
            </TableBody>
          )}

        </Table>
      </div>
    </CardContent>
  );
};

export default Page;
