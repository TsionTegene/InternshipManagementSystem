import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
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
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useDepartment, useCollege, useNullrole } from "@/hooks/useUniversityActions";
import { useEffect, useState } from "react";

const depformSchema = z.object({
  name: z.string().min(2, {
    message: "Department name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Invalid email address for the Department.",
  }),
  phoneNum: z.string().min(10, {
    message: "Enter phone number.",
  }),
  departmentHeadId: z.string().min(2, {
    message: "University name must be at least 2 characters.",
  }),
});
//@ts-ignore

export default function DepartmentCreation({ onSubmit, initialData }) {

  const { addDepartment, isLoading: dep_Loading, Error: Dep_Error } = useDepartment();
  const { colleges, isLoading: college_Loading, Error: college_Error } = useCollege();
  const { user, Loading, Error } = useNullrole();

  const depform = useForm({
    resolver: zodResolver(depformSchema),
    defaultValues: initialData ? {
      name: initialData.name || "",
      email: initialData.email || "",
      phoneNum: initialData.phoneNum || "",
      collegeId: initialData.collegeId || "",
      departmentHeadId: initialData.departmentHeadId || "",
    } : {}
  });

//   const handleDepartmentSubmit = async (formValues: any) => {
//     const formData = new FormData();
//     for (const field in formValues) {
//       formData.append(field, formValues[field]);
//     }
//     formData.append("universityId", "661fbd258ccc2c339bc90202");

//     // Log key-value pairs in the FormData object
//     for (let pair of formData.entries()) {
//       console.log(pair[0], pair[1]);
//     }

//     await addDepartment(formData);
//   };

  return (
    <Card className="mx-auto max-w-lg my-10">
      <CardContent>
        <CardTitle className="text-xl">{initialData ? 'Edit' : 'Create'} Department</CardTitle>
        <CardDescription>
          Enter Required Information to {initialData ? 'Edit' : 'Create'} a Department
        </CardDescription>
        <Form {...depform}>
          <form onSubmit={depform.handleSubmit(onSubmit)} className="space-y-8">
            <FormField
              control={depform.control}
              name="collegeId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>College Name</FormLabel>
                  <FormControl>
                    <div className="grid gap-3">
                      {!college_Loading && <div>Loading...</div>}
                      {college_Error && <div>Error Occured</div>}
                      {college_Loading && !college_Error && (
                        <Select
                          onValueChange={(value) => {
                            field.onChange(value);
                          }}
                          aria-label="Select College"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select College" />{" "}
                          </SelectTrigger>
                          <SelectContent>
                            {colleges?.map((college: any) => (
                              <SelectItem
                                key={college.id}
                                value={college.id}
                              >
                                {college.Collegename}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                    </div>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="name"
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
              name="email"
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
              name="phoneNum"
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
            <FormField
              control={depform.control}
              name="departmentHeadId"
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
                            field.onChange(value);
                          }}
                          aria-label="Select Dep't Head"
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select Dep't Head" />{" "}
                          </SelectTrigger>
                          <SelectContent>
                            {user.map((data: any) => (

                              <SelectItem key={data.id} value={data.user.id}>
                                {data?.user.roleName === 'DEPARTMENT_HEAD' &&
                                  data.user.firstName+" " + data.user.middleName}
                              </SelectItem>

                            ))}
                          </SelectContent>
                        </Select>
                      )}
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
