import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

export async function proxy(request: NextRequest) {
  const token = request.cookies.get("token")?.value;
  const { pathname } = request.nextUrl;

  const isAuthPage =
    pathname.startsWith("/account/signin") ||
    pathname.startsWith("/account/signup");

  const isAccountPage = pathname.startsWith("/account");

  let isValidToken = false;

  if (token) {
    try {
      const secret = new TextEncoder().encode(process.env.JWT_SECRET!);
      await jwtVerify(token, secret);
      isValidToken = true;
    } catch {
      isValidToken = false;
    }
  }

  // 🚫 BLOCK login/register if already logged in
  if (isAuthPage && isValidToken) {
    return NextResponse.redirect(new URL("/account", request.url));
  }

  // 🔒 PROTECT account pages
  if (isAccountPage && !isAuthPage && !isValidToken) {
    return NextResponse.redirect(new URL("/account/signin", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/account/:path*"],
};
