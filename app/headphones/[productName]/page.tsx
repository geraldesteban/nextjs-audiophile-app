import { getHeadphoneDetails } from "@/app/_lib/services/getHeadphoneDetails";

import Gallery from "@/app/_components/Gallery";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import ProductDetails from "@/app/_components/Products/productDetails";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinners/Spinner";

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

  const headphoneDetails = await getHeadphoneDetails({
    productName: productName,
  });

  return (
    <div className="py-20 max-lg:py-10 flex flex-col gap-20 max-lg:gap-10">
      <Suspense
        fallback={
          <div className="min-h-screen">
            <Spinner />
          </div>
        }
      >
        <ProductDetails products={headphoneDetails} />
        <Gallery products={headphoneDetails} />
      </Suspense>
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
