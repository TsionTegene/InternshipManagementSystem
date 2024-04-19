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
import Link from 'next/link';
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
  });

  const onSubmit = async (formValues: z.infer<typeof formSchema>) => {
    const result = authenticate(formValues);
    console.log(result);
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
                  src={"/images/logo.png"}
                  width={140}
                  height={140}
                  className="mx-auto animate-pulse"
                  alt="Company Logo"
                />

              Login </div></CardTitle>
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
                  {isPending ? (<><svg className="animate-spin h-5 w-5 mr-3 ..." viewBox="0 0 24 24"></svg>Logging...</>) : "Login"}
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
      <Footer />
    </>
  );
}
