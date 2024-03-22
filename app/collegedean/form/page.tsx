"use client"
import { Input } from '@/components/ui/input';
import React, { useState } from 'react';
import { BsPlusCircleFill } from 'react-icons/bs';
import './style.css'
import { Button } from '@/components/ui/button';
const Page = () => {
  const [Question, setQuestion] = useState('');
  const [displayedQuestion, setDisplayedQuestion] = useState('');
  const [Weight, setWeight] = useState('');
  const [displayedWeight, setDisplayedWeight] = useState('');

  const handleQuestionChange = (event) => {
    setQuestion(event.target.value);
  };

  const handleWeightChange = (event) => {
    setWeight(event.target.value);
  };

  const handlePlusIconClick = () => {
    setDisplayedQuestion(Question);
    setDisplayedWeight(Weight);
  };

  return (
    <div className='mainScreen'>
      <h1>Evaluation Form</h1>
      <div className='inp p-2 flex flex-col'>
        <p>Question</p>
        <Input className='w-full' onChange={handleQuestionChange} value={Question} />
        <div className='flex gap-2 p-2 justify-between'>
          <div className='flex gap-2'>
            <p>Weight</p>
            <input type="number" name="" id="" min={1} onChange={handleWeightChange} className='border-2 w-10 size-7' />
          </div>
          <BsPlusCircleFill className='text-blue-950 dark:text-blue-400 size-6 self-center' onClick={handlePlusIconClick} />
        </div>
      </div>
      <div className="flex mt-4 gap-2 p-2">
        <p>{displayedQuestion}</p>
        <p>{displayedWeight}</p>
      </div>
      <Button className=''>Generate Evaluation</Button>
    </div>
  );
};

export default Page;
