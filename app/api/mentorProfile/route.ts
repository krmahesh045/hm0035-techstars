import { NextRequest, NextResponse } from "next/server";
import Mentor from "@/models/mentor";
import User from "@/models/user";
import connectMongoDB from "@/libs/mongodb";

connectMongoDB();

export async function POST(request: NextRequest) {
    try {
        const { userId } =  await request.json();
        const mentor = await Mentor.findOne({ userId }).select('userId experties skills qualification about udemy linkedin youtube');
        if (!mentor) {
            return NextResponse.json({
                message: "No mentor found.",
                status: 404
            });
        }
        
        const user = await User.findOne({ _id: mentor.userId }).select('_id name phone email address');
        return NextResponse.json({
            message: "Mentor data fetched successfully.",
            status: 200,
            user,
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