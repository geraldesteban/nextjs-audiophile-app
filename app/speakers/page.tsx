import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import { getSpeakers } from "@/app/_lib/services/getSpeakers";
import SpeakersClient from "@/app/_components/Products/SpeakersClient";

export const metadata = {
  title: "Speakers",
};

async function Page() {
  const speakers = await getSpeakers();

  return (
    <div>
      <div className="bg-black py-32 max-lg:py-20 max-sm:py-10">
        <h2 className="text-white text-[40px] font-bold text-center">
          SPEAKERS
        </h2>
      </div>
      <SpeakersClient speakers={speakers} />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
