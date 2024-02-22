import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";
import Student from "@/models/student";

export async function GET(request: NextRequest) {
    await connectMongoDB();
    try {
        const {userId} = getDataFromToken(request);
        const data = await User.findOne({ _id: userId }).select('name email phone address');
        const student = await Student.findOne({ userId }).select('skills qualification about github linkedin');
        return NextResponse.json({
            message: "Success",
            data: data,
            studentData :student
        }); 
    } catch (error) {
        console.error(error);
        NextResponse.json({ error: 'Internal Server Error' });
    }
}
