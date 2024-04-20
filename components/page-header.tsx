"use client";

import React from 'react'
import Image from "next/image";
import { Button } from "@/components/ui/button";
import router, { useRouter } from 'next/navigation';
import Link from "next/link";

function Header() {

  const router = useRouter()

  return (
    <nav className="flex justify-between items-center px-4 py-2 fixed top-0 left-0 w-full z-50 bg-gradient-to-b from-cyan-600/70 to-blue-400/10">
      <div className="flex items-center">
        <Link href='/'>
          <Image
            src={"/images/logo.png"}
            width={140}
            height={140}
            className="size-13 animate-pulse"
            alt={""}
          />
        </Link>
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
  )
}

export default Header