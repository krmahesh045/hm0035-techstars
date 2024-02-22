import React from 'react'
import Image from 'next/image'

type User = {
 

}

const ProfilePage = () => {

  const [user, setUser] = React.useState({})



  return (
    <div className='w-screen h-screen flex flex-col bg-slate-100'>
      <div className='w-full h-[20vh] bg-gradient-to-l from-fuchsia-300 to-yellow-100'>

        <div className=''> 
          <Image
            src={'/profile/avatar2.png'}
            alt="mentorship"
            width={200}
            height={200}
            className="rounded-full object-cover h-[300px] w-[300px] absolute top-20 left-20 border-4 border-white"          
          />
        </div>
         
      </div>
      
    </div>
  )
}

export default ProfilePage