import { getEarphones } from "@/app/_lib/services/getEarphones";

import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import Products from "@/app/_components/Products/Products";
import { Suspense } from "react";
import Spinner from "../_components/Spinners/Spinner";

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
        <Suspense
          fallback={
            <div className="min-h-screen">
              <Spinner />
            </div>
          }
        >
          <Products products={earphones} />
        </Suspense>
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}

export default Page;
