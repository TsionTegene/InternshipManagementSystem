import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import Link from "next/link";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { FaPlus } from "react-icons/fa";
import { MoveUpRight, UploadIcon } from "lucide-react";

const formSchema = z.object({
    universityName: z.string().min(2, {
        message: "University name must be at least 2 characters.",
    }),
    universityEmail: z.string().email({
        message: "Invalid email address for the university.",
    }),
    universityPhoneNumber: z.string().min(2, {
        message: "Enter the phone number for the university.",
    }),
    websiteUrl: z.string(),
    adminUserName: z.string().min(2, {
        message: "Admin username must be at least 2 characters.",
    }),
    adminEmail: z.string().email({
        message: "Invalid email address for the admin.",
    }),
    adminPassword: z.string().min(6, {
        message: "Admin password must be at least 6 characters.",
    }),
    adminFirstName: z.string().min(2, {
        message: "Admin first name must be at least 2 characters.",
    }),
    adminMiddleName: z.string().min(2, {
        message: "Admin middle name must be at least 2 characters.",
    }),
    adminPhoneNumber: z.string().min(2, {
        message: "Enter the phone number for the admin.",
    }),
    address: z.object({
        city: z.string().min(2),
        region: z.string().min(2),
        subcity: z.string().min(2),
    }),
    logo: z.optional(z.string().min(1)), // Optional profile picture field
});

export function UniversityForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
    });

    const onSubmit = (formValues) => {
        console.log(formValues);
    };

    return (
        <Card className="mx-auto max-w-lg my-10 ">
            <CardHeader>
                <CardTitle className="text-xl">Sign Up</CardTitle>
                <CardDescription>
                    Enter your information to create an account
                </CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        <div className="grid gap-4">
                            <div className="grid grid-cols-2 gap-4">
                                <FormField
                                    control={form.control}
                                    name="universityName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>University Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="universityEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>University Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="universityPhoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>University Phone Number</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="websiteUrl"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Website URL</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="adminUserName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Admin User Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="adminEmail"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Admin Email</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="adminPassword"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Admin Password</FormLabel>
                                            <FormControl>
                                                <Input type="password" {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="adminFirstName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Admin First Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="adminMiddleName"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Admin Middle Name</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="adminPhoneNumber"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Admin Phone Number</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address.city"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>City</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address.region"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Region</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="address.subcity"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Subcity</FormLabel>
                                            <FormControl>
                                                <Input {...field} />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="logo"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel>Logo</FormLabel>
                                            <FormControl className="grid grid-flow-col">
                                                <Button className="w-full"><UploadIcon /> Upload</Button>
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                />
                            </div>
                        </div>
                        <Button type="submit" className="w-full">
                            Create an account
                        </Button>
                        <div className="mt-4 text-center text-sm">
                            Already have an account?{" "}
                            <Link href="#" className="underline">
                                Sign in
                            </Link>
                        </div>
                    </form>
                </Form>
            </CardContent>
        </Card>
    );
}
