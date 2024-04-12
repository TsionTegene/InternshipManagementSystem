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

const page = () => {
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
            <TableHead>Approval Status</TableHead>
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
                <div className={`rounded-md px-5 py-2 text-sm ${getStatusColor(index % 2 === 0 ? 'approved' : 'pending')}`} style={{color: 'black'}}>
                  {index % 2 === 0 ? 'Approved' : 'Pending'}
                </div>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
