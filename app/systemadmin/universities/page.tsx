import React from 'react';
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const page = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Universities</h1> 
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
         
          <TableRow>
            <TableCell className="font-medium">1</TableCell>
            <TableCell>AddisSoftware</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
        
          <TableRow>
            <TableCell className="font-medium">2</TableCell>
            <TableCell>AddisSoftware</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
       
          <TableRow>
            <TableCell className="font-medium">3</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
       
          <TableRow>
            <TableCell className="font-medium">4</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
        
          <TableRow>
            <TableCell className="font-medium">5</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
       
          <TableRow>
            <TableCell className="font-medium">6</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Pending</TableCell>
          </TableRow>
       
          <TableRow>
            <TableCell className="font-medium">7</TableCell>
            <TableCell>Addis Ababa University</TableCell>
            <TableCell>Addis@gmail.com</TableCell>
            <TableCell>Approved</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

export default page;
