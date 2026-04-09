import { getHeadphoneDetails } from "@/app/_lib/services/headphones/getHeadphoneDetails";

import ProductDetails from "@/app/_components/Products/productDetails";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import MoveBack from "@/app/_components/MoveBack";

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

  const headphoneDetails = await getHeadphoneDetails({
    productName: productName,
  });

  return (
    <div className="py-20 max-lg:py-10 flex flex-col gap-20 max-lg:gap-10">
      <MoveBack>Go back</MoveBack>
      <ProductDetails products={headphoneDetails} />
      <YouMayAlsoLike productName={productName} />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}
