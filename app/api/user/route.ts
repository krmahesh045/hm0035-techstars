import { NextRequest, NextResponse } from "next/server";
import { getDataFromToken } from "@/helpers/getDataFromToken";
import connectMongoDB from "@/libs/mongodb";
import User from "@/models/user";

export async function GET(request: NextRequest) {
    await connectMongoDB();
    try {
        const userId = getDataFromToken(request);
        console.log(userId);
        const data = await User.findOne({ _id: userId }).select('name');
        console.log(data); 
        return NextResponse.json({
            message: "Success",
            data: data,
        }); 
    } catch (error) {
        console.error(error);
        NextResponse.json({ error: 'Internal Server Error' });
    }
}
