// Import the necessary modules
import connectMongoDB from "@/libs/mongodb";
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user";
import Student from "@/models/student";
import Mentor from "@/models/mentor";

// Define the POST handler function for the dashboard
export async function POST(request : NextRequest) {
    try {
        // Connect to MongoDB
        await connectMongoDB();
        // Assume the request contains information about the logged-in user
        const { userId } = await request.json();

        // Fetch the logged-in user
        const user = await User.findById(userId);
        console.log("User: ",user);
        if (!user){
            return NextResponse.json({
                message: "User not found.",
                status: 404
            });
        }

        // Fetch the corresponding student or mentor based on the user's role
        let userDetails;
        if (user.role === "student") {
            userDetails = await Student.findOne({ userId });
            console.log("Students detail: ",userDetails);
        } else if (user.role === "mentor") {
            userDetails = await Mentor.findOne({ userId });
            console.log("Mentors detail: ",userDetails);
        }

        // Return the user details along with the student or mentor details
        return NextResponse.json({
            message: "Dashboard data fetched successfully.",
            status: 200,
            user,
            userDetails
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
