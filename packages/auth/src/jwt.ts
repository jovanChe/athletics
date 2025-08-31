import jwt from "jsonwebtoken";

export type JwtUser = {
  id: string;
  email: string;
  role: "user" | "admin" | "superAdmin";
  name?: string | null;
  image?: string | null;
};

export function signAuthToken(user: JwtUser, secret: string): string {
  return jwt.sign(user, secret, { expiresIn: "7d" });
}

export function verifyAuthToken(token: string, secret: string): JwtUser {
  return jwt.verify(token, secret) as JwtUser;
}


