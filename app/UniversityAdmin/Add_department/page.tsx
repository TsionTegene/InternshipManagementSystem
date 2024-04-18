"use client"
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
import { useDepartment,useCollege } from "@/hooks/useUniversityActions";

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
  collegeId: z.string().min(2, {
    message: "University name must be at least 2 characters.",
  }),
});

export default function DepartmentCreation() {

  const {addDepartment,isLoding,isError} = useDepartment();
  const {colleges} =useCollege()


  const depform = useForm({
    resolver: zodResolver(depformSchema),
  });


  const handleDepartmentSubmit = async (formValues: any) => {
    const formData = new FormData();
    for (const field in formValues) {
      formData.append(field, formValues[field]);
    }
    formData.append("universityId" ,"661fbd258ccc2c339bc90202")

      //@ts-ignore
      for (let pair of formData.entries()) {
        //@ts-ignore
        console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
      }

    return addDepartment.mutate(formData);
  };


  return (
    <Card className="mx-auto max-w-lg my-10">

      <CardContent>

            <CardTitle className="text-xl">Create Department</CardTitle>
            <CardDescription>
              Enter Required Information to Create a Department
            </CardDescription>
      
        <Form {...depform}>
        <form onSubmit={depform.handleSubmit(handleDepartmentSubmit)} className="space-y-8">
            <FormField
                  control={depform.control}
                  name="collegeId"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>College Name</FormLabel>
                      <FormControl>
                        <div className="grid gap-3">
                          {isLoding && <div>Loading...</div>}
                          {isError && <div>Error Occured</div>}
                          {!isLoding && !isError && (
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
                                {colleges.map((colleges: any) => (
                                  <SelectItem
                                    key={colleges.id}
                                    value={colleges.id}
                                  >
                                    {colleges.Collegename}
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
                  name={`name`}
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
                  name={`email`}
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
                  name={`phoneNum`}
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
