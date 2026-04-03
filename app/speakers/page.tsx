import { getSpeakers } from "../_lib/services/speakers/getSpeakers";

import Products from "../_components/Products/Products";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import { Suspense } from "react";
import Spinner from "../_components/Spinners/Spinner";
import Title from "../_components/PageTitle";

export const metadata = {
  title: "Speakers",
};

async function Page() {
  const speakers = await getSpeakers();

  return (
    <div>
      <div className="bg-black py-20 max-md:py-10">
        <Title>SPEAKERS</Title>
      </div>
      <div className="py-20">
        <Suspense
          fallback={
            <div className="min-h-screen">
              <Spinner />
            </div>
          }
        >
          <Products products={speakers} />
        </Suspense>
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}

export default Page;
