// In the parent component of createForm, make sure to use the "use client" directive
"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function createForm() {
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
    <div className="w-1/2 mx-auto">
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block mb-2">Title</label>
          <input
            required
            type="text"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            className="border border-gray-500 rounded-md px-2 py-1 w-64"
            placeholder="Enter the title"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Start Date</label>
          <input
            required
            type="text"
            onChange={(e) => setStartDate(e.target.value)}
            value={startDate}
            className="border border-gray-500 rounded-md px-2 py-1 w-64"
            placeholder="Enter the start date"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">End Date</label>
          <input
            required
            type="text"
            onChange={(e) => setEndDate(e.target.value)}
            value={endDate}
            className="border border-gray-500 rounded-md px-2 py-1 w-64"
            placeholder="Enter the end date"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2">Target</label>
          <input
            required
            type="text"
            onChange={(e) => setTarget(e.target.value)}
            value={target}
            className="border border-gray-500 rounded-md px-2 py-1 w-64"
            placeholder="Enter the target"
          />
        </div>
        <div className="mb-4">
          <label className="block mb-2 font-bold">Picture</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-500 rounded-md px-2 py-1 w-64"
          />
        </div>
        <div className="text-center">
          <button
            type="submit"
            className="btn-primary px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700"
          >
            Post
          </button>
        </div>
      </form>
    </div>
  );
}
