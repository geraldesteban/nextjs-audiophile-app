import Image from "next/image";

import Transition from "@/app/_components/Transition";

/* Desktop */
import bestGear from "@/app/_assets/SectionFour/image-best-gear.jpg";
/* Tablet */
import bestGearTablet from "@/app/_assets/SectionFour/tablet/image-best-gear.jpg";
/* Mobile */
import bestGearMobile from "@/app/_assets/SectionFour/mobile/image-best-gear.jpg";

function HomeAudioGear() {
  return (
    <Transition>
      <div className="flex justify-between items-center gap-10 px-30 max-lg:px-5 max-lg:block">
        <div className="max-lg:text-center">
          <div>
            <Image
              src={bestGearTablet}
              quality={100}
              alt="Best Gear"
              className="rounded-xl hidden mb-10 max-lg:block max-sm:hidden"
            />
          </div>
          <div>
            <Image
              src={bestGearMobile}
              quality={100}
              alt="Best Gear"
              className="rounded-xl hidden mb-5 max-sm:block"
            />
          </div>
          <h2 className="text-black text-4xl font-bold mb-10 max-sm:mb-5">
            BRINGING YOU THE
            <br />
            <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
          </h2>
          <p className="text-gray-500 w-111.5 max-lg:w-140 max-lg:mx-auto max-sm:w-full max-sm:text-sm">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>
        <div>
          <Image
            src={bestGear}
            quality={100}
            alt="Best Gear"
            className="rounded-xl max-lg:hidden"
          />
        </div>
      </div>
    </Transition>
  );
}
export default HomeAudioGear;
