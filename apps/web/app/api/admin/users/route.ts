import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAuthToken, canManageUsers } from "@repo/auth";
import { connectToDatabase, User } from "@repo/db";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const secret = process.env.AUTH_SECRET;
  if (!secret) return NextResponse.json({ error: "Missing AUTH_SECRET" }, { status: 500 });
  const jwt = verifyAuthToken(token, secret);
  if (!canManageUsers(jwt.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  await connectToDatabase();
  const users = await User.find({}).select("name email role image createdAt updatedAt").lean();
  return NextResponse.json(users);
}


