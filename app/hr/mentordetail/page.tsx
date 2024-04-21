import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const Page = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-3 mb-2 relative flex items-center">
        <FiMessageCircle className="text-gray-500 text-3xl absolute top-2 right-2" style={{ top: '8px', right: '12px' }} />
        <FaUser className="text-gray-700 text-3xl mr-2" />
        <div>
          <h3 className="text-lg font-semibold">Overall</h3>
          <p className="text-gray-600">Mr. Abebe K</p>
        </div>
      </div>
      <div className="mt-8">
        <div className="flex justify-between mb-4">
          <div className="bg-white shadow-md rounded-md p-6 ml-2 w-3/5 h-24">
            <h3 className="text-lg font-semibold">Advisors</h3>
            <p className="text-gray-600">3</p>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 ml-2 w-3/5 h-24">
            <h3 className="text-lg font-semibold">Advisors</h3>
            <p className="text-gray-600">3</p>
          </div>
        </div>
        <Table>
          <TableCaption></TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px]">No.</TableHead>
              <TableHead>Student</TableHead>
              <TableHead>Advisor</TableHead>
              <TableHead>Evaluation</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>

            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Mr.Alazar</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Completed</TableCell>

            </TableRow>

            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Mr.Alazar</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Mr.Alazar</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Mr.Alazar</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Mr.Alazar</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Mr.Alazar</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>

            <TableRow>
              <TableCell className="font-medium">1</TableCell>
              <TableCell>Bereket</TableCell>
              <TableCell>Mr.Alazar</TableCell>
              <TableCell>20</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Page;
