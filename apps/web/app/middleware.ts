import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { verifyAuthToken, canManageUsers } from "@repo/auth";

export function middleware(request: NextRequest) {
  const token = request.cookies.get("auth_token")?.value;
  const { pathname } = request.nextUrl;

  // Public routes - always accessible
  if (pathname === "/" || pathname.startsWith("/api/health")) {
    return NextResponse.next();
  }

  // API routes - let them handle their own auth
  if (pathname.startsWith("/api/")) {
    return NextResponse.next();
  }

  // Protected routes that require authentication
  if (pathname.startsWith("/dashboard")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    // Verify token is valid
    try {
      const secret = process.env.AUTH_SECRET;
      if (!secret) {
        console.error("Missing AUTH_SECRET in middleware");
        return NextResponse.redirect(new URL("/", request.url));
      }

      verifyAuthToken(token, secret);
      return NextResponse.next();
    } catch (error) {
      // Invalid token - redirect to login
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.set("auth_token", "", { expires: new Date(0), path: "/" });
      return response;
    }
  }

  // Admin routes - require admin/superAdmin role
  if (pathname.startsWith("/admin")) {
    if (!token) {
      return NextResponse.redirect(new URL("/", request.url));
    }

    try {
      const secret = process.env.AUTH_SECRET;
      if (!secret) {
        console.error("Missing AUTH_SECRET in middleware");
        return NextResponse.redirect(new URL("/", request.url));
      }

      const jwt = verifyAuthToken(token, secret);

      // Check if user has admin permissions
      if (!canManageUsers(jwt.role)) {
        // User doesn't have admin access - redirect to dashboard
        return NextResponse.redirect(new URL("/dashboard", request.url));
      }

      return NextResponse.next();
    } catch (error) {
      // Invalid token - redirect to login
      const response = NextResponse.redirect(new URL("/", request.url));
      response.cookies.set("auth_token", "", { expires: new Date(0), path: "/" });
      return response;
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
