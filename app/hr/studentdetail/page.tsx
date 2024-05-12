"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  useAssignMentorToStudent,
  useFetchApplicationsByCompanyId,
  useFindMentorsByCompanyId,
} from "@/hooks/useCompanyActions";
import { RotateCcw } from "lucide-react";
import React from "react";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogDescription,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Link from "next/link";

const FormSchema = z.object({
  mentorId: z.string({
    required_error: "Please select a mentor.",
  }),
  studentId: z.string({}),
});

export default function Page() {
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });
  const { applications, isLoading } = useFetchApplicationsByCompanyId();
  const interns = applications?.filter(
    (application: any) => application.status === "ACCEPTED"
  );
  const { mentors, isMLoading } = useFindMentorsByCompanyId();
  console.log(mentors);
  const { assignMentor, isPending, isSuccess } = useAssignMentorToStudent();
  const [selectedIntern, setSelectedIntern] = React.useState<any>();
  const [selectedMentor, setSelectedMentor] = React.useState<any>();
  console.log(interns);

  function onSubmit(data: any) {
    console.log(data, "data");
    assignMentor(data);
  }
  return (
    <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
      <CardHeader>
        <CardTitle>Interns</CardTitle>
        <CardDescription>
          Enrolled Interns for Available Internship Positions
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Name</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Position</TableHead>
              <TableHead>Mentor</TableHead>
              <TableHead>Advisor</TableHead>
              <TableHead>University</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              interns?.map((intern: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>
                    {intern?.student.user.firstName}{" "}
                    {intern?.student.user.middleName}
                  </TableCell>
                  <TableCell>{intern?.student.user.email}</TableCell>
                  <TableCell>{intern?.internship.title}</TableCell>
                  <TableCell>
                    {intern?.student.mentorId ? (
                      intern?.student.mentor.user.firstName +
                      " " +
                      intern?.student.mentor.user.middleName
                    ) : (
                      <p className="text-gray-400 dark:text-gray-500">
                        Not Assigned
                      </p>
                    )}
                  </TableCell>
                  <TableCell>
                    {intern?.student.advisorId ? (
                      intern?.student.advisor.user.firstName +
                      " " +
                      intern?.student.advisor.user.middleName
                    ) : (
                      <p className="text-gray-400 dark:text-gray-500">
                        Not Assigned
                      </p>
                    )}
                  </TableCell>
                  <TableCell>{intern?.student.University.name}</TableCell>
                  <TableCell>{intern?.student.department.name}</TableCell>
                  <TableCell>
                    {intern?.student.mentorId ? (
                      <Button variant="outline" disabled>
                        Assign Mentor
                      </Button>
                    ) : (
                      <Dialog>
                        <DialogTrigger asChild>
                          <Button variant="outline">Assign Mentor</Button>
                        </DialogTrigger>
                        <DialogContent className="sm:max-w-[400px]">
                          <DialogHeader>
                            <DialogTitle>Assign Mentor</DialogTitle>
                          </DialogHeader>
                          <div className="grid gap-4 py-4">
                            <Select onValueChange={(value) => setSelectedMentor(value)}>
                              <SelectTrigger className="w-full">
                                <SelectValue placeholder="Select a mentor" />
                              </SelectTrigger>
                              <SelectContent>
                                {mentors?.map((mentor: any, index: any) => (
                                  <SelectGroup key={index}>
                                    <SelectItem value={mentor.id}>
                                      {mentor.user.firstName} {mentor.user.middleName}
                                    </SelectItem>
                                  </SelectGroup>
                                ))}
                              </SelectContent>
                            </Select>
                            <div className="flex justify-end gap-2">
                              <Button onClick={() => {
                                setSelectedIntern(intern?.student.id);
                                onSubmit({ mentorId: selectedMentor, studentId: selectedIntern });
                              }}>Assign</Button>
                            </div>
                          </div>
                        </DialogContent>
                      </Dialog>
                    )}
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

function Accepted() {
  return (
    <Badge
      className="bg-green-100 text-green-600 dark:bg-green-900/20 dark:text-green-400"
      variant="outline"
    >
      Accepted
    </Badge>
  );
}
