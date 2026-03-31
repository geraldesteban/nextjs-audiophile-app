import { connectDB } from "@/app/_lib/config/mongodb";
import Earphones from "@/app/_lib/models/earphones";

export async function getEarphoneDetails({
  productName,
}: {
  productName: string;
}) {
  await connectDB();

  const data = await Earphones.find(
    { slug: productName },
    {
      _id: 0,
      id: 1,
      slug: 1,
      name: 1,
      "image.mobile": 1,
      "image.tablet": 1,
      "image.desktop": 1,
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
      "gallery.second.mobile": 1,
      "gallery.second.tablet": 1,
      "gallery.second.desktop": 1,
      "gallery.third.mobile": 1,
      "gallery.third.tablet": 1,
      "gallery.third.desktop": 1,
      "cart.image": 1,
    },
  ).lean();

  return data;
}
