import { getHeadphones } from "@/app/_lib/services/getHeadphones";

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
        <h2 className="text-white text-[40px] font-bold text-center max-sm:text-[28px]">
          HEADPHONES
        </h2>
      </div>
      <div className="py-20">
        <Products products={headphones} />
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}

export default Page;
