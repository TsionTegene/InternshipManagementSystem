/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
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
import { EyeIcon, EyeOffIcon, Phone } from "lucide-react";
import { useState, useEffect } from "react";
import {
  useAddMentor,
  useFindMentorsByCompanyId,
} from "@/hooks/useCompanyActions";

const phoneValidation = new RegExp(
  /^(?:(?:\+251|00?251)?\s?)?(?:(9\d{8})|([1-9]\d\s?\d{6}))$/
);

const formSchema = z
  .object({
    firstName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    middleName: z.string().min(2, {
      message: "Middle name must be at least 2 characters.",
    }),
    userName: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    email: z.string().min(2, {
      message: "First name must be at least 2 characters.",
    }),
    password: z.string().min(6, {
      message: "Password must be at least 6 characters.",
    }),
    confirm_password: z.string().min(6, {
      message: "Rewrite the password.",
    }),
    phoneNum: z
      .string()
      .min(8, { message: "Must have at least 1 character" })
      .max(15, { message: "Must have at most 15 characters" })
      .regex(phoneValidation, { message: "invalid phone" }),
  })
  .refine((data) => data.password == data.confirm_password, {
    message: "Passwords do not match",
    path: ["confirm_password"],
  });

export default function Component() {
  const { mentors, isMLoading } = useFindMentorsByCompanyId();
  const mentor = mentors;

  console.log("mentors:", mentor);
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { addMentor, isLoading, isSuccess } = useAddMentor();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      middleName: "",
      userName: "",
      email: "",
      password: "",
      confirm_password: "",
      phoneNum: "",
    },
  });
  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const onInvalid = (errors: any) => console.error(errors);
  function onSubmit(values: z.infer<typeof formSchema>) {
    const result = addMentor(values);
    console.log(values);
    form.reset();
  }
  return (
    <div className="w-full max-w-full mx-auto py-8 px-4 md:px-6">
      <div className="flex items-center justify-between mb-6">
        <Dialog>
          <DialogTrigger asChild>
            <Button variant="outline">Add New Mentor</Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-4xl">
            <DialogHeader>
              <DialogTitle>Add New Mentor</DialogTitle>
              <DialogDescription>
                Fill out the form to add a new mentor to the list.
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
                              Phone Number{" "}
                              <span className="text-red-700">*</span>
                            </FormLabel>
                            <FormControl>
                              <div className="flex items-center gap-4">
                                <Phone />
                                <Input
                                  {...field}
                                  placeholder="(09)-123-45-678"
                                />
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
                              Middle Name{" "}
                              <span className="text-red-700">*</span>
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
                              <Input
                                type="email"
                                placeholder="Email"
                                {...field}
                              />
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
                                    showPassword
                                      ? "text-blue-500"
                                      : "text-gray-400"
                                  }`}
                                  onClick={togglePasswordVisibility}
                                >
                                  {showPassword ? (
                                    <EyeIcon
                                      className="h4 w-4"
                                      aria-hidden="true"
                                    />
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
                                  type={
                                    showConfirmPassword ? "text" : "password"
                                  }
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
                                    <EyeIcon
                                      className="h4 w-4"
                                      aria-hidden="true"
                                    />
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
                    </div>
                    <Button
                      type="submit"
                      className="w-full"
                      disabled={isLoading}
                    >
                      {isLoading ? (
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
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
      <div className="border rounded-lg overflow-hidden">
        <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
          <CardHeader>
            <CardTitle>Mentor List</CardTitle>
            <CardDescription>
              Emloyers added to mentor interns by your company.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Name</TableHead>
                  <TableHead>Email</TableHead>
                  <TableHead>Username</TableHead>
                  <TableHead>Phone Number</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {isMLoading ? (
                  <div className="flex min-w-full p-10 justify-center items-center">
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
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    <p>Loading...</p>
                  </div>
                ) : (
                  mentors?.map((mentor: any, index: any) => (
                    <TableRow key={index}>
                      <TableCell>
                        {mentor.user.firstName} {mentor.user.middleName}
                      </TableCell>
                      <TableCell>{mentor.user.email}</TableCell>
                      <TableCell>{mentor.user.userName}</TableCell>
                      <TableCell>{mentor.user.phoneNum}</TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
