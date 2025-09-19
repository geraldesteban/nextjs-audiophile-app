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
    <div className="flex justify-between px-32 pt-[500px] pb-52">
      {itemLists.map((item) => (
        <div
          className="relative bg-[#F1F1F1] w-[350px] h-[200px] rounded-xl"
          key={item.heading}
        >
          <Image
            src={item.image}
            alt="Headphone"
            className="absolute bottom-10"
          />
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2">
            <div className="flex flex-col items-center">
              <h2 className="text-black text-[18px] font-bold tracking-widest mb-5">
                {item.heading}
              </h2>
              <Link href="/" className="flex items-center mb-5">
                <span className="text-gray-500 font-bold tracking-widest mr-3">
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
