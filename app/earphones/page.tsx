import { getEarphones } from "@/app/_lib/services/getEarphones";

import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import Products from "@/app/_components/Products/Products";

export const metadata = {
  title: "Earphones",
};

async function Page() {
  const earphones = await getEarphones();

  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <h2 className="text-white text-[40px] font-bold text-center max-sm:text-[28px]">
          EARPHONES
        </h2>
      </div>
      <div className="py-20">
        <Products products={earphones} />
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}

export default Page;
