import { Card } from "@/components/ui/card";
import { Download } from "lucide-react";
import Link from "next/link";

export default function Reports() {
  const reportsData = [
    {
      name: "Tsion Tegene",
      description: "Graphic Design Intern",
    },
    {
      name: "Bereket Tadele",
      description: "Software Development Intern",
    },
    {
      name: "Abel Zeleke",
      description: "Data Analysis Intern.",
    },
    {
      name: "Rebecca Asrat",
      description: "Project Management Intern",
    },
    {
      name: "Ebisa Girma",
      description: "User Experience (UX) Design Intern",
    },
    {
      name: "Eyob Kefale",
      description: "Quality Assurance (QA) Intern",
    },
  ];

  return (
    <main className="container mx-auto px-4 md:px-6 mb-5">
      <h1 className="text-3xl font-bold mb-8">Reports</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {reportsData.map((report, index) => (
          <Card
            key={index}
            className="bg-white dark:bg-gray-950 rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-xl font-bold mb-2">{report.name}</h2>
              <p className="text-gray-500 dark:text-gray-400 mb-4">
                {report.description}
              </p>
              <div className="flex gap-4">
              <Link
                className="inline-flex items-center justify-center px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-950 dark:bg-gray-50 dark:text-gray-900 dark:hover:bg-gray-200 dark:focus:ring-gray-300"
                href="#"
              >
                <Download /> Report
              </Link>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </main>
  );
}
