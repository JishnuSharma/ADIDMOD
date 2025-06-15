import mongoose from "mongoose";

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI!);
        console.log("Database connection made successfully");
    } catch(error){
        console.log("Connection to the database could not be made successfully: ",error);
        process.exit(1);
    }
}

export default connectDB;