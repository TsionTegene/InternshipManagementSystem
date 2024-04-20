import { Users } from "lucide-react"
import React from 'react'
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import Image from "next/image"
import { MoreHorizontal } from "lucide-react"

import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import TableList from "@/components/Table/table"


export default function Dashboard() {
  return (
    <div className="flex min-h-screen w-full flex-col">
      <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4">
      <Card className="sm:col-span-2">
        <CardHeader className="pb-3">
          <CardTitle>Welcome To IMS <span className="text-green-500">Abel</span></CardTitle>
          <CardDescription className="max-w-lg text-balance leading-relaxed">
          Streamline Your Internship Management Seamlessly with Our Web-Based System.
          </CardDescription>
        </CardHeader>
        <CardFooter>
          <Button>Create New Internship</Button>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="pb-2">
        <div className="flex flex-row justify-between">
          <CardDescription>Total Interns</CardDescription>
          <Users className="h-4 w-4 text-muted-foreground" />
        </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-4xl">15</CardTitle>
        </CardContent>
        <CardFooter>
        <div className="text-xs text-muted-foreground">
          <p className="text-xs text-muted-foreground">8 from last year</p>
          </div>
        </CardFooter>
      </Card>
      <Card>
        <CardHeader className="pb-2">
          <div className="flex flex-row justify-between">
            <CardDescription>Enrolled Interns</CardDescription>
            <Users className="h-4 w-4 text-muted-foreground" />
          </div>
        </CardHeader>
        <CardContent>
          <CardTitle className="text-4xl">9</CardTitle>
        </CardContent>
        <CardFooter>
          <div className="text-xs text-muted-foreground">
            Interns
          </div>
        </CardFooter>
      </Card>
      </div>

      <div className="flex flex-col sm:gap-4 sm:py-4">
        <TableList />
      </div>
    </div>
    
  )
}

