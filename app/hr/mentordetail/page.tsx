import React from 'react';
import { FaUser } from 'react-icons/fa';
import { FiMessageCircle } from 'react-icons/fi';
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper
} from '@mui/material';

const Page = () => {
  return (
    <div>
      <div className="bg-white shadow-md rounded-md p-3 mb-2 relative flex items-center">
        <FiMessageCircle className="text-gray-500 text-3xl absolute top-2 right-2" />

        <FaUser className="text-gray-700 text-3xl mr-2" />

        <div>
          
          <h3 className="text-lg font-semibold">Overall</h3>

          <p className="text-gray-600">Mr. Abebe K</p>
        </div>
      </div>

      <div className="mt-4">
        <div className="flex justify-between mb-2">
          <div className="bg-white shadow-md rounded-md p-6 w-2/5 h-32 flex justify-center items-center">
            <div className="text-center text-gray-700"> 
              <h3 className="text-lg font-semibold">Students</h3>
              <p className="text-gray-600">3</p>
            </div>
          </div>
          <div className="bg-white shadow-md rounded-md p-6 w-2/5 h-32 flex justify-center items-center">
            <div className="text-center text-gray-700">
              <h3 className="text-lg font-semibold">Students</h3>
              <p className="text-gray-600">3</p>
            </div>
          </div>
        </div>

        <TableContainer component={Paper} style={{ background: 'black' }}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell style={{ color: 'white' }}>No.</TableCell>
                <TableCell style={{ color: 'white' }}>Student</TableCell>
                <TableCell style={{ color: 'white' }}>Advisor</TableCell>
                <TableCell style={{ color: 'white' }}>Evaluation</TableCell>
                <TableCell style={{ color: 'white' }}>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {[...Array(7)].map((_, index) => (
                <TableRow key={index} style={{ background: 'black' }}>
                  <TableCell style={{ color: 'white' }}>{index + 1}</TableCell>
                  <TableCell style={{ color: 'white' }}>Bereket</TableCell>
                  <TableCell style={{ color: 'white' }}>Mr. Alazar</TableCell>
                  <TableCell style={{ color: 'white' }}>20</TableCell>
                  <TableCell style={{ color: 'white' }}>Completed</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default Page;
