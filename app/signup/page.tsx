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
    const [selectedRole, setSelectedRole] = useState(null);
    const roles = [
        { title: 'Student', description: '', icon: <PiStudentBold /> },
        { title: 'Company', description: '', icon: <CgOrganisation /> },
        { title: 'University', description: '', icon: <FaUniversity /> },
    ];

    const handleRoleSelect = (role) => {
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
      // <div className='p-10'>
      //     <p className='text-2xl text-center'>Sign up as:</p>
      //     <RadioGroup defaultValue="option-one">
      //         <div className='flex items-center justify-center gap-2'>
      //             {roles.map((role, index) => (
      //                 <div key={index} className="flex  flex-col space-y-2 p-2">
      //                     <RadioGroupItem
      //                         value={`option-${index}`}
      //                         id={`option-${index}`}
      //                         className='flex ml-auto'
      //                         onClick={() => handleRoleSelect(role)}
      //                     />
      //                     <Card title={role.title} description={role.description} icon={role.icon} />
      //                 </div>
      //             ))}
      //         </div>
      //     </RadioGroup>
      //     <div className='flex justify-center p-5'>
      //         <Button className='btn rounded-full' onClick={handleSignup}>Sign Up</Button>
      //     </div>
      // </div>

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
                Enter your email below to login to your account
              </p>
            </div>
            <div className="my-5 grid gap-4">
              {" "}
              {/* Use a grid for spacing and responsiveness */}
              <Button className="flex items-center gap-4 w-full px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <FaUniversity className="text-cyan-500" />{" "}
                <span className="text-gray-700">University</span>{" "}
              </Button>
              <Button className="flex items-center gap-4 w-full px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <CgOrganisation className="text-cyan-500" />{" "}
                <span className="text-gray-700">Company</span>
              </Button>
              <Button className="flex items-center gap-4 w-full px-4 py-2 rounded-full bg-white border border-gray-300 hover:bg-gray-100 shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500">
                <PiStudentBold className="text-cyan-500" />{" "}
                <span className="text-gray-700">Sign Up As Student</span>
              </Button>
            </div>

            <Button
              type="submit"
              className="w-full bg-cyan-600 text-white text-lg py-2 rounded-full hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
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
    );
};

export default Signup;
