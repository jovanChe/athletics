import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@repo/auth";
import DashboardContent from "@/components/DashboardContent";

export default async function DashboardPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (!token) {
    redirect("/");
  }

  try {
    const secret = process.env.AUTH_SECRET;
    if (!secret) {
      throw new Error("Missing AUTH_SECRET");
    }
    const user = verifyAuthToken(token, secret);
    return <DashboardContent user={user} />;
  } catch {
    redirect("/");
  }
}
