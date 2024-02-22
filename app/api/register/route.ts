import connectMongoDB from "@/libs/mongodb" ;
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user"
import Student from "@/models/student"
import Mentor from "@/models/mentor"
import Match from "@/models/match";
import bcryptjs from "bcryptjs";

export async function POST(request : NextRequest){
    const  { name, email, password, phone, address, role, matchtest } = await request.json();
    await connectMongoDB();
    
    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // Create a new user
    const newUser = await User.create({name, email, password: hashedPassword, phone, address, role });
    await newUser.save();



    // Create a new student or mentor
    if(role === 'student'){
        let matchdata: number[] = [];
        for(const param in matchtest) {
            for(const value in matchtest[param]) {
                if (matchtest[param][value]) matchdata.push(1);
                else matchdata.push(0);
            }
        }

        const student = await Student.create({"userId": newUser._id, testData : matchdata, ...matchtest});
        await student.save();
        return NextResponse.json({
            message: "Student Created.",
            newUser,
            matchdata
        });
    }
    else if (role === 'mentor') {
        //await Match.create({count: 0, testData: {}});

        const mentor = await Mentor.create({ "userId": newUser._id, ...matchtest });
        await mentor.save();
        let doc = await Match.findOne();

        // Increment the number field
        doc.count = doc.count + 1;
        let matchdata: number[] = [];
        for(const param in matchtest) {
            for(const value in matchtest[param]) {
                if (matchtest[param][value]) matchdata.push(1);
                else matchdata.push(0);
            }
        }
        
        // Append the new data array to the existing nested array
        doc.testData.data.push(matchdata);

        await doc.save();   
        
        return NextResponse.json({
            message: "Mentor Created.",
            newUser,
            matchdata
        });
    } 
    else {
        return NextResponse.json({ message: 'Invalid role. Role must be either "student" or "mentor".' });
    }
}