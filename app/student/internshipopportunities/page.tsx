"use client";
import React, { useState } from "react";
import Card from "@/components/card/Cards";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SearchIcon } from "lucide-react";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);

  const opportunities = [
    {
      id: 1,
      title: "Web Development",
      imageUrl: "/images/landing2.png",
      startdate: "14/07/2024",
      enddate: "11/09/2024",
      address: "Hawassa",
    },
    {
      id: 2,
      title: "Networking",
      imageUrl: "/images/landing2.png",
      startdate: "22/01/2024",
      enddate: "24/05/2024",
      address: "Addis Abeba",
    },
    {
      id: 3,
      title: "Artificial Intelligence",
      imageUrl: "/images/landing2.png",
      startdate: "00/00/00",
      enddate: "00/00/00",
      address: "Addis Abeba",
    },
    {
      id: 4,
      title: "Networking",
      imageUrl: "/images/landing2.png",
      startdate: "00/00/00",
      enddate: "00/00/00",
      address: "Addis Abeba",
    },
    {
      id: 5,
      title: "Android Development",
      imageUrl: "/images/landing2.png",
      startdate: "00/00/00",
      enddate: "00/00/00",
      address: "Addis Abeba",
    },
    {
      id: 6,
      title: "Machine Learning",
      imageUrl: "/images/landing2.png",
      startdate: "00/00/00",
      enddate: "00/00/00",
      address: "Addis Abeba",
    },
  ];

  // Function to handle search query change
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    // Filter opportunities based on search query
    const filtered = opportunities.filter((opportunity) =>
      opportunity.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOpportunities(filtered);
  };

  // Render either filtered opportunities or all opportunities
  const renderOpportunities = () => {
    const dataToRender = searchQuery ? filteredOpportunities : opportunities;
    return dataToRender.map((opportunity) => (
      <Link
        key={opportunity.id}
        href={`/student/internshipopportunities/${opportunity.id}`}
        onClick={() => console.log("Navigating to detail:", opportunity.id)}
      >
        <Card
          title={opportunity.title}
          imageUrl={opportunity.imageUrl}
          startdate={opportunity.startdate}
          enddate={opportunity.enddate}
          address={opportunity.address}
        />
      </Link>
    ));
  };

  return (
    <div className="">
      <div className="grid grid-cols-2 px-2">
        <p className="text-2xl">Available Internships</p>
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
          />
        </div>
      </div>
      <div className="grid grid-cols-2 gap-16 ml-15 justify-evenly m-5 mt-10">
        {renderOpportunities()}
      </div>
    </div>
  );
};

export default Page;
