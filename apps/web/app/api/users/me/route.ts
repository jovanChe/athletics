import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@repo/auth";
import { connectToDatabase, User } from "@repo/db";

export async function GET() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const secret = process.env.AUTH_SECRET;
  if (!secret) return NextResponse.json({ error: "Missing AUTH_SECRET" }, { status: 500 });
  const jwt = verifyAuthToken(token, secret);
  await connectToDatabase();
  const me = await User.findById(jwt.id).select("name email role image createdAt updatedAt");
  if (!me) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(me);
}

export async function PATCH(req: Request) {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const secret = process.env.AUTH_SECRET;
  if (!secret) return NextResponse.json({ error: "Missing AUTH_SECRET" }, { status: 500 });
  const jwt = verifyAuthToken(token, secret);
  await connectToDatabase();
  const body = await req.json();
  const update: Record<string, unknown> = {};
  if (typeof body.name === "string") update.name = body.name;
  if (typeof body.image === "string") update.image = body.image;
  const me = await User.findByIdAndUpdate(jwt.id, update, { new: true }).select(
    "name email role image createdAt updatedAt"
  );
  return NextResponse.json(me);
}


