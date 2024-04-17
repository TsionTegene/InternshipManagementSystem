'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Card from '@/components/card/Cards';
import { CgOrganisation } from 'react-icons/cg';
import { FaUniversity } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { Button } from '@/components/ui/button';
import Image from "next/image";
import bg4 from "@/public/images/bg4.jpg";
import Link from "next/link";

const Signup = () => {
    const roles = [
      { title: "Student", description: "", icon: <PiStudentBold /> },
      { title: "Company", description: "", icon: <CgOrganisation /> },
      { title: "University", description: "", icon: <FaUniversity /> },
    ];

    const [selectedRole, setSelectedRole] = useState<{ title: string } | null>(null); // Track selected role

    const handleRoleSelect = (role: { title: string }) => {
      setSelectedRole(role);
    };

    const router = useRouter();

    const handleSignup = () => {
      if (!selectedRole) {
        return;
      }
      const roleLowerCase = selectedRole.title.toLowerCase();
      router.push(`/signup/${roleLowerCase}`);
    };

    return (
      <div>
        <nav className="flex justify-between items-center px-4 py-2 fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-cyan-600/70 to-blue-400/10">
          <Link href="/">
            <div className="flex items-center">
              <Image
                src={"/images/logo.png"}
                width={140}
                height={140}
                className="size-13 animate-pulse"
                alt={""}
              />
            </div>
          </Link>
          <ul className="flex space-x-4 list-none pl-4">
            <li className="hover:text-white transition duration-300 ease-in-out">
              <Button className=" rounded-2xl">
                <Link href="/" className="font-semibold ">
                  About Us
                </Link>
              </Button>
            </li>
            <li className="hover:text-white transition duration-300 ease-in-out">
              <Button className="bg-gradient-to-r hover:bg-gradient-to-l from-blue-700 to-blue-500 text-white font-bold py-2 px-4 rounded-full focus:outline-none focus:shadow-outline animate-pulse shadow-lg shadow-blue-500/50">
                <Link href="/login" className="font-semibold ">
                  Login
                </Link>
              </Button>
            </li>
            <li className="hover:text-white transition duration-300 ease-in-out">
              <Button className=" rounded-2xl">
                <Link href="/signup" className="font-semibold ">
                  Sign Up
                </Link>
              </Button>
            </li>
          </ul>
        </nav>
        <div
          className="flex bg-transparent items-center justify-center min-h-screen bg-cover bg-no-repeat"
          style={{
            backgroundImage: "url('/images/bg.jpg')",
            objectFit: "cover",
            objectPosition: "center",
            zIndex: 0,
          }}
        >
          <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto p-6 bg-white shadow-xl rounded-lg overflow-hidden">
            <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full">
              <h2 className="text-cyan-700 font-mono text-center mb-4 text-5xl font-extrabold">
                Welcome To IMS
              </h2>
              <div className="border-b border-cyan-200 pb-4">
                <h3 className="text-2xl text-center py-5 font-semibold">
                  Choose Your Role
                </h3>
                <p className="text-center text-sm text-gray-600">
                  Select The Role that You Want To Create An Account With
                </p>
              </div>
              <div className="my-5 grid gap-4">
                {roles.map((role) => (
                  <Button
                    key={role.title}
                    className="flex items-center rounded-full gap-4 w-full px-4 py-2 bg-white border border-gray-300 hover:bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500"
                    onClick={() => handleRoleSelect(role)}
                  >
                    {role.icon}
                    <span className="text-gray-700">{`Sign Up As ${role.title}`}</span>
                  </Button>
                ))}
              </div>
              <Button
                type="submit"
                className="w-full bg-cyan-600 text-white text-lg py-2 rounded-full hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                disabled={!selectedRole} // Disable button if no role is selected
                onClick={handleSignup} // Call handleSignup on click
              >
                Select
              </Button>
              <p className="mt-4 text-center text-sm text-gray-600">
                Already have an account?{" "}
                <Link
                  href={"/login"}
                  className="text-cyan-700 hover:text-cyan-900 underline"
                >
                  Login
                </Link>
              </p>
            </div>
            <div className="mt-6 md:mt-0 md:ml-6">
              <Image
                alt="bg4"
                className="rounded-lg shadow-xl"
                width={400}
                height={300}
                src={bg4}
              />
            </div>
          </div>
        </div>
      </div>
    );
};

export default Signup;
