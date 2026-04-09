import { ProductTypes } from "@/app/types/products";

import Products from "@/app/_components/Products/Products";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

type Props = {
  getData: () => Promise<ProductTypes[]>;
};

export default async function ProductsSection({ getData }: Props) {
  const products = await getData();

  return (
    <>
      <Products products={products} />

      <HomeNavigation />
      <HomeAudioGear />
    </>
  );
}
