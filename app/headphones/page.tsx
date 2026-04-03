import Title from "@/app/_components/PageTitle";
import HeadphoneList from "@/app/_components/Products/HeadphoneList";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import { Suspense } from "react";
import Spinner from "@/app/_components/Spinners/Spinner";

export const metadata = {
  title: "Headphones",
};

export default function Page() {
  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <Title>HEADPHONES</Title>
      </div>
      <div className="py-20 max-lg:py-10">
        <Suspense
          fallback={
            <div className="min-h-screen">
              <Spinner />
            </div>
          }
        >
          <HeadphoneList />
        </Suspense>
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}
