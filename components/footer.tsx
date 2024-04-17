import React from "react";
import {
    FaArrowRight,
    FaGithub,
} from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";
import { MdOutlineLocalPostOffice } from "react-icons/md";
import { IoHome, IoLogoGoogle } from "react-icons/io5";
import { IoIosCall } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="shadow-md bg-gray-900 text-white py-8 px-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between">
        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h6 className="font-bold text-xl">About Us</h6>
          <p className="mt-2 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc congue
            euismod facilisis. Sed mollis, orci non vestibulum aliquet, felis
            sem placerat ex, vitae pulvinar turpis dolor at enim.
          </p>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h6 className="font-bold text-xl">Services</h6>
          <ul className="mt-2 list-disc text-sm pl-4 space-y-1">
            <li>Internship Application</li>
            <li>Student Evaluation</li>
            <li>Feedback and Rating</li>
            <li>Internship Posting</li>
            <li>Progress Tracking</li>
          </ul>
        </div>

        <div className="w-full md:w-1/4 mb-4 md:mb-0">
          <h6 className="font-bold text-xl">Contact</h6>
          <ul className="mt-2 flex flex-col space-y-2 text-sm">
            <li className="flex items-center">
              <IoHome className="mr-2 text-lg" />
              Wolkite University
            </li>
            <li className="flex items-center">
              <MdOutlineLocalPostOffice className="mr-2 text-lg" />
              info@gmail.com
            </li>
            <li className="flex items-center">
              <IoIosCall className="mr-2 text-lg" />+251 911 111 111
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col items-center mt-8 md:mt-0">
        <div className="border-b border-gray-700 w-full mb-4" />
        <p className="text-sm text-center mb-2">© 2024 Copyright: IMS.com</p>
        <div className="flex space-x-4 justify-center">
          <RiFacebookCircleLine className="text-3xl text-gray-400 hover:text-gray-100" />
          <FaGithub className="text-3xl text-gray-400 hover:text-gray-200" />
          <IoLogoGoogle className="text-3xl text-gray-400 hover:text-gray-200" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
