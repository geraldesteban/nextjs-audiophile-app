import Image from "next/image";
import Link from "next/link";

import Transition from "@/app/_components/Transition";

/* Desktop */
import patterCircles from "@/app/_assets/Icons/pattern-circles.svg";
import speakerZX9 from "@/app/_assets/SectionThree/image-speaker-zx9.png";
import speakerZX7 from "@/app/_assets/SectionThree/image-speaker-zx7.jpg";
import earphoneYX1 from "@/app/_assets/SectionThree/image-earphones-yx1.jpg";
/* Mobile */
import speakerZX7Mobile from "@/app/_assets/SectionThree/mobile/image-speaker-zx7.jpg";
import earphoneYX1Mobile from "@/app/_assets/SectionThree/mobile/image-earphones-yx1.jpg";

function HomeGallery() {
  return (
    <div className="relative flex justify-around flex-col gap-10 px-30 max-lg:px-5">
      {/* ZX9 Speaker */}
      <Transition>
        <div
          className="bg-[#D87D4A] flex justify-around items-center gap-5 py-20 max-lg:py-10 px-5 rounded-xl bg-no-repeat bg-size-[80%] bg-position-[-70%_10%]
          max-lg:block max-lg:text-center max-lg:bg-size-[120%] max-lg:bg-position-[50%_115%]"
          style={{
            backgroundImage: `url(${patterCircles.src})`,
          }}
        >
          <Image
            src={speakerZX9}
            quality={100}
            alt="ZX9 Speaker"
            className="max-lg:mb-5 max-lg:mx-auto w-[30%]"
          />
          <div className="max-sm:mx-10">
            <h2 className="text-white text-4xl font-bold mb-5 max-sm:mb-2">
              ZX9 SPEAKER
            </h2>
            <p className="text-[#F1F1F1] w-90 mb-5 max-lg:mx-auto max-sm:w-full max-sm:text-sm">
              Upgrade to premium speakers that are phenomenally built to deliver
              truly remarkable sound.
            </p>
            <Link
              href="/speakers/zx9-speaker"
              className="text-white bg-black px-5 py-3 hover:bg-[#4C4C4C] max-lg:hover:bg-black max-sm:text-sm"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </Transition>
      {/* ZX7 Speaker */}
      <Transition>
        <div className="relative rounded-xl">
          <div className="absolute inset-0 flex flex-col justify-center items-start left-30 max-lg:left-5">
            <h2 className="text-black text-4xl font-bold mb-10 max-lg:mb-5">
              ZX7 SPEAKER
            </h2>
            <Link
              href="/speakers/zx7-speaker"
              className="text-black font-bold border border-black px-5 py-3 lg:hover:bg-black lg:hover:text-white max-sm:text-sm"
            >
              SEE PRODUCT
            </Link>
          </div>
          <Image
            src={speakerZX7}
            quality={100}
            alt="ZX7 Speaker"
            className="rounded-xl w-full h-full max-sm:hidden"
          />
          <Image
            src={speakerZX7Mobile}
            quality={100}
            alt="ZX7 Speaker"
            className="rounded-xl w-full h-full hidden max-sm:block"
          />
        </div>
      </Transition>
      {/* YX1 EARPHONES */}
      <Transition>
        <div className="flex gap-10 max-lg:gap-5 max-sm:flex-col">
          <div className="flex-1">
            <Image
              src={earphoneYX1}
              quality={100}
              alt="YX1 SPEAKER"
              className="rounded-xl w-full max-sm:hidden"
            />
            <Image
              src={earphoneYX1Mobile}
              quality={100}
              alt="YX1 SPEAKER"
              className="rounded-xl w-full hidden max-sm:block"
            />
          </div>
          <div className="flex-1 bg-[#F1F1F1] rounded-xl max-sm:flex-none max-sm:h-62.5">
            <div className="h-full flex flex-col justify-center mx-30 max-lg:mx-5 text-nowrap">
              <h2 className="text-black text-4xl font-bold mb-10 max-lg:mb-5">
                YX1 EARPHONES
              </h2>
              <div className="mb-5">
                <Link
                  href="/earphones/yx1-earphones"
                  className="text-black font-bold border border-black px-5 py-3 lg:hover:bg-black lg:hover:text-white max-sm:text-sm"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default HomeGallery;
