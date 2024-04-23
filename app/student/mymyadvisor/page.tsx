import React from 'react';
import { FaUser } from 'react-icons/fa';

const Page = () => {
    return (
        <div>
            <div className="bg-white shadow-md rounded-md p-9 mb-4 relative flex items-center">
                <div>
                    <h3 className="text-lg font-semibold">Overall</h3>
                </div>
            </div>
            <div className="relative">
                <div className="absolute -bottom-10 left-10 bg-blue-500 p-7 rounded-full">
                    <FaUser size={32} color="white" />
                </div>
                <div className="absolute -bottom-44 left-26 text-left">
                    <p>Name: Emma Smith</p>
                    <p>Email: smith@gmail.com</p>
                    <p>Phone Number: +2519874563</p>
                </div>
                <div className="absolute top-60 left-0 right-0 text-center">
                    <button className="bg-green-500 text-white rounded-full px-9 py-3 mt-4">Chat With Advisor</button>
                </div>
                <div className="absolute -bottom-22 right-10 text-left">
                    <p>Current Role</p>
                </div>
                <div className="absolute -bottom-24 right-2 bg-white shadow-md rounded-md p-3" style={{ width: '200px' }}>
                    <p style={{ color: 'black' }}>Student</p>
                    <p style={{ color: 'black' }}>Wolkite University</p>
                </div>
            </div>
        </div>
    );
}

export default Page;
