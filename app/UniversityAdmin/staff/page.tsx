"use client"
import React, { useEffect, useState } from 'react';
import { Table, TableCaption, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaEdit, FaSave, FaTrash, FaTimes } from 'react-icons/fa';
import { CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { registerUser } from '@/hooks/useUniversityActions';
import MyModal from '@/modals/loginmodal';
import StaffMemberForm from '@/components/edit-staff/page';


const Page = () => {
    const { user, updateUser,selecteduser } = registerUser()
 

    const [editedCollege, setEditedCollege] = useState(null);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedStaff, setselectedStaff] = useState(null);
    const [editMode, setEditMode] = useState(false);

    const openModal = (User:any) => {
        setselectedStaff(User); // Set the selected User
        setIsModalOpen(true); // Open the modal
        console.log("User id", );

    };
    const closeModal = () => {
        setIsModalOpen(false);
    };


    useEffect(() => {
if(selectedStaff){
    selecteduser(selectedStaff?.id)
    
}
        console.log("staff Members :",user)
    },[selectedStaff,closeModal])
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
        console.log(formData.get("firstName"))

        updateUser(formData)
        setIsModalOpen(false);

    };

    return (
        <CardContent>
            <div>
                <h2 className="text-xl font-bold mb-4 text-center">Staff Members</h2>
                <Table>
                    <TableCaption></TableCaption>

                    <TableHeader>
                        <TableRow>
                            <TableHead>Profile Picture</TableHead>
                            <TableHead>Name</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Phone Number</TableHead>
                            <TableHead>Role</TableHead>
                            <TableHead>Action</TableHead>
                        </TableRow>
                    </TableHeader>

                    <TableBody>
                        {user?.map((student, index) => (
                            <TableRow key={index}>
                                <TableCell>
                                    <img src={student.user?.profilePic} alt="Profile" className="w-12 h-12 rounded-full" />
                                </TableCell>
                                <TableCell  >
                                       {student.user?.firstName} 
                                </TableCell>
                                <TableCell>
                                       {student.user?.email} 
                                </TableCell>
                                <TableCell>
                                   {student.user?.phoneNum}
                                </TableCell>
                                <TableCell>{student.user?.roleName}</TableCell>
                                <TableCell>
                                    <div className="flex space-x-2">
                                        {editMode && editedCollege && editedCollege.id === student.user?.id ? (
                                            <>
                                                <button className="text-blue-700 hover:text-blue-700">
                                                    <FaSave />
                                                </button>
                                                <button className="text-red-700 hover:text-red-700">
                                                    <FaTimes />
                                                </button>
                                            </>
                                        ) : (
                                                <button className="text-blue-700 hover:text-blue-700" onClick={() => openModal(student.user)}>
                                                <FaEdit />
                                            </button>
                                        )}
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

            {selectedStaff && (
                <MyModal isOpen={isModalOpen} onClose={closeModal}>
                    <StaffMemberForm onSubmit={onSubmit} data={selectedStaff} />
                </MyModal>
            )}
        </CardContent>
    );
};

export default Page;
