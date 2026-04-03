import { NextResponse } from "next/server";
import { getSpeakers } from "@/app/_lib/services/speakers/getSpeakers";

export async function GET() {
  try {
    const data = await getSpeakers();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch speakers" },
      { status: 500 },
    );
  }
}
