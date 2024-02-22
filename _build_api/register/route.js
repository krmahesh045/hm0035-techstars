// // Import the MongoDB connection function
// import connectMongoDB from "@/libs/mongodb";
// // Import NextResponse from Next.js server library
// import { NextResponse } from "next/server";
// // Import the User, Student, and Mentor models
// import User from "@/models/user";
// import Student from "@/models/student";
// import Mentor from "@/models/mentor";

// // Define the POST handler function
// export async function POST(request) {
//     // Destructure the request body to extract required fields
//     const { name, email, password, phone, address, role, matchtest } = await request.json();
//     // Connect to MongoDB
//     await connectMongoDB();
//     // Create a new user
//     const newUser = await User.create({ name, email, password, mobile: phone, address, role });

//     // Check the role of the user
//     if (role === 'student') {
//         // If the user is a student, create a new student document
//         console.log(matchtest);
//         const student = await Student.create({ "userId": newUser._id,"matchtest" : matchtest });
//         // Return a JSON response with success message, user, student, and matchtest
//         return NextResponse.json({
//             message: "Student Created.",
//             newUser,
//             student,
//             matchtest
//         });
//     } else if (role === 'mentor') {
//         // If the user is a mentor, create a new mentor document
//         const mentor = await Mentor.create({ "userId": newUser._id, matchtest });
//         // Return a JSON response with success message, user, mentor, and matchtest
//         return NextResponse.json({
//             message: "Mentor Created.",
//             newUser,
//             mentor,
//             matchtest
//         });
//     } else {
//         // If the role is neither student nor mentor, return an error message
//         return NextResponse.json({ message: 'Invalid role. Role must be either "student" or "mentor".' });
//     }
// }
