import Speakers from "@/app/_components/Products/Speakers";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

export const metadata = {
  title: "Speakers",
};

function Page() {
  return (
    <div>
      <div className="bg-black py-32 max-lg:py-20 max-sm:py-10">
        <h2 className="text-white text-[40px] font-bold text-center">
          SPEAKERS
        </h2>
      </div>
      <Speakers />
      <HomeNavigation />
      <HomeAudioGear />
    </div>
  );
}

export default Page;
