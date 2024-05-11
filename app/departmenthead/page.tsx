"use client";
import { CreditCard } from "lucide-react";
import { Users } from "lucide-react";
import React, { useEffect} from "react";
import WelcomeCard from "@/components/dashboard/WelcomeCard";
import Cards from "@/components/dashboard/cards";
import { useUniversityActions } from "@/hooks/useUniversityActions"
import { useCountApprovedStd, useCountToBeApprovedStd } from "@/queries/useStudentQueries";
import { countDepCompany } from "@/api/company/queries"
import { useCountDepCompany } from "@/queries/useCompanyQueries";
import { useCountDeptAdvisorData } from "@/queries/useUsersdata";
const dpID = localStorage.getItem("depId")
const user = localStorage.getItem("user")
const userName = user ? JSON.parse(user as string).firstName : null
export default function Dashboard() {
    const { count } = useUniversityActions()
    const approved :[] = useCountApprovedStd( dpID as string).data
    const requested: [] = useCountToBeApprovedStd(dpID as string).data
    const company: [] = useCountDepCompany(dpID as string).data 
    const advisor: [] = useCountDeptAdvisorData(dpID as string).data



    useEffect(() => {
        console.log("count of approved students ",approved)
    }, [])

    const cards = [
        {
            cardName: "Total Student",
            cardDescription: "8 from last year",
            cardValue: approved,
            icon: <Users color="blue" className="h-4 w-4 text-muted-foreground" />,
        },
        {
            cardName: "Total Advisor",
            cardDescription: "5 from last year",
            cardValue: advisor,
            icon: <Users className="h-4 w-4 text-muted-foreground" />,
        },
        {
            cardName: "Total Company",
            cardDescription: "5 from last year",
            cardValue: company,
            icon: <Users className="h-4 w-4 text-muted-foreground" />,
        },
        {
            cardName: "Total Requests",
            cardDescription: "5 from last year",
            cardValue: requested,
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

