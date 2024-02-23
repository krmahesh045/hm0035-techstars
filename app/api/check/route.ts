import connectMongoDB from '@/libs/mongodb';
import Student from '@/models/student';
import Mentor from '@/models/mentor';
import { NextRequest, NextResponse } from 'next/server';
import { getSimilarity } from '@/helpers/getSimilarity';

export async function POST(request: NextRequest) {
  await connectMongoDB();

  try {
    const studentsArray = [
        'visual learningStyle',
        'No auditory learningStyle',
        'No kinesthetic learningStyle',
        'recordedLecture communication',
        'No message communication',
        'videoCall communication',
        'clarifyConcept goal',
        'No improveGrades goal',
        'No prepareForExam goal',
        'No careerGuidance goal',
        'No _1_2 availability',
        'No _3_5 availability',
        '_6 availability',
        'No _0 experience',
        '_2 experience',
        'No _4 experience',
        'No aiml subject',
        'webdev subject',
        'No appdev subject',
        'No slow pace',
        'moderate pace',
        'No fast pace',
        'No exampleBased teachingMethod',
        'interactionBased teachingMethod',
        'No problemBased teachingMethod',
        'yes mentoringExperience',
        'No no mentoringExperience',
        'No conceptTrouble learningChallenge',
        'timeManagement learningChallenge',
        'No testAnxiety learningChallenge',
        'experiencedTeacher mentorQuality',
        'No industryExpert mentorQuality',
        'No doubtSolver mentorQuality'
      ];
    const mentorsArray = [
        'visual teachstyle',
        'No auditory teachstyle',
        'No kinesthetic teachstyle',
        'recordedLecture communication',
        'No message communication',
        'No videoCall communication',
        'No clarifyConcept goal',
        'improveGrades goal',
        'No prepareForExam goal',
        'No careerGuidance goal',
        'No _1_2 availability',
        'No _3_5 availability',
        'No _6 availability',
        'No _1_3 experience',
        '_4_6 experience',
        'No _7 experience',
        'No aiml subject',
        'webdev subject',
        'No appdev subject',
        'No slow pace',
        'moderate pace',
        'No fast pace',
        'No exampleBased teachingMethod',
        'interactionBased teachingMethod',
        'No problemBased teachingMethod',
        'No yes mentoringExperience',
        'no mentoringExperience',
        'No learningStyle teachingChallenge',
        'timeManagement teachingChallenge',
        'No studentEngagement teachingChallenge',
        'No enthusiastic studentCharacter',
        'selfMotivated studentCharacter',
        'No curious studentCharacter'
      ];

    // Call the external API
    const response = await fetch('http://localhost:3001/calculate-similarity', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ studentsArray, mentorsArray }),
    });
    // Parse the response from the external API
    const result = await response.json();

    // Return the response from the external API
    return NextResponse.json(result);

  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Internal Server Error' });
  }
}
