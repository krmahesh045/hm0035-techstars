// pages/api/match/route.js

import connectMongoDB from '@/libs/mongodb';
import Student from '@/models/student';
import Mentor from '@/models/mentor';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function GET(request: NextRequest) {

  await connectMongoDB();

  try {
    const {mentorId} = await request.json();
    const {userId} = getDataFromToken(request);

    const studentsArray = await Student.find({userId}).select('userId testData');
    const mentorsArray = await Mentor.find({userId: mentorId}).select('userId testData');
   return  NextResponse.json({
      message : "Success",
      students: studentsArray,
      mentors: mentorsArray,
    });

  } catch (error) {
    console.error(error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
}
