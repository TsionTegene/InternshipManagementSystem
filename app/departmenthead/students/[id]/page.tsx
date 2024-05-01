// "use client";
// import React, { useState } from "react";
// import { useRouter } from "next/navigation";
// import StudentsDetail from "@/components/studentdetailpage/detail";
// import { Input } from "@/components/ui/input";
// import { Button } from "@/components/ui/button";

// const StudentDetailPage = ({ params }) => {
//   const studentAdvisor = [
//     { id: "1", name: "Bereket" },
//     { id: "2", name: "Rebecca" },
//     { id: "3", name: "Abel" },
//     { id: "4", name: "Tsion" },
//   ];

//   const advisorOptions = ["Mr. Abebe", "Mr. John", "Ms. Emily", "Dr. Smith"];
//   const router = useRouter();
//   const [searchText, setSearchText] = useState("");
//   const [selectedAdvisor, setSelectedAdvisor] = useState("");
//   const [isDropdownOpen, setIsDropdownOpen] = useState(false);

//   // Find the student with the matching ID
//   const student = studentAdvisor.find((std) => std.id === params.id);

//   // Handle the case where student is undefined
//   if (!student) {
//     return <div>Student not found</div>;
//   }

//   const handleSearchChange = (e) => {
//     setSearchText(e.target.value);
//   };

//   const handleAdvisorSelect = (advisor) => {
//     setSelectedAdvisor(advisor);
//     setSearchText(advisor); // Set selected advisor as the input value
//     setIsDropdownOpen(false); // Close dropdown after selecting an advisor
//   };

//   const handleSubmit = () => {
//     // Handle submitting the selected advisor
//     console.log("Selected advisor:", selectedAdvisor);
//   };

//   const filteredAdvisors = advisorOptions.filter((advisor) =>
//     advisor.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div key={student.id}>
//       <StudentsDetail name={student.name} advisor={selectedAdvisor} />
//       <div className="relative">
//         <Input
//           type="text"
//           placeholder="Search advisors"
//           value={searchText}
//           onChange={handleSearchChange}
//           onClick={() => setIsDropdownOpen(true)}
//           onFocus={() => setIsDropdownOpen(true)}
//           onBlur={() => setIsDropdownOpen(false)}
//         />
//         {isDropdownOpen && (
//           <ul className="absolute z-10 bg-white mt-1 w-full border border-gray-300 rounded-md shadow-lg">
//             {filteredAdvisors.map((advisor, index) => (
//               <li
//                 key={index}
//                 className="cursor-pointer py-1 px-3 hover:bg-gray-100"
//                 onClick={() => handleAdvisorSelect(advisor)}
//               >
//                 {advisor}
//               </li>
//             ))}
//           </ul>
//         )}
//         <Button onClick={handleSubmit} className="mt-2 btn">
//           Submit
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default StudentDetailPage;
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { Check, ChevronsUpDown } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import React, { useState } from "react";
import { useRouter } from "next/navigation";
import StudentsDetail from "@/components/studentdetailpage/detail";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { toast } from "@/components/ui/use-toast";
const languages = [
  { label: "Mr. Abebe", value: "ab" },
  { label: "Mr. John", value: "jo" },
  { label: "Ms. Emily", value: "em" },
  { label: "Dr. Smith", value: "sm" },
  { label: "Mr. Abebe", value: "ab" },
  { label: "Mr. John", value: "jo" },
  { label: "Ms. Emily", value: "em" },
  { label: "Dr. Smith", value: "sm" },
] as const;

const FormSchema = z.object({
  language: z.string({
    required_error: "Please select advisor.",
  }),
});

const StudentDetailPage = ({ params }) => {
  const studentAdvisor = [
    { id: "1", name: "Bereket" },
    { id: "2", name: "Rebecca" },
    { id: "3", name: "Abel" },
    { id: "4", name: "Tsion" },
  ];
  // const advisorOptions = ["Mr. Abebe", "Mr. John", "Ms. Emily", "Dr. Smith"];
  const student = studentAdvisor.find((std) => std.id === params.id);
  if (!student) {
    return <div>Student not found</div>;
  }
  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
  });

  function onSubmit(data: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
          <code className="text-white">{JSON.stringify(data, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <div key={student.id}>
      <StudentsDetail
        name={student.name}
        advisor={
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              <FormField
                control={form.control}
                name="language"
                render={({ field }) => (
                  <FormItem className="flex flex-col">
                    <FormLabel>Assign Advisor</FormLabel>
                    <Popover>
                      <PopoverTrigger asChild>
                        <FormControl>
                          <Button
                            variant="outline"
                            role="combobox"
                            className={cn(
                              "w-[200px] justify-between",
                              !field.value && "text-muted-foreground"
                            )}
                          >
                            {field.value
                              ? languages.find(
                                  (language) => language.value === field.value
                                )?.label
                              : "Select advisor"}
                            <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                          </Button>
                        </FormControl>
                      </PopoverTrigger>
                      <PopoverContent className="w-[200px] p-0">
                        <Command>
                          <CommandInput placeholder="Search advisor..." />
                          <CommandEmpty>No advisor found.</CommandEmpty>
                          <CommandGroup>
                            <CommandList>
                              {languages.map((language) => (
                                <CommandItem
                                  value={language.label}
                                  key={language.value}
                                  onSelect={() => {
                                    form.setValue("language", language.value);
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      language.value === field.value
                                        ? "opacity-100"
                                        : "opacity-0"
                                    )}
                                  />
                                  {language.label}
                                </CommandItem>
                              ))}
                            </CommandList>
                          </CommandGroup>
                        </Command>
                      </PopoverContent>
                    </Popover>
                    {/* <FormDescription>
                      This is the language that will be used in the dashboard.
                    </FormDescription> */}
                    <FormMessage />
                  </FormItem>
                )}
              />
              <Button type="submit">Submit</Button>
            </form>
          </Form>
        }
      />
    </div>
  );
};
export default StudentDetailPage;
