"use client";

import { Textarea } from "@/components/ui/textarea";
import React from "react";
import { FaPlus } from "react-icons/fa";

export default function createForm() {
  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Form submitted");
  };

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Report Of The Internship</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-bold">1. Title</label>
          <div className="grid grid-cols--1 gap-4">
            <div>
              <input
                required
                type="text"
                className="border border-gray-500 rounded-md px-2 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">2. Description</label>
          <div className="grid grid-cols--2 gap-6">
            <div>
              <textarea
                required
                className="border border-gray-500 rounded-md px-2 py-1 w-full"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">3. Challenges Faced</label>
          <div className="relative">
            <input
              required
              type="text"
              className="border border-gray-500 rounded-md px-2 py-1 w-full"
            />
            <div className="absolute bottom-10 right-0 top-10  mt-2 mr-2">
              <FaPlus className="text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">4. Lessons Learned</label>
          <div className="relative">
            <input
              required
              type="text"
              className="border border-gray-500 rounded-md px-2 py-1 w-full"
            />
            <div className="absolute bottom-10 right-0 top-10  mt-2 mr-2">
              <FaPlus className="text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">5. Tasks Accomplished</label>
          <div className="relative">
            <input
              required
              type="text"
              className="border border-gray-500 rounded-md px-2 py-1 w-full"
            />
            <div className="absolute bottom-10 right-0 top-10  mt-2 mr-2">
              <FaPlus className="text-blue-500 cursor-pointer" />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-500 rounded-md px-2 py-1"
          />
          <div className="absolute bottom-10 right-0 top-10  mt-2 mr-2">
            <FaPlus className="text-blue-500 cursor-pointer" />
          </div>
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn-primary px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
