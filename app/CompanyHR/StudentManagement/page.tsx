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
            <h2 className="text-xl font-bold mb-4 text-center">Applicants</h2>
            <Table>
                <TableCaption></TableCaption>

                {/* Table Header */}
                <TableHeader>
                    <TableRow>
                        <TableHead>No.</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>University</TableHead>
                        <TableHead>Phone No.</TableHead>
                        <TableHead>Dep.</TableHead>
                        <TableHead>Action</TableHead>
                    </TableRow>
                </TableHeader>

                {/* Table Body */}
                <TableBody>
                    {/* Single Row */}
                    <TableRow>
                        <TableCell className="font-medium">1</TableCell>
                        <TableCell>Bereket</TableCell>
                        <TableCell>University of XYZ</TableCell>
                        <TableCell>+251987654321</TableCell>
                        <TableCell>Software Engineering</TableCell>
                        <TableCell>
                            <div>
                                <button className="bg-green-500 text-white px-4 py-2 rounded-lg mr-2">Approve</button>
                                <button className="bg-red-500 text-white px-4 py-2 rounded-lg">Reject</button>
                            </div>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    );
};

export default Page;
