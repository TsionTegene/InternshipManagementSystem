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
import { useUniversityActions } from "@/hooks/useUniversityActions";


const formSchema = z.object({
  collegeName: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  officePhoneNo:z.string().min(10,{
    message: "Enter  phone number.",
  }),
  office_email: z.string().email({
    message: "Invalid email address for the College.",
  }),
  deanfirstname: z.string(),
  deanlastname: z.string().min(2, {
    message: "Admin lastname must be at least 2 characters.",
  }),
  deanEmail: z.string().email({
    message: "Invalid email address for the Dean.",
  }),
  deanphone_no:z.string().min(10,{
    message: "Enter  phone number.",
  }),
  userName: z.string().min(2, {
    message: "Username must be at least 2 characters.",
  }),
  image: z.optional(z.string().min(1)),
  deanmiddlename :z.string().min(2, {
    message: "Middle must be at least 2 characters.",
  }),
  departmentName: z.string().min(2, {
    message: "Department name must be at least 2 characters.",
  }),
  departmentEmail: z.string().email({
    message: "Invalid email address for the Department.",
  }),
  departmentPhoneNo: z.string().min(10, {
    message: "Enter  phone number.",
  }),
});

export default function ProfileForm() {


  const [adminpic, setAdminpic] = useState<File | null>(null);
  const [selectedImage, setSelectedImage] = useState("No Image Chosen");
  const {addCollage} = useUniversityActions()
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (formValues: any) => {
    const formData = new FormData();

    for (const field in formValues) {
   
        formData.append(field, formValues[field]);
        if(field ==="image") {
          if (adminpic) {
            formData.append("image", adminpic);
          }


        }
      
    }
      //@ts-ignore
    for (let pair of formData.entries()) {
      console.log(pair[0], pair[1]); // Log key-value pairs in the FormData object
    }

    return addCollage.mutate(formData);
  };

  const [departments, setDepartments] = useState([{ id: 1, name: "", email: "", phoneNo: "" }]);

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
    <Card className="mx-auto max-w-lg my-10 ">
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
                <Input placeholder="Enter university name" {...field} />
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
        <FormField
          control={form.control}
          name="deanfirstname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dean First Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter dean first name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
                <FormField
          control={form.control}
          name="deanmiddlename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dean Middle Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter dean Middle name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deanlastname"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dean Last Name</FormLabel>
              <FormControl>
                <Input placeholder="Enter dean last name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
                  control={form.control}
                  name="userName"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>User Name <span className="text-red-700">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="Username" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
        <FormField
          control={form.control}
          name="deanEmail"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dean Email</FormLabel>
              <FormControl>
                <Input placeholder="Enter dean email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="deanphone_no"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Dean Phone Number</FormLabel>
              <FormControl>
                <Input placeholder="Enter dean phone number" {...field} />
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
                                  setAdminpic(e.target.files[0])
                                  
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
              <CardTitle className="text-xl">Create Department</CardTitle>
                <CardDescription>
                    Enter Required Information to Create a Department
                </CardDescription>
                {
                
                departments.map((department, index) => (
              <div key={department.id}>
                

                <FormField
                  name="departmentName"
                  control={form.control}
                  render={(feild)=>(
                    <FormItem>
                    <FormLabel>Department Name</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter department name"
                        value={department.name}
                        onChange={(e) => handleDepartmentFieldChange(department.id, "name", e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                 />

                <FormField
                  name="departmentEmail"
                  control={form.control}
                  render={(feild)=>(
                    <FormItem>
                    <FormLabel>Department Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter department email"
                        value={department.email}
                        onChange={(e) => handleDepartmentFieldChange(department.id, "email", e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                  )}
                
                />

            <FormField
                name="departmentPhoneNo"
                control={form.control}
                render={(feild)=>(


                  <FormItem>
                    <FormLabel>Department Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Enter department phone number"
                        value={department.phoneNo}
                        onChange={(e) => handleDepartmentFieldChange(department.id, "phoneNo", e.target.value)}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )


                }
                
                />
                {/* Remove department button for all but the first department */}
                {index !== 0 && (
                  <Button type="button" onClick={() => handleRemoveDepartment(department.id)} variant="icon">
                    <MinusCircleIcon />
                  </Button>
                )}
              </div>
            ))}
            {/* Add department button */}
            <Button type="button" onClick={handleAddDepartment} variant="icon">
              <PlusCircleIcon />
            </Button>

        <Button type="submit">Submit</Button>
      </form>
    </Form>
    </CardContent>
  </Card>
  )
}