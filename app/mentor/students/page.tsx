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
import { Button } from '@/components/ui/button';

const page = () => {
    const studentList = [
        { name: 'Bereket Tadele', advisor: 'Kuma' },
        { name: 'Tsion Tegene', advisor: 'Alazar' },
        { name: 'Abel Zeleke', advisor: 'Israel' },
        { name: 'Rebecca Asrat', advisor: 'Joseph' },
    ];
    return (
        <div>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Name</TableHead>
                        <TableHead>Advisor</TableHead>
                        <TableHead>Evaluate</TableHead>
                        <TableHead>Report</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {studentList.map((student, index) => (
                        
                        <TableRow key={index}>
                            <TableCell style={{listStyleType:'decimal'}}>{student.name}</TableCell>
                            <TableCell>{student.advisor}</TableCell>
                            <TableCell><Button variant={'ghost'} className='border-2'>Evaluate</Button></TableCell>
                            <TableCell><Button variant={'ghost'} className='border-2'>Report</Button></TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
}

export default page