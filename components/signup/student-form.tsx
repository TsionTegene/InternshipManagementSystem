"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { set, useForm } from "react-hook-form";
import { z } from "zod";
import { useStudentSignup } from "@/hooks/useStudentsignup";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { EyeIcon, EyeOffIcon, MoveUpRight, UploadIcon } from "lucide-react";
import { useState } from "react";

const initialValue = "Bereket";

const formSchema = z.object({
  firstName: z.string().min(2, {
    message: "firstname must be at least 2 characters.",
  }),
  middleName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  universityName: z.string().min(2, {
    message: "Enter your department.",
  }),
  departmentName: z.string().min(2, {
    message: "Enter your department.",
  }),
  userName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  confirm_password: z.string().min(6, {
    message: "Rewrite the password.",
  }),
  phoneNum: z.string().min(2, {
    message: "Enter your phone number.",
  }),
  year: z.string().min(1, {
    message: "Enter a valid year.",
  }),
  gpa: z.string().min(1, {
    message: "Enter a valid GPA.",
  }),
  // image: z.optional(z.string().min(1)), // Optional profile picture field
  // resume: z.optional(z.string().min(1)),
}).refine((data) => data.password == data.confirm_password, {
  message: "Passwords do not match",
  path: ["confirm_password"],
})

export function StudentForm() {
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);

  const [selectedImage, setSelectedImage] = useState("No Image Chosen");
  const [selectedFile, setSelectedFile] = useState("No File Chosen");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const studentSignup = useStudentSignup();

  const onSubmit = async (formValues: any) => {
    const formData = new FormData();
    for (const field in formValues) {
      if(field == "confirm_password") continue;
      console.log(field, formValues[field]);
      formData.append(field, formValues[field]);
    }

    if (profileImg) {
      console.log("image: ", profileImg)
      formData.append("image", profileImg);
    }
    if (resume) {
      console.log("Resume", resume);
      formData.append("resume", resume);
    }

    const skillsArray = ["JavaScript", "NestJS"];

    skillsArray.forEach((skill) => {
      formData.append("skills", skill);
    });

    const tokens = studentSignup.mutate(formData);
    console.log("tokens: ", tokens);
    return tokens;
  };
  return (
    <Card className="mx-auto max-w-3xl my-10 ">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <div className="grid gap-4">
              <div className="grid grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>First Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="phoneNum"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Phone Number</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Middle Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Password field with toggle button */}
                <FormField
                  control={form.control}
                  name="password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Password</FormLabel>
                      <FormControl className="relative">
                        <div className="flex items-center w-full">
                          <Input
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <span
                            className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer ${
                              showPassword ? "text-blue-500" : "text-gray-400"
                            }`}
                            onClick={togglePasswordVisibility}
                          >
                            {/* Use pseudo-element for the icon */}
                            {showPassword ? (
                              <EyeIcon className="h4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="universityName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Confirm Password field with toggle button */}
                <FormField
                  control={form.control}
                  name="confirm_password"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Confirm Password</FormLabel>
                      <FormControl className="relative">
                        <div className="flex items-center w-full">
                          <Input
                            type={showConfirmPassword ? "text" : "password"}
                            {...field}
                          />
                          <span
                            className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer ${
                              showConfirmPassword
                                ? "text-blue-500"
                                : "text-gray-400"
                            }`}
                            onClick={toggleConfirmPasswordVisibility}
                          >
                            {/* Use pseudo-element for the icon */}
                            {showConfirmPassword ? (
                              <EyeIcon className="h4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="departmentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="gpa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GPA</FormLabel>
                      <FormControl>
                        <Input {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="image"
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

                <FormField
                  control={form.control}
                  name="resume"
                  render={({ field }) => (
                    <FormItem className="col-start-2">
                      <FormLabel>Resume</FormLabel>
                      <FormControl className="flex flex-col">
                        <div className="">
                          <div className="flex flex-row items-center">
                            <input
                              type="file"
                              id="file-custome-input"
                              onChange={(e) => {
                                if (e.target.files) {
                                  setSelectedFile(e.target.files[0].name);
                                  setResume(e.target.files[0]);
                                }
                              }}
                              hidden
                            />
                            <label
                              htmlFor="file-custome-input"
                              className="w-full flex text-sm justify-center text-slate-800 mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-100 hover:bg-slate-200 cursor-pointer "
                            >
                              <UploadIcon />
                              <span className="mx-3 text-sm ">Upload File</span>
                            </label>
                          </div>
                          <label
                            htmlFor="file-custome-input"
                            className="text-slate-500 truncate ..."
                          >
                            {selectedFile && (
                              <span className="block mt-2 text-sm text-gray-500">
                                Selected file: {selectedFile}
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
              <Button type="submit" className="w-full">
                Create an account
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="#" className="underline">
                Sign in
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
