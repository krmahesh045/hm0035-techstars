/* eslint-disable react/no-unescaped-entities */
'use client'


import React from 'react';
import Image from 'next/image';
import { FC, useEffect, useState } from "react";
import axios from 'axios';


interface MentorProfileProps {
  params: {
    mentorProfile: string;
  };
}

type feedback = {
  name: string;
  feedback: string;
  date: Date;
  stars: number;
}

export interface MentorData {
  user: User
  mentor: Mentor
}

export interface User {
  _id: string
  name: string
  email: string
  phone: string
  address: string
}

export interface Mentor {
  _id: string
  userId: string
  experties: string
  skills: string[]
  qualification: string
  about: string
  udemy: string
  linkedin: string
  youtube: string
}



const MentorDetailPage: FC<MentorProfileProps> = ({params}) => {
  // Assuming you have mentor data

  const [mentorId, setMentorId] = useState(params.mentorProfile) 
  const [mentorData, setMentorData] = useState<MentorData>({
    user: {
      _id: '',
      name: '',
      email: '',
      phone: '',
      address: '',
    },
    mentor: {
      _id: '',
      userId: '',
      experties: '',
      skills: [],
      qualification: '',
      about: '',
      udemy: '',
      linkedin: '',
      youtube: '',
    }
  } as MentorData)

  const fetchProfile = async () => {
    // fetch mentor data
    const data = {
      userId: mentorId
    }
    console.log(data.userId);
    const response = await axios.post('/api/mentorProfile', data);
    console.log(response.data.user); 
    console.log(response.data.mentor);
    setMentorData(response.data);
  };

  useEffect(() => {
    fetchProfile();
  }, []);

  const [feedback, setFeedback] = React.useState<feedback[]>([]);

  const dummyFeedback: feedback[] = [
    {
      name: 'John Doe',
      feedback: 'Excellent mentor!',
      date: new Date(),
      stars: 5,
    },
    {
      name: 'Jane Doe',
      feedback: 'Very knowledgeable.',
      date: new Date(),
      stars: 4,
    },
  ];

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <div className='w-full h-80 bg-gray-700 flex'>

        <div className=''> 
          <Image
            src={'/profile/pic1.jpg'}
            alt="mentorship"
            width={512}
            height={512}
            className="rounded-full object-cover h-[300px] w-[300px] absolute top-20 left-20"          
          />
        </div>
 
        <div className='h-full flex flex-col justify-center mt-10 gap-10'>
          <h1 className='text-7xl font-semibold text-white ml-[400px] '>
            {mentorData.user.name}
          </h1>
          <h1 className='text-xl font-semibold text-white ml-[400px] '>
            {mentorData.mentor.experties}
          </h1>
        </div>

      </div>

      <div className='w-full flex mt-28'>

      <div className='w-1/4 h-[50vh] bg-white p-10 flex flex-col gap-4 border-r-2 border-black mr-10 '>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>Skills</h1>
          <div className='flex gap-4'>
            {mentorData.mentor.skills.map((skill, index) => (
              <h1 key={index} className='bg-violet-100 rounded-xl p-2 text-zinc-900'>
                {skill}
              </h1>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>Qualification</h1>
          <h1 className='text-lg'>{mentorData.mentor.qualification}</h1>
        </div>
      

        {/* contacts */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>Contact</h1>
          <h1 className='text-lg'>{mentorData.user.phone}</h1>
          <h1 className='text-lg'>{mentorData.user.email}</h1>
        </div>
      </div>
      

      <div className='flex flex-col'>

        <div className='w-1/2'>
          <h1 className='text-3xl font-semibold mb-10'>About</h1>
          <p className='text-lg'>
            {mentorData.mentor.about}
          </p>
        </div>
        
        <div className='w-full flex flex-col h-aut p-5 pt-10'>
            <div className='w-full p-2 px-5 rounded-xl  border-2 border-black bg-white flex justify-between'>
               <input 
                type="text"
                placeholder='Type  your feedback here'
                className='p-2 w-auto'
               />
               {/* submit button */}
                <button className='bg-violet-500 text-white p-2 rounded-full mt-2 w-30 flex justify-center items-center'>
                  Submit it -&gt; 
                </button>
            </div>
            <div className='flex flex-col gap-2 p-2 mt-4'>

              {/* map feedbacks */}
              {dummyFeedback.map((feedback, index) => (
                <div key={index} className='flex flex-col gap-2 p-4 px-5 w-full rounded-xl shadow-lg bg-white'>
                  <div className='flex justify-between'>
                    <h1 className='text-lg font-semibold'>{feedback.name}</h1>
                    <h1 className='text-lg font-semibold'>{feedback.date.toDateString()}</h1>
                  </div>
                  <p className='text-lg'>{feedback.feedback}</p>
                  <div className='flex justify-end'>
                    {/* map stars */}
                    {[...Array(feedback.stars)].map((_, index) => (
                      <span key={index} className='text-3xl flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M17.562 21.56a1.003 1.003 0 0 1-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676l-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019l.973 5.676a1 1 0 0 1-.986 1.169Z"/>
                        </svg>
                      </span>
                    ))}
                  </div>
                </div>
              ))}
                  
            </div>
        </div>
      </div>
      </div>      
    </div>
  );
};

export default MentorDetailPage;