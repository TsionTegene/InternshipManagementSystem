"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useMyAdvisorandMentor, useStudent, useSubmiteReport } from "@/queries/useStudentQueries";
import { DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormControl, FormLabel, FormMessage } from "@/components/ui/form";
import { UploadIcon } from "lucide-react";

// Define validation schema with zod
const formSchema = z.object({
  title: z.string().min(2, "Title must be at least 2 characters."),
  description: z.string().min(2, "Description must be at least 2 characters."),
  challengesFaced: z.string().min(2, "Challenges faced must be at least 2 characters."),
  lessonsLearned: z.string().min(2, "Lessons learned must be at least 2 characters."),
  tasksAccomplished: z.string().min(6, "Tasks accomplished must be at least 6 characters."),
  attachmentUrl: z.optional(z.string().min(1))
});

const Page = () => {
  const [selectedImage, setSelectedImage] = useState("No Image Chosen");
  const [profileImg, setProfileImg] = useState<File | null>(null);
  const userId = localStorage.getItem("userId");
  const stdId = localStorage.getItem("stdId");

  const { data: about, isSuccess } = useMyAdvisorandMentor(userId as string);
  const { mutateAsync } = useSubmiteReport();
  const { data: student } = useStudent(userId as string);

  let mentorId = "";
  let advisorId = "";
  let internshipId = "";

  if (student && student.length > 0) {
    const firstStudent = student[0]?.Student[0];
    mentorId = firstStudent?.mentorId || "";
    advisorId = firstStudent?.advisorId || "";
    internshipId = firstStudent?.internshipId || "";
  }

  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onInvalid = (errors: any) => console.error(errors);

  async function onSubmit(formValues: any) {

    const formData = new FormData();
    for (const field in formValues) {
      if (field !== "confirm_password" && field !== "image" && field !== "resume") {
        formData.append(field, formValues[field]);
      }
    }

    if (profileImg) {
      formData.append("attachmentUrl", profileImg);
    }

    formData.append("advisorId", advisorId);
    formData.append("internshipId", internshipId);
    formData.append("studentId", stdId as string);
    console.log(formData.get("attachmentUrl"))
    try {
      await mutateAsync(formData);
      console.log("Report submitted successfully");
      form.reset();
    } catch (error) {
      console.error("Error submitting report:", error);
    }

    
  }

  if (!isSuccess) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      {about?.map((person, index) => (
        <div key={index}>
          <div className="flex items-center justify-between mb-6">
            <Dialog>
              <DialogTrigger asChild>
                <Button variant="outline">Submit Report</Button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-4xl">
                <DialogHeader>
                  <DialogTitle>Submit your report to your mentor</DialogTitle>
                  <DialogDescription>Fill out the form to send a report to your mentor.</DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit, onInvalid)} className="space-y-8">
                      <div className="grid gap-5">
                        <div className="grid grid-cols-2 gap-5">
                          <FormField
                            control={form.control}
                            name="title"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Title <span className="text-red-700">*</span></FormLabel>
                                <FormControl>
                                  <Input placeholder="Title of your internship" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="description"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Description <span className="text-red-700">*</span></FormLabel>
                                <FormControl>
                                  <Input placeholder="Description about your internship" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="challengesFaced"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Challenges Faced</FormLabel>
                                <FormControl>
                                  <Input placeholder="Add challenges you faced" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="lessonsLearned"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Lessons Learned</FormLabel>
                                <FormControl>
                                  <Input placeholder="Add lessons you learned" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="tasksAccomplished"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Tasks Accomplished</FormLabel>
                                <FormControl>
                                  <Input placeholder="Add tasks you accomplished" {...field} />
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />

                          <FormField
                            control={form.control}
                            name="attachmentUrl"
                            render={({ field }) => (
                              <FormItem>
                                <FormLabel>Attachment</FormLabel>
                                <FormControl className="flex flex-col">
                                  <div className="">
                                    <div className="flex flex-row items-center">
                                      <input
                                        type="file"
                                        id="custom-input"
                                        onChange={(e) => {
                                          if (e.target.files) {
                                            setSelectedImage(e.target.files[0].name);
                                            setProfileImg(e.target.files[0]);
                                          }
                                        }}
                                        hidden
                                      />
                                      <label
                                        htmlFor="custom-input"
                                        className="w-full flex text-sm justify-center text-slate-800 mr-4 py-2 px-4 rounded-md border-0 font-semibold bg-slate-100 hover:bg-slate-200 cursor-pointer"
                                      >
                                        <UploadIcon />
                                        <span className="mx-3 text-sm">Upload Image</span>
                                      </label>
                                    </div>
                                    <label htmlFor="custom-input" className="text-slate-500 truncate">
                                      {selectedImage && (
                                        <span className="block mt-2 text-sm text-gray-500">
                                          Selected file: {selectedImage}
                                        </span>
                                      )}
                                    </label>
                                  </div>
                                </FormControl>
                                <FormMessage />
                              </FormItem>
                            )}
                          />
                        </div>
                        <Button type="submit" className="w-full">
                          Submit
                        </Button>
                      </div>
                    </form>
                  </Form>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Page;
