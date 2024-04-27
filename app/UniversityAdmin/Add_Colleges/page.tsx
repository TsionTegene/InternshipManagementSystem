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
import { useCollege, useNullrole } from "@/hooks/useUniversityActions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useRouter } from 'next/navigation';

const formSchema = z.object({
  Collegename: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  phoneNum: z.string().min(10, {
    message: "Enter phone number.",
  }),
  email: z.string().email({
    message: "Invalid email address for the College.",
  }),
  collegeDeanId: z.string().min(2, {
    message: "Dean Must be Provided.",
  }),
});

const universityId = localStorage.getItem("universityId")
const unID = JSON.parse(universityId as string).universityId
export default function CollegeForm() {
  const router = useRouter()

  const { addCollege, colleges } = useCollege();
  const { user, Loading, Error } = useNullrole();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });




  const onSubmit = async (formValues: any) => {
    const formData = new FormData();

    for (const field in formValues) {
      formData.append(field, formValues[field]);
    }
    formData.append("universityId", unID)
    //@ts-ignore
    for (let pair of formData.entries()) {
      //@ts-ignore
      console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
    }
    console.log(formData.get("Collegename"))

    await addCollege(formData);
    router.push("/UniversityAdmin/list_College")

  };

  console.log("list of colleges", colleges)

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
              name="Collegename"
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

            <FormField
              control={form.control}
              name="collegeDeanId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select User</FormLabel>
                  <FormControl>

                    <div className="grid gap-3">
                      {!Loading && <div>Loading...</div>}
                      {Error && <div>Error Occured</div>}
                      {Loading && !Error && (
                        <Select
                          onValueChange={(value) => {
                            console.log("Selected Dean:", value);
                            field.onChange(value);
                          }}
                          aria-label="Select Dean"
                        >
                          <SelectTrigger>

                            <SelectValue placeholder="Select Dean" />{" "}
                          </SelectTrigger>
                          <SelectContent>
                            {user.map((data: any) => (
                              
                              <SelectItem key={data.id} value={data.user.id}>
                                {data ?.user.roleName === null &&
                                data.user.firstName}
                              </SelectItem>

                            ))}
                          </SelectContent>
                        </Select>
                      )
                      }

                    </div>
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

