/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Slider } from "@/components/ui/slider";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { ChevronDown } from "lucide-react";
import { useQueryClient } from "@tanstack/react-query";
import { useFetchAssignedStudents } from "@/hooks/useMentorActions";
import { useRouter } from "next/navigation";
import {evaluateStudentByMentor} from "@/api/student/mutations"

const formSchema = z.object({
  q1: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q2: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q3: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q4: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q5: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q6: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q7: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q8: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q9: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q10: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q11: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q12: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q13: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q14: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
  q15: z
    .number()
    .min(0, {
      message: "Value must be at least 0.",
    })
    .max(10, {
      message: "Value must be at most 10.",
    })
    .default(0),
});

const StudentEvaluatePage = ({ params }: { params: any }) => {
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      q1: 0,
      q2: 0,
      q3: 0,
      q4: 0,
      q5: 0,
      q6: 0,
      q7: 0,
      q8: 0,
      q9: 0,
      q10: 0,
      q11: 0,
      q12: 0,
      q13: 0,
      q14: 0,
      q15: 0,
    },
  });

  const router = useRouter();
  const queryClient = useQueryClient();
  const onSubmit = async (formValues: any) => {
    console.log(formValues);
    let result = 0;
    for (let key in formValues) {
      result += formValues[key];
    }
    const studentId = params.id;
    console.log(studentId);
    const point = (result / 150) * 100
    console.log(point);
    const response = await evaluateStudentByMentor(studentId, point.toString());
    queryClient.invalidateQueries("fetchStudentsByAssignedMentor");
    router.push("/mentor/evaluate");
  };
  return (
    <Card className="mx-auto max-w-4xl my-5 shadow-2xl rounded-lg overflow-hidden">
      <CardHeader>
        <CardTitle className="text-xl">Intern Evaluation Form</CardTitle>
        <CardDescription>
          Evaluate interns based on the following criteria.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="max-w-2xl mx-auto my-12">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
              <FormField
                control={form.control}
                name="q1"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 1 </FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Attends regularly and punctually</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q2"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 2</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Accuracy of work and attention to detail.</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q3"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 3</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>
                            Completes assigned tasks on time/punched at work.
                          </span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              {value}
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              5
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q4"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 4</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>
                            Adapts to working conditions and environment.
                          </span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              {value}
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              5
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q5"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 5</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Follows up on assignments.</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q6"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 6</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>
                            Has ability to communicate with superiors.
                          </span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q7"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 7</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Has ability to judge or take descisions.</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q8"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 8</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Follows through with assigned duties.</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q9"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question - {value}</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>
                            Has the ability to apply theory in practice.
                          </span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q10"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 10</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Works well indendently.</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q11"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 11</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Profesional attitude.</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q13"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 13</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>
                            Knowledge of the field specific to the internship.
                          </span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q14"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 14</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Work ethic</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="q15"
                render={({ field: { value, onChange } }) => (
                  <FormItem>
                    <FormLabel>Question 15</FormLabel>
                    <FormControl>
                      <Collapsible>
                        <CollapsibleTrigger className="flex w-full items-center justify-between rounded-md bg-gray-100 px-4 py-3 font-medium transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700">
                          <span>Reliability</span>
                          <p className="text-right font-medium text-emerald-400">
                            {value}
                          </p>
                          <ChevronDown className="h-5 w-5 text-gray-500 transition-transform duration-300 group-open:-rotate-180 dark:text-gray-400" />
                        </CollapsibleTrigger>
                        <CollapsibleContent className="px-4 py-3">
                          <div className="flex items-center space-x-2">
                            <span className="text-gray-500 dark:text-gray-400">
                              0
                            </span>
                            <Slider
                              min={0}
                              max={10}
                              step={1}
                              defaultValue={[value]}
                              onValueChange={(vals) => {
                                onChange(vals[0]);
                              }}
                            />
                            <span className="text-gray-500 dark:text-gray-400">
                              10
                            </span>
                          </div>
                        </CollapsibleContent>
                      </Collapsible>
                    </FormControl>
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        </div>
      </CardContent>
    </Card>
  );
};

export default StudentEvaluatePage;