"use client"

import React, { useState } from "react";
import Home from "./app";
import { SocketProvider } from "@/provider/SocketProvider";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

export default function App() {

  const [queryClient] = useState(() => new QueryClient());

  return(
    <SocketProvider>
       <QueryClientProvider client={queryClient}>

         <Home/>
       </QueryClientProvider>
    </SocketProvider>
  
    )


}
