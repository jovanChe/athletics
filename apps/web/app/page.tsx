import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import { verifyAuthToken } from "@repo/auth";
import LandingPage from "@/components/LandingPage";

export default async function HomePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  if (token) {
    try {
      const secret = process.env.AUTH_SECRET;
      if (secret) {
        verifyAuthToken(token, secret);
        redirect("/dashboard");
      }
    } catch {
      // Invalid token, continue to landing page
    }
  }

  return <LandingPage />;
}
