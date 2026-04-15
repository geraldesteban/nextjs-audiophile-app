import Image from "next/image";
import Link from "next/link";
import headphone from "@/app/_assets/SectionTwo/image-category-thumbnail-headphones.png";
import speaker from "@/app/_assets/SectionTwo/image-category-thumbnail-speakers.png";
import earphone from "@/app/_assets/SectionTwo/image-category-thumbnail-earphones.png";
import { FaChevronRight } from "react-icons/fa";

export default function MobileNavigation() {
  const itemLists = [
    {
      image: headphone,
      heading: "HEADPHONES",
      span: "SHOP",
      to: "headphones",
    },
    {
      image: speaker,
      heading: "SPEAKERS",
      span: "SHOP",
      to: "speakers",
    },
    {
      image: earphone,
      heading: "EARPHONES",
      span: "SHOP",
      to: "earphones",
    },
  ];

  return (
    <div className="flex justify-between gap-5 pt-20 pb-10 px-30 max-lg:px-5 max-sm:pt-10 max-sm:justify-center max-sm:gap-15 max-sm:flex-wrap">
      {itemLists.map((item, i) => (
        <div
          className="relative bg-[#F1F1F1] w-full h-60 rounded-xl group cursor-pointer max-sm:h-30"
          key={i}
        >
          <Image
            src={item.image}
            quality={100}
            alt={item.heading}
            loading="eager"
            className="absolute w-60 left-0 right-0 bottom-20 mx-auto max-lg:bottom-25 max-sm:w-30 max-sm:bottom-15"
          />
          <div className="absolute bottom-0 left-0 right-0">
            <div className="flex flex-col items-center gap-5 max-sm:gap-2">
              <h2 className="text-black max-sm:text-sm font-bold tracking-widest">
                {item.heading}
              </h2>
              <Link href={`/${item.to}`} className="flex items-center mb-5">
                <span className="text-gray-500 max-sm:text-sm font-bold tracking-widest mr-3 lg:group-hover:text-[#D87D4A]">
                  SHOP
                </span>
                <FaChevronRight className="text-[#D87D4A]" />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
