import Link from "next/link";
import Image from "next/image";

import Transition from "@/app/_components/Transition";

import heroDesktop from "@/public/image-hero.jpg";
import heroTablet from "@/public/image-hero-tablet.jpg";
import heroMobile from "@/public/image-hero-mobile.jpg";

import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeGallery from "@/app/_components/Home/HomeGallery";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

/* Home page*/
function Page() {
  return (
    <>
      <main className="relative bg-[#0E0E0E]">
        <div className="relative w-full h-screen">
          <Image
            src={heroDesktop}
            alt="Desktop Hero Background"
            fill
            priority
            className="object-cover rounded-bl-xl rounded-br-xl max-lg:hidden"
          />

          <Image
            src={heroTablet}
            alt="Tablet Hero Background"
            fill
            priority
            className="object-cover rounded-bl-xl rounded-br-xl hidden max-lg:block max-sm:hidden"
          />

          <Image
            src={heroMobile}
            alt="Mobile Hero Background"
            fill
            priority
            className="object-cover rounded-bl-xl rounded-br-xl hidden max-sm:block"
          />
          <div className="absolute inset-0 flex items-center justify-center lg:justify-start">
            <Transition>
              <div className="text-center lg:text-left max-w-md px-6 lg:ml-20">
                <h2 className="text-gray-500 text-sm tracking-[10px] mb-5 max-sm:text-xs">
                  NEW PRODUCT
                </h2>
                <h2 className="text-white text-4xl font-bold tracking-wider mb-10 max-sm:mb-5">
                  XX99 MARK II
                </h2>
                <p className="text-[#F1F1F1] mb-10 max-sm:text-sm">
                  Experience natural, life like audio and exceptional build
                  quality made for the passionate music enthusiast.
                </p>

                <Link
                  href="/headphones/xx99-mark-two-headphones"
                  className="text-white font-bold bg-[#D87D4A] px-5 py-3 hover:brightness-125 transition"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </Transition>
          </div>
        </div>
      </main>
      {/* Home navigation */}
      <HomeNavigation />
      <div className="flex flex-col gap-20 py-20 max-lg:py-10 max-lg:gap-10">
        {/* Home gallery */}
        <HomeGallery />
        {/* Home audio gear */}
        <HomeAudioGear />
      </div>
    </>
  );
}

export default Page;
