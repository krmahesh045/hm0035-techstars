// pages/api/feedback/route.js

import connectMongoDB from '@/libs/mongodb';
import { NextRequest, NextResponse } from "next/server";
import Feedback from '@/models/feedback';
import { getDataFromToken } from "@/helpers/getDataFromToken";
connectMongoDB();
// Import necessary dependencies

export async function POST(req: NextRequest) {
  try {
    // Get mentorID from the request body
    const { mentorID } = await req.json();
    // Find feedbacks for the given mentorID
    const feedbacks = await Feedback.find({ mentorId: mentorID }).select('mentorId studentId message starsRating date');

    // Log feedbacks for debugging (optional)
    console.log("Feedbacks for mentor:", feedbacks);

    // Return success response with feedbacks
    return NextResponse.json({
      message: "Success",
      feedbacks: feedbacks,
    });

  } catch (error) {
    // Handle errors and return an error response
    console.error('Error fetching feedbacks:', error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
