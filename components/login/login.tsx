"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod"; // this is used to validate the form
import { useForm } from "react-hook-form"; // this is used to create the form
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "../ui/card";
import Link from "next/link";
import { useAuthenticate } from "@/hooks/useAuthenticate";
import Footer from "@/components/footer";
import Image from "next/image";
import Header from "@/components/page-header";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
  password: z.string().min(6, "Password must be at least 6 characters"),
});
export function Login() {
  const { authenticate, isPending, isError, error } = useAuthenticate();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (formValues: z.infer<typeof formSchema>) => {
    // const url = "http://localhost:5000/auth/refresh";
    // const refreshToken =
    //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NjIyZGNkMzljYWExY2YzMGFlZTE3ZmEiLCJlbWFpbCI6ImViYWdAZ21haWwuY29tIiwicm9sZSI6IkNPTVBBTllfSFIiLCJpYXQiOjE3MTM4NjkzNDYsImV4cCI6MTcxNDQ3NDE0Nn0.YlHc7CpCuUtKVNXvXdg4ux6xjinYZyMOloRfO6Qz0mE";
    // const response = await fetch(url, {
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json',
    //         Authorization: `Bearer ${refreshToken}`,
    //     },
    // });

    // if (!response.ok) {
    //     throw new Error(`HTTP error! status: ${response.status}`);
    // }

    // const { access_token, refresh_token } = await response.json();
    // console.log("New Token: ", access_token, refresh_token)
    const result = authenticate(formValues);
    console.log(result)
    return result;
  };
  return (
    <>
      <Header />
      <div
        className="flex bg-transparent items-center justify-center min-h-screen bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/images/bg.jpg')",
          objectFit: "cover",
          objectPosition: "center",
          zIndex: 0,
        }}
      >
        <Card>
          <CardHeader>
            <CardTitle>
              <div>
                <Image
                  priority={true}
                  src={"/images/logo.png"}
                  width={140}
                  height={140}
                  className="mx-auto animate-pulse"
                  alt="Company Logo"
                />
                Login{" "}
              </div>
            </CardTitle>
            <CardDescription>
              Enter your credintials below to login to your account
            </CardDescription>
          </CardHeader>
          <CardContent>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-8"
              >
                <FormField
                  control={form.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Email</FormLabel>
                      <FormControl>
                        <Input placeholder="email" {...field} />
                      </FormControl>
                      <FormDescription>
                        Enter your email address
                      </FormDescription>
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
                        <Input
                          type="password"
                          placeholder="password"
                          {...field}
                        />
                      </FormControl>
                      <FormDescription>
                        Enter your password here
                      </FormDescription>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button
                  type="submit"
                  disabled={isPending}
                  className="w-full bg-cyan-600 text-white text-lg py-2 rounded-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50"
                >
                  {isPending ? (
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
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      Logging...
                    </>
                  ) : (
                    "Login"
                  )}
                </Button>
                {isError && error && (
                  <p className="error">Error: {error.message}</p>
                )}
              </form>
            </Form>
          </CardContent>
          <CardFooter>
            <p className="mt-4 text-center text-sm text-gray-600">
              Don&apos;t have an account?{" "}
              <Link
                href={"/signup"}
                className="text-cyan-700 hover:text-cyan-900 underline"
              >
                Sign up
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </>
  );
}
