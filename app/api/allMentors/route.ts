// Import the necessary modules
import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import Mentor from "@/models/mentor";

// Ensure MongoDB connection is established at the application level
connectMongoDB();

// Define the GET handler function for fetching all mentors
export async function GET(request: NextRequest) {
    try {
        // Fetch all mentors from the MongoDB collection
        const mentors = await Mentor.find();

        if (!mentors || mentors.length === 0) {
            return NextResponse.json({
                message: "No mentors found.",
                status: 404
            });
        }

        // Return the mentors data
        return NextResponse.json({
            message: "Mentors data fetched successfully.",
            status: 200,
            mentors
        });
    } catch (error) {
        // Handle errors
        console.error("Error:", error);
        return NextResponse.json({
            message: "Internal Server Error",
            status: 500
        });
    }
}
