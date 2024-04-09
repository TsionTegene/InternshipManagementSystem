import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'

const page = () => {
  return (
    <div>
      <Table>
        <TableCaption></TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">No.</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Location</TableHead>
            <TableHead>Area</TableHead>
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          
          {[...Array(6)].map((_, index) => (
            <TableRow key={index}>
              <TableCell className="font-medium">{index + 1}</TableCell>
              <TableCell>AddisSoftware</TableCell>
              <TableCell>Addis@gmail.com</TableCell>
              <TableCell>Addis Ababa</TableCell>
              <TableCell>Tech</TableCell>
              <TableCell>
              
           <div className="flex justify-center">
            <button className="bg-blue-500 hover:bg-blue-50 text-white font-bold py-1 px-2 rounded mr-2 text-xs">
              Edit
            </button>
            <button className="bg-red-500 hover:bg-red-50 text-white font-bold py-1 px-2 rounded text-xs">
              Delete
            </button>
          </div>


              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  )
}

export default page
