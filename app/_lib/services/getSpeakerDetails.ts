import { connectDB } from "@/app/_lib/config/mongodb";
import Speakers from "@/app/_lib/models/speakers";

export async function getSpeakerDetails({
  productName,
}: {
  productName: string;
}) {
  await connectDB();

  const data = await Speakers.find(
    {
      slug: productName,
    },
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
