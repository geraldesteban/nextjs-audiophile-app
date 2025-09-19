import Image from "next/image";
import hero from "@/public/image-hero.jpg";
import Link from "next/link";
import SectionTwo from "./_components/Home/SectionTwo";
import SectionThree from "./_components/Home/SectionThree";
import SectionFour from "./_components/Home/SectionFour";

/* Home */
function Page() {
  return (
    <div>
      <main>
        <div className="z-10 relative ml-32 mt-52">
          <h2 className="text-[#FAFAFA] text-sm tracking-[8px] mb-5">
            NEW PRODUCT
          </h2>
          <h2 className="text-white text-[56px] font-bold mb-10">
            XX99 MARK II
            <br />
            HEADPHONES
          </h2>
          <p className="text-[#F1F1F1] w-[360px] mb-10 ">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/"
            className="text-white font-bold bg-[#D87D4A] px-7 py-3"
          >
            SEE PRODUCT
          </Link>
        </div>
        <Image
          src={hero}
          fill
          quality={100}
          placeholder="blur"
          className="object-cover object-top rounded-bl-xl rounded-br-xl"
          alt="Hero background"
        />
      </main>
      {/* Section Two */}
      <SectionTwo />
      {/* Section Three */}
      <SectionThree />
      {/* Section Four */}
      <SectionFour />
    </div>
  );
}

export default Page;
