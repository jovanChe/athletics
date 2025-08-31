import { cookies } from "next/headers";
import { verifyAuthToken } from "@repo/auth";

export default async function TestMiddlewarePage() {
  const cookieStore = await cookies();
  const token = cookieStore.get("auth_token")?.value;

  let userInfo = null;
  if (token) {
    try {
      const secret = process.env.AUTH_SECRET;
      if (secret) {
        userInfo = verifyAuthToken(token, secret);
      }
    } catch (error) {
      console.error("Invalid token:", error);
    }
  }

  return (
    <div className="p-8 max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold mb-4">Middleware Test Page</h1>

      <div className="space-y-4">
        <div className="p-4 bg-gray-100 rounded">
          <h2 className="font-semibold">Current User Status:</h2>
          {userInfo ? (
            <div className="mt-2">
              <p><strong>ID:</strong> {userInfo.id}</p>
              <p><strong>Email:</strong> {userInfo.email}</p>
              <p><strong>Role:</strong> {userInfo.role}</p>
              <p><strong>Name:</strong> {userInfo.name || "Not set"}</p>
            </div>
          ) : (
            <p className="text-red-600">Not authenticated</p>
          )}
        </div>

        <div className="p-4 bg-blue-50 rounded">
          <h2 className="font-semibold">Test Navigation:</h2>
          <div className="mt-2 space-y-2">
            <a href="/" className="block text-blue-600 hover:underline">Home (Public)</a>
            <a href="/dashboard" className="block text-blue-600 hover:underline">Dashboard (Auth Required)</a>
            <a href="/admin" className="block text-blue-600 hover:underline">Admin Panel (Admin Required)</a>
          </div>
        </div>

        <div className="p-4 bg-yellow-50 rounded">
          <h2 className="font-semibold">Expected Behavior:</h2>
          <ul className="mt-2 list-disc list-inside space-y-1 text-sm">
            <li><strong>Home:</strong> Always accessible</li>
            <li><strong>Dashboard:</strong> Requires valid auth token</li>
            <li><strong>Admin:</strong> Requires admin/superAdmin role</li>
            <li><strong>Invalid token:</strong> Gets cleared and redirected to home</li>
            <li><strong>Wrong role:</strong> Redirected to dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
