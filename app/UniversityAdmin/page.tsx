"use client";
import { CreditCard } from "lucide-react";
import { Users } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import TableList from "@/components/Table/table";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import Cards from "@/components/dashboard/cards";
import DashboardTable from "@/components/dashboard/Tables";
import {useUniversityActions} from "@/hooks/useUniversityActions"
export default function Dashboard() {
  const {count} = useUniversityActions()
  
  useEffect(()=>{
  },[])

  const cards = [
    {
      cardName: "Total Student",
      cardDescription: "8 from last year",
      cardValue: count[0],
      icon: <Users color="blue" className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total Department",
      cardDescription: "3 from last year",
      cardValue: count[1],
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total College",
      cardDescription: "4 from last year",
      cardValue: count[2],
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total Staff",
      cardDescription: "5 from last year",
      cardValue: count[3],
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
  ];

  const internshipHeaders = [
    {
      key: "college",
      label: "College Name",
      className: "text-left"
    },
    {
      key: "internship",
      label: "Number of Department",
      className: "hidden sm:table-cell",
    },
    {
      key: "Staff",
      label: "Number of Staff",
      className: "hidden sm:table-cell",
    },
    {
      key: "NoStudent",
      label: "Number of Student",
      className: "hidden md:table-cell",
    },
  
  ];

  const internshipData = [
    {
      student: "Emily Carter",
      internship: "Software Engineering Intern",
      status: "Pending Review",
      applicationDate: "2023-09-15",
      location: "San Francisco, CA",
    },
    {
      student: "Michael Lawson",
      internship: "Marketing Analyst Intern",
      status: "Accepted",
      applicationDate: "2023-09-20",
      location: "New York, NY",

    },
    {
      student: "Laura Jenkins",
      internship: "Human Resources Intern",
      status: "Declined",
      applicationDate: "2023-09-18",
      location: "Chicago, IL",

    },
    {
      student: "David Clarke",
      internship: "Data Science Intern",
      status: "Pending Review",
      applicationDate: "2023-09-22",
      location: "Boston, MA",

    },
  ];


  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 mb-2">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <WelcomeCard name="Abel" />
        </div>
        <div className="grid gap-2 grid-cols-2">
          {cards.map((card, index) => (
            <Cards
              key={index}
              cardName={card.cardName}
              cardDescription={card.cardDescription}
              cardValue={card.cardValue}
              icon={card.icon}
            />
          ))}
        </div>
      </div>
    </div>
  
  );
}

