import mongoose, {Schema} from 'mongoose';


const userSchema = new Schema({
    name: { type: String },
    email: { type: String, required: true , unique: true},
    password: { type: String , required: true},
    phone: { type: String },
    address: { type: String },
    role: { type: String, enum: ['student', 'mentor'], required: true},
    experties: {type : String}
});

const User = mongoose.models.User || mongoose.model('User', userSchema)
export default User;



// make email unique
// const userSchema = new Schema({
//     name: { type: String, required: true },
//     email: { type: String, required: true , requiredt: true},
//     password: { type: String, required: true },
//     mobile: { type: String },
//     address: { type: String },
//     role: { type: String, enum: ['student', 'mentor'], required: true }
// });
