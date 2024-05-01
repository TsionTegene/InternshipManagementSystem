import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import React from "react";
import { FaUser } from "react-icons/fa";

const Page = () => {
  const about = [
    {
      name: "Emma Smith",
      email: "smith@gmail.com",
      pno: "+2519874563",
      currentRole: "Advisor at Wolkite University",
      imageUrl: "/images/avatar.svg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {about.map((person, index) => (
        <div key={index}>
          <Card
            className={`bg-blue-100 shadow-md rounded-md p-9 mb-4 flex items-center relative dark:bg-slate-900 md:flex-wrap md:justify-between`}
          >
            <div className="absolute top-16 left-6 rounded-full">
              <Image
                src={person.imageUrl}
                width={"75"}
                height={"75"}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="flex-grow md:w-1/2">
              <h3 className="text-lg font-semibold">Overall</h3>
            </div>
          </Card>
          <div
            className={`rounded-md p-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4`}
          >
            <div>
              <div className="mb-4">
                <p className="font-semibold">Name:</p>
                <p>{person.name}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Email:</p>
                <p>{person.email}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Phone Number:</p>
                <p>{person.pno}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold ">Current Role:</p>
              <Card className="bg-blue-100 shadow-md rounded-md p-4 max-w-fit dark:bg-slate-900">
                <p>{person.currentRole}</p>
              </Card>
            </div>
          </div>
          <div>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
              Chat With Advisor
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
