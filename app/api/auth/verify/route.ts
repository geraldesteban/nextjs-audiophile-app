import { verifyEmail } from "@/app/_lib/services/mail/verifyEmail";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    const { searchParams } = new URL(request.url);
    const token = searchParams.get("token");

    // validate token first
    if (!token) {
      return NextResponse.json(
        { success: false, message: "Missing token" },
        { status: 400 },
      );
    }

    const result = await verifyEmail(token);

    return NextResponse.json(result, { status: 200 });
  } catch (error: any) {
    return NextResponse.json(
      {
        message: error.message,
      },
      {
        status: 400,
      },
    );
  }
}
