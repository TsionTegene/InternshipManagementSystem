
import React from 'react'
import Image from "next/image";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

const Breadcrumb = () => {
    const router = useRouter()
    return (
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="flex flex-row pt-16">
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
      </motion.div>
    );
}

export default Breadcrumb