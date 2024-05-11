"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useAdvisorData, useNullrole, userole } from "@/hooks/useUniversityActions";
import { useRouter } from "next/navigation";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useStudentsFetchByDep } from "@/hooks/useStudentsActions";

const depformSchema = z.object({
  studentId: z.string().min(2, {
   message : "Role name must be Provided.",
  }),
  advisorId: z.string().min(2, {
    message: "User Must be Provided.",
  }),

});
const RoleAssignment = () => {
  const router = useRouter()
  // const { user, Loading, Error } = useNullrole();
  const{roleName,role_Loading,role_error} =userole()

  const { students: user, isLoading:Loading, Error } = useStudentsFetchByDep()
  const { user:advisor } = useAdvisorData();



  const handleRoleChange = async (formValues:any) => {
     const formData = new FormData();
     for (const field in formValues) {
      formData.append(field, formValues[field]);
    }

      //@ts-ignore
      for (let pair of formData.entries()) {
        //@ts-ignore
        console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
      }
    const url = `http://10.194.65.38:5000/head/${formData.get("studentId")}/assign/${formData.get("advisorId")}`
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        }
    })
    
    router.push("/departmenthead/students")
    // return response.json()
  };

  useEffect(() => {


    console.log("Users", user)
    console.log("Roles", roleName)

  }, [user,roleName])

  const form = useForm({
    resolver: zodResolver(depformSchema),
  });
  
  return (
    <Card className="mx-auto max-w-4xl my-10 p-6">
      <CardHeader>
        <CardTitle className="mx-30 ">Assign Advisor</CardTitle>
        <CardDescription>Select a student and Advisor to assign</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleRoleChange)} className="space-y-8">
            <FormField
              control={form.control}
              name="studentId"
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
                        console.log("Selected user:", value);
                        field.onChange(value); 
                      }}
                      aria-label="Select Student"
                    >
                      <SelectTrigger>
                    
                        <SelectValue placeholder="Select Student" />{" "}
                      </SelectTrigger>
                          <SelectContent>
                            {
                            user.map((data: any) => (
                      
                                  <SelectItem key={data.id} value={data.id}>
                                    {data.user.firstName}
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
              control={form.control}
              name="advisorId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Advisor</FormLabel>
                  <FormControl>
                  <div className="grid gap-3">
                          {!role_Loading && <div>Loading...</div>}
                          {role_error && <div>Error Occured</div>}
                          {role_Loading && !role_error && (
                    <Select
                      onValueChange={(value) => {
                        console.log("Selected Advisor:", value);
                        field.onChange(value);
                      }}
                      aria-label="Select Advisor"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Advisor" />{" "}
                      </SelectTrigger>
                      <SelectContent>
                            {advisor &&
                              advisor?.map((advisor:any) => (
                                <SelectItem key={advisor.id} value={advisor.id}>
                                  {advisor.user?.firstName}
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
            <Button type="submit">Assign</Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
};

export default RoleAssignment;
