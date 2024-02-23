import connectMongoDB from '@/libs/mongodb';
import Student from '@/models/student';
import Mentor from '@/models/mentor';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function GET(request: NextRequest) {

  await connectMongoDB();

  try {
    const { mentorId } = await request.json();
    const { userId } = getDataFromToken(request);

    const studentsArray = await Student.find({ userId }).select('userId testData');
    const mentorsArray = await Mentor.find({ userId: mentorId }).select('userId testData');

    // Prepare data to send to external API
    const requestData = {
      studentsArray,
      mentorsArray, // Corrected key name
    };

    // Call the external API
    const response = await fetch('http://localhost:3001/calculate-similarity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestData),
    });

    // Parse the response from the external API
    const responseData = await response.json();
    console.log(responseData);
    // Return the response from the external API
    return NextResponse.json(responseData);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
