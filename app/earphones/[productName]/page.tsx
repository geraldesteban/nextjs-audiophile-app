import { getEarphones } from "@/app/_lib/services/getEarphones";

import EarphonesDetails from "@/app/_components/Products/EarphonesDetails";
import Gallery from "@/app/_components/Gallery";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

async function Page() {
  const earphones = await getEarphones();

  return (
    <div>
      <EarphonesDetails earphones={earphones} />
      <Gallery />
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
