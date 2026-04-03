import { getSpeakerDetails } from "@/app/_lib/services/speakers/getSpeakerDetails";

import ProductDetails from "@/app/_components/Products/productDetails";
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

async function Page({ params }: { params: { productName: string } }) {
  const { productName } = await params;

  const speakerDetails = await getSpeakerDetails({
    productName: productName,
  });

  return (
    <div className="py-20 max-lg:py-10 flex flex-col gap-20 max-lg:gap-10">
      <ProductDetails products={speakerDetails} />
      <Gallery products={speakerDetails} />
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
