import React from 'react'
import {
    Avatar,
    AvatarFallback,
    AvatarImage,
} from "@/components/ui/avatar"

interface isMessage {
    content: string
    timestamp: string
    isUser: boolean
}
const Message = ({ content, timestamp }: isMessage) => {
    return (
        <div className='message flex p-1 gap-2'>
            <div className="messageInfo">
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
            <div style={{ borderRadius: 50 }}>
                <div className="messageContent p-2 max-w-80% bg-slate-400 w-15 h-10 rounded-full" >

                    {<p>{content}</p>}
                </div>
                <div>

                    {<p className='text-xs text-gray-500 mt-1 ml-1'>{timestamp}</p>}
                </div>
            </div>
        </div>
    )
}

export default Message