/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import Card from '@/components/card/Cards';
import React, { useState } from 'react'
import { FaFemale, FaMale } from 'react-icons/fa';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const page = () => {
  const [totalInterns, setTotalInterns] = useState(35);
  const [totalFemaleInterns, setTotalFemaleInterns] = useState(17);
  const [totalMaleInterns, setTotalMaleInterns] = useState(18);
  const [totalApplications, setTotalApplications] = useState(15);
  const [completedInterns, setCompletedInterns] = useState(12);
  const [applicationsNotAccepted, setApplicationsNotAccepted] = useState(9);
  const [internsCurrentlyUndertaking, setInternsCurrentlyUndertaking] = useState(11);

  const studentList = [
    { name: 'Bereket Tadele', advisor: 'Not Assigned', mentor: 'Mr. Alazar', status: 'Active' },
    { name: 'Tsion Tegene', advisor: 'Alazar', mentor: 'Mr. Alazar', status: 'Completed' },
    { name: 'Abel Zeleke', advisor: 'Israel', mentor: 'Mr. Alazar', status: 'Pending' },
    { name: 'Rebecca Asrat', advisor: 'Joseph', mentor: 'Mr. Alazar', status: 'Active' },
    { name: 'Tsion Tegene', advisor: 'Alazar', mentor: 'Mr. Alazar', status: 'Completed' },
  ];
  return (
    <div>
      <div className='flex gap-4'>
        <div className='flex flex-col gap-4 w-2/5'>
          <Card description="Female Interns" title={totalFemaleInterns} icon={<FaFemale />} imageUrl={''} startdate={''} enddate={''} address={''} id={undefined} />
          <Card description="Male Interns" title={totalMaleInterns} icon={<FaMale />} imageUrl={''} startdate={''} enddate={''} address={''} id={undefined} />
        </div>
        <div>
          <div className='bg-gray-300 rounded-lg p-5'>
            <p>Total Interns</p>
            <p>{totalInterns}</p>
            <div className='flex ml-15 justify-evenly gap-2'>
              <Card description="Applications received, under consideration." title={totalApplications} icon={undefined} imageUrl={''} startdate={''} enddate={''} address={''} id={undefined} />
              <Card description="Interns who have completed their internship" title={completedInterns} icon={undefined} imageUrl={''} startdate={''} enddate={''} address={''} id={undefined} />
              <Card description="Applications not accepted" title={applicationsNotAccepted} icon={undefined} imageUrl={''} startdate={''} enddate={''} address={''} id={undefined} />
              <Card description="Currently undertaking the internship" title={internsCurrentlyUndertaking} icon={undefined} imageUrl={''} startdate={''} enddate={''} address={''} id={undefined} />
            </div>
          </div>
        </div>
      </div>
      <div className='mt-5'>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Student</TableHead>
              <TableHead>Mentor</TableHead>
              <TableHead>Advisor</TableHead>
              <TableHead>Status</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {studentList.map((student, index) => (

              <TableRow key={index}>
                <TableCell style={{ listStyleType: 'decimal' }}>{student.name}</TableCell>
                <TableCell>{student.mentor}</TableCell>
                <TableCell>{student.advisor}</TableCell>
                <TableCell>{student.status}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>

      </div>
    </div>
  )
}

export default page