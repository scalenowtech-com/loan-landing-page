// lib/db.ts
import mongoose, { Mongoose } from "mongoose";

const MONGO_URI: string | undefined = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error("❌ Please define the MONGO_URI environment variable inside .env");
}

interface MongooseCache {
  conn: Mongoose | null;
  promise: Promise<Mongoose> | null;
}

// ✅ Global type declaration for Next.js hot reload safety
declare global {
  // Allow global `mongoose` caching in Node.js runtime
  // (avoids TS complaints + OverwriteModelError on hot reloads)
  var mongooseCache: MongooseCache | undefined;
}

const cached: MongooseCache = global.mongooseCache || { conn: null, promise: null };

export async function connectDB(): Promise<Mongoose> {
  if (cached.conn) return cached.conn;

  if (!cached.promise) {
    cached.promise = mongoose
      .connect(MONGO_URI!, { bufferCommands: false })
      .then((mongooseInstance) => {
        console.log("✅ MongoDB Connected");
        return mongooseInstance;
      })
      .catch((err) => {
        console.error("❌ MongoDB Connection Error:", err);
        throw err;
      });
  }

  cached.conn = await cached.promise;
  global.mongooseCache = cached; // ✅ persist cache globally

  return cached.conn;
}
