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
      <div className="bg-black pt-52 pb-32 max-xl:px-16 max-lg:py-20 max-sm:py-10">
        <h2 className="text-white text-[40px] font-bold text-center max-sm:text-[28px]">
          EARPHONES
        </h2>
      </div>
      <Products products={earphones} />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
