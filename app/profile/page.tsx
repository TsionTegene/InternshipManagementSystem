"use client";
import React from "react";
import CardDetail from "@/components/profile/userprofile";
import { useRouter } from "next/navigation";

const studentProfile = ({ params }) => {
  const role = localStorage.getItem("role");
  const getuser = localStorage.getItem("user");
  const user = JSON.parse(getuser);
  const userInfo = [
    {
      id: "1",
      firstName: "Tsion",
      middleName: "Tegene",
      email: "tsion@gmail.com",
      userName: "Tsion",
      PhoneNum: "0909090909",
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
          firstName={user.firstName}
          middleName={user.middleName}
          imageUrl={user.imageUrl}
          email={user.email}
          userName={user.userName}
          btn={user.btn}
          universityName={user.universityName}
          departmentName={user.departmentName}
          year={user.year}
          gpa={user.gpa}
          PhoneNum={user.PhoneNum}
          skillsArray={user.skillsArray}
        />
      ))}
    </div>
  );
};

export default studentProfile;
