import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}`);
    console.log("MongoDB connected successfull!");
  } catch (error) {
    console.log(error);
  }
}
