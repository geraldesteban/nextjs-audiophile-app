import { getHeadphones } from "@/app/_lib/services/getHeadphones";

import HeadphonesDetails from "@/app/_components/Products/HeadphonesDetails";
import Gallery from "@/app/_components/Gallery";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

async function Page() {
  const headphones = await getHeadphones();

  return (
    <div>
      <HeadphonesDetails headphones={headphones} />
      <Gallery />
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
