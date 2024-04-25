import { Briefcase, Book, Check } from "lucide-react";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface isDetail {
  imageUrl: string;
  title: string;
  startDate: any;
  endDate: any;
  schedule: any;
  compensations: any;
  companyName: string;
  responsibilities: string[];
  qualifications: string[];
  applicationInstructions: any;
  deadline: any;
  location: string;
  requirements: string;
  numberOfApplicants: number;
  field: string;
  btn: any;
}

const cardDetail = ({
  imageUrl,
  companyName,
  location,
  numberOfApplicants,
  qualifications,
  deadline,
  applicationInstructions,
  responsibilities,
  compensations,
  schedule,
  endDate,
  startDate,
  title,
  btn,
  field,
}: isDetail) => {
  return (
    <Card className="bg-blue-50 dark:bg-gray-900 m-3">
      <CardHeader className="pb-2">
        <CardTitle className="text-blue-950 dark:text-white">
          Opportunity Detail
        </CardTitle>
        <CardDescription>
          This page contains full information about the internship
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 p-2 ">
          <Card className="w-full md:max-w-xs bg-blue-100 dark:bg-gray-950">
            <CardContent className="p-4">
              {imageUrl && (
                <Image
                  src={imageUrl}
                  alt={""}
                  width={200}
                  height={100}
                  className="w-full"
                />
              )}
              {companyName && (
                <p className="font-semibold text-lg text-blue-950 dark:text-white">
                  {companyName}
                </p>
              )}
              {location && (
                <p className="text-blue-950 dark:text-white">{location}</p>
              )}
            </CardContent>
          </Card>
          <Card className="w-full md:max-w-md bg-blue-100 dark:bg-gray-950">
            <CardTitle className="text-lg text-center p-3 text-blue-950 dark:text-white">
              Description
            </CardTitle>
            <CardContent className="p-4">
              {title && (
                <p className="text-blue-950 dark:text-white">Title: {title}</p>
              )}
              {startDate && (
                <p className="text-blue-950 dark:text-white">
                  Start Date: {startDate}
                </p>
              )}
              {endDate && (
                <p className="text-blue-950 dark:text-white">
                  End Date: {endDate}
                </p>
              )}
              {schedule && (
                <p className="text-blue-950 dark:text-white">
                  Schedule: {schedule}
                </p>
              )}
              {deadline && (
                <p className="text-blue-950 dark:text-white">
                  Deadline: {deadline}
                </p>
              )}
              {compensations && (
                <p className="text-blue-950 dark:text-white">
                  Compensations: {compensations}
                </p>
              )}
              {applicationInstructions && (
                <p className="text-blue-950 dark:text-white">
                  Application instructions: {applicationInstructions}
                </p>
              )}
            </CardContent>
          </Card>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-2 justify-center">
          {responsibilities && (
            <Card className="max-w-fit bg-blue-100 dark:bg-gray-950">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-950 dark:text-white">
                  Responsibilities:
                </CardTitle>
                <Briefcase className="h-4 w-4 text-muted-foreground text-blue-950 dark:text-white" />
              </CardHeader>
              <CardContent>
                <ul>
                  {responsibilities.map((responsibility, index) => (
                    <li
                      key={index}
                      className="flex items-center text-blue-950 dark:text-white"
                    >
                      <Check className="h-4 w-4 mr-2  text-blue-950 dark:text-white" />
                      {responsibility}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {qualifications && (
            <Card className="max-w-fit bg-blue-100 dark:bg-gray-950">
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium text-blue-950 dark:text-white">
                  Qualifications:
                </CardTitle>
                <Book className="h-4 w-4 text-muted-foreground text-blue-950 dark:text-white" />
              </CardHeader>
              <CardContent>
                <ul>
                  {qualifications.map((qualification, index) => (
                    <li
                      key={index}
                      className="flex items-center text-blue-950 dark:text-white"
                    >
                      <Check className="h-4 w-4 mr-2 text-blue-950 dark:text-white" />
                      {qualification}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
        {field && <p>{field}</p>}
        {numberOfApplicants && (
          <p className="text-center text-blue-950 dark:text-white">
            Number of Applicants: {numberOfApplicants}
          </p>
        )}
        <div className="flex justify-center items-center p-2 ">
          {btn && (
            <Button className="w-1/2 dark:bg-blue-950 dark:text-white hover:bg-blue-950 dark:hover:bg-blue-700 rounded-xl">
              {btn}
            </Button>
          )}
        </div>
      </CardContent>
      <CardFooter></CardFooter>
    </Card>
  );
};

export default cardDetail;
