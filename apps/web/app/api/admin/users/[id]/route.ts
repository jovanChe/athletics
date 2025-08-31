import { NextResponse } from "next/server";
import { cookies } from "next/headers";
import { verifyAuthToken, canManageUsers } from "@repo/auth";
import { connectToDatabase, User } from "@repo/db";
import { z } from "zod";

export async function GET(
  _req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const secret = process.env.AUTH_SECRET;
  if (!secret) return NextResponse.json({ error: "Missing AUTH_SECRET" }, { status: 500 });
  const jwt = verifyAuthToken(token, secret);
  if (!canManageUsers(jwt.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  await connectToDatabase();
  const user = await User.findById(id).select("name email role image createdAt updatedAt");
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(user);
}

const UpdateSchema = z.object({
  name: z.string().min(1).optional(),
  role: z.enum(["user", "admin", "superAdmin"]).optional(),
  image: z.string().optional(),
});

export async function PATCH(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;
  if (!token) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  const secret = process.env.AUTH_SECRET;
  if (!secret) return NextResponse.json({ error: "Missing AUTH_SECRET" }, { status: 500 });
  const jwt = verifyAuthToken(token, secret);
  if (!canManageUsers(jwt.role)) return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  const body = await req.json();
  const update = UpdateSchema.parse(body);
  await connectToDatabase();
  const user = await User.findByIdAndUpdate(id, update, { new: true }).select(
    "name email role image createdAt updatedAt"
  );
  if (!user) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(user);
}


