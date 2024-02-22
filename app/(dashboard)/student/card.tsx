import React from 'react';
import Image from 'next/image';

interface CardProps {
  mentorData: {
    name: string;
    image: string;
    role: string;
    phone: string;
    email: string;
  };
}

const Card: React.FC<CardProps> = ({ mentorData }) => {
  
  const { name, image, role, phone, email } = mentorData;

  return (
    <a href="student/mentorProfile">
      <div className='w-1/4 p-4 justify-center items-center'>
        <div className="h-96 w-80 bg-[#f7f7fb] p-10 rounded-xl shadow-lg flex flex-col justify-space-around items-center gap-4 border-2 border-zinc-300">
          {/* Mentor dp */}
          <div className="rounded-full h-[120px] object-cover border-2 border-zinc-300">
            <Image
              src={`/profile/${image}`}
              alt="mentorship"
              width={120}
              height={120}
              className="rounded-full object-cover h-[120px] w-[120px] "
            />
          </div>

          <h1 className="text-lg font-bold">{name}</h1>
          <h1 className="text-md p-2 font-bold bg-violet-100 rounded-xl w-44 text-center text-zinc-900">
            {role}
          </h1>
          <h1>{phone}</h1>
          <h1 className="text-zinc-700">{email}</h1>
        </div>
      </div>
    </a>
  );
};

export default Card;
