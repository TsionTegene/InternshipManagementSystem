import React from 'react';
import {
    Table,
    TableCaption,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";

// Import icons from your icon library
import { FaEdit, FaTrash } from 'react-icons/fa';

const Page = () => {
    // Options for the dropdown
    const lecturerOptions = ["Mr. Abebe", "Mr. John", "Ms. Emily", "Dr. Smith"];

    // Function to determine the background color based on the approval status
    const getStatusColor = (status: string) => {
        switch (status) {
            case 'approved':
                return 'bg-green-200';
            case 'pending':
                return 'bg-yellow-200';
            default:
                return '';
        }
    };

    return (
        <div>
            <h2 className="text-xl font-bold mb-4 text-center">Mentors</h2>
            <Table>
                <TableCaption></TableCaption>

                {/* Table Header */}
                <TableHeader>
                    <TableRow>
                        <TableHead>No.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody>
                    {/* Single Row */}
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Bereket</TableCell>
                        <TableCell>
                            <div className="flex">
                                <FaEdit className="text-blue-500 cursor-pointer mr-2" />
                                <FaTrash className="text-red-500 cursor-pointer" />
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;
