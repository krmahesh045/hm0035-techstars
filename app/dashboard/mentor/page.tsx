/* eslint-disable*/

// MentorDetailPage.tsx

import React from 'react';

import Image from 'next/image';

const MentorDetailPage: React.FC = () => {
  // Assuming you have mentor data
  const mentorData = {
    name: 'Rachel Smith',
    image: 'pic1.jpg',
    role: 'Web Developer',
    phone: '1234567890',
    email: 'mentor@example.com',
    skills: ['React', 'Node.js', 'JavaScript'],
    qualification: 'Bachelor of Science in Computer Science',
    feedback: ['Excellent mentor!', 'Very knowledgeable.'],
  };

  return (
    <div className="h-screen w-screen bg-white flex flex-col">
      <div className='w-full h-80 bg-gray-700 flex'>

        <div className=''> 
          <Image
            src={`/profile/pic1.jpg`}
            alt="mentorship"
            width={512}
            height={512}
            className="rounded-full object-cover h-[300px] w-[300px] absolute top-20 left-20"          
          />
        </div>
 
        <div className='h-full flex flex-col justify-center mt-10 gap-10'>
          <h1 className='text-7xl font-semibold text-white ml-[400px] '>
            {mentorData.name}
          </h1>
          <h1 className='text-xl font-semibold text-white ml-[400px] '>
            {mentorData.role}
          </h1>
        </div>

      </div>

      <div className='w-full flex mt-28'>

      <div className='w-1/4 h-[50vh] bg-white p-10 flex flex-col gap-4 border-r-2 border-black mr-10 '>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>Skills</h1>
          <div className='flex gap-4'>
            {mentorData.skills.map((skill, index) => (
              <h1 key={index} className='bg-violet-100 rounded-xl p-2 text-zinc-900'>
                {skill}
              </h1>
            ))}
          </div>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>Qualification</h1>
          <h1 className='text-lg'>{mentorData.qualification}</h1>
        </div>
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>Feedback</h1>
          {mentorData.feedback.map((feedback, index) => (
            <h1 key={index} className='text-lg'>{feedback}</h1>
          ))}
        </div>

        {/* contacts */}
        <div className='flex flex-col gap-4'>
          <h1 className='text-3xl font-semibold'>Contact</h1>
          <h1 className='text-lg'>{mentorData.phone}</h1>
          <h1 className='text-lg'>{mentorData.email}</h1>
        </div>
      </div>

      <div className='w-1/2'>
        <h1 className='text-3xl font-semibold mb-10'>About</h1>
        <p className='text-lg'>
        I am an accomplished React and Node.js developer with a solid background in JavaScript and a Bachelors degree in Computer Science. I am passionate about mentoring and sharing my expertise to help others excel in their development journey. Feel free to reach out to me for any inquiries or collaboration opportunities.

        </p>
      </div>
      
      
      </div>      
      

      
    </div>
  );
};

export default MentorDetailPage;
