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
            <Button className=" rounded-2xl">
              <Link href="/" className="font-semibold ">
                About Us
              </Link>
            </Button>
          </li>
          <li className="hover:text-white transition duration-300 ease-in-out">
            <Button className=" rounded-2xl">
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

      <div className="landing">
        <div>
          <div className="flex flex-row">
            <div className="colone">
              <p className="title">Web Based Internship Management System</p>
              <p className="text">
                Empower your Internship program with web based Internship
                management system.
              </p>
              <p className="mb-8">
                Streamline workflows, improve communication and track intern
                status with our all-in-one platfom.
              </p>
              <Button variant="outline" className="btn">
                Get Started
              </Button>
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
                className="mr-15"
                style={{
                  background:
                    "linear-gradient(to top, rgb(154, 208, 194), rgb(23, 107, 135))",
                }}
              >
                {item.icon}
                <CardHeader>
                  <CardTitle className="text-2xl font-bold mb-2 text-white">
                    {item.title}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription>{item.description}</CardDescription>
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
