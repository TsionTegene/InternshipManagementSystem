import React from 'react'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from '@/components/ui/button';

export default function WelcomeCard() {
  return (
    <Card className="bg-blue-100 pt-8 px-3 grid gap-3 grid-cols-2 sm:col-span-3 dark:bg-blue-300">
      <CardHeader className="grid grid-rows-2">
        <div>
          <CardTitle className="font-bold my-4 text-blue-950">
            Welcome To IMS <span className="text-blue-500">Abel</span>
          </CardTitle>
          <CardDescription className="dark:text-blue-800 max-w-lg text-balance leading-7">
            Streamline Your Internship Management Seamlessly with Our Web-Based
            System.
          </CardDescription>
        </div>
        <Button className="dark:text-slate-900 max-w-48 font-semibold ">
          Create New Internship
        </Button>
      </CardHeader>
      <CardContent className="py-3">
        <span className="MuiStack-root css-1d0id76">
          <svg
            className="MuiBox-root css-uwwqev"
            viewBox="0 0 480 360"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs>
              <linearGradient
                id="BG"
                x1="19.496%"
                x2="77.479%"
                y1="71.822%"
                y2="16.69%"
              >
                <stop offset="0%" stop-color="#2065D1"></stop>
                <stop
                  offset="100%"
                  stop-color="#2065D1"
                  stop-opacity="0"
                ></stop>
              </linearGradient>
            </defs>
            <path
              fill="url(#BG)"
              fill-rule="nonzero"
              d="M0 198.78c0 41.458 14.945 79.236 39.539 107.786 28.214 32.765 69.128 53.365 114.734 53.434a148.44 148.44 0 0056.495-11.036c9.051-3.699 19.182-3.274 27.948 1.107a75.779 75.779 0 0033.957 8.01c5.023 0 9.942-.494 14.7-1.433 13.58-2.67 25.94-8.99 36.09-17.94 6.378-5.627 14.547-8.456 22.897-8.446h.142c27.589 0 53.215-8.732 74.492-23.696 19.021-13.36 34.554-31.696 44.904-53.224C474.92 234.58 480 213.388 480 190.958c0-76.93-59.774-139.305-133.498-139.305-7.516 0-14.88.663-22.063 1.899C305.418 21.42 271.355 0 232.499 0a103.651 103.651 0 00-45.88 10.661c-13.24 6.487-25.011 15.705-34.64 26.939-32.698.544-62.931 11.69-87.676 30.291C25.351 97.155 0 144.882 0 198.781z"
              opacity="0.2"
            ></path>
            <image href="/character_2.png" height="300" x="322" y="30"></image>
            <path
              fill="url(#paint0_linear_1_43)"
              d="M216.3 138v108.3c0 2.2-1.8 4-4 4H195c-2.2 0-4-1.8-4-4V138c0-2.2 1.8-4 4-4h17.3c2.2 0 4 1.8 4 4zm-55-68H144c-2.2 0-4 1.8-4 4v176.3c0 2.2 1.8 4 4 4h17.3c2.2 0 4-1.8 4-4V74c0-2.2-1.8-4-4-4zm102 93H246c-2.2 0-4 1.8-4 4v75.7c0 2.2 1.8 4 4 4h17.3c2.2 0 4-1.8 4-4V167c0-2.2-1.8-4-4-4z"
            ></path>
            <path
              fill="#061B64"
              d="M359.2 253.4c-1.1 3.1-2.3 6.3-3.7 9.7-5.1.1-10.1.3-15.2.4-3.3.1-6.9.2-9.6 2.1-5.2 3.6-.7 6.1-1.3 9.6-.7 4.2-4.9 5.1-9 5.1-14.1.1-27.7 4.6-41.5 7.3s-28.9 3.5-41.2-3.4c-.8-.5-1.7-1-2-2-.6-1.6.9-3.2 2.3-4.2 3.2-2.2 6.7-3.7 10.5-4.5 2.2-.5 4.5-.8 6.5-2 1.9-1.2 3.3-3.7 2.3-5.8-32.1 2-64.1 4.8-96 8.4-41.1 4.8-81.8 12.9-123 15.9h-.4c-2.9-2.9-5.5-6-7.9-9.3.2-.2.4-.5.6-.7 2-2.2 5-3.2 7.8-4.1 15.9-4.9 32.4-7.4 48.8-9.9 81.6-12.3 164.2-21.1 246.8-15.3 8.4.6 16.8 1.5 25.2 2.7z"
              opacity="0.24"
            ></path>
            <path
              fill="#DFE3E8"
              d="M81.7 204.2l74 11v60.7h8.5v3.6h-19.5v-2.3h8.7v-50.3l-70-13.5v49h9.7v1.7H73.6V262h8.2v-57.8h-.1z"
            ></path>
            <path
              fill="#C4CDD5"
              d="M80.6 204.2l74 11v60.7h8.5v3.6h-19.5v-2.3h8.7v-50.3l-70-13.5v49H92v1.7H72.4V262h8.2v-57.8z"
            ></path>
            <defs>
              <linearGradient
                id="paint0_linear_1_43"
                x1="140"
                x2="276.5"
                y1="98"
                y2="312.5"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#D1E9FC"></stop>
                <stop offset="1" stop-color="#103996"></stop>
              </linearGradient>
            </defs>
          </svg>
        </span>
      </CardContent>
    </Card>
  );
}

