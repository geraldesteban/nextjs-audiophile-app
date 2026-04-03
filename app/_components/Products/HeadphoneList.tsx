import { getHeadphones } from "@/app/_lib/services/headphones/getHeadphones";
import { Products } from "@/app/types/products";
import Image from "next/image";
import Link from "next/link";

export const revalidate = 15;

export default async function HeadphoneList() {
  const data = await fetch("http://localhost:3000/api/headphones");
  const headphones: Products[] = await data.json();

  return (
    <>
      {headphones.map((item, i) => (
        <div
          className={`flex justify-between items-center px-30 max-lg:px-10 gap-10 max-lg:gap-5 ${
            i + 1 === 2 ? "flex-row-reverse" : ""
          } max-lg:flex-col`}
          key={i}
        >
          <Image
            src={item?.image?.desktop}
            quality={100}
            alt={item.name}
            width={500}
            height={500}
            priority
            className="rounded-xl w-[50%] max-lg:hidden"
          />
          <Image
            src={item?.image?.tablet}
            quality={100}
            alt={item.name}
            width={500}
            height={500}
            priority
            className="rounded-xl hidden max-lg:block max-sm:hidden"
          />
          <Image
            src={item?.image?.mobile}
            quality={100}
            alt={item.name}
            width={500}
            height={500}
            priority
            className="rounded-xl hidden w-full max-sm:block"
          />
          <div className="max-lg:text-center mb-10">
            <h2
              className={`text-[#D87D4A] text-sm tracking-[8px] mb-5 ${
                item.new ? "block" : "hidden"
              }`}
            >
              NEW item
            </h2>
            <h2 className="text-black text-4xl font-bold mb-10 max-sm:text-3xl text-nowrap max-sm:mb-2">
              {item.name}
            </h2>
            <p className="text-gray-500 text-[15px] w-90 mb-10 max-lg:w-full max-lg:mx-auto max-sm:mb-5">
              {item.description}
            </p>
            <Link
              href={`/${item.category}/${item?.slug}`}
              className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      ))}
    </>
  );
}
