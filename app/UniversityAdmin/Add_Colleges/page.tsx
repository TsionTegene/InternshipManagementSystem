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

const formSchema = z.object({
  collegeName: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  officePhoneNo: z.string().min(10, {
    message: "Enter phone number.",
  }),
  office_email: z.string().email({
    message: "Invalid email address for the College.",
  }),
});

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

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

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

  const handleAddDepartment = () => {
    const newId = departments.length + 1;
    setDepartments([...departments, { id: newId, name: "", email: "", phoneNo: "" }]);
  };

  const handleRemoveDepartment = (id: number) => {
    setDepartments(departments.filter((dep) => dep.id !== id));
  };

  const handleDepartmentFieldChange = (id: number, field: string, value: string) => {
    const updatedDepartments = departments.map((dep) =>
      dep.id === id ? { ...dep, [field]: value } : dep
    );
    setDepartments(updatedDepartments);
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
              name="collegeName"
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
              name="officePhoneNo"
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
              name="office_email"
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
        <Form {...depform}>
          <form onSubmit={depform.handleSubmit(handleDepartmentSubmit)} className="space-y-8">
            <CardTitle className="text-xl">Create Department</CardTitle>
            <CardDescription>
              Enter Required Information to Create a Department
            </CardDescription>
            {departments.map((department, index) => (
              <div key={department.id}>
                <FormField
                  name={`departmentName_${department.id}`}
                  control={depform.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department Name</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter department name"
                          {...field}
                          onChange={(e) =>
                            handleDepartmentFieldChange(
                              department.id,
                              "name",
                              e.target.value
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`departmentEmail_${department.id}`}
                  control={depform.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department Email</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter department email"
                          {...field}
                          onChange={(e) =>
                            handleDepartmentFieldChange(
                              department.id,
                              "email",
                              e.target.value
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  name={`departmentPhoneNo_${department.id}`}
                  control={depform.control}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Department Phone Number</FormLabel>
                      <FormControl>
                        <Input
                          placeholder="Enter department phone number"
                          {...field}
                          onChange={(e) =>
                            handleDepartmentFieldChange(
                              department.id,
                              "phoneNo",
                              e.target.value
                            )
                          }
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                {index !== 0 && (
                  <Button
                    type="button"
                    onClick={() => handleRemoveDepartment(department.id)}
                    variant="icon"
                  >
                    <MinusCircleIcon />
                  </Button>
                )}
              </div>
            ))}
            <Button type="button" onClick={handleAddDepartment} variant="icon">
              <PlusCircleIcon />
            </Button>
            <Button type="submit">Submit</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}

