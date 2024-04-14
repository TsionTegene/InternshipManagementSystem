"use client"
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormControl, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {registerUser, useUniversityActions} from "@/hooks/useUniversityActions"
const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
  firstname: z.string().min(3, {
    message: "firtname is required.",

  }),
  middlename: z.string().min(3, {
    message: "middlename is required.",

  }),
  username: z.string().min(3, {
    message: "username is required.",

  }),
  phoneNo: z.string().min(10, {
    message: "Enter phone number.",
  }),
});

export default function RegistrationForm() {
  const [loading, setLoading] = useState(false);
  const {register_user} = registerUser()

  const form = useForm({
    resolver: zodResolver(formSchema),
  });


  const onSubmit = async (formValues: any) => {
    const formData = new FormData();
  
    for (const field in formValues) {
      if (typeof formValues[field] === "object" && !Array.isArray(formValues[field])) {
        // Handle nested objects
        const nestedObj = formValues[field];
        for (const nestedField in nestedObj) {
          formData.append(`${field}[${nestedField}]`, nestedObj[nestedField]);
        }
      } else {
        // Append other fields as usual
        formData.append(field, formValues[field]);
      }
    }
  
    //@ts-ignore  
     for (let pair of formData.entries()) {
          console.log(pair[0], pair[1]);
      }
  
    return register_user.mutate(formData);
  };
  

  return (
    <Card className="mx-auto max-w-lg my-10">
      <CardHeader>
        <CardTitle className="text-xl">User Registration</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter email" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input type="password" placeholder="Enter password" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="firstname"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>First Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter first name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="middlename"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Middle Name</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter middle name" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="username"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Username</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter username" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phoneNo"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Phone Number</FormLabel>
                  <FormControl>
                    <Input placeholder="Enter phone number" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" loading={loading}>
              Register
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
