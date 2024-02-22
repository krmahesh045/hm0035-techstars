<<<<<<< HEAD
import React, { useEffect , useState} from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Card from './card'
import Link from 'next/link'
import { NextResponse } from 'next/server'
import axios from 'axios'
// import MentorDetail from './mentor/mentorDetail';
=======
'use client'

import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Card from './card'
import Link from 'next/link'
import axios from 'axios'
import { useRouter } from 'next/navigation'
>>>>>>> f70b3378837663ce5334bdf42fb5b8b77ce120b2


type Props = {}

interface MentorData {
  name: string,
  image: string,
  role: string,
  phone: string,
  email: string,
} 

const DashboardPage = (props: Props) => {

  const [mentorData, setMentorData] = useState<MentorData[]>([]);
  const [student,setStudent] = useState('');
  // Mentor dummy Data for testing

  const MentorData = [
    {
      name: "Rachel Smith",
      image: "pic1.jpg",
      role: "Web Developer",
      phone: "1234567890",
      email: "Click this card to see more details about this mentor.",
    },
    {
      name: "Jenny Doe",
      image: "pic2.jpg",
      role: "Frontend Developer",
      phone: "1234567890",
      email: "sk@gmail.ds",
    },
    {
      name: "Daniel White",
      image: "pic3.webp",
      role: "Cybersecurity Analyst",
      phone: "1234567890",
      email: "daniel.white@example.com",
    },
    {
      name: "Mahesh Kakde",
      image: "pic4.jpg",
      role: "Full Stack Developer",
      phone: "1234567890",
      email: "mahif@gmail.as",
    },
    {
      name: "John Doe",
      image: "pic5.avif",
      role: "UI/UX Designer",
      phone: "1234567890",
      email: "john.doe@example.com",
    },
    {
      name: "Jane Smith",
      image: "pic6.jpg",
      role: "Backend Developer",
      phone: "1234567890",
      email: "jane.smith@example.com",
    },
    {
      name: "Alex Johnson",
      image: "pic7.avif",
      role: "Data Scientist",
      phone: "1234567890",
      email: "alex.johnson@example.com",
    },
    {
      name: "Emily Davis",
      image: "pic8.avif",
      role: "Mobile App Developer",
      phone: "1234567890",
      email: "emily.davis@example.com",
    },
    {
      name: "Chris Miller",
      image: "pic9.avif",
      role: "DevOps Engineer",
      phone: "1234567890",
      email: "chris.miller@example.com",
    },
    {
      name: "Sophia Wilson",
      image: "pic10.jpg",
      role: "Machine Learning Engineer",
      phone: "1234567890",
      email: "sophia.wilson@example.com",
    },

  ];

<<<<<<< HEAD
  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await axios.get('/api/allMentors');
        const fetchedMentors = response.data.mentors;
        setMentorData(fetchedMentors);
=======
  const router = useRouter();

  // Logout function
  async function handleLogout() {

    console.log("Logging out");
    const response =  await axios.get('/api/logout');
    if(response.status !== 200) {
      console.error("Error logging out:", response);
    }
    else {
      console.log("Logged out successfully");
      router.push('/signin');
    }
  }

>>>>>>> f70b3378837663ce5334bdf42fb5b8b77ce120b2

        const res = await axios.get('/api/AllMentors');
      } catch (error) {
        console.error('Error fetching mentors:', error);
      }
    };

    fetchMentors();
  }, []);


  return (
    <div className='h-screen w-screen bg-white p-5 flex flex-col overflow-x-hidden'>
      {/* navbar */}
      <div className="w-full h-28 rounded-2xl shadow-2xl bg-zinc-800 text-white pl-10 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Avatar className='h-14 w-14 border-2 border-white'>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <h1 className='text-xl'>
            Swapnil Kapale

          </h1>
        </div>

        <div className='flex gap-8 ml-auto'>
          {/* Filter icon */}
          <button 
            className='flex gap-4' 
          >
            <svg width="36" height="36" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
              <path fill="currentColor" d="m8.398 14.605l1.323 1.143c.29.251.323.691.075.984a.688.688 0 0 1-.976.075l-1.565-1.352a.7.7 0 0 1-.242-.53V7.938L1.171 1.155C.78.703 1.1 0 1.694 0h16.612c.594 0 .912.704.523 1.155l-5.85 6.784v11.363c0 .386-.31.698-.692.698a.695.695 0 0 1-.692-.698V7.678a.7.7 0 0 1 .17-.458l5.023-5.825H3.21L8.228 7.22a.7.7 0 0 1 .17.458z" />
            </svg>
          </button>

          {/* Logout icon */}
          <button className='flex gap-2 items-center mr-4' onClick={handleLogout}>
            <svg width="36" height="36" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <g fill="none" stroke="currentColor" stroke-linecap="round" stroke-width="2">
                <path stroke-dasharray="32" stroke-dashoffset="32" d="M12 4H5C4.44772 4 4 4.44772 4 5V19C4 19.5523 4.44772 20 5 20H12">
                  <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.4s" values="32;0" />
                </path>
                <path stroke-dasharray="12" stroke-dashoffset="12" d="M9 12h11.5" opacity="0">
                  <set attributeName="opacity" begin="0.5s" to="1" />
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.5s" dur="0.2s" values="12;0" />
                </path>
                <path stroke-dasharray="6" stroke-dashoffset="6" d="M20.5 12l-3.5 -3.5M20.5 12l-3.5 3.5" opacity="0">
                  <set attributeName="opacity" begin="0.7s" to="1" />
                  <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.7s" dur="0.2s" values="6;0" />
                </path>
              </g>
            </svg>
            Logout
          </button>
        </div>
      </div>


      <div className='p-5 w-full h-auto flex gap-20'>
        <h1 className='font-bold text-3xl'>Mentors <span className='text-violet-500'>{MentorData.length}</span></h1>
        <div className='bg-red-200 rounded-xl p-2'>
          <h1 className='text-red-600 '>This app is in building phase dummy data is shown below</h1>
        </div>
      </div>
      <div className='w-full h-auto '>

        {/* displaying mentor cards */}
        <div className=' flex flex-wrap w-auto h-auto '>
        {mentorData.map((mentor : any, index : any) => (
          <Card key={index} mentorData={mentor} />
        ))}
        </div>


      </div>



    </div>
  )
}

export default DashboardPage