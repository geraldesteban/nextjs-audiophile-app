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
      image: {
        mobile: 1,
        tablet: 1,
        desktop: 1,
      },
      category: 1,
      new: 1,
      description: 1,
    },
  ).lean();

  return data;
}
