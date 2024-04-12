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
  const lecturerOptions = ["Mr. Abebe", "Mr. John", "Ms. Emily", "Dr. Smith"];

  return (
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
          </TableRow>
        </TableHeader>

        <TableBody>
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>College Of Computing And Informatics</TableCell>
            <TableCell>Mr.Melaku</TableCell>
            <TableCell>+251911654378</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>College Of Engineering and Technology</TableCell>
            <TableCell>Mr.Melaku</TableCell>
            <TableCell>+251911654378</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;

