import Image from "next/image";
import Link from "next/link";
import patterCircles from "@/app/_assets/Icons/pattern-circles.svg";
import speakerZX9 from "@/app/_assets/SectionThree/image-speaker-zx9.png";
import speakerZX7 from "@/app/_assets/SectionThree/image-speaker-zx7.jpg";
import earphoneYX1 from "@/app/_assets/SectionThree/image-earphones-yx1.jpg";

function SectionThree() {
  return (
    <div className="relative px-32 pb-32 flex justify-around flex-col gap-10">
      {/* ZX9 Speaker */}
      <div
        className="bg-[#D87D4A] flex justify-around pt-32 rounded-xl background"
        style={{
          backgroundImage: `url(${patterCircles.src})`,
          backgroundSize: "80%",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "-70% 10%",
        }}
      >
        <Image
          src={speakerZX9}
          width={400}
          height={400}
          quality={100}
          alt="ZX9 Speaker"
        />
        <div>
          <h2 className="text-white text-[56px] font-bold mb-10">
            ZX9
            <br />
            SPEAKER
          </h2>
          <p className="text-[#F1F1F1] w-[360px] mb-10 ">
            Upgrade to premium speakers that are phenomenally built to deliver
            truly remarkable sound.
          </p>
          <Link href="/" className="text-white bg-black px-7 py-3">
            SEE PRODUCT
          </Link>
        </div>
      </div>
      {/* ZX7 Speaker */}
      <div className="relative rounded-xl bg-red-300">
        <Image
          src={speakerZX7}
          quality={100}
          alt="ZX7 Speaker"
          className="rounded-xl w-full"
        />
        <div className="absolute top-40 left-30">
          <h2 className="text-black text-[28px] font-bold mb-10">
            ZX7 SPEAKER
          </h2>
          <Link
            href="/"
            className="text-black font-bold border border-black px-7 py-3"
          >
            SEE PRODUCT
          </Link>
        </div>
      </div>
      {/* YX1 EARPHONES */}
      <div className="flex gap-10">
        <div className="flex-1">
          <Image
            src={earphoneYX1}
            quality={100}
            alt="ZX7 Speaker"
            className="rounded-xl w-full"
          />
        </div>
        <div className="flex-1 bg-[#F1F1F1] rounded-xl">
          <div className="h-full flex flex-col justify-center ml-32">
            <h2 className="text-black text-[28px] font-bold mb-10">
              YX1 EARPHONES
            </h2>
            <div>
              <Link
                href="/"
                className="text-black font-bold border border-black px-7 py-3"
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
