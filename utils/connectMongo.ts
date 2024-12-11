import mongoose from "mongoose";

export const connectMongo = async () => {
    console.log(process.env.MONGODB_URI);
    await mongoose.connect(process.env.MONGODB_URI!);
}
