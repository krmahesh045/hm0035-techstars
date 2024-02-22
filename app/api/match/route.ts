// pages/api/match/route.js

import connectMongoDB from '@/libs/mongodb';
import Student from '@/models/student';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function GET(request: NextRequest) {

  await connectMongoDB();

  try {
    const {userId, role} = getDataFromToken(request);
    
    const studentsArray = await Student.findOne({ userId });
    const mentorsArray = await Match.findOne().testData.data;
    console.log("Student Array : ",studentsArray);
    console.log("Mentor Array : ",mentorsArray);

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
