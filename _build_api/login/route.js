// // Import the necessary modules
// import connectMongoDB from "@/libs/mongodb";
// import { NextResponse } from "next/server";
// import User from "@/models/user";

// // Define the POST handler function for login
// export async function POST(request) {
//     try {
//         // Extract email and password from the request body
//         const { email, password } = await request.json();

//         // Connect to MongoDB
//         await connectMongoDB();

//         // Find the user with the provided email
//         const user = await User.findOne({ email });

//         // If user is not found, return error
//         if (!user) {
//             return NextResponse.json({
//                 message: "User not found.",
//                 status: 404
//             });
//         }

//         // Check if the password matches
//         const isValidPassword = (user.password === password);

//         if (!isValidPassword) {
//             return NextResponse.json({
//                 message: "Invalid password.",
//                 status: 401
//             });
//         }

//         // If email and password are valid, return success message and user details
//         return NextResponse.json({
//             message: "Login successful.",
//             status: 200,
//             user
//         });
//     } catch (error) {
//         // Handle any errors
//         console.error("Error:", error);
//         return NextResponse.json({
//             message: "Internal Server Error",
//             status: 500
//         });
//     }
// }
