"use client"; // Add use client directive

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { FaUser } from 'react-icons/fa'; // Importing the profile icon

export default function createForm() {
  const router = useRouter();

  const [firstName, setFirstName] = useState('');
  const [email, setEmail] = useState('');
  const [location, setLocation] = useState('');
  const [area, setArea] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Add your form submission logic here
    console.log("Form submitted");
  };

  return (
    <div className="flex justify-center items-center h-screen"> {/* Center the form vertically and horizontally */}
      <div className="w-full md:w-1/2 mx-auto"> {/* Limit the width of the form */}
        <div className="flex items-center justify-center mb-4"> {/* Profile icon and text container */}
          <FaUser className="text-4xl mr-4 text-blue-500" /> {/* Larger icon with blue color */}
          <h2 className="text-2xl font-bold">Addis Software</h2> {/* Company name */}
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Name</label>
            <input
              required
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              className="border border-gray-500 rounded-md px-2 py-1 w-80" // Textbox width set to full width
              placeholder="Enter name"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Email</label>
            <input
              required
              type="text"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              className="border border-gray-500 rounded-md px-2 py-1 w-80" // Textbox width set to full width
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Location</label>
            <input
              required
              type="text"
              onChange={(e) => setLocation(e.target.value)}
              value={location}
              className="border border-gray-500 rounded-md px-2 py-1 w-80" // Textbox width set to full width
              placeholder="Enter your location"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Area</label>
            <input
              required
              type="text"
              onChange={(e) => setArea(e.target.value)}
              value={area}
              className="border border-gray-500 rounded-md px-2 py-1 w-80" // Textbox width set to full width
              placeholder="Enter the area your company settles"
            />
          </div>
          <div className="mb-4">
            <label className="block mb-2 font-bold">Picture</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="border border-gray-500 rounded-md px-2 py-1 w-80" // Textbox width set to full width
            />
          </div>
          <div className="text-center">
            <button
              type="submit"
              className="btn-primary px-6 py-2 rounded-lg text-white font-semibold hover:bg-blue-700"
            >
              Update
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
