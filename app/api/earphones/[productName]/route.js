import { NextResponse } from "next/server";
import { connectDB } from "@/app/_lib/config/mongodb";
import Earphones from "@/app/_lib/models/earphones";

export async function GET(request, { params }) {
  // Connect to the MongoDB Database
  await connectDB();

  const { productName } = await params;

  // Select only id, slug, name, category, price, description, features, includes, and gallery
  const data = await Earphones.find(
    { slug: productName },
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
