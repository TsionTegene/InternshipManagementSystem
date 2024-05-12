/* eslint-disable @next/next/no-img-element */
"use client";

import { CardTitle, CardHeader, CardContent, Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useFetchAssignedStudents } from "@/hooks/useMentorActions";
import Image from "next/image";
// Define mock opportunity data

const StudentInformationDetailPage = ({ params }: { params: any }) => {
  const { students, isLoading, error, studentsData } =
    useFetchAssignedStudents();
  const student = students.find((stud: { id: any }) => stud.id === params.id);
  console.log("Student from [id]: ", student)

  const router = useRouter();

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div className="flex flex-col gap-8 p-8 md:p-12 lg:p-16">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Student Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div className="flex items-center gap-5/login">
              <img
                alt="Student Avatar"
                className="rounded-full"
                height={64}
                src={student.user.profilePic}
                style={{
                  aspectRatio: "64/64",
                  objectFit: "cover",
                }}
                width={64}
              />
              <div>
                <h3 className="text-lg font-medium">
                  {student.user.firstName} {student.user.middleName}
                </h3>
                <p className="text-gray-500 dark:text-gray-400">
                  {student.University.name}, {student.department.name}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  GPA: {student.gpa}
                </p>
                <p className="text-gray-500 dark:text-gray-400">
                  Year: {student.year}
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium">Skills</h4>
              <div className="flex flex-wrap gap-2 pt-2">
                {student.skills?.map((skill: string) => (
                  <Badge key={skill}>{skill}</Badge>
                ))}
              </div>
            </div>
            <div className="flex items-center justify-between">
              <a
                href={student.resumeUrl}
                target="_blank"
                className="text-sm font-medium underline"
                rel="noopener noreferrer"
              >
                Download Resume
              </a>
              <div className="space-y-2 text-sm">
                <p>{student.user.email}</p>
                <p>{student.user.phoneNum}</p>
              </div>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Internship Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5">
            <div>
              <h3 className="text-lg font-medium">
                {student.internship.title}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {student.internship.company.name}
              </p>
              <h4 className="text-md font-medium">Description</h4>
              <p className="text-gray-500 dark:text-gray-400">
                {student.internship.description.description}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium">Start Date</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {student.internship.startDate}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">End Date</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {student.internship.endDate}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Type</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {student.internship.schedule},{" "}
                  {student.internship.compensations}
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium">Responsibilities</h4>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400">
                {student.internship.description.responsibilities?.map(
                  (responsibility: string) => (
                    <li key={responsibility}>{responsibility}</li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h4 className="text-sm font-medium">Qualifications</h4>
              <ul className="list-disc pl-6 text-gray-500 dark:text-gray-400">
                {student.internship.description.qualifications?.map(
                  (qualification: string) => (
                    <li key={qualification}>{qualification}</li>
                  )
                )}
              </ul>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Company Details</CardTitle>
          </CardHeader>
          <CardContent className="space-y-5 ">
            <div>
              <h3 className="text-lg font-medium">
                {student.internship.company.name}
              </h3>
              <p className="text-gray-500 dark:text-gray-400">
                {student.internship.company.industry}
              </p>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm font-medium">HR Contact</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {student.internship.company.companyHR.firstName}{" "}
                  {student.internship.company.companyHR.midlleName}
                </p>
              </div>
              <div>
                <h4 className="text-sm font-medium">Website</h4>
                <a
                  href={student.internship.company.website}
                  target="_blank"
                  className="text-sm font-medium underline"
                  rel="noopener noreferrer"
                >
                  {student.internship.company.website}
                </a>
              </div>
              <div>
                <h4 className="text-sm font-medium">Address</h4>
                <p className="text-gray-500 dark:text-gray-400">
                  {student.internship.company.address.region},{" "}
                  {student.internship.company.address.city},{" "}
                  {student.internship.company.address.subcity}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default StudentInformationDetailPage;
