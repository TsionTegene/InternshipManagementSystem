// In the parent component of createForm, make sure to use the "use client" directive
"use client";

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function createForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [priority, setPriority] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Report Of The Internship</h2>
      <form onSubmit={handleSubmit}>
          <div className="mb-6">
          <label className="block mb-2 font-bold">1. Title</label>
          <input
            required
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="border border-gray-500 rounded-md px-2 py-1 w-full"
            placeholder="Enter title"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">2. Description</label>
          <textarea
            required
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="border border-gray-800 rounded-md px-2 py-1 w-full h-32" // Adjusted height
            placeholder="Enter description"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">3. Challenges Faced</label>
          <input
            required
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="border border-gray-500 rounded-md px-2 py-1 w-full"
            placeholder="Enter challenges you faced"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">4. Lessons Learned</label>
          <input
            required
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="border border-gray-500 rounded-md px-2 py-1 w-full"
            placeholder="Enter lessons learned"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">5. Tasks Accomplished</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-500 rounded-md px-2 py-1 w-full"
          />
        </div>
        <div className="text-center"> {/* Center the button */}
          <button
            type="submit"
            className="btn-primary px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700 block mx-auto"> {/* Added mx-auto to center the button */}
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
