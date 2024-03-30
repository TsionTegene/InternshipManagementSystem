'use client'
import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import Card from '@/components/card/Cards';
import { CgOrganisation } from 'react-icons/cg';
import { FaUniversity } from 'react-icons/fa';
import { PiStudentBold } from 'react-icons/pi';
import { Button } from '@/components/ui/button';

const Signup = () => {
    const [selectedRole, setSelectedRole] = useState(null);
    const roles = [
        { title: 'Student', description: '', icon: <PiStudentBold /> },
        { title: 'Company', description: '', icon: <CgOrganisation /> },
        { title: 'University', description: '', icon: <FaUniversity /> },
    ];

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
    };

    const router = useRouter();

    const handleSignup = () => {
        if (!selectedRole) {
            return;
        }
        const roleLowerCase = selectedRole.title.toLowerCase();
        router.push(`/signup/${roleLowerCase}`);
    };


    return (
        <div className='p-10'>
            <p className='text-2xl text-center'>Sign up as:</p>
            <RadioGroup defaultValue="option-one">
                <div className='flex items-center justify-center gap-2'>
                    {roles.map((role, index) => (
                        <div key={index} className="flex  flex-col space-y-2 p-2">
                            <RadioGroupItem
                                value={`option-${index}`}
                                id={`option-${index}`}
                                className='flex ml-auto'
                                onClick={() => handleRoleSelect(role)}
                            />
                            <Card title={role.title} description={role.description} icon={role.icon} />
                        </div>
                    ))}
                </div>
            </RadioGroup>
            <div className='flex justify-center p-5'>
                <Button className='btn rounded-full' onClick={handleSignup}>Sign Up</Button>
            </div>
        </div>
    );
};

export default Signup;
