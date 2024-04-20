import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Users } from "lucide-react";

function Cards({
  cardName,
  cardDescription,
  cardValue,
  icon,
}: {
  cardName: string;
  cardDescription: string;
  cardValue: number;
  icon: any;
}) {
  return (
    <Card className="transition duration-700 hover:bg-blue-100 hover:shadow-sm dark:hover:bg-gray-900">
      <CardHeader className="pb-2">
        <div className="flex flex-row justify-between">
          <CardDescription className="font-semibold">
            {cardName}
          </CardDescription>
          {icon}
        </div>
      </CardHeader>
      <CardContent>
        <CardTitle className="text-4xl text-blue-900">{cardValue}</CardTitle>
      </CardContent>
      <CardFooter>
        <div className="text-xs text-muted-foreground">
          <p className="text-xs text-muted-foreground">{cardDescription}</p>
        </div>
      </CardFooter>
    </Card>
  );
}

export default Cards;
