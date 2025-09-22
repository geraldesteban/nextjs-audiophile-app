import Image from "next/image";
import Link from "next/link";
/* desktop */
import XX99MARKII from "@/app/_assets/Headphones/desktop/image-product-XX99MARKII.jpg";
import XX99MARKI from "@/app/_assets/Headphones/desktop/image-product-XX99MARKI.jpg";
import XX59 from "@/app/_assets/Headphones/desktop/image-product-XX59.jpg";
/* tablet */
import XX99MARKIITablet from "@/app/_assets/Headphones/tablet/image-product-XX99MARKII.jpg";
import XX99MARKITablet from "@/app/_assets/Headphones/tablet/image-product-XX99MARKI.jpg";
import XX59Tablet from "@/app/_assets/Headphones/tablet/image-product-XX59.jpg";
/* mobile */
import XX99MARKIIMobile from "@/app/_assets/Headphones/mobile/image-product-XX99MARKII.jpg";
import XX99MARKIMobile from "@/app/_assets/Headphones/mobile/image-product-XX99MARKI.jpg";
import XX59Mobile from "@/app/_assets/Headphones/mobile/image-product-XX59.jpg";
import SectionTwo from "../_components/Home/SectionTwo";

export const metadata = {
  title: "Headphones",
};

function Page() {
  const itemLists = [
    {
      productImage: XX99MARKII,
      productImageTablet: XX99MARKIITablet,
      productImageMobile: XX99MARKIIMobile,
      heading: "XX99 MARK II",
      paragraph:
        "The new XX99 Mark II headphones is the pinnacle of pristine audio. It redefines your premium headphone experience by reproducing the balanced depth and precision of studio-quality sound.",
    },
    {
      productImage: XX99MARKI,
      productImageTablet: XX99MARKITablet,
      productImageMobile: XX99MARKIMobile,

      heading: "XX99 MARK I",
      paragraph:
        "As the gold standard for headphones, the classic XX99 Mark I offers detailed and accurate audio reproduction for audiophiles, mixing engineers, and music aficionados alike in studios and on the go.",
    },
    {
      productImage: XX59,
      productImageTablet: XX59Tablet,
      productImageMobile: XX59Mobile,
      heading: "XX59",
      paragraph:
        "Enjoy your audio almost anywhere and customize it to your specific tastes with the XX59 headphones. The stylish yet durable versatile wireless headset is a brilliant companion at home or on the move.",
    },
  ];

  return (
    <div>
      <div className="bg-black py-32 max-xl:px-16 max-lg:py-20 max-sm:py-10">
        <h2 className="text-white text-[40px] font-bold text-center max-sm:text-[28px]">
          HEADPHONES
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
                i === 0 ? "block" : "hidden"
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
              href="/headphones/productdetails"
              className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130"
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
