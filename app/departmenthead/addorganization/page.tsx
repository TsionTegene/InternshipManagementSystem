"use client";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenu,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import Image from "next/image";

export default function Component() {
  const [searchQuery, setSearchQuery] = useState("");

  // Sample company data
  const companies = [
    {
      name: "Acme Inc.",
      location: "New York, USA",
      description:
        "  Acme Inc. is a leading technology company that specializes in innovative software solutions.",
    },
    {
      name: "Globex Corporation",
      location: "San Francisco, USA",
      description:
        "  Globex Corporation is a multinational conglomerate that operates in various industries, including technology, finance, and energy.",
    },
    {
      name: "Stark Industries",
      location: "New York, USA",
      description:
        "Stark Industries is a leading defense contractor and technology company, known for its innovative products and advanced research.",
    },
    {
      name: "INSA",
      location: "New York, USA",
      description:
        "  Stark Industries is a leading defense contractor and technology company, known for its innovative products and advanced research.",
    },
    {
      name: "Metatech Digital Consultancy",
      location: "Addis Abeba, Ethiopia",
      description:
        "   Wayne Enterprises is a diversified multinational corporation with interests in various industries, including technology, aerospace,and real estate.",
    },
    {
      name: "Wayne Enterprises",
      location: "Gotham City, USA",
      description:
        "   Wayne Enterprises is a diversified multinational corporation with interests in various industries, including technology, aerospace,and real estate.",
    },
  ];

  // Filter companies based on search query
  const filteredCompanies = companies.filter(
    (company) =>
      company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      company.location.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <section className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Internship Opportunities</h1>
        <div className="relative w-full max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-500 dark:text-gray-400" />
          <Input
            className="pl-10 pr-4 py-2 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-primary-500 dark:bg-gray-900 dark:text-white"
            placeholder="Search companies..."
            type="search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      {/* Display filtered companies */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {filteredCompanies.map((company) => (
          <div
            key={company.name}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
          >
            <div className="flex items-center justify-between px-4 py-3 bg-gray-100 dark:bg-gray-800">
              <h3 className="text-lg font-semibold">{company.name}</h3>
              <Checkbox id={company.name} />
            </div>
            <div className="p-4">
              <div className="flex items-center space-x-4 mb-4">
                {/* Use appropriate company logo or image */}
                <Image
                  alt="Acme Inc. Logo"
                  className="rounded-md"
                  height={48}
                  src="/images/company.svg"
                  style={{
                    aspectRatio: "48/48",
                    objectFit: "cover",
                  }}
                  width={48}
                />
                <p className="text-gray-500 dark:text-gray-400">
                  {company.location}
                </p>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                {company.description}
              </p>
            </div>
          </div>
        ))}
        <Button>Add</Button>
      </div>
    </section>
  );
}

function BuildingIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect width="16" height="20" x="4" y="2" rx="2" ry="2" />
      <path d="M9 22v-4h6v4" />
      <path d="M8 6h.01" />
      <path d="M16 6h.01" />
      <path d="M12 6h.01" />
      <path d="M12 10h.01" />
      <path d="M12 14h.01" />
      <path d="M16 10h.01" />
      <path d="M16 14h.01" />
      <path d="M8 10h.01" />
      <path d="M8 14h.01" />
    </svg>
  );
}

function ChevronDownIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function FactoryIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z" />
      <path d="M17 18h1" />
      <path d="M12 18h1" />
      <path d="M7 18h1" />
    </svg>
  );
}

function LocateIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="2" x2="5" y1="12" y2="12" />
      <line x1="19" x2="22" y1="12" y2="12" />
      <line x1="12" x2="12" y1="2" y2="5" />
      <line x1="12" x2="12" y1="19" y2="22" />
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}

function SearchIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <circle cx="11" cy="11" r="8" />
      <path d="m21 21-4.3-4.3" />
    </svg>
  );
}
