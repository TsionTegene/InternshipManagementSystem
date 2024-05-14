"use client"
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Briefcase, Book, Check } from "lucide-react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useMyInternship } from "@/queries/useStudentQueries";
const user = localStorage.getItem("userId")

const Page = () => {
  const MyInternship = [
    {
      id: "1",
      imageUrl: "/images/company.svg",
      companyName: "TotalTech solution provider",
      startDate: "12/12/12",
      btn: "Submit",
      endDate: "12/12/12",
      schedule: "Full Time",
      compensations: "Paid",
      responsibilities: [
        "Developing web applications",
        "Testing software components",
      ],
      qualifications: [
        "Strong programming skills",
        "Familiarity with HTML,CSS and Javascript",
      ],
      location: "Hawassa",
      evaluation: "88%",
    },
  ];
  const { data: internship ,isSuccess} = useMyInternship(user as string)
  if (!isSuccess) {
    return <div>Loading...</div>;
  }
  if(internship.length >= 1)
  return (
    <div className="container mx-auto px-4">
      { internship &&  internship.map((internship) => (
        <Card key={internship.id} className="bg-blue-50 dark:bg-gray-900 mb-8">
          <CardHeader>
            <CardTitle className="text-blue-950 dark:text-white">
              My Internship :{"   "+internship?.internship?.title}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid lg:grid-cols-2 lg:gap-4 md:grid-cols-1 gap-3 md:gap-8 p-2">
              <Card className="bg-blue-100 dark:bg-gray-950 lg:w-full md:w-1/3">
                <CardContent className="p-4">
                  {internship.imageUrl && (
                    <div className="flex justify-center mb-4">
                      <Image
                        src={internship.imageUrl}
                        alt=""
                        width={100}
                        height={50}
                        className=""
                      />
                    </div>
                  )}
                  {internship?.internship?.company?.name && (
                    <p className="font-semibold text-lg text-blue-950 dark:text-white">
                      {internship.internship.company.name}
                    </p>
                  )}
                  {internship?.internship?.company?.address && (
                    <p className="text-blue-950 dark:text-white">
                      {internship?.internship?.company?.address?.city}
                    </p>
                  )}
                </CardContent>
              </Card>
              <Card className="bg-blue-100 dark:bg-gray-950 lg:w-full md:w-2/3">
                <CardContent>
                  <CardTitle className="text-lg p-2 text-blue-950 dark:text-white text-center ">
                    About the Internship
                  </CardTitle>
                  {internship?.internship?.startDate && (
                    <p className="text-blue-950 dark:text-white">
                      Start Date: {internship?.internship?.startDate}
                    </p>
                  )}
                  {internship?.internship?.endDate && (
                    <p className="text-blue-950 dark:text-white">
                      End Date: {internship?.internship?.endDate}
                    </p>
                  )}
                  {internship?.internship?.schedule && (
                    <p className="text-blue-950 dark:text-white">
                      Schedule: {internship?.internship?.schedule}
                    </p>
                  )}
                  {internship?.internship?.compensations && (
                    <p className="text-blue-950 dark:text-white">
                      Compensations: {internship?.internship?.compensations}
                    </p>
                  )}
                </CardContent>
              </Card>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 justify-center">
              <Card className="bg-blue-100 dark:bg-gray-950">
                <CardContent>
                  {internship?.internship?.description?.responsibilities && (
                    <div>
                      <p className="font-semibold mt-2 text-blue-950 dark:text-white">
                        Responsibilities:
                      </p>
                      <ul>
                        {internship?.internship?.description?.responsibilities?.map(
                          (responsibility, index) => (
                            <li
                              key={index}
                              className="flex items-center text-blue-950 dark:text-white"
                            >
                              <Check className="h-4 w-4 mr-2 text-blue-500" />
                              {responsibility}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
              <Card className="bg-blue-100 dark:bg-gray-950">
                <CardContent>
                  {internship?.internship?.description?.qualifications && (
                    <div>
                      <p className="font-semibold mt-2 text-blue-950 dark:text-white">
                        Qualifications:
                      </p>
                      <ul>
                        {internship?.internship ?.description?.qualifications?.map(
                          (qualification, index) => (
                            <li
                              key={index}
                              className="flex items-center text-blue-950 dark:text-white"
                            >
                              <Book className="h-4 w-4 mr-2 text-blue-500" />
                              {qualification}
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
            <Card className="max-w-fit bg-blue-100 dark:bg-gray-950">
              <CardContent>
                {internship?.MentorePoint && (
                  <p className="text-center text-pretty p-2 text-blue-950 dark:text-white">
                    Your evaluation result is: {internship?.MentorePoint+" "} from 100
                  </p>
                )}
              </CardContent>
            </Card>

          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Page;
