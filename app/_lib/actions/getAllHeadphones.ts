import Headphones from "@/app/_lib/models/headphones";
import mongodb from "@/app/_lib/config/mongodb";

export async function getAllHeadphones() {
  try {
    await mongodb();

    const headphones = await Headphones.find({});

    return headphones;
  } catch (error) {
    console.error(error);

    return [];
  }
}
