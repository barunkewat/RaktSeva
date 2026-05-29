import mongoose from "mongoose";

const connectDB = async()=>{
    try {
        await mongoose.connect(process.env.MONGO_URL)
        console.log(`Connected to MongoDB Database ${mongoose.connection.host}`);
    } catch (error) {
        console.log(`MongoDB Database error ${error}`);
    }
}

export default connectDB;