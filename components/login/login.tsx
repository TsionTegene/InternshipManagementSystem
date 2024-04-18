"use client";
import Image from "next/image";
import bg4 from "@/public/images/bg4.jpg";
import * as React from "react";
import "@/app/signup/page";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { z } from "zod";
import { useAuthenticate } from "@/hooks/useAuthenticate";
import useSessionStore from "@/stores/sessionStore";
import { Card, CardHeader, CardContent, FormLabel, FormControl } from "@mui/material";
import { Form, useForm } from "react-hook-form";
import { CardTitle, CardDescription } from "../ui/card";
import { FormField, FormItem, FormMessage } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";

const formSchema = z.object({
  email: z.string().email({
    message: "Invalid email address.",
  }),
  password: z.string().min(6, {
    message: "Password must be at least 6 characters.",
  }),
});

export function Login() {
  const [formData, setFormData] = React.useState({
    email: "",
    password: "",
  });

  const { authenticate, isPending, isError, error } = useAuthenticate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Move this to the top to ensure no default form submission

    const getData = new FormData(e.currentTarget);
    // Extracting data from FormData object
    const formValues = {
      email: getData.get("email"),
      password: getData.get("password"),
    };

    const formData = new FormData();
    formData.append("email", formValues.email || "");
    formData.append("password", formValues.password || "");

    // Call the authenticate function with the validated data
    const result = authenticate(formData);
    
  };
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

const handleOnSubmit = async (data: any) => {
    console.log(data);
    const result = await authenticate(data);
    console.log(result);
  }

  return (
    <>
      <div
        className="flex bg-transparent items-center justify-center min-h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      >
        <div className="flex flex-col md:flex-row justify-center items-center max-w-7xl mx-auto p-6 bg-white shadow-xl rounded-lg overflow-hidden">
          <div className="bg-white p-8 rounded-lg shadow-sm max-w-md w-full">
            <h2 className="text-cyan-700 font-mono text-center mb-2 text-4xl font-extrabold">
              Welcome Back
            </h2>
            <div className="border-b border-cyan-200 pb-4">
              <h3 className="text-2xl pb-4 font-semibold">Login</h3>
              <p className="text-sm text-gray-600">
                Enter your email below to login to your account
              </p>
            </div>
            <form className="space-y-4 mt-4" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="m@example.com"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>
              <div>
                <div className="flex justify-between items-center">
                  <label
                    htmlFor="password"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Password
                  </label>
                  <a
                    href="#"
                    className="text-sm text-cyan-700 hover:text-cyan-900 underline"
                  >
                    Forgot your password?
                  </a>
                </div>
                <input
                  id="password"
                  type="password"
                  name="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-cyan-500 focus:border-cyan-500"
                />
              </div>
              <Button
                type="submit"
                disabled={isPending}
                className="w-full bg-cyan-600 text-white text-lg py-2 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
              >
                {isPending ? "Logging in..." : "Login"}
              </Button>
              {isError && error && (
                <p className="error">Error: {error.message}</p>
              )}
            </form>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href={"/signup"}
                className="text-cyan-700 hover:text-cyan-900 underline"
              >
                Sign up
              </Link>
            </p>
          </div>
          <div className="mt-6 md:mt-0 md:ml-6">
            <Image
              alt="teaching"
              className="rounded-lg shadow-xl"
              src={bg4}
              width={400}
              height={300} // Adjusted for better proportion
            />
          </div>
        </div>
      </div>

      <Card className="mx-auto max-w-4xl my-10 shadow-2xl rounded-lg overflow-hidden">
        <CardHeader>
          <CardTitle className="text-xl">Sign In</CardTitle>
          <CardDescription>Sign In To Your Account</CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleOnSubmit)}
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
                </div>
                <Button type="submit" className="w-full">
                  Create an account
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
    </>
  );
}
