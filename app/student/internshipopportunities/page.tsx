"use client";
import React, { useState } from "react";
import Card from "@/components/card/Cards";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { SearchIcon } from "lucide-react";
import { useFilterInternship } from "@/hooks/useStudentsActions";

const Page = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredOpportunities, setFilteredOpportunities] = useState([]);
  const { internships } = useFilterInternship();

  // Function to handle search query change
  const handleSearchChange = (e) => {
    const { value } = e.target;
    setSearchQuery(value);
    // Filter opportunities based on search query
    const filtered = internships.filter((opportunity) =>
      opportunity.title.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredOpportunities(filtered);
  };

  const renderOpportunities = () => {
    const dataToRender = searchQuery ? filteredOpportunities : internships;
    return dataToRender.flatMap((opportunity) =>
      opportunity.company?.internshipOffered.map((offered) => (
        <Link
          key={`${opportunity.id}-${offered.id}`} // Unique key for each Card
          href={`/student/internshipopportunities/${offered.id}`}
          onClick={() => console.log("Navigating to detail:", offered.id)}
        >
          <Card
            title={offered.title} // Use each title from internshipOffered
            imageUrl={opportunity.imageUrl}
            startdate={offered.startDate} // Use start date from internshipOffered
            enddate={offered.endDate} // Use end date from internshipOffered
            address={opportunity.company?.address?.city}
          />
        </Link>
      ))
    );
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
      <div className="grid grid-cols-3 gap-16 ml-15 justify-evenly m-5 mt-10">
        {renderOpportunities()}
      </div>
    </div>
  );
};

export default Page;
