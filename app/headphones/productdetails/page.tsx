import Gallery from "@/app/_components/Gallery";
import SectionTwo from "@/app/_components/Home/SectionTwo";
import ProductDetails from "@/app/_components/ProductDetails";
import YouMayAlsoLike from "@/app/_components/YouMayAlsoLike";

function Page() {
  return (
    <div>
      <ProductDetails />
      <Gallery />
      <YouMayAlsoLike />
      <SectionTwo />
    </div>
  );
}

export default Page;
