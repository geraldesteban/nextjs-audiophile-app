import { getSpeakers } from "@/app/_lib/services/speakers/getSpeakers";

import Transition from "@/app/_components/Transition";

import Title from "@/app/_components/PageTitle";
import Products from "@/app/_components/Products/Products";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export const metadata = {
  title: "Speakers",
};

export default async function Page() {
  const speakers = await getSpeakers();

  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <Transition>
          <Title>SPEAKERS</Title>
        </Transition>
      </div>
      <div className="py-20">
        <Products products={speakers} />
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}
