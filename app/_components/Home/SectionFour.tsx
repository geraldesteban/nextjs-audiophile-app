import Image from "next/image";
import bestGear from "@/app/_assets/SectionFour/image-best-gear.jpg";

function SectionFour() {
  return (
    <div className="flex justify-between items-center px-32 pb-32">
      <div className="">
        <h2 className="text-black text-[40px] font-bold mb-10">
          BRINGING YOU THE
          <br />
          <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
        </h2>
        <p className="text-gray-500 text-[15px] w-[445px]">
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </p>
      </div>
      <div>
        <Image
          src={bestGear}
          quality={100}
          alt="Best Gear"
          className="rounded-xl"
        />
      </div>
    </div>
  );
}
export default SectionFour;
