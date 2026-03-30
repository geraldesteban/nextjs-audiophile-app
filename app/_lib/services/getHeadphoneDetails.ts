import { connectDB } from "@/app/_lib/config/mongodb";
import Headphones from "@/app/_lib/models/headphones";

export async function getHeadphoneDetails({
  productName,
}: {
  productName: string;
}) {
  await connectDB();

  const data = await Headphones.find(
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

  return data;
}
