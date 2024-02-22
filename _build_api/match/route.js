// import connectMongoDB from "@/libs/mongodb";
// import { NextResponse } from "next/server";
// import Student from "@/models/student";
// import Mentor from "@/models/mentor";

// export async function POST(request) {
//     const {userId} = await request.json();
//     await connectMongoDB();
    
//     // Create the user
//     const student = await Student.find({userId : userId});

//     let studentData = [];
//     let mentorData = [];

//     // Fetch all mentors from the database
//     const mentors = await Mentor.find();
//     mentorData = mentors.map(value => console.log(value.matchtest));
//     return NextResponse.json({
//         message: "User Created.",
//         status: 201,
//         newUser,
//         studentData,
//         mentorData
//     });
    
//     }

    

