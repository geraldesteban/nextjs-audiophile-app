import { NextResponse } from "next/server";
import { getEarphones } from "@/app/_lib/services/earphones/getEarphones";

export async function GET() {
  try {
    const data = await getEarphones();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch earphones" },
      { status: 500 },
    );
  }
}
