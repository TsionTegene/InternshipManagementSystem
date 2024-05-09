"use client"
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useNullrole, userole } from "@/hooks/useUniversityActions";
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

const depformSchema = z.object({
  id: z.string().min(2, {
   message : "Role name must be Provided.",
  }),
  name: z.string().min(2, {
    message: "User Must be Provided.",
  }),

});
const RoleAssignment = () => {
  const router = useRouter()
  const { user, Loading, Error } = useNullrole();
  const{roleName,role_Loading,role_error} =userole()




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
    const url = `http://localhost:5000/users/${formData.get("id")}/assign/${formData.get("name")}`
    const response = await fetch(url, {
        method: "post",
        headers: {
            "Content-Type": "application/json",
        }
    })
    
    router.push("/UniversityAdmin/staff")
    return response.json()
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
        <CardTitle className="mx-30 ">Assign Roles</CardTitle>
        <CardDescription>Select a user and roles to assign</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(handleRoleChange)} className="space-y-8">
            <FormField
              control={form.control}
              name="id"
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
                      aria-label="Select User"
                    >
                      <SelectTrigger>
                    
                        <SelectValue placeholder="Select User" />{" "}
                      </SelectTrigger>
                            {
                            user.map((data: any) => (
                          <SelectContent>
                                {data?.user.roleName === null && (
                                  <SelectItem key={data.id} value={data.user.id}>
                                    {data.user.firstName}
                                  </SelectItem>
                                )}


                          </SelectContent>
                            ))}
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
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Select Role</FormLabel>
                  <FormControl>
                  <div className="grid gap-3">
                          {!role_Loading && <div>Loading...</div>}
                          {role_error && <div>Error Occured</div>}
                          {role_Loading && !role_error && (
                    <Select
                      onValueChange={(value) => {
                        console.log("Selected Role:", value);
                        field.onChange(value);
                      }}
                      aria-label="Select Role"
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select Role" />{" "}
                      </SelectTrigger>
                      <SelectContent>
                        {roleName &&
                        roleName?.map((roleName:any) => (
                          <SelectItem key={roleName.id} value={roleName.name}>
                            {roleName.name}
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
