import Image from "next/image";
import heroDesktop from "@/public/image-hero.jpg";
import heroTablet from "@/public/image-hero-tablet.jpg";
import heroMobile from "@/public/image-hero-mobile.jpg";
import Link from "next/link";
import SectionTwo from "./_components/Home/SectionTwo";
import SectionThree from "./_components/Home/SectionThree";

/* Home page*/
async function Page() {
  return (
    <div>
      <main className="relative pb-[960px]">
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
          className="object-cover hidden max-lg:block"
        />
        <Image
          src={heroMobile}
          alt="Hero background"
          quality={100}
          fill
          className="object-cover hidden max-sm:block"
        />
        <div className="z-10 absolute left-30 top-70 max-xl:left-20 max-lg:text-center max-lg:left-1/2 max-lg:transform max-lg:-translate-x-1/2">
          <h2 className="text-gray-500 text-[14px] tracking-[10px] mb-5">
            NEW PRODUCT
          </h2>
          <h2 className="text-white text-[56px] font-bold tracking-wider mb-10 max-sm:text-[36px]">
            XX99 MARK II
            <br />
            HEADPHONES
          </h2>
          <p className="text-[#F1F1F1] text-[15px] w-[360px] mb-10 max-lg:mx-auto max-sm:w-[100%]">
            Experience natural, life like audio and exceptional build quality
            made for the passionate music enthusiast.
          </p>
          <Link
            href="/"
            className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130"
          >
            SEE PRODUCT
          </Link>
        </div>
      </main>
      {/* Section Two */}
      <SectionTwo />
      {/* Section Three */}
      <SectionThree />
    </div>
  );
}

export default Page;
