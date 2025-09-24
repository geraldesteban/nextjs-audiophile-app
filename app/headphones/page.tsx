import Headphones from "@/app/_components/Products/Headphones";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export const metadata = {
  title: "Headphones",
};

function Page() {
  return (
    <div>
      <div className="bg-black py-32 max-xl:px-16 max-lg:py-20 max-sm:py-10">
        <h2 className="text-white text-[40px] font-bold text-center max-sm:text-[28px]">
          HEADPHONES
        </h2>
      </div>
      <Headphones />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
