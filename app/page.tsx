import Link from "next/link";
import Image from "next/image";
import heroDesktop from "@/public/image-hero.jpg";
import heroTablet from "@/public/image-hero-tablet.jpg";
import heroMobile from "@/public/image-hero-mobile.jpg";

import HomeNavigation from "@/app/_components/Home/HomeNavigation";
import HomeGallery from "@/app/_components/Home/HomeGallery";
import HomeAudioGear from "@/app/_components/Home/HomeAudioGear";

/* Home page*/
function Page() {
  return (
    <div>
      <main className="relative pb-240">
        <Image
          src={heroDesktop}
          alt="Hero background"
          quality={100}
          fill
          className="object-cover object-top rounded-bl-xl rounded-br-xl max-lg:hidden"
        />
        <Image
          src={heroTablet}
          alt="Hero background"
          quality={100}
          fill
          className="object-cover object-top rounded-bl-xl rounded-br-xl hidden max-lg:block"
        />
        <Image
          src={heroMobile}
          alt="Hero background"
          quality={100}
          fill
          className="object-cover object-top rounded-bl-xl rounded-br-xl hidden max-sm:block"
        />
        <div className="z-10 absolute left-30 top-70 max-lg:text-center max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2">
          <h2 className="text-gray-500 text-sm tracking-[10px] mb-5">
            NEW PRODUCT
          </h2>
          <h2 className="text-white text-6xl font-bold tracking-wider mb-10 max-sm:text-4xl max-sm:mb-5">
            XX99 MARK II
            <br />
            HEADPHONES
          </h2>
          <p className="text-[#F1F1F1] w-90 mb-10 max-lg:mx-auto max-sm:w-full">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/headphones/xx99-mark-two-headphones"
            className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130"
          >
            SEE PRODUCT
          </Link>
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
    </div>
  );
}

export default Page;
