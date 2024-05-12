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
const user = localStorage.getItem("user")
const userName = user ? JSON.parse(user as string).firstName : null
export default function Dashboard() {
  const {count} = useUniversityActions()
  
  useEffect(()=>{
  },[])

  const cards = [
    {
      cardName: "Total Student",
      cardValue: count[0],
      icon: <Users color="blue" className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total Department",
      cardValue: count[1],
      icon: <CreditCard className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total College",
      cardValue: count[2],
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
    {
      cardName: "Total Staff",
      cardValue: count[3],
      icon: <Users className="h-4 w-4 text-muted-foreground" />,
    },
  ];


  return (
    <div className="grid auto-rows-max items-start gap-4 md:gap-8 lg:col-span-2 mb-2">
      <div className="grid gap-5 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <WelcomeCard name={userName} />
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

