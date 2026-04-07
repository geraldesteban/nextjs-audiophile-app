import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/account/login") ||
    pathname.startsWith("/account/register");

  // 🔥 ADD THIS: if logged in, block auth pages
  if (isAuthPage && token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      await jwtVerify(token, secret);

      return NextResponse.redirect(new URL("/account", request.url));
    } catch {
      // invalid token → allow login page
      return NextResponse.next();
    }
  }

  // 🔒 protect account routes
  if (pathname.startsWith("/account") && !isAuthPage) {
    if (!token) {
      return NextResponse.redirect(new URL("/account/login", request.url));
    }

    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      await jwtVerify(token, secret);

      return NextResponse.next();
    } catch {
      return NextResponse.redirect(new URL("/account/login", request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*"],
};
