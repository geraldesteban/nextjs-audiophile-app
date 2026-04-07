import { login } from "@/app/_lib/services/auth/login";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const user = await login({ email, password });

    const response = NextResponse.json(
      {
        success: true,
        message: "Login Successful",
        user: user.user,
      },
      { status: 200 },
    );

    // 🍪 store JWT in HTTP-only cookie
    response.cookies.set("token", user.token, {
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    return response;
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Login failed",
      },
      { status: 401 },
    );
  }
}
