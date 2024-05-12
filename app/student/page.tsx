"use client"
import React from "react";

import { Button } from "@/components/ui/button"
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from "next/link";
const user = localStorage.getItem("user")
const userName = user ? JSON.parse(user as string).firstName : null
const page = () => {
  return (
    <div>
      <Card className="flex p-5 bg-blue-100 dark:bg-blue-950 rounded-xl">
        <div className="">
          <CardHeader className="pb-5">
            <CardTitle className="text-blue-950 font-bold dark:text-white">Welcome 👋</CardTitle>
            <p className="text-2xl font-bold text-blue-950 dark:text-white">{userName}</p>
            <CardDescription className="max-w-lg text-balance leading-relaxed pt-4 text-blue-900 dark:text-white">
              Discover exciting internship opportunities and streamline your internship experience with our dynamic dashboard. Gain valuable insights and manage your internships seamlessly. Start your journey towards a successful career today!
            </CardDescription>

          </CardHeader>
          <CardFooter>
            <Link className="hover:bg-blue-950 mt-4 bg-cyan-600 dark:bg-blue-200 dark:text-blue-950 p-2 rounded-xl text-white" href={'/student/myinternships'}>My Internships</Link>
          </CardFooter>
        </div>
        <div>
          <Image
            src={"/images/girlstudying.png"}
            width={250}
            height={250}
            alt=""
            className="" />
        </div>
      </Card>
      <div className="m-3 ">
        <Link href={'/student/internshipopportunities'} className="text-sm text-blue-500 hover:text-blue-700 mt-10 animate-pulse hover:underline">Explore available internships</Link>
      </div>
    </div>
  )
}

export default page;
