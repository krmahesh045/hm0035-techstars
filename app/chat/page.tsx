'use client'
import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image'
import { useState } from 'react'

const ChatApp = () => {

  const [chatSelected, setChatSelected] = useState(false)
  const [selectedChat, setSelectedChat] = useState("")


  // dummy chats
  const chats = [
    {
      name: "Rachel Smith",
      image: "pic1.jpg",
    },
    {
      name: "Jenny Doe",
      image: "pic2.jpg"
    }
  ]

  const handleSelect = (e) => {
    setChatSelected(true)
    setSelectedChat(e.target.textContent)
  }

  return (
   <div className='h-screen w-screen flex flex-col text-white'>

    <div className='w-full h-[10vh] bg-slate-700 flex justify-between items-center p-4'>
         <div className="flex items-center gap-4">
          <Avatar className='h-14 w-14 border-2 border-white'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className='text-xl'>
            user
          </h1>
        </div>
    </div>

    <div className='flex w-full h-[90vh] '>
      
      <div className='p-4 flex flex-col w-1/4 h-full bg-slate-800 border-r-2 border-gray-600'>
        <h1 className='text-xl font-bold'>Chats</h1>
        {/* map chats */}
        <div className='flex flex-col gap-4 mt-4'>
          {chats.map((chat, index) => (
            <div key={index} className='flex items-center gap-4 mb-2 border-b-2 border-black pb-4 ' onClick={handleSelect}>
              <Avatar className='h-14 w-14 border-2 border-white'>
                <AvatarImage src={`/profile/${chat.image}`} />
                <AvatarFallback>{chat.name}</AvatarFallback>
              </Avatar>
              <h1 className='text-lg'>{chat.name}</h1>
            </div>
          ))}
        </div>
      </div>
      <div className='w-3/4 h-full bg-slate-900 flex justify-center items-center'>
       {/* shoow image if no chat selected or show chat */}
        {chatSelected ? 
        
          <div className='w-full h-full'>

            <h1 className='p-4 flex w-full h-[5vh]'>{selectedChat}</h1>

          </div>
        
        : <Image
          src="/chat.svg"
          alt="chat"
          width={500}
          height={500}
        />}
      </div>

    </div>


   </div>
  )
}

export default ChatApp