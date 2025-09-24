import ProductDetails from "@/app/_components/ProductDetails";
import Gallery from "@/app/_components/Gallery";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

function Page() {
  return (
    <div>
      <ProductDetails />
      <Gallery />
      <YouMayAlsoLike />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
