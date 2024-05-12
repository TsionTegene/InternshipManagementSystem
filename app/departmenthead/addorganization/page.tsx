"use client";

import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { useCompanyActions } from "@/hooks/useCompanyActions";
import { addCompany} from "@/api/company/mutations";
import { useRouter } from "next/navigation";

const dpID = localStorage.getItem("depId");

export default function Component() {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");
  const { company } = useCompanyActions();

  const add = (id: string) => {
    addCompany(dpID as string, id);
    router.push("/departmenthead/Company");
  };

  // Sample company data
  // Filter companies based on search query
  
  const filteredCompanies = Array.isArray(company)
    ? company.filter((value) =>
      value.name?.toLowerCase().includes(searchQuery.toLowerCase()) ||
      value.company?.email?.toLowerCase().includes(searchQuery.toLowerCase())
    )
    : [];
  console.log("companies", company)
  return (
    <section className="container mx-auto px-4 py-8 md:px-6 lg:py-12">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Company List </h1>
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
      <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-3 lg:grid-cols-1 gap-6">
        {Array.isArray(company) && company.length > 0 ? (
          filteredCompanies.map((company) => (
            <div
              key={company.name}
              className="max-w-fit bg-white dark:bg-gray-900 rounded-lg shadow-md overflow-hidden"
            >
              <div className="grid grid-cols-2 gap-3 items-center px-4 py-2 bg-gray-100 dark:bg-gray-800 justify-between">
                <h3 className="text-lg font-semibold">{company?.name}</h3>
                <div className="grid grid-cols-1 items-end sm:grid-cols-3 gap-4">
                  <Button
                    onClick={() => {
                      add(company.id);
                    }}
                    className="bg-blue-500 col-span-1"
                  >
                    Add
                  </Button>
                </div>
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
                </div>
                <p className="text-gray-500 dark:text-gray-400 mb-2">
                  {"Address: " + company?.address?.city}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {"Area: " + company?.industry}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {"Email: " + company?.email}
                </p>
                <p className="text-gray-700 dark:text-gray-300 mb-2">
                  {"Website: " + company?.website}
                </p>
              </div>
            </div>
          ))
        ) : (
          <div>Empty</div>
        )}
      </div>
    </section>
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
