/* eslint-disable react/no-unescaped-entities */
'use client'


import React from 'react';
import Image from 'next/image';
import { FC, useEffect, useState } from "react";
import axios from 'axios';
import Link from 'next/link';


interface MentorProfileProps {
  params: {
    mentorProfile: string;
  };
}

type feedback = {
  name: string;
  mentorId: string;
  studentId: string;
  message: string;
  starsRating: number;
  date: Date;
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



const MentorDetailPage: FC<MentorProfileProps> = ({ params }) => {
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


  // feedbck function

  // dummy feedbacks

  const dummyFeedback: feedback[] = [
    {
      name: 'John Doe',
      mentorId: '1',
      studentId: '1',
      message: 'I am very happy with the mentorship',
      starsRating: 5,
      date: new Date()
    },
  ]

  const [feedback, setFeedback] = useState<feedback>(
    {
      name: '',
      mentorId: '',
      studentId: '',
      message: '',
      starsRating: 0,
      date: new Date()
    }
  );
 
  const handlefeedback = () => {
    const data = {
      mentorId: mentorId,
      studentId: '',
      message: feedback.message,
      starRating: feedback.starsRating,
    }
    axios.post('/api/feedback/', data)
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });

  };

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
  },[]);
 

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <div className='w-full h-[30vh] bg-gray-700 flex' style={{ background: 'linear-gradient(86deg, rgba(42,55,80,1) 26%, rgba(34,29,67,1) 100%)' }}>

        <div className=''>
          <Image
            src={'/profile/pic1.jpg'}
            alt="mentorship"
            width={512}
            height={512}
            className="rounded-full object-cover h-[300px] w-[300px] relative top-20 left-20"
          />
        </div>

        <div className='h-full flex flex-col justify-center mt-10 ml-[-250px] gap-10'>
          <h1 className='text-7xl font-semibold text-white ml-[400px] '>
            {mentorData.user.name}
          </h1>
          <h1 className='text-xl font-semibold text-white ml-[400px] '>
            {mentorData.mentor.experties}
          </h1>
        </div>

      </div>

      <div className='w-full flex mt-28 pr-16'>

        {/* Skills */}
        <div className='w-1/4 h-[50vh] bg-white p-10 flex flex-col gap-4 border-r-2 border-black mr-10 '>
          <div className='flex flex-col gap-4'>
            <h1 className='text-3xl font-semibold'>Skills</h1>
            <div className='flex gap-4'>
              {mentorData.mentor.skills.map((skill, index) => (
                <h1 key={index} className='bg-violet-100 rounded-xl p-2 text-zinc-600'>
                  <b>{skill}</b>
                </h1>
              ))}
            </div>
          </div>

          {/* Qualification */}
          <div className='flex flex-col gap-4 mt-3'>
            <h1 className='text-3xl font-semibold'>Qualification</h1>
            <h1 className='text-lg'>{mentorData.mentor.qualification}</h1>
          </div>


          {/* contacts */}
          <div className='flex flex-col gap-4 mt-3'>
            <h1 className='text-3xl font-semibold'>Contact</h1>
            <h1 className='text-lg text-zinc-600'><b>{mentorData.user.phone}</b></h1>
            <h1 className='text-lg text-purple-800 font-medium'> <a href={`mailto:${mentorData.user.email}`}>
              {mentorData.user.email}
            </a></h1>
          </div>
        </div>


        <div className='flex flex-col w-full'>

          <div className='w-1/2'>
            <h1 className='text-3xl font-semibold mb-7'>About</h1>
            <p className='text-lg'>
              {mentorData.mentor.about}
            </p>
          </div>

          <div>
            <h1 className='text-3xl font-semibold mt-10 mb-7'>Links</h1>
            <div className='flex gap-4 p-2'>
              {/* <iframe src="https://www.youtube.com/" width="300" height="200" className='rounded-xl' /> */}
              <Link href={mentorData.mentor.youtube} className="w-[250px] h-[70px] rounded-xl border-2 border-red-500 text-2xl font-bold flex justify-center items-center ">Youtube</Link>
              <Link href={mentorData.mentor.udemy} className="w-[250px] h-[70px] rounded-xl border-2 border-purple-500 text-2xl font-bold flex justify-center items-center ">Udemy</Link>
              <Link href={mentorData.mentor.linkedin} className="w-[250px] h-[70px] rounded-xl border-2 border-blue-500 text-2xl font-bold flex justify-center items-center ">Linkedin</Link>
            </div>
          </div>

          <div className='w-full flex flex-col h-aut p-5 pt-10'>
            <div className='w-full p-2 px-5 rounded-xl   border-2 border-zinc-500 bg-white flex justify-between'>
              <input
                type="text"
                placeholder='Type  your feedback here'
                className='p-2 w-[1250px] outline-none'
                value={feedback.message}
                onClick={(e) => setFeedback({ ...feedback, message: e.target.value })}
                
              />
              {/* submit button */}
              <button className='bg-violet-500 text-white py-2 px-4 rounded-full w-30 flex justify-center items-center'
                onClick={handlefeedback}
              >
                Submit
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
                  <p className='text-lg'>{feedback.message}</p>
                  <div className='flex justify-end'>
                    {/* map stars */}
                    {[...Array(feedback.starsRating)].map((_, index) => (
                      <span key={index} className='text-3xl flex'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" viewBox="0 0 24 24">
                          <path fill="currentColor" d="M17.562 21.56a1.003 1.003 0 0 1-.465-.115L12 18.765l-5.097 2.68a1 1 0 0 1-1.451-1.054l.973-5.676l-4.123-4.02a1 1 0 0 1 .554-1.705l5.699-.828l2.548-5.164a1.042 1.042 0 0 1 1.794 0l2.548 5.164l5.699.828a1 1 0 0 1 .554 1.706l-4.123 4.019l.973 5.676a1 1 0 0 1-.986 1.169Z" />
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