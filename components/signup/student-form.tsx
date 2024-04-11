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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  CircleFadingPlus,
  EyeIcon,
  EyeOffIcon,
  MoveUpRight,
  Plus,
  UploadIcon,
  X,
} from "lucide-react";
import { useState } from "react";
import { useUniversityData } from "@/hooks/useFetchUniversity";
import { useDeparmentData } from "@/hooks/useFetchDepartment";
import { Textarea } from "@/components/ui/textarea";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { PiDeviceTabletSpeakerFill } from "react-icons/pi";

const initialValue = "Bereket";

const formSchema = z
  .object({
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
  })
  .refine((data) => data.password == data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export function StudentForm() {
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [skills, setSkills] = useState<string[]>([]);

  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedImage, setSelectedImage] = useState("No Image Chosen");
  const [selectedFile, setSelectedFile] = useState("No File Chosen");

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const { universities, isLoading, isError, error } = useUniversityData();
  const { departments, isDLoading, isDError, errorD } = useDeparmentData();

  const skillsInput = () => {
    const input = document.getElementById("skillsArray") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value == "") return;

    if (skills.includes(input.value)) {
      input.value = "";
      return;
    }
    setSkills([...skills, input.value]);
    input.value = "";
  };

  const deleteSkill = (index: number) => {
    return () => {
      const newSkills = skills.filter((_, i) => i !== index);
      setSkills(newSkills);
    };
  };

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
      if (field == "confirm_password") continue;
      console.log(field, formValues[field]);
      formData.append(field, formValues[field]);
    }

    skills.forEach((skill: string) => {
      console.log("skill: ", skill);
      formData.append("skills", skill);
    });
    
    if (profileImg) {
      console.log("image: ", profileImg);
      formData.append("image", profileImg);
    }
    if (resume) {
      console.log("Resume", resume);
      formData.append("resume", resume);
    }

    // const tokens = studentSignup.mutate(formData);
    // console.log("tokens: ", tokens);
    // return tokens;
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
                        <div className="grid gap-3">
                          {isLoading && <div>Loading...</div>}
                          {isError && <div>Error Occured</div>}
                          {!isLoading && !isError && (
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                              }}
                              aria-label="Select University"
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select University" />{" "}
                                {/* here */}
                              </SelectTrigger>
                              <SelectContent>
                                {universities.map((university: any) => (
                                  <SelectItem
                                    key={university.id}
                                    value={university.name}
                                  >
                                    {university.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div>
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
                        {/* <div className="grid gap-3">
                          {isDLoading && <div>Loading...</div>}
                          {isDError && <div>Error Occured</div>}
                          {!isDLoading && !isDError && (
                            <Select
                              {...field}
                              aria-label="Select Department"
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select Department" />
                              </SelectTrigger>
                              <SelectContent>
                                {departments.map((department: any) => (
                                  <SelectItem
                                    key={department.id}
                                    value={department.name}
                                  >
                                    {department.name}
                                  </SelectItem>
                                ))}
                              </SelectContent>
                            </Select>
                          )}
                        </div> */}
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
                  name="Skills"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="mr-2 mt-2">Skills</FormLabel>
                        <div className="flex flex-wrap">
                          {skills.map(
                            (skill, index) => (
                              (
                                <div
                                  key={index}
                                  className="flex m-2 p-2 gap-1.5 rounded-md bg-slate-800 hover:bg-slate-600"
                                >
                                  <FormLabel className="font-bold">
                                    {skill}
                                  </FormLabel>
                                  <X
                                    size={14}
                                    className="mt-0.5 hover:cursor-pointer"
                                    onClick={deleteSkill(index)}
                                  />
                                </div>
                              )
                            )
                          )}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input id="skillsArray" />
                          <div className="border-2 max-h-fit rounded-md">
                            <Plus
                              onClick={skillsInput}
                              size={36}
                              strokeWidth={0.5}
                              color="#bdbdbd"
                              className="hover:bg-slate-800 hover:cursor-pointer"
                            />
                          </div>
                        </div>
                      </FormControl>
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
