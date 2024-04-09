"use client"
import React, { useState } from "react";
import Home from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {

  const queryClient = new QueryClient();


  return(
         <Home/>
       
    )


}
