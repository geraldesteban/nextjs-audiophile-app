import mongoose from "mongoose";

// Reusable connnect to database
export const connectDB = async () => {
  // Check if there is mongodb uri
  if (!process.env.MONGODB_URI) {
    throw new Error("MONGODB_URI missing");
  }

  // connect and handle connection error
  try {
    await mongoose.connect(process.env.MONGODB_URI);
  } catch (error) {
    console.error("Connection error:", error);
  }
};
