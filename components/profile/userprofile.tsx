"use client";
import { Briefcase, Book, Check, X, Plus } from "lucide-react";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup } from "@/components/ui/radio-group";
import { Badge } from "../ui/badge";
import { FormLabel } from "../ui/form";
import { useRouter } from "next/navigation";

interface isDetail {
  imageUrl: string;
  name: string;
  email: any;
  password: any;
  firstName: any;
  middleName: any;
  userName: string;
  studentPhoneNum: string;
  universityName: string;
  companyName: string;
  website: string;
  companyEmail: string;
  companyPhoneNum: string;
  industryType: string;
  city: string;
  region: string;
  subcity: string;
  departmentName: any;
  year: any;
  gpa: string;
  skillsArray: string[];
  resumeUrl: string;
  field: string;
  btn: any;
}

const CardDetail = ({
  imageUrl,
  email,
  password,
  name,
  userName,
  studentPhoneNum,
  universityName,
  companyPhoneNum,
  website,
  subcity,
  region,
  city,
  industryType,
  companyName,
  departmentName,
  year,
  gpa,
  skillsArray,
  btn,
  resumeUrl,
}: isDetail) => {
  const router = useRouter();

  const handleChangePhoto = () => {
    const fileInput = document.getElementById("fileInput");
    if (fileInput) {
      fileInput.click();
    }
  };
  const [skills, setSkills] = useState<string[]>([]);
  const skillsInput = () => {
    const input = document.getElementById("skillsArray") as HTMLInputElement;
    input.value = input.value.trim();
    if (input.value == "") return;

    if (skills.includes(input.value)) {
      input.value = "";
      return;
    }
    setSkills([...skills, input.value]);
    input.value = "";
  };

  const deleteSkill = (index: number) => {
    return () => {
      const newSkills = skills.filter((_, i) => i !== index);
      setSkills(newSkills);
    };
  };
  return (
    <div>
      <div className="px-4 space-y-6 sm:px-6 bg-blue-50 dark:bg-slate-900 rounded-xl m-2">
        <header className="space-y-2">
          <div className="flex items-center space-x-3 p-2">
            {imageUrl && (
              <Image
                alt="Avatar"
                className="rounded-full"
                height="96"
                src={imageUrl}
                style={{
                  aspectRatio: "96/96",
                  objectFit: "cover",
                }}
                width="96"
              />
            )}
            {btn && (
              <div className="space-y-1">
                {name && <h1 className="text-2xl font-bold">{name}</h1>}
                <Button size="sm" onClick={handleChangePhoto}>
                  {btn}
                </Button>
                <input
                  type="file"
                  id="fileInput"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    // Handle file selection logic here
                  }}
                />
              </div>
            )}
          </div>
        </header>
        <div className="space-y-8">
          <Card className="bg-blue-100 dark:bg-blue-950">
            <CardContent className="space-y-6">
              {name && (
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    defaultValue={name}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {companyName && (
                <div className="space-y-2">
                  <Label htmlFor="name">Company Name</Label>
                  <Input
                    defaultValue={companyName}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {universityName && (
                <div className="space-y-2">
                  <Label htmlFor="name">University Name</Label>
                  <Input
                    defaultValue={universityName}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {industryType && (
                <div className="space-y-2">
                  <Label htmlFor="name">Industry Type</Label>
                  <Input
                    defaultValue={industryType}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {departmentName && (
                <div className="space-y-2">
                  <Label htmlFor="name">Department Name</Label>
                  <Input
                    defaultValue={departmentName}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {email && (
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    placeholder=""
                    defaultValue={email}
                    className="border-sky-200"
                  />
                </div>
              )}
              {password && (
                <div className="space-y-2">
                  <Label>Password</Label>
                  <p>{password}</p>
                </div>
              )}
              {userName && (
                <div className="space-y-2">
                  <Label htmlFor="name">Username</Label>
                  <Input
                    defaultValue={userName}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {studentPhoneNum && (
                <div className="space-y-2">
                  <Label htmlFor="name">Phone Number</Label>
                  <Input
                    defaultValue={studentPhoneNum}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {year && (
                <div className="space-y-2">
                  <Label htmlFor="name">Year</Label>
                  <Input
                    defaultValue={year}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {gpa && (
                <div className="space-y-2">
                  <Label htmlFor="name">GPA</Label>
                  <Input
                    defaultValue={gpa}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {skillsArray && (
                <div>
                  <p>Skills</p>
                  <ul>
                    {skillsArray.map((skillArray, index) => (
                      <li
                        key={index}
                        className="flex items-center text-blue-950 dark:text-white"
                      >
                        <Check className="h-4 w-4 mr-2  text-blue-950 dark:text-white" />
                        {skillArray}
                      </li>
                    ))}
                  </ul>
                  <div className="flex">
                    <p className="mr-2 mt-2">Add more</p>
                    <div className="flex flex-wrap">
                      {skills.map((skill, index) => (
                        <Badge
                          key={index}
                          className="font-bold flex m-1 pl-1 p-2 gap-1.5"
                        >
                          <div className="">{skill}</div>
                          <X
                            size={14}
                            className="mt-0.5 hover:cursor-pointer"
                            onClick={deleteSkill(index)}
                          />
                        </Badge>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      id="skillsArray"
                      placeholder="Add your skills here..."
                      className="border-sky-200"
                    />
                    <Button
                      asChild
                      size="icon"
                      className="p-2 rounded-full hover:translate-y-1 h-fit w-fit"
                      variant="outline"
                    >
                      <Plus size={28} strokeWidth={1.5} onClick={skillsInput} />
                    </Button>
                  </div>
                </div>
              )}
              {region && (
                <div className="space-y-2">
                  <Label htmlFor="name">Region</Label>
                  <Input
                    defaultValue={region}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {city && (
                <div className="space-y-2">
                  <Label htmlFor="name">City</Label>
                  <Input
                    defaultValue={city}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {subcity && (
                <div className="space-y-2">
                  <Label htmlFor="name">Subcity</Label>
                  <Input
                    defaultValue={subcity}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {companyPhoneNum && (
                <div className="space-y-2">
                  <Label htmlFor="name">Company's Phone Number</Label>
                  <Input
                    defaultValue={companyPhoneNum}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {website && (
                <div className="space-y-2">
                  <Label htmlFor="name">Website</Label>
                  <Input
                    defaultValue={website}
                    id="name"
                    placeholder=""
                    className="border-sky-200"
                  />
                </div>
              )}
              {resumeUrl && (
                <div className="space-y-2">
                  <Label htmlFor="name">Resume</Label>
                  <Input
                    defaultValue={resumeUrl}
                    id="name"
                    placeholder=""
                    type="file"
                    className="border-sky-200"
                  />
                </div>
              )}
            </CardContent>
          </Card>
          {/* <Card>
            <CardHeader>
              <div>Language</div>
              <div>Choose your preferred language</div>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <RadioGroup defaultValue="en" />
              </div>
            </CardContent>
          </Card> */}
          <Card className="bg-blue-100 dark:bg-blue-950">
            <CardHeader>
              <div className="text-lg font-bold">Change Password</div>
              <CardDescription>
                For your security, please do not share your password with
                others.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="current-password">Current Password</Label>
                <Input
                  id="current-password"
                  type="password"
                  className="border-sky-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-password">New Password</Label>
                <Input
                  id="new-password"
                  type="password"
                  className="border-sky-200"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="confirm-password">Confirm Password</Label>
                <Input
                  id="confirm-password"
                  type="password"
                  className="border-sky-200"
                />
              </div>
            </CardContent>
          </Card>
        </div>
        <div className="p-2">
          <Button>Save</Button>
        </div>
      </div>
    </div>
  );
};

export default CardDetail;
