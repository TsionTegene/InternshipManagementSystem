"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React, { useState, useEffect } from "react";
import { FaUser } from "react-icons/fa";
import { useRouter } from "next/navigation";
import {
  useAddMentor,
  useFindMentorsByCompanyId,
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
"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Plus, X } from "lucide-react";
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
    challenges: z.string().array().min(2, {
      message: "Challenges faced.",
    }),
    lessons: z.string().array().min(2, {
      message: "lessons learned.",
    }),
    tasks: z.string().array().min(6, {
      message: "Tasks accomplished.",
    }),
    password: z.string().min(6, {
      message: "Rewrite the password.",
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
  const [challenges, setChallenges] = useState<string[]>([]);
  const [lessons, setLessons] = useState<string[]>([]);
  const [tasks, setTasks] = useState<string[]>([]);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { addMentor, isLoading, isSuccess } = useAddMentor();

  const challengesInput = () => {
    const input = document.getElementById("challengesArray") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value == "") return;

    if (challenges.includes(input.value)) {
      input.value = "";
      return;
    }
    setChallenges([...challenges, input.value]);
    input.value = "";
  };

  const lessonsInput = () => {
    const input = document.getElementById("lessonsArray") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value == "") return;

    if (lessons.includes(input.value)) {
      input.value = "";
      return;
    }
    setLessons([...lessons, input.value]);
    input.value = "";
  };

    const tasksInput = () => {
    const input = document.getElementById("tasksArray") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value == "") return;

    if (tasks.includes(input.value)) {
      input.value = "";
      return;
    }
    setTasks([...tasks, input.value]);
    input.value = "";
  };

  const deleteTask = (index: number) => {
    return () => {
      const newTasks = tasks.filter((_, i) => i !== index);
      setTasks(newTasks);
    };
  };

  const deleteChallenge = (index: number) => {
    return () => {
      const newChallenges = challenges.filter((_, i) => i !== index);
      setChallenges(newChallenges);
    };
  };

  const deleteLessons = (index: number) => {
    return () => {
      const newLessons = lessons.filter((_, i) => i !== index);
      setLessons(newLessons);
    };
  };
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    // defaultValues: {
    //   title: "",
    //   description: "",
    //   challenges: [],
    //   lessons: [],
    //   tasks: [],
    // },
  });
  // const togglePasswordVisibility = () => {
  //   setShowPassword(!showPassword);
  // };

  // const toggleConfirmPasswordVisibility = () => {
  //   setShowConfirmPassword(!showConfirmPassword);
  // };

  const onInvalid = (errors: any) => console.error(errors);
  function onSubmit(values: z.infer<typeof formSchema>) {
    const result = addMentor(values);
    console.log(values);
    form.reset();
  }
const Page = () => {
  const router = useRouter();
  const about = [
    {
      name: "Emma Smith",
      email: "smith@gmail.com",
      pno: "+2519874563",
      currentRole: "Mentor at INSA",
      imageUrl: "/images/avatar.svg",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      {about.map((person, index) => (
        <div key={index}>
          <Card
            className={`bg-blue-100 shadow-md rounded-md p-9 mb-4 flex items-center relative dark:bg-slate-900 md:flex-wrap md:justify-between`}
          >
            <div className="absolute top-16 left-6 rounded-full">
              <Image
                src={person.imageUrl}
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
                <p>{person.name}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Email:</p>
                <p>{person.email}</p>
              </div>
              <div className="mb-4">
                <p className="font-semibold">Phone Number:</p>
                <p>{person.pno}</p>
              </div>
            </div>
            <div>
              <p className="font-semibold ">Current Role:</p>
              <Card className="bg-blue-100 shadow-md rounded-md p-4 max-w-fit dark:bg-slate-900">
                <p>{person.currentRole}</p>
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
              <DialogTitle>submit your report to your mentor</DialogTitle>
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
                              Title <span className="text-red-700">*</span>
                            </FormLabel>
                            <FormControl>
                              <Input placeholder="Title of your internship" {...field} />
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
                  name="challenges"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="mr-2 mt-2">Challenges Faced</FormLabel>
                        <div className="flex flex-wrap">
                          {challenges.map((challenge, index) => (
                            <Badge
                              key={index}
                              className="font-bold flex m-1 pl-1 p-2 gap-1.5"
                            >
                              <div className="">{challenge}</div>
                              <X
                                size={14}
                                className="mt-0.5 hover:cursor-pointer"
                                onClick={deleteChallenge(index)}
                              />
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            id="challengesArray"
                            placeholder="Add challenges you faced"
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
                              onClick={challengesInput}
                            />
                          </Button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                         <FormField
                  control={form.control}
                  name="lessons"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="mr-2 mt-2">Lessons Learned</FormLabel>
                        <div className="flex flex-wrap">
                          {lessons.map((lesson, index) => (
                            <Badge
                              key={index}
                              className="font-bold flex m-1 pl-1 p-2 gap-1.5"
                            >
                              <div className="">{lesson}</div>
                              <X
                                size={14}
                                className="mt-0.5 hover:cursor-pointer"
                                onClick={deleteLessons(index)}
                              />
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            id="lessonsArray"
                            placeholder="Add lessons you learned"
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
                              onClick={lessonsInput}
                            />
                          </Button>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />

                        <FormField
                  control={form.control}
                  name="tasks"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="mr-2 mt-2">Tasks Accomplished</FormLabel>
                        <div className="flex flex-wrap">
                          {tasks.map((task, index) => (
                            <Badge
                              key={index}
                              className="font-bold flex m-1 pl-1 p-2 gap-1.5"
                            >
                              <div className="">{task}</div>
                              <X
                                size={14}
                                className="mt-0.5 hover:cursor-pointer"
                                onClick={deleteTask(index)}
                              />
                            </Badge>
                          ))}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input
                            id="tasksArray"
                            placeholder="Add tasks you accomplished"
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
                              onClick={tasksInput}
                            />
                          </Button>
                        </div>
                      </FormControl>
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
      {/* <div className="border rounded-lg overflow-hidden">
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
      </div> */}
    </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
