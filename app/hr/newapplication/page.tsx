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
import { Textarea } from "@/components/ui/textarea";
import { useCreateInternship } from "@/hooks/useInternshipActions";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "title must be at least 2 characters.",
  }),
  startDate: z.date({
    required_error: "A start date is required.",
  }),

  endDate: z.date({
    required_error: "A end date is required.",
  }),

  schedule: z.string().min(2, {
    message: "Schedule must be at least 2 characters.",
  }),

  compensations: z.string().min(2, {
    message: "Compensations must be at least 2 characters.",
  }),

  applicationInstructions: z.string().min(2, {
    message: "Application Instructions must be at least 2 characters.",
  }),

  description: z.string().min(2, {
    message: "Description must be at least 2 characters.",
  }),

  deadline: z
    .date({
      required_error: "A start date is required.",
    })
    .optional(),
});

const page = () => {
  const { createInternship, isPending, isSuccess, isError } =
    useCreateInternship();
  const [responsibilities, setResponsibilities] = useState<string[]>([]);
  const [qualifications, setQualifications] = useState<string[]>([]);
  const responsibilitiesInput = () => {
    const input = document.getElementById(
      "responsibilitiesArray"
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
        (_, i) => i !== index
      );
      setResponsibilities(newResponsibilities);
    };
  };

  const qualificationsInput = () => {
    const input = document.getElementById(
      "qualificationsArray"
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
    console.log("responsibilities: ", responsibilities);
    console.log("qualifications: ", qualifications);
    const data = { 
      ...formValues,
      responsibilities: responsibilities,
      qualifications: qualifications,
     };
    // const result = await createInternship(data);
    console.log(data)
  };

  return (
    <Card className="mx-auto max-w-3xl my-10">
      <CardHeader>
        <CardTitle className="text-xl">New Internship</CardTitle>
        <CardDescription>
          Enter the internship application information.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit, onInvalid)}
            className="space-y-8"
          >
            <div className="grid gap-5">
              <div className="grid grid-cols-2 gap-7">
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
                  name="startDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Start Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[350px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
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
                  name="endDate"
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel>End Date</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[350px] pl-3 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick an end date</span>
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
                      <FormLabel>Internship Type</FormLabel>
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
                          {responsibilities.map((responsibilitiy, index) => (
                            // console.log("responsibility: ", responsibilitiy),
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
                          ))}
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
                          {qualifications.map((qualification, index) => (
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
                          ))}
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
                  name="applicationInstructions"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Application Instructions</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Please describe the application steps in detail."
                          className="resize-none"
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
                      <FormLabel>Internship Description</FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Describe the internship opportunity in detail here."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="deadline"
                  render={({ field }) => (
                    <FormItem className="flex flex-col w-full">
                      <FormLabel>Deadline</FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-[350px] pl-4 text-left font-normal",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
                              ) : (
                                <span>Pick a dealine for the application.</span>
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
