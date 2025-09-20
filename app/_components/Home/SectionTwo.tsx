import headphone from "@/app/_assets/SectionTwo/image-category-thumbnail-headphones.png";
import speaker from "@/app/_assets/SectionTwo/image-category-thumbnail-speakers.png";
import earphone from "@/app/_assets/SectionTwo/image-category-thumbnail-earphones.png";
import iconRight from "@/app/_assets/Icons/icon-arrow-right.svg";
import Image from "next/image";
import Link from "next/link";

function SectionTwo() {
  const itemLists = [
    {
      image: headphone,
      heading: "HEADPHONES",
      span: "SHOP",
      icon: iconRight,
    },
    {
      image: speaker,
      heading: "SPEAKERS",
      span: "SHOP",
      icon: iconRight,
    },
    {
      image: earphone,
      heading: "EARPHONES",
      span: "SHOP",
      icon: iconRight,
    },
  ];

  return (
    <div className="flex justify-between gap-5 px-32 pt-72 pb-48 max-xl:px-16 max-lg:pt-52 max-lg:px-10 max-xl:pb-32 max-sm:justify-center max-sm:gap-32 max-sm:flex-wrap">
      {itemLists.map((item) => (
        <div
          className="relative bg-[#F1F1F1] w-[350px] h-[200px] rounded-xl max-md:w-[200px] max-md:h-[150px] max-sm:w-[100%] max-sm:h-[400px]"
          key={item.heading}
        >
          <Image
            src={item.image}
            quality={100}
            alt="Headphone"
            className="absolute bottom-10 max-md:bottom-15 max-sm:left-1/2 max-sm:transform max-sm:-translate-x-1/2 max-sm:bottom-30"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <h2 className="text-black text-[18px] font-bold tracking-widest mb-5">
                {item.heading}
              </h2>
              <Link href="/" className="flex items-center mb-5">
                <span className="text-gray-500 font-bold tracking-widest mr-3 hover:text-[#D87D4A]">
                  SHOP
                </span>
                <Image
                  src={iconRight}
                  width={10}
                  height={10}
                  alt="Right icon"
                />
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default SectionTwo;
