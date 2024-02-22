import mongoose from "mongoose";

const connectMongoDB = async () => {
    try{
        // await mongoose.connect("mongodb+srv://MentorMatchDB:mongodb!@atlascluster.438qwnv.mongodb.net/app");
        await mongoose.connect("mongodb+srv://murtuzakapasi:THEboss53@cluster0.ivwr4cp.mongodb.net/mentorlink");
        console.log("MongoDB connected successfully");
    }
    catch(err){
        console.log("database connection  failed !!! " , err);
    }
}


export default connectMongoDB;

