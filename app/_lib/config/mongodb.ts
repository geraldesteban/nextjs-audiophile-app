import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI as string;

if (!MONGODB_URI) {
  throw new Error("MONGODB_URI is not defined in environment variables");
}

// Global cache type (prevents multiple connections in dev/serverless)
type MongooseCache = {
  conn: typeof mongoose | null;
  promise: Promise<typeof mongoose> | null;
};

// Extend global object safely
const globalWithMongoose = globalThis as typeof globalThis & {
  mongooseCache?: MongooseCache;
};

// Initialize cache
if (!globalWithMongoose.mongooseCache) {
  globalWithMongoose.mongooseCache = {
    conn: null,
    promise: null,
  };
}

export async function connectDB(): Promise<typeof mongoose> {
  const cache = globalWithMongoose.mongooseCache!;

  // Return existing connection if available
  if (cache.conn) return cache.conn;

  // Create connection promise if it doesn't exist
  if (!cache.promise) {
    cache.promise = mongoose.connect(MONGODB_URI);
  }

  try {
    cache.conn = await cache.promise;
    return cache.conn;
  } catch (error) {
    cache.promise = null; // reset on failure
    console.error("MongoDB connection error:", error);
    throw error;
  }
}
