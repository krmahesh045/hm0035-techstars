// Import the necessary modules
import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import Mentor from "@/models/mentor";

// Ensure MongoDB connection is established at the application level
connectMongoDB();

// Define the GET handler function for fetching all mentors
export async function GET(request: NextRequest) {
    try {
        // Fetch all mentors from the MongoDB collection
        let mentors = await Mentor.find().select('userId experties');

        // If no mentors are found, return an error response
        if (!mentors || mentors.length === 0) {
            return NextResponse.json({
                message: "No mentors found.",
                status: 404
            });
        }

        let mentorData : Object[] = [];
        for (let mentor of mentors) {
            try {
                const user = await User.findOne({ _id: mentor.userId }).select('_id name phone email');
                console.log(mentor);
                const roles: String = mentor.experties;
                mentorData.push({ user, roles });
            } catch (error) {
                console.error('Error updating mentor:', error);
            }
        }     

        // Return the mentors data
        return NextResponse.json({
            message: "Mentors data fetched successfully.",
            status: 200,
            mentorData
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
