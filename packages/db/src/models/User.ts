import mongoose, { Schema, type InferSchemaType, type Model } from "mongoose";

export type Role = "user" | "admin" | "superAdmin";

const UserSchema = new Schema(
  {
    name: { type: String, trim: true },
    email: { type: String, required: true, unique: true, index: true, lowercase: true, trim: true },
    emailVerified: { type: Date },
    hashedPassword: { type: String },
    role: { type: String, enum: ["user", "admin", "superAdmin"], default: "user", index: true },
    image: { type: String },
  },
  { timestamps: true }
);

export type UserDocument = InferSchemaType<typeof UserSchema> & { _id: mongoose.Types.ObjectId };

export const User: Model<UserDocument> =
  mongoose.models.User || mongoose.model<UserDocument>("User", UserSchema);


