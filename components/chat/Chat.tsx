import React, { useState } from 'react';
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar";
import Message from './Message';
import Inputfield from './Inputfield';
import { Button } from '../ui/button';
import './style.css';
import { Input } from '../ui/input';

const initialMessages = [
  {
    isUser: false,
    content: "Hello there!",
    timestamp: "10:00 AM",
  },
  {
    isUser: true,
    content: "Hi! How are you doing?",
    timestamp: "10:05 AM",
  },
];

const Chat = () => {
  const [messages, setMessages] = useState(initialMessages);
  const [inputValue, setInputValue] = useState('');

  const handleSendMessage = () => {
    if (inputValue.trim() !== '') {
      const newMessage = {
        isUser: true, // Assuming the user is sending the message
        content: inputValue,
        timestamp: new Date().toLocaleTimeString(),
      };

      setMessages((prevMessages) => [...prevMessages, newMessage]);
      setInputValue('');
    }
  };

  return (
    <div className="conversation overflow-hidden bg-gray-200 dark:bg-slate-600">
      <div className="chatInfo flex bg-slate-600 dark:bg-gray-400 gap-2 items-center p-3 rounded-t-xl">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h6>Username</h6>
      </div>
      <div className="chatBody flex flex-col flex-grow p-3 ">
        {messages.length >= 2 && (
          <ul className='flex flex-col'>
            {messages.map((message, index) => (
              <li key={index} className={message.isUser ? "message right" : "message left"}>
                <Message isUser={message.isUser} content={message.content} timestamp={message.timestamp} />
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className='flex gap-2 p-2'>
        <div className='input flex flex-col justify-end w-full'>
          <Input placeholder='Type Here...' value={inputValue} onChange={(e) => setInputValue(e.target.value)} />
        </div>
        <Button onClick={handleSendMessage}>Send</Button>
      </div>
    </div>
  );
};

export default Chat;
