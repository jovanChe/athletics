import { NextResponse } from "next/server";
import { z } from "zod";
import { connectToDatabase, User } from "@repo/db";
import bcrypt from "bcrypt";
import { signAuthToken } from "@repo/auth";

const SignInSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = SignInSchema.parse(body);

    await connectToDatabase();
    const user = await User.findOne({ email });
    if (!user || !user.hashedPassword) {
      return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }
    const valid = await bcrypt.compare(password, user.hashedPassword);
    if (!valid) return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });

    const secret = process.env.AUTH_SECRET;
    if (!secret) return NextResponse.json({ error: "Missing AUTH_SECRET" }, { status: 500 });

    const token = signAuthToken(
      { id: String(user._id), email: user.email, role: user.role, name: user.name, image: user.image },
      secret
    );
    const res = NextResponse.json({ ok: true });
    res.cookies.set("auth_token", token, {
      httpOnly: true,
      sameSite: "lax",
      secure: process.env.NODE_ENV === "production",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });
    return res;
  } catch (error) {
    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: error.flatten() }, { status: 400 });
    }
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


