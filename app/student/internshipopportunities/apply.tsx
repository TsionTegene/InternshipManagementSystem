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
    console.log("Form submitted");
  };

  return (
    <div className="w-1/2 mx-auto">
      <h2 className="text-2xl font-bold mb-4">Internship Application Form</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-6">
          <label className="block mb-2 font-bold">1. Name</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">First Name</label>
              <input
                required
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="border border-gray-500 rounded-md px-2 py-1 w-full"
                placeholder="Enter your first name"
              />
            </div>
            <div>
              <label className="block mb-2">Last Name</label>
              <input
                required
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="border border-gray-500 rounded-md px-2 py-1 w-full"
                placeholder="Enter your last name"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">2. Address</label>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block mb-2">Region</label>
              <input
                required
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="border border-gray-500 rounded-md px-2 py-1 w-full"
                placeholder="Enter your region"
              />
            </div>
            <div>
              <label className="block mb-2">City</label>
              <input
                required
                type="text"
                onChange={(e) => setFirstName(e.target.value)}
                value={firstName}
                className="border border-gray-500 rounded-md px-2 py-1 w-full"
                placeholder="Enter the city you live in"
              />
            </div>
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">3. Phone Number</label>
          <div className="flex">
            <span className="block mb-2 font-bold">+251</span>
            <input
              required
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="border border-gray-500 rounded-md px-2 py-1 w-full"
              placeholder="Enter your phone Number"
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">4. College Name</label>
          <input
            required
            type="text"
            onChange={(e) => setFirstName(e.target.value)}
            value={firstName}
            className="border border-gray-500 rounded-md px-2 py-1 w-full"
            placeholder="Enter your college name"
          />
        </div>
        <div className="mb-6">
          <label className="block mb-2 font-bold">5. Resume/CV</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            className="border border-gray-500 rounded-md px-2 py-1"
          />
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
