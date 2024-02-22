// pages/api/match/route.js

import connectMongoDB from '@/libs/mongodb';
import Student from '@/models/student';
import Mentor from '@/models/mentor';
import { NextResponse } from 'next/server';

export async function GET() {
  await connectMongoDB();

  try {
    const students = await Student.find();
    const mentors = await Mentor.find();
    if(!students) {
      return NextResponse.json({ error: 'Data not found' });
    }
    else{
      console.log("Data found");
    }

    const studentsArray = students.map((student: { _id: any; learningStyle: any; communication: any; goal: any; availability: any; experience: any; subject: any; pace: any; teachingmethod: any; mentoringExperience: any; learningChallenge: any; mentorQuality: any; }) => ({
      _id: student._id,
      learningStyle: student.learningStyle,
      communication: student.communication,
      goal : student.goal,
      availability : student.availability,
      experience : student.experience,
      subject: student.subject,
      pace : student.pace,
      teachingmethod : student.teachingmethod,
      mentoringExperience : student.mentoringExperience,
      learningChallenge : student.learningChallenge,
      mentorQuality : student.mentorQuality,
    }));

    const mentorsArray = mentors.map((mentor: { __id: any; teachstyle: any; communication: any; goal: any; availability: any; experience: any; subject: any; pace: any; teachingmethod: any; mentoringExperience: any; teachingChallenge: any; studentCharacter: any; }) => ({
      _id: mentor.__id,
      teachstyle: mentor.teachstyle,
      communication: mentor.communication,
      goal : mentor.goal,
      availability : mentor.availability,
      experience : mentor.experience,
      subject: mentor.subject,
      pace : mentor.pace,
      teachingmethod : mentor.teachingmethod,
      mentoringExperience : mentor.mentoringExperience,
      teachingChallenge : mentor.teachingChallenge,
      studentCharacter : mentor.studentCharacter,
    }));

    console.log("Students Array:", studentsArray);
    console.log("Mentors Array:", mentorsArray);

    // const flattenedMentorData = mentorsArray.flatMap(mentor => Object.values(mentor).flatMap(subDict => Object.values(subDict).map(value => Number(value))));
    // const flattenedStudentData = studentsArray.flatMap(student => Object.values(student).flatMap(subDict => Object.values(subDict).map(value => Number(value))));

    // console.log("Flattened Mentor Data:", [flattenedMentorData]);
    // console.log("Student Flaten Data:", [flattenedStudentData]);


   return  NextResponse.json({
      message : "Success",
      students: studentsArray,
      mentors: mentorsArray,
    });

  } catch (error) {
    console.error(error);
    NextResponse.json({ error: 'Internal Server Error' });
  }
}
