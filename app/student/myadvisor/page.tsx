"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  useAddMentor,
  // useFindMentorsByCompanyId,
} from "@/hooks/useCompanyActions";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, UploadIcon, X } from "lucide-react";
import { useMyAdvisorandMentor, useStudent, useSubmiteReport } from "@/queries/useStudentQueries";
import { json } from "node:stream/consumers";
const phoneValidation = new RegExp(
  /^(?:(?:\+251|00?251)?\s?)?(?:(9\d{8})|([1-9]\d\s?\d{6}))$/
);



const formSchema = z

  .object({
    title: z.string().min(2, {
      message: "title must be at least 2 characters.",
    }),
    description: z.string().min(2, {
      message: "Middle name must be at least 2 characters.",
    }),
    challengesFaced: z.string().min(2, {
      message: "Challenges faced.",
    }),
    lessonsLearned: z.string().min(2, {
      message: "lessons learned.",
    }),
    tasksAccomplished: z.string().min(6, {
      message: "Tasks accomplished.",
    }),

    attachmentUrl: z.optional(z.string().min(1)),

  })

const Page = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [challenges, setChallenges] = useState<string[]>([]);
  const [lessons, setLessons] = useState<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState("No Image Chosen");
  const [selectedFile, setSelectedFile] = useState("No File Chosen");
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const userId = localStorage.getItem("userId")
  const stdId = localStorage.getItem("stdId")

  const { data: about, isSuccess } = useMyAdvisorandMentor(userId as string)
  const { mutateAsync } = useSubmiteReport()
  const { data: student } = useStudent(userId as string)
  let mentorId = "";
  let advisorId = "";
  let internshipId = "";

  if (student && student.length > 0) {
    // Accessing the properties directly from the first student object
    const firstStudent = student[0]?.Student[0];
    mentorId = firstStudent?.mentorId || "";
    advisorId = firstStudent?.advisorId || "";
    internshipId = firstStudent?.internshipId || "";
  }


  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onInvalid = (errors: any) => console.error(errors);
  console.log("m\n", mentorId, "adv\n", advisorId, "intern\n", internshipId)

  function onSubmit(formValues: any) {

    const formData = new FormData();
    for (const field in formValues) {
      if (field == "confirm_password" || field == "image" || field == "resume")
        continue;
      console.log(field, formValues[field]);
      formData.append(field, formValues[field]);
      // console.log(formData.getAll(field))
    }

    if (profileImg) {
      console.log("image: ", profileImg);
      formData.append("attachmentUrl", profileImg);
    }
    //@ts-ignore
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
    }
    // formData.append("mentorId", mentorId);
    formData.append("advisorId", advisorId);
    formData.append("internshipId", internshipId);


    formData.append("studentId", stdId as string)
    mutateAsync(formData);
    console.log(formValues);
    console.log("m", mentorId, "adv", advisorId, "intern", internshipId)
    form.reset();
  }
  console.log("this is id  " + student
  )


  if (!isSuccess) {
    return (<div>Loading</div>)
  }
  return (
    <div className="container mx-auto px-4 py-8">
      {about?.map((person, index) => (
        <div key={index}>
          <Card
            className={`bg-blue-100 shadow-md rounded-md p-9 mb-4 flex items-center relative dark:bg-slate-900 md:flex-wrap md:justify-between`}
          >
            <div className="absolute top-16 left-6 rounded-full">
              <img
                src={person?.mentor?.user?.profilePic}
                width={"75"}
                height={"75"}
                alt=""
                className="rounded-full"
              />
            </div>
            <div className="flex-grow md:w-1/2">
              <h3 className="text-lg font-semibold">Overall</h3>
            </div>
          </Card>
          <div
            className={`rounded-md p-6 mb-4 grid grid-cols-1 md:grid-cols-2 gap-4`}
          >
            <div>
              <div className="mb-4">
                <p className="font-semibold">Name:</p>
                <p>{person?.advisor?.user?.firstName}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Email:</p>
                <p>{person?.advisor?.user?.email}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Phone Number:</p>
                <p>{person?.advisor?.user?.phoneNum}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold ">Current Role:</p>
              <Card className="bg-blue-100 shadow-md rounded-md p-4 max-w-fit dark:bg-slate-900">
                <p>{person?.advisor?.user?.roleName}</p>
              </Card>
            </div>
          </div>
          <div className="w-full max-w-full mx-auto py-8 px-4 md:px-6">
            <div className="flex items-center justify-between mb-6">
              <Dialog>
                <DialogTrigger asChild>
                  <Button variant="outline">Submit Report</Button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-4xl">
                  <DialogHeader>
                    <DialogTitle>
                      submit your report to your mentor
                    </DialogTitle>
                    <DialogDescription>
                      Fill out the form to send a report to your mentor.
                    </DialogDescription>
                  </DialogHeader>
                  <div className="grid gap-4 py-4">
                    <Form {...form}>
                      <form
                        onSubmit={form.handleSubmit(onSubmit, onInvalid)}
                        className="space-y-8"
                      >
                        <div className="grid gap-5">
                          <div className="grid grid-cols-2 gap-5">
                            <FormField
                              control={form.control}
                              name="title"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>
                                    Title{" "}
                                    <span className="text-red-700">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Title of your internship"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                                    Description{" "}
                                    <span className="text-red-700">*</span>
                                  </FormLabel>
                                  <FormControl>
                                    <div className="flex items-center gap-4">
                                      <Input
                                        {...field}
                                        placeholder="Description about your internship"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="challengesFaced"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="mr-2 mt-2">
                                    Challenges Faced
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Add challenges you faced"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="lessonsLearned"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="mr-2 mt-2">
                                    Lessons Learned
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Add lessons you learned"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="tasksAccomplished"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel className="mr-2 mt-2">
                                    Tasks Accomplished
                                  </FormLabel>
                                  <FormControl>
                                    <Input
                                      placeholder="Add tasks you accomplished"
                                      {...field}
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />


                            <FormField
                              control={form.control}
                              name="attachmentUrl"
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
                                              setProfileImg(e.target.files[0]);
                                            }
                                          }}
                                          hidden
                                        />
                                        <label
                                          htmlFor="custome-input"
                                          className="w-full flex text-sm justify-center text-slate-800 mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-100 hover:bg-slate-200 cursor-pointer "
                                        >
                                          <UploadIcon />
                                          <span className="mx-3 text-sm ">
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
                                            Selected pdf: {selectedImage}
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
                          <Button
                            type="submit"
                            className="w-full"
                          // disabled={isLoading}
                          >
                            Submit
                          </Button>
                        </div>
                      </form>
                    </Form>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
  // };
};

export default Page;
