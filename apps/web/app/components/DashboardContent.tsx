"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import type { JwtUser } from "@repo/auth";

interface DashboardContentProps {
  user: JwtUser;
}

export default function DashboardContent({ user }: DashboardContentProps) {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleSignOut = async () => {
    setLoading(true);
    try {
      await fetch("/api/auth/sign-out", { method: "POST" });
      router.push("/");
      router.refresh();
    } catch (error) {
      console.error("Sign out failed:", error);
    } finally {
      setLoading(false);
    }
  };

  const getRoleDisplay = (role: string) => {
    switch (role) {
      case "superAdmin":
        return "Super Admin";
      case "admin":
        return "Admin";
      default:
        return "User";
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center mr-3">
                <span className="text-white font-bold text-sm">A</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Athletix</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-600">
                Welcome, {user.name || user.email}
              </span>
              <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800">
                {getRoleDisplay(user.role)}
              </span>
              <button
                onClick={handleSignOut}
                disabled={loading}
                className="text-sm text-gray-600 hover:text-gray-900 disabled:opacity-50"
              >
                {loading ? "Signing out..." : "Sign out"}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="px-4 py-6 sm:px-0">
          <div className="bg-white rounded-lg shadow p-6">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Dashboard</h2>

            {/* Role-based content */}
            <div className="space-y-6">
              {user.role === "superAdmin" && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-red-800 mb-2">
                    Super Admin Panel
                  </h3>
                  <p className="text-red-700">
                    You have full system access. You can manage all users, system settings, and administrative functions.
                  </p>
                </div>
              )}

              {user.role === "admin" && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-yellow-800 mb-2">
                    Admin Panel
                  </h3>
                  <p className="text-yellow-700">
                    You can manage users and access administrative functions.
                  </p>
                </div>
              )}

              {user.role === "user" && (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                  <h3 className="text-lg font-semibold text-blue-800 mb-2">
                    User Dashboard
                  </h3>
                  <p className="text-blue-700">
                    Welcome to your personal dashboard. You can view and manage your profile.
                  </p>
                </div>
              )}

              {/* Common content for all users */}
              <div className="bg-gray-50 rounded-lg p-4">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  Quick Actions
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <button className="bg-white border border-gray-300 rounded-lg p-4 text-left hover:border-blue-300 hover:shadow-md transition-all">
                    <h4 className="font-medium text-gray-900">View Profile</h4>
                    <p className="text-sm text-gray-600">Manage your account settings</p>
                  </button>

                  {(user.role === "admin" || user.role === "superAdmin") && (
                    <button
                      onClick={() => router.push("/admin")}
                      className="bg-white border border-gray-300 rounded-lg p-4 text-left hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <h4 className="font-medium text-gray-900">Manage Users</h4>
                      <p className="text-sm text-gray-600">View and edit user accounts</p>
                    </button>
                  )}

                  <button className="bg-white border border-gray-300 rounded-lg p-4 text-left hover:border-blue-300 hover:shadow-md transition-all">
                    <h4 className="font-medium text-gray-900">Settings</h4>
                    <p className="text-sm text-gray-600">Configure your preferences</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
