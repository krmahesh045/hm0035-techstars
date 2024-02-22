import { NextResponse } from "next/server";



export async function GET() {
    try {
        // Logout the user
        const response = NextResponse.json({
            status : 200,
            message :   "Logged out successfully",
            success: true
        })
        response.cookies.set('token', '', {
            httpOnly: true,
            expires: new Date(0)
        });
        return response;
    } catch (error: any) {
        return NextResponse.json({
            error: error.message,
            status: 500
        });
    }
}