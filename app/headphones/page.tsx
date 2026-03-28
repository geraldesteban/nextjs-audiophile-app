import { getHeadphones } from "../_lib/services/getHeadphones";

import HeadphonesClient from "@/app/_components/Products/HeadphonesClient";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export const metadata = {
  title: "Headphones",
  description: "Best headphones of all time",
};

async function Page() {
  const headphones = await getHeadphones();

  return (
    <div>
      <div className="bg-black pt-52 pb-32 max-xl:px-16 max-lg:py-20 max-sm:py-10">
        <h2 className="text-white text-[40px] font-bold text-center max-sm:text-[28px]">
          HEADPHONES
        </h2>
      </div>
      <HeadphonesClient headphones={headphones} />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
