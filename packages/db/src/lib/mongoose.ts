import mongoose from "mongoose";

const globalForMongoose = globalThis as unknown as {
  __mongooseConn?: Promise<typeof mongoose>;
};

export async function connectToDatabase(): Promise<typeof mongoose> {
  const MONGODB_URI = process.env.MONGODB_URI;
  if (!MONGODB_URI) {
    throw new Error("Missing MONGODB_URI environment variable");
  }

  if (!globalForMongoose.__mongooseConn) {
    mongoose.set("strictQuery", true);
    globalForMongoose.__mongooseConn = mongoose
      .connect(MONGODB_URI, {
        dbName: undefined,
        maxPoolSize: 10,
        retryWrites: true,
      })
      .then((m) => m);
  }

  return globalForMongoose.__mongooseConn!;
}
