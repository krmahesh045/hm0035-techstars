'use client'
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import Card from './card'

type User = {
 

}

const ProfilePage = () => {

  const [user, setUser] = useState({
    name: 'John Doe',
    about:  'I am a software engineer with 5 years of experience. I have worked with several companies and have a good understanding of the software development lifecycle. I am also a mentor and I love to help people grow in their careers.',
    skills: ['React', 'Node', 'Express', 'MongoDB', 'Postgres', 'TypeScript', 'JavaScript', 'Python', 'Django', 'Flask', 'HTML', 'CSS', 'SASS', 'Tailwind']
  })


  const mentordata = 
  [
    {
  
      roles: 'Software Engineer',
      user: {
        _id: '123',
        name: 'John Doe',
        image: '/avtar.jpg',
        mobile: '1234567890',
        email: 'hfcbd hbhc',
      }
    }

  ]
  
    



  return (
    <div className='w-screen h-auto flex flex-col bg-slate-100'>
      <div className='w-full h-[20vh] bg-gradient-to-l from-fuchsia-300 to-yellow-100'>

        <div className=''> 
          <Image
            src={'/profile/avatar2.png'}
            alt="mentorship"
            width={200}
            height={200}
            className="rounded-full object-cover h-[200px] w-[200px] relative top-20 left-20 border-4 border-white"          
          />
        </div>        
      </div>

      <div className='w-full h-screen flex'>

          <div className='w-3/4 h-auto mt-20 p-10 px-30 ml-12'>

              <h1 className='text-4xl font-bold '>
                {user.name}
              </h1>

              <p className='mt-8'>
                {user.about}
              </p>

              <div className='bg-white w-full h-auto rounded-2xl p-10 mt-10 '>
              <h1 className='text-3xl font-semibold'>Recomended Mentors</h1>
              <div className=' flex flex-wrap w-auto h-auto '>
                  {mentordata.map((mentor, index) => {
                    console.log(mentor);
                    return (
                      <Card 
                        mentorData={{
                          id: mentor.user._id,
                          name: mentor.user.name,
                          role: mentor.roles,
                          phone: mentor.user.mobile,
                          email: mentor.user.email,
                        }}
                        key={index}
                      />
                    )
                  })}
              </div>
        </div>

          </div>

          <div  className='w-1/4 h-screen mt-20 p-10 px-30 ml-12 border-l-2'>
            <div className='w-full'>
              <h1 className='text-2xl font-bold'></h1>
             
                 {/* Skills */}
                <div>
                  <h1 className='text-3xl font-semibold'>Skills</h1>
                  <div className='flex flex-wrap mt-2 gap-4'>
                    {user.skills.map((skill, index) => (
                      <h1 key={index} className='bg-violet-300 rounded-xl p-2 text-zinc-600'>
                        <b>{skill}</b>
                      </h1>
                    ))}
                  </div>
                </div>

                {/* Links */}

                <div className=''>

                  <h1 className='text-3xl font-semibold mt-8'>Links</h1>
                  <div className='flex  mt-2 gap-4'>
                    <a href='#' className='text-lg font-semibold text-blue-600 border-2 border-blue-600 rounded-xl px-2'>LinkedIn</a>
                    <a href='#' className='text-lg font-semibold text-gray-600 border-2 border-gray-600 rounded-xl px-2'>Github</a>
                  </div>

                </div>
                          
              
            </div>
          </div>
      </div>

      
    </div>
  )
}

export default ProfilePage