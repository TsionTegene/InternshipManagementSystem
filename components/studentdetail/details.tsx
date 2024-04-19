import Image from 'next/image'
import React from 'react'

interface isDetail {
    imageUrl: string;
    name: string;
    advisor: string;
    gpa: string;
    year: string;
    university: string;
    department: string;
    skills: any;
    project: string;
    endDate: string;
    startDate: string;
    internshipTitle: string;
}

const StudentsDetail = ({ imageUrl, name, advisor, gpa, year, university, skills, department, startDate, endDate, internshipTitle, project }: isDetail) => {

    return (
        <div className='flex flex-row gap-10 '>
            <div className='bg-gray-300 w-1/3 p-2 rounded-md shadow-lg'>
                {imageUrl && <Image src={imageUrl} alt={''} width={200} height={100} className='rounded-full' />}
                {name && <p className=" font-normal text-center">{name}</p>}
                {university && university}
                {department && <p>Department: {department}</p>}
                {gpa && <p className=" font-normal mb-2">GPA: {gpa}</p>}
                {year && <p>Year: {year}</p>}
                {advisor && <p>Advisor: {advisor}</p>}
            </div>
            <div className='bg-gray-300 p-2 rounded-md shadow-xl w-2/3 ' style={{ boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)' }}>
                <p className='text-xl text-center'>Internship</p>
                {internshipTitle && <p className='text-lg p-2'>Title: {internshipTitle}</p>}
                {startDate && <p className='text-lg p-2'>StartDate: {startDate}</p>}
                {endDate && <p className='text-lg p-2'>EndDate: {endDate}</p>}
                {project && <p className='text-lg p-2'>Project: {project}</p>}
                {endDate && <p className='text-lg p-2'>EndDate: {endDate}</p>}
                {skills && <p className='text-lg p-2'>Skills: {skills}</p>}

            </div>
        </div>
    )
};


export default StudentsDetail