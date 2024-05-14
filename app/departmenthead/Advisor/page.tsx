"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { useAdvisorData } from "@/hooks/useUniversityActions";
import { CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

const page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { user } = useAdvisorData();
  const filteredCompanies =
    user && Array.isArray(user)
      ? user.filter(
        (value) =>
          value.user?.firstName
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase()) ||
          value.user?.email
            ?.toLowerCase()
            .includes(searchQuery.toLowerCase())
      )
      : [];
useEffect(()=>{


}, [user])
  return (
    <CardContent>
      <div>
        <h2 className="text-xl font-bold mb-4 text-center">Staff Members</h2>
        <div className="relative w-full max-w-md  mb-8">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="justify-end mb-8 pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white"
            placeholder="Search Advisors..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <Table>
          <TableCaption></TableCaption>

          <TableHeader>
            <TableRow>
              <TableHead>Profile Picture</TableHead>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Phone Number</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Number of Students</TableHead>

              {/* <TableHead>Action</TableHead> */}
            </TableRow>
          </TableHeader>
          <TableBody>
            {filteredCompanies.length > 0 ? (
              filteredCompanies.map((student, index) => (
                <TableRow key={index}>
                  <TableCell>
                    <img
                      src={student.user?.profilePic}
                      alt="Profile"
                      className="w-12 h-12 rounded-full"
                    />
                  </TableCell>
                  <TableCell>{student.user?.firstName}</TableCell>
                  <TableCell>{student.user?.email}</TableCell>
                  <TableCell>{student.user?.phoneNum}</TableCell>
                  <TableCell>{student.user?.roleName}</TableCell>
                  <TableCell>{student.studentCount}</TableCell>

                  <TableCell></TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan={6}>No staffs found</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
    </CardContent>
  );
};

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

export default page;
