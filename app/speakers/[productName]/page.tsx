import { getSpeakers } from "@/app/_lib/services/getSpeakers";

import SpeakersDetails from "@/app/_components/Products/SpeakersDetails";
import Gallery from "@/app/_components/Gallery";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export async function generateMetadata({
  params,
}: {
  params: { productName: string };
}) {
  const { productName } = await params;

  return {
    title: `${productName}`,
  };
}

async function Page() {
  const speakers = await getSpeakers();

  return (
    <div>
      <SpeakersDetails speakers={speakers} />
      <Gallery />
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
