"use client"

import { Card } from "@/components/ui/card";
import { useadvisorsStudents } from "@/hooks/useStudentsActions";
import { Download, FileIcon, Lightbulb, MountainSnow, Trophy } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function Reports() {

  const { students, isLoading } = useadvisorsStudents()
  const [searchQuery, setSearchQuery] = useState("");

console.log(students)
  const filteredCompanies = students?.filter(
    (value) =>
      value.user?.firstName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      value.user?.email?.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <main className="container mx-auto px-4 md:px-6 mb-5">
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      <div className="relative w-full max-w-md  mb-8 justify-end">
        <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
        <Input
          className=" mb-3 pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white"
          placeholder="Search Report..."
          type="search"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((student, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{student.user?.firstName}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {student.Report.attachmenturl  || "Not Submitted"}
              </p>
              <div className="flex gap-4">
                {
                  student.Report.attachmenturl ? <Link
                    className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                    href="#"
                  >
                    <Download /> Report
                  </Link> :<p>Empty</p>
                  
                }

              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
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
function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}

