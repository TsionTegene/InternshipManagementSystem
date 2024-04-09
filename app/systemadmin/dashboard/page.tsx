import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { FaUniversity, FaEnvelope, FaUser } from 'react-icons/fa'; // Importing icons

const Page = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div>
        <div className="flex justify-center items-center">
          <div className="flex flex-col justify-between">
            {/* Card 1 */}
            <div className="bg-pink-100 p-2 rounded-md mb-4 text-black w-16 h-16 flex items-center justify-center">
              <FaUser className="text-4xl text-blue-500 mb-2" />
              <div>
                <p className="font-bold text-lg">5</p> {/* University text */}
                <p className="text-sm">Male</p> {/* Subtext */}
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-pink-100 p-2 rounded-md mb-4 text-black w-16 h-16 flex items-center justify-center">
              <FaUser className="text-4xl text-blue-500 mb-2" />
              <div>
                <p className="font-bold text-lg">5</p> {/* University text */}
                <p className="text-sm">Fema</p> {/* Subtext */}
              </div>
            </div>
          </div>

          {/* Third card */}
          <div className="bg-pink-50 p-4 rounded-lg mb-4 text-black flex items-center ml-4 flex-wrap">
            <div className="w-full mb-2">
              <p className="font-bold text-lg">Total Interns</p>
              <p className="text-sm">15</p>
            </div>
            <FaUniversity className="text-2xl mr-2" />
            <div className="flex flex-wrap">
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

         <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* Row 1 */}
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>AddisSoftware</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
          {/* Row 2 */}
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>AddisSoftware</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          {/* Row 3 */}
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
          {/* Row 4 */}
          <TableRow>
            <TableCell className="font-medium">4</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          {/* Row 5 */}
          <TableRow>
            <TableCell className="font-medium">5</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
          {/* Row 6 */}
          <TableRow>
            <TableCell className="font-medium">6</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
          {/* Row 7 */}
          <TableRow>
            <TableCell className="font-medium">7</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      </div>
    </div>
  );
}

export default Page;
