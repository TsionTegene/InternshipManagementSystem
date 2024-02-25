"use client"
import Image from "next/image";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import Navbar from "@/components/navbar/navbar";
import { LuArrowUpRight } from "react-icons/lu";
import { IoIosCall, IoLogoGoogle, IoMdBusiness } from "react-icons/io";
import Cards from "@/components/card/Cards";
import './page.css';
import { FaArrowRight, FaGithub, FaMarkdown, FaSortDown, FaStar, FaUniversity, FaUpload } from "react-icons/fa";
import { PiStudent, PiStudentBold } from "react-icons/pi";
import { buttonVariants } from "@/components/ui/button"
import Link from "next/link";
import { IoHome } from "react-icons/io5";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { RiFacebookCircleLine } from "react-icons/ri";
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
// import { Label } from "@radix-ui/react-dropdown-menu";
import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { FaX } from "react-icons/fa6";


export default function Home() {

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const handleLoginOpen = () => setLoginOpen(true);
  const handleLoginClose = () => setLoginOpen(false);

  const items = [
    { title: 'For Business', description: 'Improve efficiency, reduce administrative burden, and gain valuable insights into your Internship program.', icon: <IoMdBusiness className="icon" /> },
    { title: 'For Student', description: 'Enhance your internship experience with clear communication channels and opportunities for feedback and growth.', icon: <PiStudentBold className="icon" /> },
    { title: 'For Educators', description: ' Collaborate effectively with businesses to place students in meaningful internships and track their progress towards learning objectives.', icon: <FaUniversity className="icon" /> },
  ];

  return (
    <div className="landing">
      <nav className="flex justify-between">
        <div className={`ml-5 py-4`}>
          <Image
            src={"/images/logo.png"}
            width={140}
            height={140}
            className="size-13" alt={""} />
        </div>
        <div className="flex gap-5 ml-auto pl-5 p-3 my-2  rounded-xl items-center ">
          <Link className={buttonVariants({ variant: "ghost" })} href={"#"}>About Us</Link>
          <Button variant="outline" className="btn" onClick={handleLoginOpen}>Login</Button>
          <Button variant="outline" className="btn" onClick={handleOpen}>sign up</Button>
        </div>
      </nav>

      {loginOpen &&
        <div className="flex items-center">
          <Card className="w-[480px] ml-28 rounded-3xl" style={{ background: 'linear-gradient(to top, rgb(154, 208, 194), rgb(23, 107, 135))' }}>
            <CardHeader>
              <div>

                <FaX onClick={handleLoginClose} style={{ float: "right" }} className='text-white' />
              </div>
              <div className="flex flex-col items-center">
                <CardTitle className="text-white">Login</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex w-full items-center gap-12">
                  <div className="ml-10">

                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">User Name:</Label>
                      <Input id="name" placeholder="User Name" />
                    </div>

                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">Password:</Label>
                      <Input id="name" placeholder="Password" type="password" />
                    </div>
                    <div className="flex justify-between">

                      <div className="flex items-center space-x-2">
                        <Checkbox id="remember" />
                        <label
                          htmlFor="remember"
                          className="text-sm text-blue-950 font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                          Remember Me
                        </label>
                      </div>
                      <div>
                        <Link href="#" className="text-sm text-blue-600" >Forgot Password?</Link>
                      </div>
                    </div>
                  </div>

                </div>
              </form>
            </CardContent>
            <CardFooter className="flex flex-col justify-center items-center">
              <Button className="w-56 rounded-3xl mr-2">
                Login
              </Button>
              <div className="flex gap-2 mt-3">
                <h6 className="text-sm text-blue-950">Not Registered Yet?</h6>
                <Link href="#" className="text-sm text-blue-600" >Create Account</Link>
                <LuArrowUpRight className="text-blue-600 -ml-2 mt-0.5" />
              </div>
            </CardFooter>
          </Card>
          <div className="coltwo">
            <Image
              src={"/images/landing.png"}
              alt={"landing"}
              width={480}
              height={500}
              className="ml-10"
            />
          </div>
        </div>

      }

      {open &&
        <div className="flex items-center">
          <Card className="w-[950px] ml-28 rounded-3xl" style={{ background: 'linear-gradient(to top, rgb(154, 208, 194), rgb(23, 107, 135))' }}>
            <CardHeader>
              <div>

                <FaX onClick={handleClose} style={{ float: "right" }} className='text-white' />
              </div>
              <div className="flex flex-col items-center">
                <CardTitle className="text-white">Sign up</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <form>
                <div className="flex w-full items-center gap-12">
                  <div className="ml-10">
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">First Name:</Label>
                      <Input id="name" placeholder="First Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">Middle Name:</Label>
                      <Input id="name" placeholder="Middle Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">User Name:</Label>
                      <Input id="name" placeholder="User Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="role" className="text-white text-md">Role</Label>
                      <Select>
                        <SelectTrigger id="role">
                          <SelectValue placeholder="Select" />
                        </SelectTrigger>
                        <SelectContent position="popper">
                          <SelectItem value="student">Student</SelectItem>
                          <SelectItem value="company">Company</SelectItem>
                          <SelectItem value="university">University</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                  <div className="pl-20 gap-28">
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">Phone Number:</Label>
                      <Input id="name" placeholder="User Name" />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">Password:</Label>
                      <Input id="name" placeholder="Password" type="password" />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">Confirm Password:</Label>
                      <Input id="name" placeholder="Confirm Password" type="password" />
                    </div>
                    <div className="flex flex-col space-y-1.5 w-80 mb-4">
                      <Label htmlFor="name" className="text-white text-md">Profile Picture:</Label>
                      <Button variant="outline" className="btn w-36" ><FaUpload className="mr-3" />Upload</Button>
                    </div>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardFooter className="flex justify-between">
              <Button className="w-32 rounded-3xl ml-14">
                SignUp
              </Button>
            </CardFooter>
          </Card>
        </div>
      }



      {!open && !loginOpen &&
        <div>
          <div className="flex flex-row">

            <div className="colone">
              <p className="title">Web Based Internship Management System</p>
              <p className="text">Empower your Internship program with web based Internship management system.</p>
              <p className="mb-8">Streamline workflows, improve communication and track intern status with our all-in-one platfom.</p>
              <Button variant="outline" className="btn">Get Started</Button>
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
          <div className="flex ml-15 justify-evenly">
            {items.map((item) => (
              <Cards title={item.title} description={item.description} icon={item.icon} />
            ))}
          </div>
        </div>
      }

      <div className="footer bg-gray-800 text-white p-6 mt-10 rounded-3xl">
        <div className="container mx-auto flex flex-col md:flex-row justify-between">

          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h6 className="font-bold ">About Us</h6>
            <p className="mt-2 text-white text-sm">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue euismod facilisis. Sed mollis, orci non vestibulum aliquet, felis sem placerat ex, vitae pulvinar turpis dolor at enim.</p>
          </div>

          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h6 className="font-bold">Services</h6>
            <ul className="mt-2">
              <li className="text-white flex"><FaArrowRight className="mr-1 " /><p className="text-white text-10 text-sm">Internship Application</p></li>
              <li className="text-white flex"><FaArrowRight className="mr-1" /><p className="text-white text-10 text-sm">student evaluation</p></li>
              <li className="text-white flex"><FaArrowRight className="mr-1" /><p className="text-white text-10 text-sm">feedback and rating</p></li>
              <li className="text-white flex"><FaArrowRight className="mr-1" /><p className="text-white text-10 text-sm">internship posting</p></li>
              <li className="text-white flex"><FaArrowRight className="mr-1" /><p className="text-white text-10 text-sm">progress tracking</p></li>

            </ul>
          </div>

          <div className="w-full md:w-1/4 mb-4 md:mb-0">
            <h6 className="font-bold">Contact</h6>
            <ul className="mt-2">
              <li className="flex text-white mr-1">
                <IoHome className="mr-1 size-5" />
                <p className="text-white text-10 text-sm">Wolkite university</p>
              </li>
              <li className="flex text-white">
                <MdOutlineLocalPostOffice className="mr-1 size-5" />
                <p className="text-white text-sm">info@gmail.com</p>
              </li>
              <li className="flex text-white">
                <IoIosCall className="mr-1 size-6" />
                <p className="text-white text-sm">+ 01 000 000 00</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center mt-4 md:mt-0">
          <div className="border-b-2 border-white mb-2 w-6/12 mt-5"></div>
          <p className="mb-2 text-sm text-white">&copy; 2024 Copyright: IMS.com</p>
          <div className="flex space-x-4">
            <RiFacebookCircleLine className=" size-5" />
            <FaGithub className=" size-5" />
            <IoLogoGoogle className=" size-5" />
          </div>
        </div>

      </div>
    </div>

  )
}
