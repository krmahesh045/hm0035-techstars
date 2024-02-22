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
        let mentors = await Mentor.find().select('userId subject');
        let mentorData = [];
        for (let mentor of mentors) {
            try {
                const user = await User.findOne({ _id: mentor.userId }).select('_id name mobile email');
                console.log(mentor);
                const roles = [];
                if (mentor.subject["webdev"]) {
                    roles.push("webdev");
                }else if (mentor.subject["appdev"]) {
                    roles.push("appdev");
                }else if (mentor.subject["aiml"]) {
                    roles.push("aiml");
                }
                    
                mentorData.push({ user, roles });
            } catch (error) {
                console.error('Error updating mentor:', error);
                
            }
        }



        // If no mentors are found, return an error response
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
