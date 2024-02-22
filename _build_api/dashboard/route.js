// // Import the necessary modules
// import connectMongoDB from "@/libs/mongodb";
// import { NextResponse } from "next/server";
// import User from "@/models/user";
// import Student from "@/models/student";
// import Mentor from "@/models/mentor";

// // Define the POST handler function for the dashboard
// export async function POST(request) {
//     try {
//         // Connect to MongoDB
//         await connectMongoDB();

//         // Assume the request contains information about the logged-in user
//         const { userId } = await request.json();

//         // Fetch the logged-in user
//         const user = await User.findById(userId);

//         if (!user) {
//             return NextResponse.json({
//                 message: "User not found.",
//                 status: 404
//             });
//         }

//         // Fetch the corresponding student or mentor based on the user's role
//         let userDetails;
//         if (user.role === "student") {
//             userDetails = await Student.findOne({ userId });
//         } else if (user.role === "mentor") {
//             userDetails = await Mentor.findOne({ userId });
//         }

//         // Return the user details along with the student or mentor details
//         return NextResponse.json({
//             message: "Dashboard data fetched successfully.",
//             status: 200,
//             user,
//             userDetails
//         });
//     } catch (error) {
//         // Handle errors
//         console.error("Error:", error);
//         return NextResponse.json({
//             message: "Internal Server Error",
//             status: 500
//         });
//     }
// }
