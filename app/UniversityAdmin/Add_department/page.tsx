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
import { MinusCircleIcon, PlusCircleIcon, UploadIcon } from "lucide-react";
import { useCreateDepartment } from "@/hooks/useUniversityActions";

const depformSchema = z.object({
  departmentName: z.string().min(2, {
    message: "Department name must be at least 2 characters.",
  }),
  departmentEmail: z.string().email({
    message: "Invalid email address for the Department.",
  }),
  departmentPhoneNo: z.string().min(10, {
    message: "Enter phone number.",
  }),
});

export default function ProfileForm() {
  const [departments, setDepartments] = useState([{ id: 1, name: "", email: "", phoneNo: "" }]);



  const depform = useForm({
    resolver: zodResolver(depformSchema),
  });

  const { addCollage } = useCreateDepartment();

  const onSubmit = async (formValues: any) => {
    const formData = new FormData();

    for (const field in formValues) {
      formData.append(field, formValues[field]);
    }

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
    }

    return addCollage.mutate(formData);
  };

  const handleDepartmentSubmit = async (formValues: any) => {
    const formData = new FormData();

    for (const field in formValues) {
      formData.append(field, formValues[field]);
    }

    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
    }

    return addCollage.mutate(formData);
  };


  return (
    <Card className="mx-auto max-w-lg my-10">

      <CardContent>
      
        <Form {...depform}>
          <form onSubmit={depform.handleSubmit(handleDepartmentSubmit)} className="space-y-8">
            <CardTitle className="text-xl">Create Department</CardTitle>
            <CardDescription>
              Enter Required Information to Create a Department
            </CardDescription>
           
            
                <FormField
                  name={`departmentName`}
                  control={depform.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter department name"
                          {...field}
                       
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`departmentEmail`}
                  control={depform.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter department email"
                          {...field}
                       
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`departmentPhoneNo`}
                  control={depform.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter department phone number"
                          {...field}
                        
                        />
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

