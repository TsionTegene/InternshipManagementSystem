"use client"

import { TableHead, TableRow, TableHeader, TableCell, TableBody, Table } from "@/components/ui/table" 
import Link from "next/link" 
import { Badge } from "@/components/ui/badge" 
import { Button } from "@/components/ui/button" 
import { DialogTrigger, DialogTitle, DialogDescription, DialogHeader, DialogFooter, DialogContent, Dialog } from "@/components/ui/dialog" 
import { Label } from "@/components/ui/label" 
import { useFetchApplicationsByCompanyId } from "@/hooks/useApplicationActions"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; 
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


export default function Component() {
  const { applications, isLoading } = useFetchApplicationsByCompanyId();
  console.log(applications, isLoading)
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
                    <TableHead className="text-right">Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {isLoading ? (
                    <div className="flex min-w-full p-10 justify-center items-center">
                      <svg
                        className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                        ></circle>
                        <path
                          className="opacity-75"
                          fill="currentColor"
                          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                        ></path>
                      </svg>
                      <p>Loading...</p>
                    </div>
                  ) : (
                    applications?.map((application: any, index: any) => (
                      <TableRow key={index}>
                        <TableCell>
                          {application.student.user.firstName}{" "}
                          {application.student.user.middleName}
                        </TableCell>
                        <TableCell>{application.student.user.email}</TableCell>
                        <TableCell>{application.internship.title}</TableCell>
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
                                  Please confirm your decision regarding this
                                  internship application. This action cannot be
                                  undone. Choosing &quot; Reject &quot; will
                                  decline the applicant and remove their
                                  application from the active list.
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction>Accept</AlertDialogAction>
                                <AlertDialogAction>Reject</AlertDialogAction>
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

