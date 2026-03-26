import { NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/config/mongodb";
import Speakers from "@/app/_lib/models/speakers";

export async function GET() {
  await connectDB();

  const data = await Speakers.find({});

  return NextResponse.json(data);
}
