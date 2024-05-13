/* eslint-disable @next/next/no-img-element */
"use client";

import Link from "next/link";
import { format, parseISO } from "date-fns";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import Image from "next/image";
import { useFetchReportByMentorId } from "@/hooks/useReportQuery";
import {
  PanelTopCloseIcon,
  FileIcon,
  Swords,
  MountainSnow,
  Lightbulb,
  Trophy,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  CardTitle,
  CardHeader,
  CardDescription,
  CardContent,
  Card,
} from "@/components/ui/card";

export default function Component() {
  const { reports, isLoading, error } = useFetchReportByMentorId();
  console.log("Reports: ", reports);
  const [internreport, setReport] = useState<any>(reports[0]);
  useEffect(() => {
    setReport(reports[0]);
  }, [reports]);

  return (
    <div className="flex flex-col w-full min-h-screen gap-5">
      <Card className="transition duration-700 bg-blue-100 dark:bg-gray-950 hover:bg-blue-200 hover:shadow-sm dark:hover:bg-gray-900">
        <CardHeader>
          <CardTitle>Internship Reports</CardTitle>
          <CardDescription>List of reports of interns.</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="w-[200px]">Intern</TableHead>
                <TableHead className="w-[200px]">Internship</TableHead>
                <TableHead className="w-[300px]">Report Title</TableHead>
                <TableHead className="w-[150px]">Submitted</TableHead>
                <TableHead className="w-[150px]">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {reports.map((report: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <img
                        alt="Intern Avatar"
                        className="rounded-full"
                        height="32"
                        src={report.student.user.profilePic}
                        style={{
                          aspectRatio: "32/32",
                          objectFit: "cover",
                        }}
                        width="32"
                      />
                      <div>
                        <div className="font-medium">
                          {report.student.user.firstName}{" "}
                          {report.student.user.middleName}
                        </div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {report.student.user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{report.internship.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {format(
                        parseISO(report.internship.startDate),
                        "MMMM d, yyyy"
                      )}{" "}
                      -{" "}
                      {format(
                        parseISO(report.internship.endDate),
                        "MMMM d, yyyy"
                      )}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">{report.title}</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      {format(parseISO(report.createdAt), "MMMM, yyyy")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <div className="font-medium">
                      {format(parseISO(report.createdAt), "MMMM d, yyyy")}
                    </div>
                  </TableCell>
                  <TableCell>
                    <Link href="/#details" passHref>
                      <Button
                        variant="outline"
                        onClick={() => setReport(report)}
                      >
                        View Detail
                      </Button>
                    </Link>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>

      <Card className="transition my-5 duration-700 bg-blue-100 dark:bg-gray-950 hover:bg-blue-200 hover:shadow-sm dark:hover:bg-gray-900">
        <CardHeader className="my-5">
          <CardTitle>
            Internship Reports Details {internreport?.student?.user?.firstName}{" "}
            {internreport?.student?.user?.middleName}
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RepoertDetail internreport={internreport} />
        </CardContent>
      </Card>
    </div>
  );
}

function RepoertDetail({ internreport }: { internreport: any }) {
  return (
    <div id="details">
      <div>
        <div>
          <div className="grid grid-cols-2 gap-12">
            <div>
              <h3 className="text-lg font-bold mb-2">Description</h3>
              <p className="text-gray-600 dark:text-gray-400 font-light leading-loose">
                {internreport?.description}
              </p>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Challenges</h3>
              <ul className="list-disc pl-4 space-y-4 list-image-none ">
                {internreport?.challengesFaced.map(
                  (challenge: any, index: any) => (
                    <li key={index} className="flex gap-3 ">
                      <div>
                        <MountainSnow color="#df5d4e" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        {challenge}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Lessons Learned</h3>
              <ul className="list-disc pl-4 space-y-4 list-image-none">
                {internreport?.lessonsLearned.map((lesson: any, index: any) => (
                  <li key={index} className="flex gap-3">
                    <div>
                      <Lightbulb color="#857300" />
                    </div>
                    <div className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                      {lesson}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-4">Tasks Accomplished</h3>
              <ul className="list-disc pl-4 space-y-4 list-image-none">
                {internreport?.tasksAccomplished.map(
                  (task: any, index: any) => (
                    <li key={index} className="flex gap-3">
                      <div>
                        <Trophy color="#087a00" />
                      </div>
                      <div className="text-gray-600 dark:text-gray-400 font-light leading-relaxed">
                        {task}
                      </div>
                    </li>
                  )
                )}
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-bold mb-2">Attachment</h3>
              <div className="space-y-2">
                <Button variant="outline" asChild>
                  <a href={internreport?.attachmentUrl} target="_blank">
                    <FileIcon className="h-5 w-5 mr-2 text-gray-400" />
                    <span>Report File</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
