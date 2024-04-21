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
import Header from "@/components/page-header";

export default function Home() {
  const router = useRouter();

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
      <Header />
      <div className="landing">
        <div>
          <div className="flex flex-row mt-10">
            <div className="colone lg:w-2/3 xl:w-1/2 mx-auto py-12 px-4 sm:px-6 lg:px-8 lg:py-24 ">
              <p className="leading-none max-w-2xl text-2xl md:text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-500 animate-pulse mb-4 xl:text-6xl">
                Web Based Internship Management System
              </p>
              <p className="text text-lg md:text-xl text-gray-600 mb-4 leading-relaxed">
                Empower your Internship program with our web-based Internship
                management system.
              </p>
              <p className="mb-8 text-gray-500 text-base md:text-lg leading-normal">
                Streamline workflows, improve communication, and track intern
                status with our all-in-one platform.
              </p>
              <button
                onClick={() => router.push("/login")}
                className="btn bg-gradient-to-r from-cyan-600 to-blue-900 text-white font-bold py-2 px-4 rounded-md hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-cyan-700 transition duration-300 ease-in-out animate-bounce"
              >
                Get Started
              </button>
            </div>

            <div className="coltwo">
              <Image
                src={"/images/landing.png"}
                alt={"landing"}
                width={380}
                height={400}
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
                    "radial-gradient(circle, rgba(47,90,145,0.7483368347338936) 0%, rgba(16,12,37,0.7343312324929971) 100%)",
                  transition: "transform 0.3s ease",
                  maxWidth: "300px",
                  maxHeight: "350px",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "scale(1.05)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "scale(1)")
                }
              >
                <CardHeader>
                  <CardTitle className="text-xl font-bold  text-white">
                    <span>{item.icon}</span>
                    <span> {item.title}</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-lg text-slate-200">
                    {item.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
