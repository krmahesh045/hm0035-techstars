// pages/api/match/route.js

import connectMongoDB from '@/libs/mongodb';
import Student from '@/models/student';
import Mentor from '@/models/mentor';
import User from '@/models/user';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function GET(request: NextRequest) {

  await connectMongoDB();

  try {
    const userId = getDataFromToken(request);
    
    const user = await User.findOne({ _id: userId }).select('-password');
    const role = user.role;
    if(role === 'student'){
        const student = await Student.findOne({userId: userId});
        return  NextResponse.json({
          message : "Success",
          personalDetails: user,
          matchtest: student
        });
    }
    else if(role === 'mentor'){
        const mentor = await Mentor.findOne({userId: userId});
        return NextResponse.json({
            message: "Success",
            personalDetails: user,
            matchtest: mentor
        })
    }
    return  NextResponse.json({
      message : "Success",
    });

  } catch (error) {
    console.error(error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
}
