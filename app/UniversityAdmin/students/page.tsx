"use client"

import React, { useState } from 'react';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaEdit, FaSave, FaTrash, FaTimes } from 'react-icons/fa';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Page = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedStudent, setEditedStudent] = useState(null);
  const [students, setStudents] = useState([
    {
      id: 1,
      name: "John Doe",
      college: "College Of Computing And Informatics",
      department: "Computer Science",
      status: "Approved"
    },
    {
      id: 2,
      name: "Jane Smith",
      college: "College Of Engineering and Technology",
      department: "Mechanical Engineering",
      status: "Rejected"
    },
    {
      id: 3,
      name: "Alice Johnson",
      college: "College Of Engineering and Technology",
      department: "Electrical Engineering",
      status: "Approved"
    },
    {
      id: 4,
      name: "Bob Brown",
      college: "College Of Computing And Informatics",
      department: "Information Technology",
      status: "Approved "
    },
  ]);
//@ts-ignore 
  const handleEdit = (student) => {
    setEditedStudent(student);
    setEditMode(true);
  };

  const handleSave = () => {
    //@ts-ignore 
    const index = students.findIndex(s => s.id === editedStudent?.id);
    if (index !== -1) {
      const updatedStudents = [...students];
      //@ts-ignore 
      updatedStudents[index] = editedStudent;
      setStudents(updatedStudents);
    }
    // Exit edit mode
    setEditMode(false);
    setEditedStudent(null);
  };

  const handleCancel = () => {
    // Exit edit mode
    setEditMode(false);
    setEditedStudent(null);
  };
//@ts-ignore 
  const handleDelete = (id) => {
    const updatedStudents = students.filter(student => student.id !== id);
    setStudents(updatedStudents);
  };
//@ts-ignore 
  const handleChange = (e, key) => {
    setEditedStudent(prevState => ({
        //@ts-ignore 
      ...prevState,
      [key]: e.target.value
    }));
  };

  return (
    <CardContent>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Students</h2>
        <div className="flex justify-end mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add Student
          </button>
        </div>
        <Table>
          <TableCaption></TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>College</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {students.map((student, index) => (
              <TableRow key={student.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                    
                  {
                    //@ts-ignore 
                  editMode && editedStudent && editedStudent.id === student.id ? (
                    //@ts-ignore 
                    <Input value={editedStudent.name} onChange={(e) => handleChange(e, 'name')} />
                  ) : (
                    student.name
                  )}
                </TableCell>
                <TableCell>
                  {//@ts-ignore 
                  editMode && editedStudent && editedStudent.id === student.id ? (
                    //@ts-ignore 
                    <Input value={editedStudent.college} onChange={(e) => handleChange(e, 'college')} />
                  ) : (
                    student.college
                  )}
                </TableCell>
                <TableCell>
                  {
                  //@ts-ignore 
                  editMode && editedStudent && editedStudent.id === student.id ? (

                    //@ts-ignore 
                    <Input value={editedStudent.department} onChange={(e) => handleChange(e, 'department')} />
                  ) : (
                    student.department
                  )}
                </TableCell>
                <TableCell>
                  {//@ts-ignore 
                  editMode && editedStudent && editedStudent.id === student.id ? (
                    //@ts-ignore 
                    <Input value={editedStudent.status} onChange={(e) => handleChange(e, 'status')} />
                  ) : (
                    student.status
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    {//@ts-ignore 
                    editMode && editedStudent && editedStudent.id === student.id ? (
                      <>
                        <button className="text-blue-700 hover:text-blue-700" onClick={() => handleSave()}>
                          <FaSave />
                        </button>
                        <button className="text-red-700 hover:text-red-700" onClick={() => handleCancel()}>
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button className="text-blue-700 hover:text-blue-700" onClick={() => handleEdit(student)}>
                        <FaEdit />
                      </button>
                    )}
                    <button className="text-red-700 hover:text-red-700" onClick={() => handleDelete(student.id)}>
                      <FaTrash />
                    </button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  );
};

export default Page;
