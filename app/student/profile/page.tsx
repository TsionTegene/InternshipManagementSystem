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
                    <p>Temari Temaru</p>
                    <p>Software Engineer</p>
                    <p>Addis Ababa</p>
                    <button className="bg-green-500 text-white rounded-md px-4 py-2 mt-2">Edit Profile</button>
                </div>
                <div className="absolute -bottom-22 right-10 text-left">
                    <p>Current Role</p>
                </div>
                <div className="absolute -bottom-24 right-2 bg-white shadow-md rounded-md p-3" style={{ width: '200px' }}>
                    <p style={{ color: 'black' }}>Student</p>
                    <p style={{ color: 'black' }}>Wolkite University</p>
                </div>

                <div className="absolute -bottom-32 right-10 text-left">
                    <p>Skills</p>
                </div>
                <div className="absolute top-36 right-2 flex">
                    <div className="bg-white shadow-md rounded-md p-3 mr-2" style={{ width: '100px' }}>
                        <p style={{ color: 'black' }}>HTML</p>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-3 mr-2" style={{ width: '100px' }}>
                        <p style={{ color: 'black' }}>CSS</p>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-3 mr-2" style={{ width: '100px' }}>
                        <p style={{ color: 'black' }}>REACT</p>
                    </div>
                    <div className="bg-white shadow-md rounded-md p-3" style={{ width: '100px' }}>
                        <p style={{ color: 'black' }}>NODE</p>
                    </div>
                </div>

                <div className="absolute top-36 right-10">
                    <p style={{ color: 'white', marginTop: '57px' }}>GPA</p>
                </div>

                <div className="absolute top-60 right-2 bg-white shadow-md rounded-md p-3" style={{ width: '100px' }}>
                    <p style={{ color: 'black' }}>NULL</p>
                </div>

            </div>
        </div>
    );
}

export default Page;
