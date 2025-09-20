import Image from "next/image";
import Link from "next/link";
/* Desktop */
import patterCircles from "@/app/_assets/Icons/pattern-circles.svg";
import speakerZX9 from "@/app/_assets/SectionThree/image-speaker-zx9.png";
import speakerZX7 from "@/app/_assets/SectionThree/image-speaker-zx7.jpg";
import earphoneYX1 from "@/app/_assets/SectionThree/image-earphones-yx1.jpg";
/* Tablet */
import speakerZX9Tablet from "@/app/_assets/SectionThree/tablet/image-speaker-zx9.png";
/* Mobile */
import speakerZX9Mobile from "@/app/_assets/SectionThree/mobile/image-speaker-zx9.png";
import speakerZX7Mobile from "@/app/_assets/SectionThree/mobile/image-speaker-zx7.jpg";
import earphoneYX1Mobile from "@/app/_assets/SectionThree/mobile/image-earphones-yx1.jpg";

function SectionThree() {
  return (
    <div className="relative px-32 pb-32 flex justify-around flex-col gap-10 max-xl:px-16 max-lg:px-10 max-md:pb-20">
      {/* ZX9 Speaker */}
      <div
        className="bg-[#D87D4A] flex justify-around gap-5 pt-32 rounded-xl
        bg-no-repeat bg-[length:80%] bg-[-70%_10%]
        max-lg:block max-lg:text-center max-lg:pt-10 max-lg:pb-20
        max-lg:bg-[length:120%] max-lg:bg-[50%_115%]"
        style={{
          backgroundImage: `url(${patterCircles.src})`,
        }}
      >
        <Image
          src={speakerZX9}
          width={400}
          height={400}
          quality={100}
          alt="ZX9 Speaker"
          className="ml-5 max-lg:hidden"
        />
        <Image
          src={speakerZX9Tablet}
          width={150}
          height={200}
          quality={100}
          alt="ZX9 Speaker"
          className="hidden max-lg:block mb-10 max-lg:mx-auto max-sm:hidden"
        />
        <Image
          src={speakerZX9Mobile}
          width={200}
          height={200}
          quality={100}
          alt="ZX9 Speaker"
          className="hidden mb-10 max-sm:block max-sm:mx-auto"
        />
        <div className="mr-10 max-lg:mr-0">
          <h2 className="text-white text-[56px] font-bold mb-10 max-sm:text-[36px] max-sm:mb-5">
            ZX9
            <br />
            SPEAKER
          </h2>
          <p className="text-[#F1F1F1] w-[360px] mb-10 max-lg:mx-auto max-sm:w-[100%]">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link
            href="/"
            className="text-white bg-black px-7 py-3 hover:bg-[#4C4C4C]"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      {/* ZX7 Speaker */}
      <div className="relative rounded-xl">
        <div className="absolute inset-0 flex flex-col justify-center items-start left-20 max-md:left-10">
          <h2 className="text-black text-[28px] font-bold mb-10">
            ZX7 SPEAKER
          </h2>
          <Link
            href="/"
            className="text-black font-bold border border-black px-7 py-3 hover:bg-black hover:text-white"
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
      {/* YX1 EARPHONES */}
      <div className="flex gap-10 max-lg:gap-5 max-sm:flex-col">
        <div className="flex-1">
          <Image
            src={earphoneYX1}
            quality={100}
            alt="ZX7 Speaker"
            className="rounded-xl w-full max-sm:hidden"
          />
          <Image
            src={earphoneYX1Mobile}
            quality={100}
            alt="ZX7 Speaker"
            className="rounded-xl w-full hidden max-sm:block"
          />
        </div>
        <div className="flex-1 bg-[#F1F1F1] rounded-xl max-sm:flex-none max-sm:h-[250px]">
          <div className="h-full flex flex-col justify-center mx-32 max-xl:mx-10 max-md:mx-5 max-sm:mx-10">
            <h2 className="text-black text-[28px] font-bold mb-10">
              YX1 EARPHONES
            </h2>
            <div className="mb-5">
              <Link
                href="/"
                className="text-black font-bold border border-black px-7 py-3 hover:bg-black hover:text-white"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionThree;
