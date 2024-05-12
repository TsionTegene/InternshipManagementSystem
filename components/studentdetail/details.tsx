import Image from "next/image";
import React from "react";

interface isDetail {
  imageUrl: string;
  name: string;
  advisor: string;
  gpa: string;
  year: string;
  university: string;
  department: string;
  skills: any;
  endDate: string;
  startDate: string;
  internshipTitle: string;
}

const StudentsDetail = ({
  imageUrl,
  name,
  advisor,
  gpa,
  year,
  university,
  skills,
  department,
  startDate,
  endDate,
  internshipTitle,
}: isDetail) => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-10 min-h-full">
        <div className="bg-blue-100 w-full md:w-1/2 p-2 rounded-md shadow-lg mb-4 md:mb-0 hover:bg-blue-200 dark:bg-gray-900">
          <div className="flex items-center justify-center">
            {imageUrl && (
              <Image
                src={imageUrl}
                alt={""}
                width={200}
                height={100}
                className="mx-auto md:mx-0 rounded-full h-24 w-24 shadow-lg "
              />
            )}
          </div>
          {name && (
            <p className="font-light text-sm text-center dark:text-white text-blue-950">
              {name}
            </p>
          )}
          {university && (
            <p className="p-2 text-blue-950 dark:text-white">
              University: {university}
            </p>
          )}
          {department && (
            <p className="p-2 text-blue-950 dark:text-white">
              Department: {department}
            </p>
          )}
          {gpa && (
            <p className="font-normal text-blue-950 p-2 dark:text-white">
              GPA: {gpa}
            </p>
          )}
          {year && (
            <p className="p-2 text-blue-950 dark:text-white">Year: {year}</p>
          )}
          {advisor && (
            <p className="p-2 text-blue-950 dark:text-white">
              Advisor: {advisor}
            </p>
          )}
        </div>
        <div
          className="bg-blue-100 p-2 rounded-md shadow-xl w-full md:w-1/2 hover:bg-blue-200  dark:bg-gray-900"
          style={{
            boxShadow:
              "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)",
          }}
        >
          <p className="text-xl font-semibold p-2 text-center dark:text-white text-blue-950">
            Internship
          </p>
          {internshipTitle && (
            <p className="p-2 text-blue-950 dark:text-white">
              Title: {internshipTitle}
            </p>
          )}
          {startDate && (
            <p className=" p-2 text-blue-950 dark:text-white">
              Start Date: {startDate}
            </p>
          )}
          {endDate && (
            <p className=" text-blue-950 p-2 dark:text-white">
              End Date: {endDate}
            </p>
          )}
          {skills && (
            <p className="text-blue-950 p-2 dark:text-white">
              Skills: {skills}
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default StudentsDetail;
