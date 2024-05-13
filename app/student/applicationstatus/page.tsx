import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import React from "react";
import { useFetchInternshipByCompanyId } from "@/hooks/useInternshipActions";
import { RotateCcw } from "lucide-react";
import {
  useFetchApplicationsByCompanyId,
  // useFindMentorsByCompanyId,
} from "@/hooks/useCompanyActions";
import { Badge } from "@/components/ui/badge";

const page = () => {
  const { applications, isLoading } = useFetchApplicationsByCompanyId();
  const acceptedInterns = applications?.filter(
    (application: any) => application.status === "ACCEPTED"
  );
  return (
    <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
      <CardHeader>
        <CardTitle>Interns</CardTitle>
        <CardDescription>Interns who applied to your company.</CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Title of Internship</TableHead>
              <TableHead>Company Name</TableHead>
              <TableHead>Status</TableHead>
              <TableHead>GPA</TableHead>
              <TableHead>Address</TableHead>
              <TableHead>Company Email</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <RotateCcw className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              applications?.map((application: any, index: any) => (
                <TableRow key={index}>
                  <TableCell>
                    {application?.student.user.firstName}{" "}
                    {application?.student.user.middleName}
                  </TableCell>
                  <TableCell>{application?.student.user.email}</TableCell>
                  <TableCell>{application?.internship.title}</TableCell>
                  <TableCell>
                    {application?.status === "PENDING" ? (
                      <Pending />
                    ) : application?.status === "ACCEPTED" ? (
                      <Accepted />
                    ) : application?.status === "REJECTED" ? (
                      <Rejected />
                    ) : (
                      <Canceled />
                    )}
                  </TableCell>
                  <TableCell>{application?.student.gpa}</TableCell>
                  <TableCell>{application?.student.University.name}</TableCell>
                  <TableCell>{application?.student.department.name}</TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
};
function Pending() {
  return (
    <Badge
      className="bg-yellow-100 text-yellow-600 dark:bg-yellow-900/20 dark:text-yellow-400"
      variant="outline"
    >
      Pending
    </Badge>
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

function Rejected() {
  return (
    <Badge
      className="bg-red-100 text-red-600 dark:bg-red-900/20 dark:text-red-400"
      variant="outline"
    >
      Rejected
    </Badge>
  );
}

function Canceled() {
  return (
    <Badge
      className="bg-gray-100 text-gray-600 dark:bg-gray-900/20 dark:text-gray-400"
      variant="outline"
    >
      Pending
    </Badge>
  );
}
export default page;
