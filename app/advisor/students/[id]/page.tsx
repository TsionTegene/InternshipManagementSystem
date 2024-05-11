"use client";
import { useRouter } from "next/navigation";
import StudentsDetail from "@/components/studentdetail/details";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { DownloadIcon } from "@radix-ui/react-icons";
// Define mock opportunity data

const StudentInformationDetailPage = ({ params }) => {
  const studentInformation = [
    {
      id: "1",
      name: "Bereket Tadele",
      advisor: "Kuma",
      gpa: "3.96",
      year: "4",
      university: "Wolkite University",
      department: "Software Engineering",
      skills: "programming",
      imageUrl: "/images/landing.png",
      internshipTitle: "web based internship at techstars company",
      startDate: "monday, june 10 2024",
      endDate: "monday, june 10 2024",
      project:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "2",
      name: "Tsion Tegene",
      advisor: "Alazar",
      gpa: "3.96",
      year: "4",
      university: "Wolkite University",
      department: "Software Engineering",
      skills: "programming",
      imageUrl: "/images/landing.png",
      internshipTitle: "web based internship at techstars company",
      startDate: "monday, june 10 2024",
      endDate: "monday, june 10 2024",
      project:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "3",
      name: "Abel Zeleke",
      advisor: "Israel",
      gpa: "3.96",
      year: "4",
      university: "Wolkite University",
      department: "Software Engineering",
      skills: "programming",
      imageUrl: "/images/landing.png",
      internshipTitle: "web based internship at techstars company",
      startDate: "monday, june 10 2024",
      endDate: "monday, june 10 2024",
      project:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
    {
      id: "4",
      name: "Rebecca Asrat",
      advisor: "Joseph",
      gpa: "3.96",
      year: "4",
      university: "Wolkite University",
      department: "Software Engineering",
      skills: "programming",
      imageUrl: "/images/landing.png",
      internshipTitle: "web based internship at techstars company",
      startDate: "monday, june 10 2024",
      endDate: "monday, june 10 2024",
      project:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam",
    },
  ];
  const router = useRouter();

  // Find the opportunity with the matching opportunityId
  const student = studentInformation.find((stud) => stud.id === params.id);

  // Handle the case where opportunity is undefined
  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h1 className="text-center p-5 text-xl font-semibold text-blue-950 leading-tight dark:text-white">
        Student Detail
      </h1>
      <StudentsDetail
        name={student.name}
        advisor={student.advisor}
        gpa={student.gpa}
        university={student.university}
        department={student.department}
        imageUrl={"/images/man.jpg"}
        year={"4"}
        skills={"programming"}
        project={student.project}
        internshipTitle={student.internshipTitle}
        startDate={student.startDate}
        endDate={student.endDate}
      />
      <div className="container mx-auto px-4 md:px-0">
        <div className="flex flex-col md:flex-row justify-evenly m-2">
          <Button className="flex m-2 w-full">
            <DownloadIcon /> Evaluate
          </Button>
          <Button className="m-2 w-full">Download Resume</Button>
        </div>
      </div>
    </div>
  );
};

export default StudentInformationDetailPage;
