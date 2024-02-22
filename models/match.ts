const mongoose = require('mongoose');

// Define your schema
const matchSchema = new mongoose.Schema({
    testData : {
        data: {
            type: Array
        }
    },
    count: {
        type: Number,
        default: 0
    }
});

// Create and export your model
const Match = mongoose.models.Match || mongoose.model('Match', matchSchema)
export default Match;