import { NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/config/mongodb";
import Earphones from "@/app/_lib/models/earphones";

export async function GET() {
  await connectDB();

  const data = await Earphones.find({});

  return NextResponse.json(data);
}
