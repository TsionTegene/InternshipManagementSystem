/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useLayoutEffect } from "react";
import Dashboard from "./dashboard/page";
import { IsAuthenticated } from "@/lib/IsAuthenticated";
import { useRouter } from 'next/navigation'

const page = () => {
  const router = useRouter()
  useLayoutEffect(() => {
    const isAuth = IsAuthenticated("COMPNAY_HR").then((isAuth) => {
      if(!isAuth){
        router.push('/login')
      }
    });
  }, [router]);
  return (
    <div>
      <Dashboard />
      {/* Hello */}
    </div>
  );
};

export default page;
