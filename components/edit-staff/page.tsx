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
    firstName: z.string().min(2, {
        message: "Name must be at least 2 characters.",
    }),
    email: z.string().email({
        message: "Invalid email address.",
    }),
    phoneNum: z.string().min(10, {
        message: "Phone number must be at least 10 characters.",
    }),
    middleName: z.string().min(2, {
        message: "MiddleName must be at least 2 characters.",
    }),
});
//@ts-ignore
export default function StaffMemberForm({ onSubmit, data }) {
    const form = useForm({
        resolver: zodResolver(formSchema),

    });

    return (
        <Card className="mx-auto max-w-lg my-10">
            <CardHeader>
                <CardTitle className="text-xl">Edit Staff Member</CardTitle>
                <CardDescription>Enter Information to Edit the Staff Member</CardDescription>
            </CardHeader>
            <CardContent>
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                        

                        <FormField
                            control={form.control}
                            name='firstName'
                            defaultValue={data?.firstName} 

                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>Name</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter name" {...field} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        <FormField
                            control={form.control}
                            name="middleName"
                            defaultValue={data?.middleName}
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel>MiddleName</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter role" {...field} />
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
                                    <FormLabel>Email</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter email" {...field} />
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
                                    <FormLabel>Phone Number</FormLabel>
                                    <FormControl>
                                        <Input placeholder="Enter phone number" {...field} />
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
