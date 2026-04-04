import { getHeadphones } from "@/app/_lib/services/headphones/getHeadphones";

import Transition from "@/app/_components/Transition";

import Title from "@/app/_components/PageTitle";
import Products from "@/app/_components/Products/Products";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export const metadata = {
  title: "Headphones",
};

export default async function Page() {
  const headphones = await getHeadphones();

  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <Transition>
          <Title>HEADPHONES</Title>
        </Transition>
      </div>
      <div className="py-20 max-lg:py-10">
        <Products products={headphones} />
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}
