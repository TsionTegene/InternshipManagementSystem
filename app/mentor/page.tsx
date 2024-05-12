/* eslint-disable react-hooks/rules-of-hooks */
"use client";

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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

// import Footer from "@/components/footer";
const page = () => {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  useEffect(() => {
    const users = localStorage.getItem("user");
    if (users !== null) {
      setUser(JSON.parse(users)); // Only parse if users is not null
    } else {
      setUser(null); // Or set a default value or handle the case as needed
    }
  }, [router]);
  console.log("This is from useEffect: ", user);
  const name = `${user?.firstName} ${user?.middleName}`;
  console.log(name);
  console.log(user);
  return (
    <div>
      <Card className="flex p-5 bg-blue-100 dark:bg-blue-950 rounded-xl">
        <div className="">
          <CardHeader className="pb-5">
            <CardTitle className="text-blue-950 font-bold dark:text-white">
              Welcome 👋
            </CardTitle>
            <p className="text-2xl font-bold text-blue-950 dark:text-white">
              {name}
            </p>
            <CardDescription className="max-w-lg text-balance leading-relaxed pt-4 text-blue-900 dark:text-white">
              See a comprehensive list of interns who have been assigned to you.
              Take the time to evaluate their progress, provide good evaluation,
              and guide their development throughout the internship. This tool
              is designed to facilitate effective evaluation and your mentoring
              experience.
            </CardDescription>
          </CardHeader>
          <CardFooter>
            <Link
              className="hover:bg-blue-950 mt-4 bg-cyan-600 dark:bg-blue-200 dark:text-blue-950 p-2 rounded-xl text-white"
              href={"/mentor/students"}
            >
              My Interns
            </Link>
          </CardFooter>
        </div>
        <div>
          <Image
            src={"/images/girlstudying.png"}
            width={250}
            height={250}
            alt=""
            className=""
          />
        </div>
      </Card>
      <div className="m-3 ">
        <Link
          href={"/mentor/students"}
          className="text-sm text-blue-500 hover:text-blue-700 mt-10 animate-pulse hover:underline"
        >
          See Assigned Interns
        </Link>
      </div>
    </div>
  );
};

export default page;
