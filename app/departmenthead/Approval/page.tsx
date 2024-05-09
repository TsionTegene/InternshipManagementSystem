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
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons';
import { Button } from '@/components/ui/button';

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
      <h2 className="text-xl font-bold mb-4 text-center">Students To Be Approved</h2>
      <Table>
        <TableCaption></TableCaption>

        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>ID</TableHead>
            <TableHead>Actions</TableHead> {/* Changed from "Approval Status" */}
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {/* Rows */}
          {[...Array(7)].map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Software Eng.</TableCell>
              <TableCell>NSR/0055/12</TableCell>
              <TableCell>
                {/* Actions column */}
                <div className="flex justify-center space-x-2">
                  <Button className="bg-green-500 text-white rounded-md px-3 py-1">Approve</Button>
                  <Button className="bg-red-500 text-white rounded-md px-3 py-1">Reject</Button>
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Page;
