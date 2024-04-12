import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow } from "@/components/ui/table";
import { FaUniversity } from 'react-icons/fa'; 

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="flex justify-center items-center flex-col">
        {/* Cards Section */}
        <div className="grid grid-cols-3 gap-4 mb-8">
          {/* Card 1 */}
          <div className="bg-pink-100 p-2 rounded-md text-black flex items-center justify-center">
            <FaUniversity className="text-4xl text-blue-500 mb-2 mr-2" />
            <div>
              <p className="font-bold text-lg">5</p>
              <p className="text-sm">Female</p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="bg-pink-100 p-2 rounded-md text-black flex items-center justify-center">
            <FaUniversity className="text-4xl text-blue-500 mb-2 mr-2" />
            <div>
              <p className="font-bold text-lg">5</p>
              <p className="text-sm">Female</p>
            </div>
          </div>

          {/* Card 3 - Total Interns Card */}
          <div className="bg-pink-50 p-4 rounded-lg text-black flex items-center flex-wrap col-span-2">
            <div className="w-full mb-2">
              <p className="font-bold text-lg">15</p>
              <p className="text-sm">Total Interns</p>
            </div>
            {/* Arranged Cards Inside Total Interns Card */}
            <div className="flex flex-wrap justify-center">
              <div className="bg-pink-100 p-2 rounded-md mr-2 mb-2 text-black w-16 h-16 flex items-center justify-center">
                <div>
                  <p className="font-bold text-lg">9</p>
                  <p className="text-sm">Application not accepted</p>
                </div>
              </div>
              <div className="bg-pink-100 p-2 rounded-md mr-2 mb-2 text-black w-16 h-16 flex items-center justify-center">
                <div>
                  <p className="font-bold text-lg">12</p>
                  <p className="text-sm">Interns who have completed the internship</p>
                </div>
              </div>
              <div className="bg-pink-100 p-2 rounded-md mr-2 mb-2 text-black w-16 h-16 flex items-center justify-center">
                <div>
                  <p className="font-bold text-lg">15</p>
                  <p className="text-sm">Application received under consideration</p>
                </div>
              </div>
              <div className="bg-pink-100 p-2 rounded-md mb-2 text-black w-16 h-16 flex items-center justify-center">
                <div>
                  <p className="font-bold text-lg">11</p>
                  <p className="text-sm">Currently undertaking the internship</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Table Section */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>No.</TableCell>
              <TableCell>Name</TableCell>
              <TableCell>Email</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {/* Table Rows */}
            {[...Array(7)].map((_, index) => (
              <TableRow key={index}>
                <TableCell className="font-medium">{index + 1}</TableCell>
                <TableCell>AddisSoftware</TableCell>
                <TableCell>Addis@gmail.com</TableCell>
                <TableCell>{index % 2 === 0 ? 'Approved' : 'Pending'}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default Page;
