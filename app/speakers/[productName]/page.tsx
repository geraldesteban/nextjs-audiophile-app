import { getSpeakerDetails } from "@/app/_lib/services/speakers/getSpeakerDetails";

import MoveBack from "@/app/_components/MoveBack";
import ProductDetails from "@/app/_components/Products/ProductDetails";
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

export default async function Page({
  params,
}: {
  params: { productName: string };
}) {
  const { productName } = await params;

  const speakerDetails = await getSpeakerDetails({
    productName: productName,
  });

  return (
    <div className="py-20 max-lg:py-10 flex flex-col gap-20 max-lg:gap-10">
      <MoveBack>Go back</MoveBack>
      <ProductDetails products={speakerDetails} />
      <Gallery products={speakerDetails} />
      <YouMayAlsoLike productName={productName} />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}
