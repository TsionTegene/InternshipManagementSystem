"use client"
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
// import Footer from "@/components/footer";
const user = localStorage.getItem("user")
const userName = user ? JSON.parse(user as string).firstName : null

const page = () => {
  
  return (
    <div>
      <Card className="flex p-5 bg-blue-100 dark:bg-blue-950 rounded-xl">
        <div className="">
          <CardHeader className="pb-5">
            <CardTitle className="text-blue-950 font-bold dark:text-white">
              Welcome 👋
            </CardTitle>
            <p className="text-2xl font-bold text-blue-950 dark:text-white">
              {userName}
            </p>
            <CardDescription className="max-w-lg text-balance leading-relaxed pt-4 text-blue-900 dark:text-white">
              Empower your students with personalized support as they embark on
              their professional journeys. Shape success together with your students!
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              className="hover:bg-blue-950 mt-4 bg-cyan-600 dark:bg-blue-200 dark:text-blue-950 p-2 rounded-xl text-white"
              href={"/advisor/students"}
            >
              My Students
            </Link>
          </CardFooter>
        </div>
        <div>
          <Image
            src={"/images/teacher.png"}
            width={300}
            height={300}
            alt=""
            className=""
          />
        </div>
      </Card>
    </div>
  );
};

export default page;
