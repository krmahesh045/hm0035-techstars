const mongoose = require('mongoose');


const mentorSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User' 
    },
    
    experties: {
        type: String
    },
    skills: {
        type: Array
    },
    qualification: {
        type: String
    },
    about: {
        type: String
    },
    udemy: {
        type: String
    },
    linkedin: {
        type: String
    },
    youtube: {
        type: String
    },
    other: {
        type: String
    },
    teachstyle: {
        visual: { type: Boolean },
        auditory: { type: Boolean },
        kinesthetic: { type: Boolean }
    },
    communication: {
        recordedLecture: { type: Boolean },
        message: { type: Boolean },
        videoCall: { type: Boolean }
    },
    goal: {
        clarifyConcept: { type: Boolean },
        improveGrades: { type: Boolean },
        prepareForExam: { type: Boolean },
        careerGuidance: { type: Boolean }
    },
    availability: {
        _1_2: { type: Boolean },
        _3_5: { type: Boolean },
        _6: { type: Boolean }
    },
    experience: {
        _1_3: { type: Boolean },
        _4_6: { type: Boolean },
        _7:  { type: Boolean }
    }, // Assuming this will be a string like "_4_6"
    subject: {
        aiml: { type: Boolean },
        webdev: { type: Boolean },
        appdev: { type: Boolean }
    },
    pace: {
        slow: { type: Boolean },
        moderate: { type: Boolean },
        fast: { type: Boolean }
    },
    teachingMethod: {
        exampleBased: { type: Boolean },
        interactionBased: { type: Boolean },
        problemBased: { type: Boolean }
    },
    mentoringExperience: { 
        yes: { type: Boolean },
        no: { type: Boolean }
     }, // Assuming this will be a string like "yes" or "no"
    teachingChallenge: {
        learningStyle: { type: Boolean },
        timeManagement: { type: Boolean },
        studentEngagement: { type: Boolean }
    },
    studentCharacter: {
        enthusiastic: { type: Boolean },
        selfMotivated: { type: Boolean },
        curious: { type: Boolean }
    }
});

const Mentor = mongoose.models.Mentor || mongoose.model('Mentor', mentorSchema)
export default Mentor;