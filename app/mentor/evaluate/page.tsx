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
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from '@/components/ui/button';
import './style.css'

const page = () => {
  const questions = [
    { question: "How was the student's academic and technical background on a scale of 1 to 5?", weight: 5 },
    { question: "How was the student's academic and technical background on a scale of 1 to 5?", weight: 15 },
    { question: "How was the student's academic and technical background on a scale of 1 to 5?", weight: 10 },
    { question: "How was the student's academic and technical background on a scale of 1 to 5?", weight: 5 },
    { question: "How was the student's academic and technical background on a scale of 1 to 5?", weight: 25 },
    { question: "How was the student's academic and technical background on a scale of 1 to 5?", weight: 25 }

  ];

  return (
    <div>
      <div className='flex gap-2'>
        <div className='questions '>
          <p className='text-xl'>Evaluation Form</p>
          <ol className='list-decimal mt-3'>
            {questions.map((question, index) => (
              <><li key={index}>{question.question}</li><input type="number" name="" id="" min={1} className='border-2 w-10 size-7' /></>
            ))}
          </ol>
        </div>
        <div className='attendance ml-3 -mr-2'>
          <p className='text-xl'>Attendance</p>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[100px]">Week</TableHead>
                <TableHead>Monday</TableHead>
                <TableHead>Tuesday</TableHead>
                <TableHead>Wednesday</TableHead>
                <TableHead>Thursday</TableHead>
                <TableHead>Friday</TableHead>

              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow>
                <TableCell className="font-medium">1</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="font-medium">2</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="font-medium">3</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="font-medium">4</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="font-medium">5</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="font-medium">6</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="font-medium">7</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
              <TableRow>
                <TableCell className="font-medium">8</TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>
                <TableCell><Checkbox /></TableCell>

              </TableRow>
            </TableBody>
          </Table>

        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '10vh' }}>
        <Button style={{ borderRadius: 50 }}>Submit Evaluation</Button>
      </div>
    </div>
  );
}

export default page