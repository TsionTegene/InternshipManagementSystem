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
import { FaAddressBook, FaPlus } from "react-icons/fa";
import { EyeIcon, EyeOffIcon, Image, MoveUpRight, UploadIcon } from "lucide-react";
import { useState } from "react";
import { useUniversitySignup } from "@/hooks/useUniversitysignup";

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
    image: z.optional(z.string().min(1)), // Optional profile picture field

});

export function UniversityForm() {

    const [adminpic, setAdminpic] = useState<File | null>(null);
    const [logo, setLogo] = useState<File | null>(null);
  
    const [selectedImage, setSelectedImage] = useState("No Image Chosen");
    const [selectedLogo, setSelectedLogo] = useState("No File Chosen");



    const [showPassword, setShowPassword] = useState(false);
    const university = useUniversitySignup();
    const form = useForm({
        resolver: zodResolver(formSchema),
    });


    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
      };

      const onSubmit = async (formValues: any) => {
        const formData = new FormData();

        for (const field in formValues) {
          // Check if the field is the "address" object
          if (field === "address") {
            const addressObj = formValues[field];
            // Iterate over the keys in the "address" object
            for (const nestedField in addressObj) {
              // Append each nested field with its value to the formData
              formData.append(`address[${nestedField}]`, addressObj[nestedField]);
            }
          }else if(field ==="image") {
            if (adminpic) {
              formData.append("image", adminpic);
              
            }

          } else if(field ==="logo") {
            if (logo) {
              formData.append("logo", logo);
            }


          }else {
            // Append other fields as usual
            formData.append(field, formValues[field]);
          }
        }

 
          //@ts-ignore
        for (let pair of formData.entries()) {
          console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
        }
      console.log(formData.get("logo"))
        return university.mutate(formData);
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
                      <FormLabel>Password</FormLabel>
                      <FormControl className="relative">
                        <div className="flex items-center w-full">
                          <Input
                            type={showPassword ? "text" : "password"}
                            {...field}
                          />
                          <span
                            className={`absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5 cursor-pointer ${
                              showPassword ? "text-blue-500" : "text-gray-400"
                            }`}
                            onClick={togglePasswordVisibility}
                          >
                            {/* Use pseudo-element for the icon */}
                            {showPassword ? (
                              <EyeIcon className="h4 w-4" aria-hidden="true" />
                            ) : (
                              <EyeOffIcon
                                className="h4 w-4"
                                aria-hidden="true"
                              />
                            )}
                          </span>
                        </div>
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
                  name="image"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Profile Picture</FormLabel>
                      <FormControl className="flex flex-col">
                        <div className="">
                          <div className="flex flex-row items-center">
                            <input
                              type="file"
                              id="custome-input"
                              onChange={(e) => {
                                if (e.target.files) {
                                  setSelectedImage(e.target.files[0].name);
                                  setAdminpic(e.target.files[0]);
                                }
                              }}
                              hidden
                            />
                            <label
                              htmlFor="custome-input"
                              className="w-full flex text-sm justify-center text-slate-800 mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-100 hover:bg-slate-200 cursor-pointer "
                            >
                              <UploadIcon />
                              <span className="mx-3 text-sm ">
                                Upload Image
                              </span>
                            </label>
                          </div>
                          <label
                            htmlFor="custome-input"
                            className="text-slate-500 truncate ..."
                          >
                            {selectedImage && (
                              <span className="block mt-2 text-sm text-gray-500">
                                Selected image: {selectedImage}
                              </span>
                            )}
                          </label>
                        </div>
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
                      <FormControl className="flex flex-col">
                        <div className="">
                          <div className="flex flex-row items-center">
                            <input
                              type="file"
                              id="logo-input"
                              onChange={(e) => {
                                if (e.target.files) {
                                  setSelectedLogo(e.target.files[0].name);
                                  setLogo(e.target.files[0])
                                }
                              }}
                              hidden
                            />
                            <label
                              htmlFor="logo-input"
                              className="w-full flex text-sm justify-center text-slate-800 mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-100 hover:bg-slate-200 cursor-pointer "
                            >
                              <UploadIcon />
                              <span className="mx-3 text-sm ">
                                Upload 
                              </span>
                            </label>
                          </div>
                          <label
                            htmlFor="logo-input"
                            className="text-slate-500 truncate ..."
                          >
                            {selectedLogo && (
                              <span className="block mt-2 text-sm text-gray-500">
                                Selected Logo: {selectedLogo}
                              </span>
                            )}
                          </label>
                        </div>
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
