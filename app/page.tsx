"use client";
import React, { useState } from "react";
import Home from "./app";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Login } from "@/components/login/login";


export default function App() {
  const queryClient = new QueryClient();

  return <Home />;
}
