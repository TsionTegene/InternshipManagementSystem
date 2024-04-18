"use client";
import Image from "next/image";
import { IoIosCall, IoLogoGoogle, IoMdBusiness } from "react-icons/io";
import Cards from "@/components/card/Cards";
import "./page.css";
import { FaUniversity } from "react-icons/fa";
import { PiStudent, PiStudentBold } from "react-icons/pi";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { FaX } from "react-icons/fa6";
import { useRouter } from "next/navigation";
import "@/app/signup/page";
import Modal from "@/modals/loginmodal";
import { Login } from "@/components/login/login";
import Footer from "@/components/footer";


export default function Home() {

  const router = useRouter()

  // const [open, setOpen] = useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const Router = useRouter();
  const items = [
    {
      title: "For Business",
      description:
        "Improve efficiency, reduce administrative burden, and gain valuable insights into your Internship program.",
      icon: <IoMdBusiness className="icon mr-5" />,
    },
    {
      title: "For Student",
      description:
        "Enhance your internship experience with clear communication channels and opportunities for feedback and growth.",
      icon: <PiStudentBold className="icon" />,
    },
    {
      title: "For Educators",
      description:
        "Collaborate effectively with businesses to place students in meaningful internships and track their progress towards learning objectives.",
      icon: <FaUniversity className="icon" />,
    },
  ];

  const closeModal = () => {
    setLoginOpen(false);
  };

  return (
    <div>
      <nav className="flex justify-between items-center px-4 py-2 fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-cyan-600/70 to-blue-400/10">
        <div className="flex items-center">
          <Image
            src={"/images/logo.png"}
            width={140}
            height={140}
            className="size-13 animate-pulse"
            alt={""}
          />
        </div>
        <ul className="flex space-x-4 list-none pl-4">
          <li className="hover:text-white transition duration-300 ease-in-out">
          <Button variant="secondary" className=" rounded-2xl" onClick={() => router.push('/login')}>
                About Us
            </Button>
          </li>
          <li className="hover:text-white transition duration-300 ease-in-out">
            <Button className=" rounded-2xl" onClick={() => router.push('/login')}>
                Login
            </Button>
          </li>
          <li className="hover:text-white transition duration-300 ease-in-out">
            <Button className=" rounded-2xl" onClick={() => router.push('/signup')}>
                Sign Up
            </Button>
          </li>
        </ul>
      </nav>

      <div className="landing">
        <div>
<div className="flex flex-row">
            <div className="colone lg:w-2/3 xl:w-1/2 mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24">
              <p className="leading-none max-w-2xl text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse mb-4 xl:text-6xl">
                Web Based Internship Management System
              </p>
              <p className="text text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
                Empower your Internship program with our web-based Internship management system.
              </p>
              <p className="mb-8 text-gray-500 text-base md:text-lg leading-normal">
                Streamline workflows, improve communication, and track intern status with our all-in-one platform.
              </p>
              <button
                type="button"
                className="btn bg-gradient-to-r from-cyan-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-500 transition duration-300 ease-in-out animate-bounce">
                Get Started
              </button>
            </div>

            <div className="coltwo">
              <Image
                src={"/images/landing.png"}
                alt={"landing"}
                width={480}
                height={500}
              />
            </div>
          </div>

          <div className="flex mr-15 justify-evenly gap-10">
            {items.map((item, index) => (
              <Card
                key={index}
                className="shadow-2xl border-collapse pl-5 mr-15"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(5,0,84,0.7959558823529411) 0%, rgba(9,66,121,0.7091211484593838) 46%, rgba(10,30,158,0.7651435574229692) 100%)",
                }}
              >
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2 text-white">
                <span>{item.icon}</span>
                <span>  {item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-xl text-slate-200">{item.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
