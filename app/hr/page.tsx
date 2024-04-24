/* eslint-disable react-hooks/rules-of-hooks */
"use client";

import React, { useLayoutEffect } from "react";
import Dashboard from "./dashboard/page";
import { IsAuthenticated } from "@/lib/IsAuthenticated";
import { useRouter } from 'next/navigation'

const page = () => {
  
  return (
    <div>
      <Dashboard />
      {/* Hello */}
    </div>
  );
};

export default page;
