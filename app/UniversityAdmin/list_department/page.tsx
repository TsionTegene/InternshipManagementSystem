"use client"

import React, { useEffect, useState } from 'react';
import { FaEdit, FaSave, FaTrash, FaTimes } from 'react-icons/fa';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { useDepartment } from '@/hooks/useUniversityActions';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';
import DepartmentForm from '@/components/dep_form/page';
import MyModal from '@/modals/loginmodal';
import { updateDepartment } from '@/api/university/mutation';

const Page = () => {
  const { departments,newDepartmentId,updateDepartmentById ,departmentId} = useDepartment();
  const [editMode, setEditMode] = useState(false);
  const [editedDepartment, setEditedDepartment] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedDepartment, setSelectedDepartment] = useState(null);

  const openModal = (department) => {
    setSelectedDepartment(department); // Set the selected college
    setIsModalOpen(true); // Open the modal
    console.log("college id", departmentId);

  };

  
  const closeModal = () => {
    setIsModalOpen(false);
  };
  const onSubmit = async (formValues: any) => {
    const formData = new FormData();
    for (const field in formValues) {
      formData.append(field, formValues[field]);
    }
    updateDepartmentById(formData)
    setIsModalOpen(false);

  };
  
  useEffect(() => {
 
    if (selectedDepartment) {
      newDepartmentId(selectedDepartment?.id);
      console.log("department id",departmentId);
      console.log("modal open with", selectedDepartment);
    }
  }, [selectedDepartment, newDepartmentId,isModalOpen,departmentId,closeModal]);
  return (
    <CardContent>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Departments</h2>
        <div className="flex justify-end mb-4">
          <Button >
            Add Department
          </Button>
        </div>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead>No.</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Department Head</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {departments?.map((department, index) => (
              <TableRow key={department.id}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>
                  {editMode && editedDepartment && editedDepartment.id === department.id ? (
                    <Input value={editedDepartment.name} onChange={(e) => handleChange(e, 'name')} />
                  ) : (
                    department.name
                  )}
                </TableCell>
                <TableCell>{department.departmentHead?.firstName} {department.departmentHead?.lastName}</TableCell>
                <TableCell>{department.email}</TableCell>
                <TableCell>{department.phoneNum}</TableCell>
                <TableCell>
                  <div className="flex space-x-2">
                      <button className="text-blue-700 hover:text-blue-700" onClick={() => openModal(department)}>
                        <FaEdit />
                      </button>
                    <button className="text-red-700 hover:text-red-700" >
                      <FaTrash />
                    </button>
                  </div>

                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
      {selectedDepartment && (
        <MyModal isOpen={isModalOpen} onClose={closeModal}>
          <DepartmentForm onSubmit={onSubmit} initialData={selectedDepartment} />
        </MyModal>
      )}
    </CardContent>
  );
};

export default Page;
