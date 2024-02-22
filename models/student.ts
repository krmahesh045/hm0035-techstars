const mongoose = require('mongoose');


const studentSchema = new mongoose.Schema({
    userId: { 
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
    },
    testData : {
        type: Array
    },
    learningStyle: {
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
        prepareForExams: { type: Boolean },
        careerGuidance: { type: Boolean }
    },
    availability: {
        _1_2: { type: Boolean },
        _3_5: { type: Boolean },
        _6: { type: Boolean }
    },
    experience: {
        _0: { type: Boolean },
        _2: { type: Boolean },
        _4: { type: Boolean }
    },
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
    learningMethod: {
        exampleBased: { type: Boolean },
        interactionBased: { type: Boolean },
        problemBased: { type: Boolean }
    },
    mentoringExperience: { 
        yes: { type: Boolean },
        no: { type: Boolean }
    },
    learningChallenges: {
        conceptTrouble: { type: Boolean },
        timeManagement: { type: Boolean },
        testAnxiety: { type: Boolean }
    },
    mentorQuality: {
        experiencedTeacher: { type: Boolean },
        industryExpert: { type: Boolean },
        doubtSolver: { type: Boolean }
    }
});

const Student = mongoose.models.Student || mongoose.model('Student', studentSchema)
export default Student;
