// pages/api/feedback/route.js

import connectMongoDB from '@/libs/mongodb';
import { NextRequest, NextResponse } from "next/server";
import Feedback from '@/models/feedback';
import { getDataFromToken } from "@/helpers/getDataFromToken";
connectMongoDB();

export async function GET() {
  try {
    const feedbacks = await Feedback.find();
    // console.log("Feedbacks for mentor:", feedbacks);
    return NextResponse.json({
      message: "Success",
      feedbacks: feedbacks,
    });

  } catch (error) {
    console.error('Error fetching feedback:', error);
    return NextResponse.json({
      message: "Internal server error",
      status: 500,
    });
  }
}
