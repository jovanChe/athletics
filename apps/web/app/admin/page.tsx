import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyAuthToken, canManageUsers } from "@repo/auth";
import AdminContent from "@/components/AdminContent";

export default async function AdminPage() {
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

    // Check if user has admin permissions
    if (!canManageUsers(user.role)) {
      redirect("/dashboard");
    }

    return <AdminContent user={user} />;
  } catch {
    redirect("/");
  }
}
