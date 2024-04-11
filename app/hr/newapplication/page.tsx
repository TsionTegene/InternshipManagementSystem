"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import React, { useState } from 'react'
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Plus, PlusCircleIcon, UploadIcon, X } from "lucide-react"
const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  startdate: z.string().min(2, {
    message: "Start Date must be at least 2 characters.",
  }),

  enddate: z.string().min(2, {
    message: "End Date must be at least 2 characters.",
  }),

  duration: z.string().min(2, {
    message: "Duration must be at least 2 characters.",
  }),

  schedule: z.string().min(2, {
    message: "Schedule must be at least 2 characters.",
  }),

  compensations: z.string().min(2, {
    message: "Compensations must be at least 2 characters.",
  }),

  responsibilities: z.string().min(2, {
    message: "Responsibilities must be at least 2 characters.",
  }),

  qualifications: z.string().min(2, {
    message: "Qualifications must be at least 2 characters.",
  }),

  applicationinstructions: z.string().min(2, {
    message: "Application Instructions must be at least 2 characters.",
  }),

  deadline: z.string().min(2, {
    message: "Deadline must be at least 2 characters.",
  }),
  profilepicture: z.optional(z.string().min(1)), // Optional profile picture field

})

const page = () => {
  const [profileimg, setprofileimg] = useState("");

  const [position, setPosition] = React.useState("bottom")
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState("No Image Chosen");


  const responsibilitiesInput = () => {
    const input = document.getElementById("responsibilitiesArray") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value == "") return;

    if (responsibilities.includes(input.value)) {
      input.value = "";
      return;
    }
    setResponsibilities([...responsibilities, input.value]);
    input.value = "";
  };

  const deleteResponsibilities = (index: number) => {
    return () => {
      console.log("index: ", index);
      const newResponsibilities = responsibilities.filter((_, i) => i !== index);
      setResponsibilities(newResponsibilities);
    };
  };

  const qualificationsInput = () => {
    const input = document.getElementById("qualificationsArray") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value == "") return;

    if (qualifications.includes(input.value)) {
      input.value = "";
      return;
    }
    setQualifications([...qualifications, input.value]);
    input.value = "";
  };

  const deleteQualifications = (index: number) => {
    return () => {
      console.log("index: ", index);
      const newQualifications = qualifications.filter((_, i) => i !== index);
      setQualifications(newQualifications);
    };
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
  });
  return (
    <Card className="mx-auto max-w-3xl my-10">
      <CardHeader>
        <CardTitle className="text-xl">New Internship</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-8">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="title"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Title</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="startdate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Start Date</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="enddate"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>End Date</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="schedule"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Schedule</FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Input placeholder="Select schedule" {...field} />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Schedule</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={field.value} onValueChange={field.onChange}>
                              <DropdownMenuRadioItem value="Full Time">Full Time</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Part Time">Part Time</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="compensations"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Compensation</FormLabel>
                      <FormControl>
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Input placeholder="Select compensation" {...field} />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Compensation</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup value={field.value} onValueChange={field.onChange}>
                              <DropdownMenuRadioItem value="Free">Free</DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Paid">Paid</DropdownMenuRadioItem>
                            </DropdownMenuRadioGroup>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="responsibilities"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="mr-2 mt-2">Responsibilities</FormLabel>
                        <div className="flex flex-wrap">
                          {responsibilities.map(
                            (responsibilitiy, index) => (
                              console.log("responsibility: ", responsibilitiy),
                              (
                                <div
                                  key={index}
                                  className="flex m-2 p-2 gap-1.5 rounded-md bg-slate-800 hover:bg-slate-600"
                                >
                                  <FormLabel className="font-bold text-white">
                                    {responsibilitiy}
                                  </FormLabel>
                                  <X
                                    size={14}
                                    className="mt-0.5 hover:cursor-pointer text-white"
                                    onClick={deleteResponsibilities(index)}
                                  />
                                </div>
                              )
                            )
                          )}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input id="responsibilitiesArray" />
                          <div className='mt-3 ml-2'>
                            <PlusCircleIcon
                              onClick={responsibilitiesInput}
                            />
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="duration"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Duration</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="qualifications"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="mr-2 mt-2">Qualifications</FormLabel>
                        <div className="flex flex-wrap">
                          {qualifications.map(
                            (qualification, index) => (
                              console.log("responsibility: ", qualification),
                              (
                                <div
                                  key={index}
                                  className="flex m-2 p-2 gap-1.5 rounded-md bg-slate-800 hover:bg-slate-600 "
                                >
                                  <FormLabel className="font-bold text-white">
                                    {qualification}
                                  </FormLabel>
                                  <X
                                    size={14}
                                    className="mt-0.5 hover:cursor-pointer text-white"
                                    onClick={deleteQualifications(index)}
                                  />
                                </div>
                              )
                            )
                          )}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input id="qualificationsArray" />
                          <div className='mt-3 ml-2'>
                            <PlusCircleIcon
                              onClick={qualificationsInput}
                            />
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="applicationinstructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Application Instructions</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Deadline</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="profile"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Picture</FormLabel>
                      <FormControl className="flex flex-col">
                        <div className="">
                          <div className="flex flex-row items-center">
                            <input
                              type="file"
                              id="custome-input"
                              onChange={(e) => {
                                if (e.target.files) {
                                  setSelectedImage(e.target.files[0].name);
                                }
                              }}
                              hidden
                            />
                            <label
                              htmlFor="custome-input"
                              className="w-full flex text-sm justify-center text-slate-800 mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-100 hover:bg-slate-200 cursor-pointer "
                            >
                              <UploadIcon />
                              <span className="mx-3 text-sm">
                                Upload Image
                              </span>
                            </label>
                          </div>
                          <label
                            htmlFor="custome-input"
                            className="text-slate-500 truncate ..."
                          >
                            {selectedImage && (
                              <span className="block mt-2 text-sm text-gray-500">
                                Selected image: {selectedImage}
                              </span>
                            )}
                          </label>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  )
}

export default page