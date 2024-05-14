"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, FormProvider } from "react-hook-form";
import { z } from "zod";
import { useStudentRegister } from "@/hooks/useStudentsActions";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

import {
  CircleFadingPlus,
  EyeIcon,
  EyeOffIcon,
  MoveUpRight,
  Phone,
  Plus,
  UploadIcon,
  X,
} from "lucide-react";
import { useEffect, useState } from "react";
import {
  useUniversityActions,
  useDepartment,
  useFilterDepartment,
  useUniversityFetch,
} from "@/hooks/useUniversityActions";
import { Textarea } from "@/components/ui/textarea";
import { TbSquareRoundedPlus } from "react-icons/tb";
import { PiDeviceTabletSpeakerFill } from "react-icons/pi";
import { useRouter } from "next/navigation";
import useUserStore from "@/stores/user.store";
import useItemStore from "@/stores/selectedItem";

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
      message: "Enter your university.",
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
    image: z.optional(z.string().min(1)), // Optional profile picture field
    resume: z.optional(z.string().min(1)),
  })
  .refine((data) => data.password == data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export function StudentForm() {
  const router = useRouter();
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const [resume, setResume] = useState<File | null>(null);
  const [skills, setSkills] = useState<string[]>([]);
  const [selectedUniversity, setSelectedUniversity] = useState("");
  const [selectedImage, setSelectedImage] = useState("No Image Chosen");
  const [selectedFile, setSelectedFile] = useState("No File Chosen");
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const setselectedItemID = useItemStore(
    (state: any) => state.setSelectedItemID
  );
  const selectedItemID = useItemStore((state: any) => state.selectedItemID);
  const { signupStudent, isSLoading, isSError, isSSuccess } =
    useStudentRegister();
  const { universities, error, isLoading } = useUniversityFetch();
  // const { departments, isDLoading, isDError } = useDeparmentData();
  const {
    departments,
    isLoading: Dloading,
    departmentData,
    Error,
  } = useFilterDepartment();
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

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = async (formValues: any) => {
    console.log("formValues: ", formValues);
    const formData = new FormData();
    for (const field in formValues) {
      if (field == "confirm_password" || field == "image" || field == "resume")
        continue;
      console.log(field, formValues[field]);
      formData.append(field, formValues[field]);
      // console.log(formData.getAll(field))
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
    // formData.append("universityName", selectedItemID)
    console.log("Form Data: ", formData.getAll("skills"));

    const student = signupStudent;
    const tokens = student.mutateAsync(formData);
    form.reset()
    console.log("tokens: ", tokens);
    if (isSSuccess) {
      console.log(tokens)
      console.log("Student Registered Successfully");
      router.push("/login");
    }
  };

  console.log("deppp=>", departments)
  useEffect(() => { console.log("dep in ui", departments) }, [departmentData]);
  return (
    <Card className="mx-auto max-w-4xl my-10 shadow-2xl rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl">Sign Up</CardTitle>
        <CardDescription>
          Enter your information to create an account
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, onInvalid)}
            className="space-y-8"
          >
            <div className="grid gap-5">
              <div className="grid grid-cols-2 gap-5">
                {/* First Name */}
                <FormField
                  control={form.control}
                  name="firstName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        First Name <span className="text-red-700">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="First Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Phone Number */}
                <FormField
                  control={form.control}
                  name="phoneNum"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                        Phone Number <span className="text-red-700">*</span>
                      </FormLabel>
                      <FormControl>
                        <div className="flex items-center gap-4">
                          <Phone />
                          <Input {...field} placeholder="(09)-123-45-678" />
                        </div>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Middle Name */}
                <FormField
                  control={form.control}
                  name="middleName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Middle Name <span className="text-red-700">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Middle Name" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                {/* Email */}
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        Email <span className="text-red-700">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="Email" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* Username */}
                <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>
                        User Name <span className="text-red-700">*</span>
                      </FormLabel>
                      <FormControl>
                        <Input placeholder="Username" {...field} />
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
                      <FormLabel>
                        Password <span className="text-red-700">*</span>
                      </FormLabel>
                      <FormControl className="relative">
                        <div className="flex items-center w-full">
                          <Input
                            placeholder="Password"
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <span
                            className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer ${
                              showPassword ? "text-blue-500" : "text-gray-400"
                            }`}
                            onClick={togglePasswordVisibility}
                          >
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
                {/* University */}
                <FormField
                  control={form.control}
                  name="universityName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>University</FormLabel>
                      <FormControl>
                        <div className="grid gap-3">
                          {isLoading && <div>Loading...</div>}
                          {error && <div>Error Occured</div>}
                          {!isLoading && !error && (
                            <Select
                              onValueChange={async (value) => {
                                field.onChange(value);
                                setselectedItemID(value);
                                console.log("main value", value);
                                departmentData;
                              }}
                              aria-label="Select University"
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select University" />{" "}
                              </SelectTrigger>
                              {Array.isArray(universities) &&
                              universities.length > 0 ? (
                                <SelectContent>
                                  {universities &&
                                    universities?.map((university: any) => (
                                      <SelectItem
                                        key={university.id}
                                        value={university.id}
                                      >
                                        {university.name}
                                      </SelectItem>
                                    ))}
                                </SelectContent>
                              ) : (
                                <div>No University found</div>
                              )}
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
                            placeholder="Confirm Password"
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

                {/* Department */}
                 <FormField
                  control={form.control}
                  name="departmentName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department</FormLabel>
                      <FormControl>
                        <div className="grid gap-3">
                          {Dloading && <div>Loading...</div>}
                          {Error && <div>Error Occured</div>}
                          {!Dloading && !Error && (
                            <Select
                              onValueChange={(value) => {
                                field.onChange(value);
                              }}
                              aria-label="Select Department"
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select Department" />{" "}
                              </SelectTrigger>
                              <SelectContent>
                                {departments?.map((department: any) => (
                                  <SelectItem
                                    key={department.id}
                                    value={department.id}
                                  >
                                    {department.name}
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
                {/* Year */}
                <FormField
                  control={form.control}
                  name="year"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Year</FormLabel>
                      <FormControl>
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Year" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value={"1"}>1th</SelectItem>
                            <SelectItem value={"2"}>2th</SelectItem>
                            <SelectItem value={"3"}>3th</SelectItem>
                            <SelectItem value={"4"}>4th</SelectItem>
                            <SelectItem value={"5"}>5th</SelectItem>
                          </SelectContent>
                        </Select>
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {/* GPA */}
                <FormField
                  control={form.control}
                  name="gpa"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>GPA</FormLabel>
                      <FormControl>
                        <Input placeholder="GPA" {...field} />
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
                          {skills.map((skill, index) => (
                            <Badge
                              key={index}
                              className="font-bold flex m-1 pl-1 p-2 gap-1.5"
                            >
                              <div className="">{skill}</div>
                              <X
                                size={14}
                                className="mt-0.5 hover:cursor-pointer"
                                onClick={deleteSkill(index)}
                              />
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            id="skillsArray"
                            placeholder="Add your skills here"
                          />
                          <Button
                            asChild
                            size="icon"
                            className="p-2 rounded-full hover:translate-y-1 h-fit w-fit"
                            variant="outline"
                          >
                            <Plus
                              size={28}
                              strokeWidth={1.5}
                              onClick={skillsInput}
                            />
                          </Button>
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
              <Button type="submit" className="w-full" disabled={isSLoading}>
                {isSLoading ? (
                  <>
                    <svg
                      className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        stroke-width="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Creating Account...
                  </>
                ) : (
                  "Create an account"
                )}
              </Button>
            </div>
            <div className="mt-4 text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="underline">
                Sign in
              </Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
