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
import { useNullrole } from "@/hooks/useUniversityActions";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
const formSchema = z.object({
  Collegename: z.string().min(2, {
    message: "College name must be at least 2 characters.",
  }),
  phoneNum : z.string().min(10, {
    message: "Enter phone number.",
  }),
  email : z.string().email({
    message: "Invalid email address for the College.",
  }),
  collegeDeanId: z.string().min(2, {
    message: "Dean Must be Provided.",
  }),
});
//@ts-ignore
export default function DepartmentForm({ onSubmit, data}) {


  console.log("College =>",data)
  const { user, Loading, Error } = useNullrole();

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

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
              defaultValue={data?.Collegename} // Assuming Collegename is the key for the college name
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
              defaultValue={data?.phoneNum} 
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
              defaultValue={data?.email} 
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
                            {user?.map((user:any) => (
                              <SelectItem key={user.id} value={user.id}>
                                {user.firstName}
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
