// pages/api/feedback/route.js

import connectMongoDB from '@/libs/mongodb';
import { NextRequest, NextResponse } from "next/server";
import Feedback from '@/models/feedback';
import { getDataFromToken } from "@/helpers/getDataFromToken";
connectMongoDB();

export async function POST(request: NextRequest) {
  try {
    // Extract data from the request body
    let { mentorId, studentId, message, starRating } = await request.json();
    const {userId} = getDataFromToken(request);
    studentId = userId;
      // Validate and save feedback
      console.log("database ")
      const feed = new Feedback({ mentorId, studentId, message, starRating });
      const savedFeedback = await feed.save();
  
      console.log("Saved feedback is:", savedFeedback);
  
      return NextResponse.json({
        message: "Feedback saved Successfully",
        status:200
      });

    } catch (error) {
      console.error('Error saving feedback:', error);
      return NextResponse.json({
        message: "Internal server error",
        status: 500,
      });
    }
  }
