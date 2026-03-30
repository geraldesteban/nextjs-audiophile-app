import { getSpeakerDetails } from "@/app/_lib/services/getSpeakerDetails";

import Gallery from "@/app/_components/Gallery";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import ProductDetails from "@/app/_components/Products/productDetails";

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
    <div>
      <ProductDetails products={speakerDetails} />
      <Gallery />
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
