"use client";

import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  DialogTrigger,
  DialogTitle,
  DialogDescription,
  DialogHeader,
  DialogFooter,
  DialogContent,
  Dialog,
} from "@/components/ui/dialog";
import { useFetchApplicationsByCompanyId } from "@/hooks/useApplicationActions";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Download } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { updateApplications } from "@/api/application/mutation";
import { useRouter } from "next/navigation";
import { useQueryClient } from "@tanstack/react-query";
import { RotateCcw } from "lucide-react";

export default function Component() {
  const { updateApp, applications, isLoading } = useFetchApplicationsByCompanyId();
  console.log(applications, isLoading);
  // const router = useRouter();

  const handleAccept = (appId: string) => {
    console.log(appId);
    const result = updateApp("ACCEPTED", appId);
    // queryClient.invalidateQueries("findMentorByCompanyId");
    applications.filter((application: any) => application.id !== appId);
    return result;
  };

  const handleReject = (appId: string) => {
    console.log(appId);
    const result = updateApp("REJECTED", appId);
    applications.filter((application: any) => application.id !== appId);
    return result;
  };

  return (
    <>
      <div className="border rounded-lg w-full">
        <div className="relative w-full overflow-auto">
          <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
            <CardHeader>
              <CardTitle>Application</CardTitle>
              <CardDescription>
                Pending applications waiting for approval or rejection.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Name</TableHead>
                    <TableHead>Email</TableHead>
                    <TableHead>Position</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
                  ) : (
                    applications?.map((application: any, index: any) => (
                      <TableRow key={index}>
                        <TableCell>
                          <Dialog>
                            <DialogTrigger asChild>
                              <Button variant="link">
                                {application?.student.user.firstName}{" "}
                                {application?.student.user.middleName}
                              </Button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-4xl">
                              <DialogHeader>
                                <DialogTitle>Student Information</DialogTitle>
                                <DialogDescription>
                                  Details for the selected student.
                                </DialogDescription>
                              </DialogHeader>
                              <div className="grid gap-4 py-4">
                                <div className="grid gap-6">
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                      <Label htmlFor="first-name">
                                        First Name
                                      </Label>
                                      <Input
                                        id="first-name"
                                        readOnly
                                        value={
                                          application?.student.user.firstName
                                        }
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <Label htmlFor="last-name">
                                        Middle Name
                                      </Label>
                                      <Input
                                        id="last-name"
                                        readOnly
                                        value={
                                          application?.student.user.middleName
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <Label htmlFor="email">Email</Label>
                                    <Input
                                      id="email"
                                      readOnly
                                      value={application?.student.user.email}
                                    />
                                  </div>
                                  <div className="space-y-1">
                                    <Label htmlFor="skills">Skills</Label>
                                    <Textarea
                                      id="skills"
                                      readOnly
                                      value={application?.student.skills.join(
                                        ", "
                                      )}
                                    />
                                  </div>
                                  <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-1">
                                      <Label htmlFor="gpa">GPA</Label>
                                      <Input
                                        id="gpa"
                                        readOnly
                                        value={application?.student.gpa}
                                      />
                                    </div>
                                    <div className="space-y-1">
                                      <Label htmlFor="department">
                                        Department
                                      </Label>
                                      <Input
                                        id="department"
                                        readOnly
                                        value={
                                          application?.student.department.name
                                        }
                                      />
                                    </div>
                                  </div>
                                  <div className="space-y-1">
                                    <Label htmlFor="university">
                                      University
                                    </Label>
                                    <Input
                                      id="university"
                                      readOnly
                                      value={
                                        application?.student.University.name
                                      }
                                    />
                                  </div>
                                </div>
                                <div className="flex justify-between">
                                  <Link href={application?.student.resumeUrl}>
                                    <Button variant="outline">
                                      <Download className="mr-2 h-4 w-4" />
                                      Download File
                                    </Button>
                                  </Link>
                                  <div className="flex gap-2">
                                    <Button
                                      variant="destructive"
                                      onClick={async () => {
                                        await handleReject(application.id);
                                      }}
                                    >
                                      Reject
                                    </Button>
                                    <Button
                                      onClick={async () => {
                                        await handleAccept(application.id);
                                        console.log("Hope this works");
                                      }}
                                    >
                                      Accept
                                    </Button>
                                  </div>
                                </div>
                              </div>
                            </DialogContent>
                          </Dialog>
                        </TableCell>
                        <TableCell>{application?.student.user.email}</TableCell>
                        <TableCell>{application?.internship.title}</TableCell>
                        <TableCell>
                          <Badge
                            className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
                            variant="outline"
                          >
                            Pending
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <AlertDialog>
                            <AlertDialogTrigger>
                              <Button size="sm" variant="outline">
                                View
                              </Button>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Confirm Application Decision
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  <p className="leading-loose">
                                    Please confirm your decision regarding this
                                    internship application. This action cannot
                                    be undone. Choosing &quot; Reject &quot;
                                    will decline the applicant and remove their
                                    application from the active list.
                                  </p>
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={async () => {
                                    await handleAccept(application.id);
                                    console.log("Hope this works");
                                  }}
                                >
                                  Accept
                                </AlertDialogAction>
                                <AlertDialogAction
                                  onClick={async () => {
                                    await handleReject(application.id);
                                  }}
                                >
                                  Reject
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        </TableCell>
                      </TableRow>
                    ))
                  )}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
}

function DialogBox(props: any) {
  return (
    <Dialog>
      <DialogTrigger />
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Application Details</DialogTitle>
          <DialogDescription>
            Review the applicants details and make a decision.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 items-center gap-4">
            <Label className="text-right" htmlFor="name">
              Name
            </Label>
            <p className="col-span-1" id="name" />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Label className="text-right" htmlFor="email">
              Email
            </Label>
            <p className="col-span-1" id="email" />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Label className="text-right" htmlFor="position">
              Position
            </Label>
            <p className="col-span-1" id="position" />
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Label className="text-right" htmlFor="resume">
              Resume
            </Label>
            <div className="col-span-1">
              <Button size="sm" variant="outline">
                View Resume
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-2 items-center gap-4">
            <Label className="text-right" htmlFor="cover-letter">
              Cover Letter
            </Label>
            <div className="col-span-1">
              <Button size="sm" variant="outline">
                View Cover Letter
              </Button>
            </div>
          </div>
        </div>
        <DialogFooter>
          <Button className="mr-auto" variant="destructive">
            Reject
          </Button>
          <Button>Accept</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
