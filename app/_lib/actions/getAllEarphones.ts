import mongodb from "@/app/_lib/config/mongodb";
import Earphones from "@/app/_lib/models/earphones";

async function getAllEarphones() {
  try {
    await mongodb();

    const earphones = await Earphones.find({});

    return earphones;
  } catch (error) {
    console.error(error);

    return [];
  }
}

export default getAllEarphones;
