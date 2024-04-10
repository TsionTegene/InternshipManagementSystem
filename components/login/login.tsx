"use client"
import Image from "next/image";
import { LuArrowUpRight } from "react-icons/lu";
import Link from "next/link";
import * as React from "react"
import { Checkbox } from "@/components/ui/checkbox"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { FaX } from "react-icons/fa6";
import '@/app/signup/page'

export function  Login(){
  
    return (
        // <div className="flex items-center">
                <Card className="w-[480px] ml-28 rounded-3xl" style={{ background: 'linear-gradient(to top, rgb(154, 208, 194), rgb(23, 107, 135))' }}>
                <CardHeader>
                    <div>

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
         
       
    )
}
