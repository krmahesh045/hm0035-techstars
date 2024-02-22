import connectMongoDB from "@/libs/mongodb" ;
import { NextRequest, NextResponse } from "next/server";
import User from "@/models/user"
import Student from "@/models/student"
import Mentor from "@/models/mentor"
import bcryptjs from "bcryptjs";

export async function POST(request : NextRequest){
    const  { name, email, password, phone, address, role, experties, skills, qualification, about, github, linkedin, udemy, youtube,other, matchtest } = await request.json();
    await connectMongoDB();
    // Hash the password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);
    // Create a new user
    const newUser = await User.create({name, email, password: hashedPassword, phone, address, role});
    await newUser.save();
    const userId = newUser._id;

    // Create a new student or mentor
    if(role === 'student'){
        let matchdata: String[] = [];
        for(const param in matchtest) {
            for(const value in matchtest[param]) {
                if(matchtest[param][value] === true){
                    const str = value + " " + param;
                    matchdata.push(str);
                }
                else{
                    const str = "No " + value+ " " + param;
                    matchdata.push(str);
                }
            }
        }

        const student = await Student.create({userId, testData : matchdata,skills, qualification, about, github, linkedin, other, ...matchtest});
        await student.save();
        return NextResponse.json({
            message: "Student Created.",
            newUser,
            student,
            matchdata
        });
    }
    
    else if (role === 'mentor') {
        let matchdata: any = [];
        for(const param in matchtest) {
            for(const value in matchtest[param]) {
                if(matchtest[param][value] === true){
                    const str = value + " " + param;
                    matchdata.push(str);
                }
                else{
                    const str = "No " + value+ " " + param;
                    matchdata.push(str);
                }
            }
        }
        matchdata.push(other);

        const mentor = await Mentor.create({ userId,testData: matchdata, experties, skills, qualification, about, udemy, linkedin, youtube, other, ...matchtest });
        
        await mentor.save();        
        console.log(mentor);
        return NextResponse.json({
            status: 200,
            message: "Mentor Created."
        });
    } 
    else {
        return NextResponse.json({ message: 'Invalid role. Role must be either "student" or "mentor".' });
    }
}