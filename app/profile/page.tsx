"use client";
import React from "react";
import CardDetail from "@/components/profile/userprofile";
import { useRouter } from "next/navigation";

const studentProfile = ({ params }) => {
  const userInfo = [
    {
      id: "1",
      name: "Tsion Tegene",
      email: "tsion@gmail.com",
      userName: "Tsion",
      password: "123456",
      studentPhoneNum: "0909090909",
      universityName: "Wolkite University",
      departmentName: "Software Engineering",
      year: "4",
      gpa: "2",
      imageUrl: "/images/avatar.svg",
      btn: "Change photo",
      skillsArray: [
        "Developing web applications",
        "Testing software components",
      ],
    },
  ];

  const router = useRouter();

  return (
    <div>
      {userInfo.map((user, index) => (
        <CardDetail
          name={user.name}
          imageUrl={user.imageUrl}
          email={user.email}
          userName={user.userName}
          btn={user.btn}
          password={user.password}
          universityName={user.universityName}
          departmentName={user.departmentName}
          year={user.year}
          gpa={user.gpa}
          studentPhoneNum={user.studentPhoneNum}
          skillsArray={user.skillsArray}
        />
      ))}
    </div>
  );
};

export default studentProfile;
