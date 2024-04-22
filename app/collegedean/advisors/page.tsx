import React from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEdit, faTrash } from '@fortawesome/free-solid-svg-icons'
import DashboardTable from '@/components/dashboard/Tables'
import { Button } from '@/components/ui/button'

const page = () => {
  const advisorHeaders = [
  { key: "advisor",
  label: "Name",
  className: "text-left"
  },
  {
    key: "department",
    label: "Department",
    className: "hidden sm:table-cell",
  },
  {
    key: "internsAssigned",
    label: "Interns Assigned",
    className: "hidden sm:table-cell",
  },
  {
    key: "approvalStatus",
    label: "Approval Status",
    className: "hidden md:table-cell",
  },
  {
    key: 'approve',
    label: "Approve",
    className: "hidden md:table-cell",
  },
  {
    key: 'reject',
    label: "Reject",
    className: "hidden md:table-cell",
  },
];

const advisorData = [
  {
    advisor: "Emily Carter",
    department: "Software Engineering",
    internsAssigned: "20",
    approvalStatus: "Approved",
    approve:<Button className='bg-green-600'>Approve</Button>,
    reject:<Button className='bg-red-600'>Reject</Button>
    // className: "", // optional, for additional styling
    // badgeVariant: "outline", // variant for the badge, assuming you use a badge to visualize status
  },
  {
    advisor: "Michael Lawson",
    department: "Marketing Analysis",
    internsAssigned: "30",
    approvalStatus: "Pending",
    approve:<Button className='bg-green-600'>Approve</Button>,
    reject:<Button className='bg-red-600'>Reject</Button>
    // className: "bg-accent", // optional, for additional styling
    // badgeVariant: "secondary",
  },
  {
    advisor: "Laura Jenkins",
    department: "Human Resources",
    internsAssigned: "10",
    approvalStatus: "Approved",
    approve:<Button className='bg-green-600'>Approve</Button>,
    reject:<Button className='bg-red-600'>Reject</Button>
    // className: "",
    // badgeVariant: "outline",
  },
  {
    advisor: "David Clarke",
    department: "Data Science",
    internsAssigned: "5",
    approvalStatus: "Pending",
    approve:<Button className='bg-green-600'>Approve</Button>,
    reject:<Button className='bg-red-600'>Reject</Button>
    // className: "bg-accent",
    // badgeVariant: "outline",
  },
];
  return (
    <div>
      <DashboardTable
          tableName="Advisors"
          tableDescription="List of advisors to be approved"
          data={advisorData}
          headers={advisorHeaders}
          
        />
    </div>
  )
}

export default page
