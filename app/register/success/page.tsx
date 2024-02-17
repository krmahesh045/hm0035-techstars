'use client'
import React from 'react'
import Link from 'next/link'

type Props = {}

function SuccessPage({}: Props) {
  return (
    <div className='flex flex-col items-center h-screen p-5'>
       {/* topbar */}
       <div className="h-[10vh] w-screen flex bg-white gap-5 items-center pl-10">
        <svg
          width="48"
          height="48"
          viewBox="0 0 717 717"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill="#000000"
            d="m333 276l80-81c7-7 15-16 23-26c8-9 17-17 26-24c17-15 37-28 62-28c22 0 41 10 55 23s22 32 22 54c0 9-1 19-4 26c-7 14-13 24-19 32c-3 4-6 8-6 12c0 3 0 6 2 7c11 27 19 50 24 78c3 11 9 16 19 16c4 0 8-1 12-4c8-5 15-13 22-21c4-4 7-8 9-10c36-35 57-85 57-136c0-54-22-102-57-137c-35-34-84-57-136-57S422 21 387 58L250 194c-36 37-56 85-56 136c0 15 6 46 16 75c10 28 23 53 40 53c9 0 28-15 44-32s32-36 32-43c0-5-4-11-8-20c-5-9-7-20-7-33c0-20 8-40 22-54m-3 384l137-136c36-35 56-86 56-137c0-15-6-45-16-74c-9-28-23-54-40-54c-7 0-28 16-43 33c-17 17-33 35-33 42c0 5 3 13 8 21c5 9 9 19 9 32c-1 20-9 40-23 56l-81 80c-7 8-15 16-23 25l-25 25c-17 16-38 27-63 27c-42 0-76-33-76-76c0-10 2-19 5-26c6-14 12-24 19-32c3-4 4-8 4-11c0-2-1-4-2-8c-12-27-19-50-24-78c-2-5-3-9-6-11c-3-4-8-5-13-5c-4 0-7 1-11 4c-8 5-16 13-23 21c-3 4-7 7-9 9c-36 36-57 86-57 137c0 53 21 102 57 137c35 35 83 56 136 56c52 0 102-20 137-57"
          />
        </svg>
        <h1 className="text-4xl font bold ">MentorLink</h1>
      </div>

      <div className='w-96 h-1/2 rounded-xl shadow-xl flex flex-col justify-center items-center gap-10 mt-52'>
        <svg width="128" height="128" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg">
          <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="4">
              <path d="m24 4l5.253 3.832l6.503-.012l1.997 6.188l5.268 3.812L41 24l2.021 6.18l-5.268 3.812l-1.997 6.188l-6.503-.012L24 44l-5.253-3.832l-6.503.012l-1.997-6.188l-5.268-3.812L7 24l-2.021-6.18l5.268-3.812l1.997-6.188l6.503.012z"/>
              <path d="m17 24l5 5l10-10"/>
          </g>
        </svg>
        <h1 className='text-2xl font-bold'>Registration Successful</h1>
        <button className= "w-64 h-12 rounded-lg text-white font-bold bg-zinc-900 ">
          <Link href="/signin">
              Sign In
          </Link>
        </button>

      </div>
    </div>
  )
}

export default SuccessPage