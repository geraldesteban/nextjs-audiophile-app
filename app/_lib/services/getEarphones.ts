import { connectDB } from "@/app/_lib/config/mongodb";
import Earphones from "@/app/_lib/models/earphones";

export async function getEarphones() {
  await connectDB();

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
  ).lean();

  return data;
}
