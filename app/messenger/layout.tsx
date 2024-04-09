"use client";
import Navbar from "@/components/navbar/navbar";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";
import Sidebar from "@/components/chat/Sidebar";


const Layout = ({ children, }: {
    children: React.ReactNode
}) => {
    const [open, setOpen] = useState(false);



    
    return (
        <div
            className={`grid  grid-rows-custom  h-screen transition-all duration-300  
                  lg:grid-cols-notCollapsed 
                `}
        >
            <header className=" relative  py-3 px-12  rounded-sm ">
                <div className="flex items-center space-x-5">
                    <div className="lg:hidden py-3">
                        <RiMenu4Line className="size-8" onClick={() => setOpen(!open)} />
                    </div>

                    <div className="flex-1">
                        <Navbar />
                    </div>
                </div>
                <div className="absolute -left-3 top-10  ">
       
                </div>
            </header>

            <aside className=" hidden lg:block overflow-y-scroll overflow-x-hidden row-custom border-r dark:border-gray-600 border-dashed ">
                {
                  //@ts-ignore
                     <Sidebar  />
                }
             
            </aside>

            <main className="pt-10  px-12 overflow-y-scroll ">{children}</main>
        </div>
    );
};

export default Layout;