/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z, date } from "zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import React, { useState } from "react";
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
  CalendarIcon,
  Plus,
  PlusCircleIcon,
  UploadIcon,
  X,
} from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import router from "next/router";
import { DatePicker } from "@/components/datepicker/datepicker";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { addDays, format } from "date-fns";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  startdate: z.date({
    required_error: "A start date is required.",
  }),

  enddate: z.date({
    required_error: "A end date is required.",
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
});

const page = () => {
  const [profileimg, setprofileimg] = useState("");
  const [date, setDate] = React.useState<Date | null>(null);
  const [position, setPosition] = useState("bottom");
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [qualifications, setQualifications] = useState<string[]>([]);
  const [selectedImage, setSelectedImage] = useState("No Image Chosen");

  const responsibilitiesInput = () => {
    const input = document.getElementById(
      "responsibilitiesArray",
    ) as HTMLInputElement;
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
      const newResponsibilities = responsibilities.filter(
        (_, i) => i !== index,
      );
      setResponsibilities(newResponsibilities);
    };
  };

  const qualificationsInput = () => {
    const input = document.getElementById(
      "qualificationsArray",
    ) as HTMLInputElement;
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

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = async (formValues: any) => {
    console.log("formValues: ", formValues);

    // const tokens = student.mutate(formData);
    // console.log("tokens: ", tokens);
    // if (isSSuccess) {
    //   console.log(tokens)
    //   console.log("Student Registered Successfully");
    //   router.push("/login");
    // }
  };

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
          <form
            onSubmit={form.handleSubmit(onSubmit, onInvalid)}
            className="space-y-8"
          >
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
                    <FormItem className="flex flex-col">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a start date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="enddate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[240px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground",
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a end date</span>
                              )}
                              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                            </Button>
                          </FormControl>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0" align="start">
                          <Calendar
                            mode="single"
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
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
                            <DropdownMenuRadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <DropdownMenuRadioItem value="Full Time">
                                Full Time
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Part Time">
                                Part Time
                              </DropdownMenuRadioItem>
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
                            <Input
                              placeholder="Select compensation"
                              {...field}
                            />
                          </DropdownMenuTrigger>
                          <DropdownMenuContent className="w-56">
                            <DropdownMenuLabel>Compensation</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuRadioGroup
                              value={field.value}
                              onValueChange={field.onChange}
                            >
                              <DropdownMenuRadioItem value="Free">
                                Free
                              </DropdownMenuRadioItem>
                              <DropdownMenuRadioItem value="Paid">
                                Paid
                              </DropdownMenuRadioItem>
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
                        <FormLabel className="mr-2 mt-2">
                          Responsibilities
                        </FormLabel>
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
                            ),
                          )}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input id="responsibilitiesArray" />
                          <div className="mt-3 ml-2">
                            <PlusCircleIcon onClick={responsibilitiesInput} />
                          </div>
                        </div>
                      </FormControl>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name="qualifications"
                  render={({ field }) => (
                    <FormItem>
                      <div className="flex">
                        <FormLabel className="mr-2 mt-2">
                          Qualifications
                        </FormLabel>
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
                            ),
                          )}
                        </div>
                      </div>
                      <FormControl>
                        <div className="flex gap-2">
                          <Input id="qualificationsArray" />
                          <div className="mt-3 ml-2">
                            <PlusCircleIcon onClick={qualificationsInput} />
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
              </div>
              <Button type="submit">Submit</Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default page;
