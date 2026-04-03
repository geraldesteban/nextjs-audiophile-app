import { getEarphoneDetails } from "@/app/_lib/services/earphones/getEarphoneDetails";

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

  const earphoneDetails = await getEarphoneDetails({
    productName: productName,
  });

  return (
    <div className="py-20 max-lg:py-10 flex flex-col gap-20 max-lg:gap-10">
      <ProductDetails products={earphoneDetails} />
      <Gallery products={earphoneDetails} />
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
