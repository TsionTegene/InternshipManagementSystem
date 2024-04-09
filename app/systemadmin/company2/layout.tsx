"use client";
import Navbar from "@/components/navbar/navbar";
import Sidebar from "@/components/sidebar/sidebar";
import { Button } from "@/components/ui/button";
import { FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { RiMenu4Line } from "react-icons/ri";

const Layout = ({ children }: { children: React.ReactNode }) => {
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [open, setOpen] = useState(false);

    return (
        <div className="relative h-screen">
            <header className="absolute top-0 right-0 py-3 px-12 rounded-sm">
                <div className="flex items-center space-x-5">
                    <div className="lg:hidden py-3">
                        <RiMenu4Line className="size-8" onClick={() => setOpen(!open)} />
                    </div>

                    <div className="flex-1">
                        <Navbar />
                    </div>
                </div>
                <div className="absolute -left-3 top-10">
                    <Button
                        onClick={() => setIsCollapsed(!isCollapsed)}
                        className="hidden lg:block rounded-full p-1 z-50 border dark:border-gray-600 border-dashed size-6 text-palesky bg-white dark:bg-background"
                    >
                        <FaAngleRight
                            className={`w-full h-full ${isCollapsed ? "" : "rotate-180 transition-all duration-600 "}`}
                        />
                    </Button>
                </div>
            </header>

            <aside className=" hidden lg:block overflow-y-scroll overflow-x-hidden row-custom border-r dark:border-gray-600 border-dashed absolute h-full top-0">
                <Sidebar isCollapsed={isCollapsed} open={open} setOpen={setOpen} />
            </aside>

            <main className="pt-10 px-12 overflow-y-scroll">{children}</main>
        </div>
    );
};

export default Layout;
