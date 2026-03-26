import { NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/config/mongodb";
import Headphones from "@/app/_lib/models/headphones";

export async function GET() {
  await connectDB();

  const data = await Headphones.find({});

  return NextResponse.json(data);
}
