import connectMongoDB from '@/libs/mongodb';
import Student from '@/models/student';
import Mentor from '@/models/mentor';
import { NextRequest, NextResponse } from 'next/server';
import { getDataFromToken } from '@/helpers/getDataFromToken';

export async function POST(request: NextRequest) {
  await connectMongoDB();

  try {
    const { feedbackArray } = await request.json();

    // Check if feedbackArray is provided
    if (!feedbackArray || !Array.isArray(feedbackArray) || feedbackArray.length === 0) {
      return NextResponse.error(new Error('Feedback array is required.'));
    }

    // Call the external API for sentiment analysis
    const response = await fetch('http://localhost:3001/sentiment-analysis', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ feedbackArray }),
    });

    // Check if the response is successful
    if (!response.ok) {
      throw new Error('Failed to fetch data from the sentiment-analysis API');
    }

    // Parse the response from the external API
    const responseData = await response.json();

    // Return the response from the sentiment-analysis API
    return NextResponse.json(responseData);

  } catch (error) {
    console.error(error);
    return NextResponse.error();
  }
}
