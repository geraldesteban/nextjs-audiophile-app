import { NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/config/mongodb";
import Earphones from "@/app/_lib/models/earphones";

export async function GET() {
  // Connect to the MongoDB Database
  await connectDB();

  // Select only name, image, category, description, features, includes, and gallery
  const data = await Earphones.find(
    {},
    {
      _id: 0,
      id: 1,
      slug: 1,
      name: 1,
      category: 1,
      new: 1,
      price: 1,
      description: 1,
      features: 1,
      "includes.quantity": 1,
      "includes.item": 1,
      "gallery.first.mobile": 1,
      "gallery.first.tablet": 1,
      "gallery.first.desktop": 1,
    },
  );

  return NextResponse.json(data);
}
