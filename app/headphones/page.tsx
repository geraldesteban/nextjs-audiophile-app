import { getHeadphones } from "../_lib/services/headphones/getHeadphones";

import Title from "../_components/PageTitle";
import Products from "../_components/Products/Products";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export const metadata = {
  title: "Headphones",
};

async function Page() {
  const headphones = await getHeadphones();

  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <Title>HEADPHONES</Title>
      </div>
      <div className="py-20 max-lg:py-10">
        <Products products={headphones} />
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}

export default Page;
