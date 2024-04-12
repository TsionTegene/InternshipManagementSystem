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

  return (
    <div>
      <h2 className="text-xl font-bold mb-4 text-center">Students</h2>
      <Table>
        <TableCaption></TableCaption>

        {/* Table Header */}
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Advisor</TableHead>
            <TableHead>Organization</TableHead>
          </TableRow>
        </TableHeader>

        {/* Table Body */}
        <TableBody>
          {/* First Row */}
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>Bereket</TableCell>
            <TableCell>Software Eng.</TableCell>
            <TableCell>
              <select>
                {lecturerOptions.map((lecturer, index) => (
                  <option key={index}>{lecturer}</option>
                ))}
              </select>
            </TableCell>
            <TableCell>App Div</TableCell>
          </TableRow>

          {/* Second Row */}
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>John</TableCell>
            <TableCell>Marketing</TableCell>
            <TableCell>
              <select>
                {lecturerOptions.map((lecturer, index) => (
                  <option key={index}>{lecturer}</option>
                ))}
              </select>
            </TableCell>
            <TableCell>ABC Inc.</TableCell>
          </TableRow>

          {/* Additional Rows */}
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>Jane</TableCell>
            <TableCell>Finance</TableCell>
            <TableCell>
              <select>
                {lecturerOptions.map((lecturer, index) => (
                  <option key={index}>{lecturer}</option>
                ))}
              </select>
            </TableCell>
            <TableCell>XYZ Corp</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">4</TableCell>
            <TableCell>Michael</TableCell>
            <TableCell>Computer Science</TableCell>
            <TableCell>
              <select>
                {lecturerOptions.map((lecturer, index) => (
                  <option key={index}>{lecturer}</option>
                ))}
              </select>
            </TableCell>
            <TableCell>Tech Solutions</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">5</TableCell>
            <TableCell>Sarah</TableCell>
            <TableCell>Electrical Engineering</TableCell>
            <TableCell>
              <select>
                {lecturerOptions.map((lecturer, index) => (
                  <option key={index}>{lecturer}</option>
                ))}
              </select>
            </TableCell>
            <TableCell>Power Co.</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">6</TableCell>
            <TableCell>David</TableCell>
            <TableCell>Chemistry</TableCell>
            <TableCell>
              <select>
                {lecturerOptions.map((lecturer, index) => (
                  <option key={index}>{lecturer}</option>
                ))}
              </select>
            </TableCell>
            <TableCell>ChemLab Ltd.</TableCell>
          </TableRow>

          <TableRow>
            <TableCell className="font-medium">7</TableCell>
            <TableCell>Emily</TableCell>
            <TableCell>Biology</TableCell>
            <TableCell>
              <select>
                {lecturerOptions.map((lecturer, index) => (
                  <option key={index}>{lecturer}</option>
                ))}
              </select>
            </TableCell>
            <TableCell>BioTech Inc.</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default page;
