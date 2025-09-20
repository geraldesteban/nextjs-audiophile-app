import Image from "next/image";
import heroDesktop from "@/public/image-hero.jpg";
import heroTablet from "@/public/image-hero-tablet.jpg";
import heroMobile from "@/public/image-hero-mobile.jpg";
import Link from "next/link";
import SectionTwo from "./_components/Home/SectionTwo";
import SectionThree from "./_components/Home/SectionThree";
import { getAllHeadphones } from "./_lib/actions/getAllHeadphones";

/* Home */
async function Page() {
  const allHeadphones = await getAllHeadphones();
  console.log(allHeadphones);

  return (
    <div>
      <main>
        <div className="z-10 relative ml-32 mt-52 max-lg:text-center max-lg:mx-auto max-sm:mt-20">
          <h2 className="text-[#FAFAFA] text-[14px] tracking-[8px] mb-5">
            NEW PRODUCT
          </h2>
          <h2 className="text-white text-[56px] font-bold mb-10 max-sm:text-[36px]">
            XX99 MARK II
            <br />
            HEADPHONES
          </h2>
          <p className="text-[#F1F1F1] text-[15px] w-[360px] mb-10 max-lg:mx-auto max-sm:w-[300px]">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/"
            className="text-white font-bold bg-[#D87D4A] px-7 py-3 hover:brightness-130"
          >
            SEE PRODUCT
          </Link>
        </div>
        <Image
          src={heroDesktop}
          fill
          quality={100}
          placeholder="blur"
          className="object-cover object-top rounded-bl-xl max-lg:hidden"
          alt="Hero background"
        />
        <Image
          src={heroTablet}
          fill
          quality={100}
          placeholder="blur"
          className="object-cover object-top hidden max-lg:block"
          alt="Hero background"
        />
        <Image
          src={heroMobile}
          fill
          quality={100}
          placeholder="blur"
          className="object-cover object-bottom hidden max-sm:block"
          alt="Hero background"
        />
      </main>
      {/* Section Two */}
      <SectionTwo />
      {/* Section Three */}
      <SectionThree />
    </div>
  );
}

export default Page;
