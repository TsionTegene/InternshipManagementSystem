"use client"

import React, { useState } from 'react';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaEdit, FaSave, FaTrash, FaTimes } from 'react-icons/fa';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const Page = () => {
  const [editMode, setEditMode] = useState(false);
  const [editedCollege, setEditedCollege] = useState(null);
  const [colleges, setColleges] = useState([
    {
      id: 1,
      name: "College Of Computing And Informatics",
      dean: "Mr. Melaku",
      phoneNo: "+251911654378"
    },
    {
      id: 2,
      name: "College Of Engineering and Technology",
      dean: "Mr. Melaku",
      phoneNo: "+251911654378"
    },
    {
      id: 3,
      name: "College Of Engineering and Technology",
      dean: "Mr. Melaku",
      phoneNo: "+251911654378"
    },
    {
      id: 4,
      name: "College Of Computing And Informatics",
      dean: "Mr. Melaku",
      phoneNo: "+251911654378"
    },
  ]);
    //@ts-ignore 
  const handleEdit = (college) => {
    setEditedCollege(college);
    setEditMode(true);
  };

  const handleSave = () => {
    const index = colleges.findIndex(c => c.id === editedCollege?.id);
    if (index !== -1) {
      const updatedColleges = [...colleges];
      //@ts-ignore
      updatedColleges[index] = editedCollege;
      setColleges(updatedColleges);
    }
    // Exit edit mode
    setEditMode(false);
    setEditedCollege(null);
  };
  
  // Exit edit mode
  const handleCancel = () => {
    setEditMode(false);
    setEditedCollege(null);
  };

    //@ts-ignore
  const handleChange = (e, key) => {
    setEditedCollege(prevState => ({
      //@ts-ignore
      ...prevState,
      [key]: e.target.value
    }));
  };


  const handleDelete = (id) => {
    // Filter out the college with the specified id
    const updatedColleges = colleges.filter(college => college.id !== id);
    setColleges(updatedColleges);
  };
  return (
    <CardContent>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Colleges</h2>
        <div className="flex justify-end mb-4">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add College
          </button>
        </div>
        <Table>
          <TableCaption></TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>College Dean</TableHead>
              <TableHead>Office Phone No.</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {colleges.map((college, index) => (
              <TableRow key={college.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  {editMode && editedCollege && editedCollege.id === college.id ? (
                    <Input value={editedCollege.name} onChange={(e) => handleChange(e, 'name')} />
                  ) : (
                    college.name
                  )}
                </TableCell>
                <TableCell>
                  {editMode && editedCollege && editedCollege.id === college.id ? (
                    <Input value={editedCollege.dean} onChange={(e) => handleChange(e, 'dean')} />
                  ) : (
                    college.dean
                  )}
                </TableCell>
                <TableCell>
                  {editMode && editedCollege && editedCollege.id === college.id ? (
                    <Input value={editedCollege.phoneNo} onChange={(e) => handleChange(e, 'phoneNo')} />
                  ) : (
                    college.phoneNo
                  )}
                </TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                    {editMode && editedCollege && editedCollege.id === college.id ? (
                      <>
                        <button className="text-blue-700 hover:text-blue-700" onClick={() => handleSave()}>
                          <FaSave />
                        </button>
                        <button className="text-red-700 hover:text-red-700" onClick={() => handleCancel()}>
                          <FaTimes />
                        </button>
                      </>
                    ) : (
                      <button className="text-blue-700 hover:text-blue-700" onClick={() => handleEdit(college)}>
                        <FaEdit />
                      </button>
                    )}
                    <button className="text-red-700 hover:text-red-700" onClick={() => handleDelete(college.id)}>
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
