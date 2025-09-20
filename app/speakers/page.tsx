import Link from "next/link";
import SectionTwo from "@/app/_components/Home/SectionTwo";
/* desktop */
import ZX9 from "@/app/_assets/Speakers/desktop/image-product-ZX9.jpg";
import ZX7 from "@/app/_assets/Speakers/desktop/image-product-ZX7.jpg";
/* tablet */
import ZX9Tablet from "@/app/_assets/Speakers/tablet/image-product-ZX9.jpg";
import ZX7Tablet from "@/app/_assets/Speakers/tablet/image-product-ZX7.jpg";
/* mobile */
import ZX9Mobile from "@/app/_assets/Speakers/mobile/image-product-ZX9.jpg";
import ZX7Mobile from "@/app/_assets/Speakers/mobile/image-product-ZX7.jpg";
import Image from "next/image";

export const metadata = {
  title: "Speakers",
};

function Page() {
  const itemLists = [
    {
      productImage: ZX9,
      productImageTablet: ZX9Tablet,
      productImageMobile: ZX9Mobile,
      heading: "ZX9",
      paragraph:
        "Upgrade your sound system with the all new ZX9 active speaker. It’s a bookshelf speaker system that offers truly wireless connectivity -- creating new possibilities for more pleasing and practical audio setups.",
    },
    {
      productImage: ZX7,
      productImageTablet: ZX7Tablet,
      productImageMobile: ZX7Mobile,

      heading: "ZX7",
      paragraph:
        "Stream high quality sound wirelessly with minimal loss. The ZX7 bookshelf speaker uses high-end audiophile components that represents the top of the line powered speakers for home or studio use.",
    },
  ];
  return (
    <div>
      <div className="bg-black py-32 max-lg:py-20 max-sm:py-10">
        <h2 className="text-white text-[40px] font-bold text-center">
          SPEAKERS
        </h2>
      </div>
      {itemLists.map((item, i) => (
        <div
          className={`flex justify-between items-center px-32 max-xl:px-16 max-lg:px-10 pt-32 gap-10 ${
            i + 1 === 2 ? "flex-row-reverse" : ""
          } max-lg:px-10 max-lg:flex-col max-lg:pt-20`}
          key={i}
        >
          <Image
            src={item.productImage}
            quality={100}
            alt={item.heading}
            className="rounded-xl w-[45%] max-lg:hidden"
          />
          <Image
            src={item.productImageTablet}
            quality={100}
            alt={item.heading}
            className="rounded-xl hidden max-lg:block max-sm:hidden"
          />
          <Image
            src={item.productImageMobile}
            quality={100}
            alt={item.heading}
            className="rounded-xl hidden max-sm:block"
          />
          <div className="max-lg:text-center">
            <h2
              className={`text-[#D87D4A] text-[14px] tracking-[8px] mb-5 ${
                i === 1 ? "hidden" : "block"
              }`}
            >
              NEW PRODUCT
            </h2>
            <h2 className="text-black text-[40px] font-bold mb-10 max-sm:text-[28px]">
              {item.heading}
              <br />
              HEADPHONES
            </h2>
            <p className="text-gray-500 text-[15px] w-[360px] mb-10 max-lg:w-[60.5%] max-lg:mx-auto">
              {item.paragraph}
            </p>
            <Link
              href="/"
              className="text-white font-bold bg-[#D87D4A] px-7 py-3 hover:brightness-130"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
      <SectionTwo />
    </div>
  );
}

export default Page;
