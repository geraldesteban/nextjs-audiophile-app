import { signin } from "@/app/_lib/services/auth/signin";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const { email, password } = await request.json();

    const result = await signin({ email, password });

    const response = NextResponse.json(
      {
        success: true,
        user: result.user,
      },
      { status: 200 },
    );

    response.cookies.set("token", result.token, {
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
        message: error.message || "Something went wrong",
      },
      { status: 401 },
    );
  }
}
