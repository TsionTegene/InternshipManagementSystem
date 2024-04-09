"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function CreateForm() {
  const router = useRouter();

  const [title, setTitle] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [target, setTarget] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-center items-start min-h-screen">
      {/* Image */}
      <div className="w-2/5">
        <img
          src={"images/bg.jpg"}
          alt="Image"
          className="w-full h-auto"
          style={{ maxWidth: "100%", height: "auto" }} // Adjust image size here
        />
      </div>

      {/* Text */}
      <div className="w-3/5 mx-auto">
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label className="block mb-2">Amche Tech</label>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Addis Ababa</label>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Ache_tech@gmail.com</label>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Software Company</label>
          </div>
          <div className="mb-4">
            <label className="block mb-2">Evaluation</label>
            <input
              required
              type="text"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              className="border border-gray-500 rounded-md px-2 py-1 w-64"
              placeholder=""
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2">Feedback</label>
            <input
              required
              type="text"
              onChange={(e) => setStartDate(e.target.value)}
              value={startDate}
              className="border border-gray-500 rounded-md px-2 py-1 w-64"
              placeholder=""
            />
          </div>
          <div className="mb-4"></div>
          <div className="flex justify-center"> {/* Centered button */}
            <button
              type="submit"
              className="btn-primary px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-900"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
