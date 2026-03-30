import { NextResponse } from "next/server";
import { getHeadphones } from "@/app/_lib/services/getHeadphones";

export async function GET() {
  try {
    const data = await getHeadphones();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch headphones" },
      { status: 500 },
    );
  }
}
