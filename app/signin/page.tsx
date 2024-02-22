/* eslint-disable react/no-unescaped-entities */
'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
import Image from 'next/image'
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button"
import { useState } from 'react';
import Link from 'next/link'
import axios from 'axios';
import { NextResponse } from 'next/server';
import toast, { Toaster } from 'react-hot-toast';

type Props = {}

function SignInPage({}: Props) {
  
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [error, setError] = useState("");
  const router = useRouter();
  


  const handleSignIn = async () => { 

    if(!email || !password) {
      setError("Please enter email and password");
      toast.error("Please enter email and password");
      return;
    }
    
    try{
      const response:any = await axios.post('/api/signin',{email,password});
      console.log(response.data.error);
     
      if(response.status !== 200) {
        setError("Error logging in. Please try again.");
        toast.error(response.data.error);
        return NextResponse.json({ error: "Please enter email and password" });
      }
      else {
        if(response.data.role === "student")
          router.push("/student/");
        else if(response.data.role === "mentor")
          router.push("/mentor/");
        else
        return NextResponse.json({ message: "Successfully logged in." });
      } 

    }catch(error){
      console.error("Error logging in", error);
      setError("Error logging in. Please try again.");
      toast.error("Error logging in. Please try again.");
    }
  }

  
 
  return (
    <div className="h-screen w-screen flex items-center justify-center bg-[#FBF9F1]">
      <Toaster 
        position="bottom-right"
        reverseOrder={false}
      />
      <div className="shadow-xl h-[800px] w-[1400px] flex rounded-lg overflow-hidden">
        <div className="bg-[#18181b] lg:w-[50%] text-white p-12 lg:flex flex-col justify-between hidden ">
         
          <h1 className="text-3xl font-semibold">
            MentorLink
          </h1>
          <div className='flex justify-center items-center'>

            <div className=" h-[256px] w-[256px] animate-spin ease-in-out">
                    <svg
                  width="256"
                  height="256"
                  viewBox="0 0 717 717"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fill="#ffffff"
                    d="m333 276l80-81c7-7 15-16 23-26c8-9 17-17 26-24c17-15 37-28 62-28c22 0 41 10 55 23s22 32 22 54c0 9-1 19-4 26c-7 14-13 24-19 32c-3 4-6 8-6 12c0 3 0 6 2 7c11 27 19 50 24 78c3 11 9 16 19 16c4 0 8-1 12-4c8-5 15-13 22-21c4-4 7-8 9-10c36-35 57-85 57-136c0-54-22-102-57-137c-35-34-84-57-136-57S422 21 387 58L250 194c-36 37-56 85-56 136c0 15 6 46 16 75c10 28 23 53 40 53c9 0 28-15 44-32s32-36 32-43c0-5-4-11-8-20c-5-9-7-20-7-33c0-20 8-40 22-54m-3 384l137-136c36-35 56-86 56-137c0-15-6-45-16-74c-9-28-23-54-40-54c-7 0-28 16-43 33c-17 17-33 35-33 42c0 5 3 13 8 21c5 9 9 19 9 32c-1 20-9 40-23 56l-81 80c-7 8-15 16-23 25l-25 25c-17 16-38 27-63 27c-42 0-76-33-76-76c0-10 2-19 5-26c6-14 12-24 19-32c3-4 4-8 4-11c0-2-1-4-2-8c-12-27-19-50-24-78c-2-5-3-9-6-11c-3-4-8-5-13-5c-4 0-7 1-11 4c-8 5-16 13-23 21c-3 4-7 7-9 9c-36 36-57 86-57 137c0 53 21 102 57 137c35 35 83 56 136 56c52 0 102-20 137-57"
                  />
                </svg>
            </div>

          </div>

          <h2 className="text-xl text-center">
            "Mentor Personalized Learning Success"
          </h2>
        </div>

        {/* sign in block */}
        <div className="flex flex-col gap-1 items-center justify-center lg:w-[50%] bg-white w-full ">  
                <h2 className="text-3xl font-semibold">Welcome Back!</h2>
                <h3>Enter your email and password to Sign in</h3>
                <Input 
                  className="w-96 h-12 mt-6" 
                  type="Email" 
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <Input 
                  className="w-96 h-12 mt-6" 
                  type="password" 
                  placeholder="Password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
      
                <h3 className="text-red-500">{error}</h3> 

                <Button 
                  className="w-96 mt-4"
                  onClick = {handleSignIn}
                >Sign In with email</Button>
      
                <h2 className="text-center mt-4 mb-4">_____________OR_____________</h2>
      
                <Button variant= "outline" className="w-96 mt-4"><Link href="/register">Sign Up</Link></Button>

        </div>
      </div>
    </div>
    
  )
}

export default SignInPage