import { getEarphones } from "@/app/_lib/services/earphones/getEarphones";

import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import Products from "@/app/_components/Products/Products";
import { Suspense } from "react";
import Spinner from "../_components/Spinners/Spinner";
import Title from "../_components/PageTitle";

export const metadata = {
  title: "Earphones",
};

async function Page() {
  const earphones = await getEarphones();

  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <Title>EARPHONES</Title>
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
