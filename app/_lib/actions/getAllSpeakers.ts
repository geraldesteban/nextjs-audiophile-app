import mongodb from "@/app/_lib/config/mongodb";
import Speakers from "@/app/_lib/models/speakers";

async function getAllSpeakers() {
  try {
    await mongodb();

    const speakers = await Speakers.find({});

    return speakers;
  } catch (error) {
    console.error(error);

    return [];
  }
}

export default getAllSpeakers;
