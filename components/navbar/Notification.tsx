import { Input } from "@/components/ui/input"
import React from 'react'
import Link from "next/link"
import { IoIosNotifications } from "react-icons/io";

export function Notification() {
    return (
        <div>
            <Link className="flex gap-3  pl-5 p-3 my-1 rounded-xl " href={"/Home"}>
                <span className="bell">
                    <IoIosNotifications />
                </span>

            </Link>
        </div>
    )
}

