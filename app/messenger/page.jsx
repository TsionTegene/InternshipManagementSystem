"use client"
import Chat from '@/components/chat/Chat'
import Sidebar from '@/components/chat/Sidebar'
import React from 'react'

const page = () => {
    return (
        <div className='flex'>
            {/* <div className='flex-none w-64'>

            <Sidebar />
            </div> */}
            <div className='flex-1'>

            <Chat />
            </div>
        </div>
    )
}

export default page