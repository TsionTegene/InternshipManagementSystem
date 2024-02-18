import { Input } from "@/components/ui/input"
import React from 'react'
import Link from "next/link"

export function Search() {
    return (
        <div>
            <Link className="flex gap-3  pl-5 p-3 my-1 rounded-xl " href={"/Home"}>
                <ul><li>Home</li></ul>
            </Link>
        </div>
    )
}

