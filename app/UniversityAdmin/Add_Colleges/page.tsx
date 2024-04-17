"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
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
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useCollege } from "@/hooks/useUniversityActions";

const formSchema = z.object({
  name: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  phoneNum : z.string().min(10, {
    message: "Enter phone number.",
  }),
  email : z.string().email({
    message: "Invalid email address for the College.",
  }),
});

export default function ProfileForm() {
  

  const form = useForm({
    resolver: zodResolver(formSchema),
  });



  const { addcollege } = useCollege();

  const onSubmit = async (formValues: any) => {
    const formData = new FormData();

    for (const field in formValues) {
      formData.append(field, formValues[field]);
    }
    formData.append("universityId" ,"661ecb59812cdbe0c0f691c4")
      //@ts-ignore
    for (let pair of formData.entries()) {
      //@ts-ignore
      console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
    }

    return addcollege.mutate(formData);
  };

  
  return (
    <Card className="mx-auto max-w-lg my-10">
      <CardHeader>
        <CardTitle className="text-xl">Create College</CardTitle>
        <CardDescription>
          Enter Required Information to Create a College
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter college name" {...field} />
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
                  <FormLabel>Office Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter office phone number" {...field} />
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
                  <FormLabel>Office Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter office email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit">Submit</Button>
          </form>
        </Form>
       
      </CardContent>
    </Card>
  );
}

