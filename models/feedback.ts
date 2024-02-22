// models/feedback.js
const mongoose = require('mongoose')

const feedbackSchema = new mongoose.Schema({
  mentorId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Mentor', // Reference to Mentor model
    required: true,
  },
  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student', // Reference to Student model
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  starRating: {
    type: Number,
    required: true,
    min: 1,
    max: 5,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

const Feedback = mongoose.models.Feedback ||mongoose.model('Feedback', feedbackSchema);
export default Feedback
