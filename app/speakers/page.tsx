import { getSpeakers } from "../_lib/services/speakers/getSpeakers";

import Title from "../_components/PageTitle";
import Products from "../_components/Products/Products";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export const metadata = {
  title: "Speakers",
};

async function Page() {
  const speakers = await getSpeakers();

  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <Title>SPEAKERS</Title>
      </div>
      <div className="py-20">
        <Products products={speakers} />
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}

export default Page;
