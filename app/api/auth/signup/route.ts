import { createAccount } from "@/app/_lib/services/auth/createAccount";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    const user = await createAccount(body);

    return NextResponse.json({
      success: true,
      message: "Account created. Please verify your email.",
      user,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        success: false,
        message: error.message || "Something went wrong",
      },
      { status: 400 },
    );
  }
}
