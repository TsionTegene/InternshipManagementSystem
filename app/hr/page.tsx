/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useLayoutEffect } from "react";
import Dashboard from "./dashboard/page";
import { IsAuthenticated } from "@/lib/IsAuthenticated";
import { redirect } from 'next/navigation'

const page = () => {
  useLayoutEffect(() => {
    const isAuth = IsAuthenticated("COMPNAY_HR");
    if(!isAuth){
      redirect("/login");
    }
  }, []);
  return (
    <div>
      <Dashboard />
      {/* Hello */}
    </div>
  );
};

export default page;
