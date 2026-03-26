import mongoose from "mongoose";

const uri = process.env.MONGODB_URI as string;

if (!uri) {
  throw new Error("MONGODB_URI is missing");
}

let isConnected = false;

export async function connectDB() {
  if (isConnected) return;

  const mongodb = await mongoose.connect(uri);

  isConnected = mongodb.connections[0].readyState === 1;

  return mongodb;
}
