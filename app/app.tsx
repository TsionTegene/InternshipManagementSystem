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
import { GiCheckMark } from "react-icons/gi";
import Breadcrumb from "@/components/landingpage/breadcrumb";

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
  const features = [
    { name: 'Real-world experience' },
    { name: 'Career development opportunities' },
    { name: 'Networking opportunities' },
    { name: 'Project-based learning' },
    { name: 'Continuous learning and growth' },
    { name: 'Supportive community' },
  ];
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
    <div className="flex flex-col min-h-screen box-border ">
      <Header />
      <div className="landing ">
        <div className="w-full ">
         <Breadcrumb />

          <div className="bg-white">
            <div className="" style={{
              height: '5rem', background: 'linear-gradient(to bottom, rgba(180, 255, 255, 1) 0%, rgba(255, 255, 255, 1) 100%)',width: "100%"
            }}></div>

            {/* goal */}
            
            <div className="flex flex-col items-center justify-center py-8">
              <p
                className="text-5xl font-bold text-center leading-tight mx-auto md:text-6xl"
                style={{ lineHeight: "1.1", maxWidth: "56rem", letterSpacing: "-.025em" }}
              >
                Providing the best possible start to your internship journey
              </p>
              <p
                className="text-center px-8 leading-relaxed md:text-lg md:px-0"
                style={{ maxWidth: "48rem", lineHeight: "1.625" }}
              >
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ullamcorper metus. Nam scelerisque, augue efficitur aliquet tempus, magna augue porttitor lacus, non faucibus ligula tellus
              </p>
            </div>

            <div className="flex justify-center md:justify-center">  {/* Added flex and justify-center */}
  <ul className="flex flex-wrap gap-2 mb-5 md:flex-row md:justify-center md:max-w-3xl ">  
    {features.map((feature, index) => (
      <li key={index} className="flex gap-1 pl-5"><GiCheckMark />{feature.name}</li>
    ))}
  </ul>
</div>


            <div className="flex flex-col md:flex-row md:gap-10">  {/* Added responsive styles */}
  <div className="w-full md:w-1/2 ">
    <Image
      src={'/images/students.svg'}
      width={'500'}
      height={'500'}
      alt={"students"}
      className="pl-12"
    />
  </div>
  <div className="flex flex-col justify-center items-center w-full md:w-1/2 px-2 py-8">
    <p className="text-2xl font-bold text-center leading-tight md:text-left md:text-4xl" style={{ lineHeight: '1.1', maxWidth: '56rem', letterSpacing: '-.025em' }}>Our goal is to ensure transformative, impactful internships for career success  </p>
    <p className="text-lg pt-4 leading-relaxed text-center md:text-left md:text-xl" style={{ maxWidth: '48rem', lineHeight: '1.625' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ullamcorper metus. Nam scelerisque, augue efficitur aliquet tempus, magna augue porttitor lacus, non faucibus ligula tellus.</p>
  </div>
</div>
            <div className="" style={{
              height: '5rem',
              background: 'linear-gradient(to bottom, rgba(255, 255, 255, 1) 0%, rgba(180, 255, 255, 1) 100%)',
            }}>
            </div>
          </div>


<p className="text-3xl p-6 font-semibold text-center md:text-left md:ml-0 md:text-2xl" style={{ lineHeight: '1.1', maxWidth: '56rem', letterSpacing: '-.025em' }}>Our Services</p>
     
     {/* card      */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center md:justify-items-between px-4 py-8">  {/* Added responsive grid layout */}
  {items.map((item, index) => (
    <Card
      key={index}
      className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900"
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

          <div className="flex gap-8 p-10 box-border">
            <div className="grid grid-cols-2 p-5 gap-3 ">
              <div className="">
                <div>
                <Image
                  src={'/images/lady.jpg'}
                  width={'370'}
                  height={'400'}
                  alt={"students"}
                  className="p-2 rounded-3xl"
                />
                <p className="text-center text-blue-950">Rebecca Asrat</p>
                <p className="text-sm text-center">Frontend Developer</p>
                </div>

                <div>
                <Image
                  src={'/images/man.jpg'}
                  width={'300'}
                  height={'300'}
                  alt={"students"}
                  className="p-2 rounded-3xl"
                />
                <p className="text-center text-blue-950">Abel Zeleke</p>
                <p className="text-sm text-center">Backend Developer</p>
                </div>

              </div>
              <div className="pt-10">
                <div>
                <Image
                  src={'/images/man.jpg'}
                  width={'300'}
                  height={'300'}
                  alt={"students"}
                  className="p-2 rounded-3xl"
                />
                <p className="text-center text-blue-950">Bereket Tadele</p>
                <p className="text-sm text-center">Backend Developer</p>
                </div>
                <div>
                <Image
                  src={'/images/lady.jpg'}
                  width={'370'}
                  height={'400'}
                  alt={"students"}
                  className="p-2 rounded-3xl"
                />
                <p className="text-center text-blue-950">Tsion Tegene</p>
                <p className="text-sm text-center">Frontend Developer</p>
                </div>
              </div>
            </div>
            <div className="" style={{ display: 'flex', justifyContent: 'center', boxSizing: 'border-box', alignSelf: 'center', flexDirection: 'column' }}>
              <p className="text-4xl font-bold  items-center leading-tight animate-pulse" style={{ lineHeight: '1.1', maxWidth: '56rem', letterSpacing: '-.025em' }}>Meet our team</p>
              <p className="text-lg pt-4 leading-relaxed " style={{ maxWidth: '48rem', lineHeight: '1.625' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et ullamcorper metus. Nam scelerisque, augue efficitur aliquet tempus, magna augue porttitor lacus, non faucibus ligula tellus.</p>
            </div>
          </div>

        </div>
      </div>
    </div >
  );
}
