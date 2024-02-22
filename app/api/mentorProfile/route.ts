import { NextRequest, NextResponse } from "next/server";
import Mentor from "@/models/mentor";
import connectMongoDB from "@/libs/mongodb";

connectMongoDB();

export async function GET(request: NextRequest) {
    try {
        const { userId } =  await request.json();
        const mentor = await Mentor.findOne({ userId }).select('userId experties skills qualification about udemy linkedin youtube');
        if (!mentor) {
            return NextResponse.json({
                message: "No mentor found.",
                status: 404
            });
        }
        
        return NextResponse.json({
            message: "Mentor data fetched successfully.",
            status: 200,
            mentor
        });
    } catch (error) {
        console.error("Error:", error);
        return NextResponse.json({
            message: "Internal Server Error",
            status: 500
        });
    }
}