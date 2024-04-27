"use client";

import React, { useEffect, useState } from 'react';
import { FaEdit, FaSave, FaTrash, FaTimes } from 'react-icons/fa';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useCollege } from '@/hooks/useUniversityActions';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import MyModal from '@/modals/loginmodal';
import CollegeForm from '@/components/Form/page';
const Page = () => {
  const { colleges,updateCollegeById, isLoading,Error,newCollegeId ,collegeId} = useCollege(); // Destructure isLoading from useCollege
  const [editMode, setEditMode] = useState(false);
  const [editedCollege, setEditedCollege] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCollege, setSelectedCollege] = useState(null);
  const openModal = (college) => {
    setSelectedCollege(college); // Set the selected college
    setIsModalOpen(true); // Open the modal
    console.log("college id", collegeId);

  };
  
  useEffect(() => {
    // Call newCollegeId when selectedCollege changes
    if (selectedCollege) {
      newCollegeId(selectedCollege?.id);
      console.log("college id", collegeId);
      console.log("modal open with", selectedCollege);
    }
  }, [selectedCollege, newCollegeId,isModalOpen]);
  
  
  

  const closeModal = () => {
    setIsModalOpen(false);
  };



  const handleSave = () => {
    // Handle save logic here
    setEditMode(false);
    setEditedCollege(null);
    console.log(editedCollege);
  };

  const handleCancel = () => {
    setEditMode(false);
    setEditedCollege(null);
  };

  const handleChange = (e, key) => {
    setEditedCollege((prevState) => ({
      ...prevState,
      [key]: e.target.value,
    }));
  };
//@ts-ignore
  const handleDelete = (id) => {
    // Handle delete logic here
  };

  
  const onSubmit = async (formValues: any) => {
    const formData = new FormData();

    for (const field in formValues) {
      formData.append(field, formValues[field]);
    }
      //@ts-ignore
    for (let pair of formData.entries()) {
      //@ts-ignore
      console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
    }
    console.log(formData.get("Collegename"))
    
    updateCollegeById(formData)
    setIsModalOpen(false);
  };

  return (
    <CardContent>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Colleges</h2>
        <div className="flex justify-end mb-4">
        </div>
        {!isLoading && <div>Loading...</div>}
                {Error && <div>Error Occured</div>}
                {isLoading && !Error && (
          <Table>
            <TableCaption></TableCaption>
            <TableHeader>
              <TableRow>
                <TableHead>No.</TableHead>
                <TableHead>Name</TableHead>
                <TableHead>College Dean</TableHead>
                <TableHead>Office Phone No.</TableHead>
                <TableHead>Departments</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            {Array.isArray(colleges) && colleges.length > 0 ? (

            <TableBody>
            
              {colleges?.map((college, index) => (
                <TableRow key={college.id}>
                  <TableCell className="font-medium">{index + 1}</TableCell>
                  <TableCell>
                    {editMode && editedCollege && editedCollege.id === college.id ? (
                      <Input value={editedCollege.Collegename} onChange={(e) => handleChange(e, 'Collegename')} />
                    ) : (
                      college.Collegename
                    )}
                  </TableCell>
                  <TableCell>{college.collegeDean?.firstName}</TableCell>
                  <TableCell>{college.phoneNum}</TableCell>
                  <TableCell>
                    <ul>
                      {college.departments.map((department) => (
                        <li key={department.id}>{department.name}</li>
                      ))}
                    </ul>
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
                        <button className="text-blue-700 hover:text-blue-700" onClick={() => openModal(college)}>
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
            ) : (
              <TableBody>
                <TableRow>
                  <TableCell colSpan={6}>No colleges found</TableCell>
                </TableRow>
              </TableBody>
            )}
          </Table>
        )}
      </div>

      {selectedCollege && (
        <MyModal isOpen={isModalOpen} onClose={closeModal}>
          <CollegeForm onSubmit={onSubmit} data={selectedCollege} />
        </MyModal>
      )}
    </CardContent>
  );
};

export default Page;
