import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";
import { Suspense } from "react";
import Spinner from "../_components/Spinners/Spinner";
import Products from "../_components/Products/Products";
import { getHeadphones } from "../_lib/services/getHeadphones";
import Title from "../_components/PageTitle";

export const metadata = {
  title: "Headphones",
};

async function Page() {
  const headphones = await getHeadphones();
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
          <Products products={headphones} />
        </Suspense>
        <HomeNavigation />
        <HomeAudioGear />
      </div>
    </div>
  );
}

export default Page;
