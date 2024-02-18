"use client";

import React from "react";
import { UserNav } from "./UserNav";
import { Search } from "./Search";
import { Notification } from "./Notification";
import { ModeToggle } from "@/components/themeprovider/ModeToggle";

const Navbar = () => {
    return (
        <div className="flex justify-between">
            <Search />
            <div className="flex gap-2 items-center">
                <ModeToggle />
                <Notification />
                <UserNav />
            </div>
        </div>
    );
};

export default Navbar;