"use client";

import Link from "next/link";
import Image from "next/image";

import useMoveBack from "@/app/hooks/useMoveback";
import { EarphonesProps } from "@/app/types/earphones";
import { useParams } from "next/navigation";

function EarphonesDetails({ earphones }: EarphonesProps) {
  const params = useParams();
  const { productName } = params;

  const moveBack = useMoveBack();

  return (
    <div className="pt-40 pb-20 max-lg:py-10">
      <button
        className="text-[15px] text-gray-500 font-medium ml-32 max-xl:ml-16 max-lg:ml-10 cursor-pointer"
        onClick={moveBack}
      >
        Go Back
      </button>
      {earphones
        .filter((earphones) => earphones.slug === productName)
        .map((earphones) => (
          <div key={earphones.name}>
            <div
              className={`flex justify-between items-center px-32 pt-32 gap-10 max-xl:px-16 max-lg:px-10 max-lg:flex-row max-lg:pt-20 max-sm:pt-10 max-sm:flex-col`}
            >
              <Image
                src={earphones?.gallery?.first?.desktop}
                quality={100}
                alt={earphones.name}
                width={500}
                height={500}
                className="rounded-xl w-[45%] max-lg:hidden"
              />
              <Image
                src={earphones?.gallery?.first?.tablet}
                quality={100}
                alt={earphones.name}
                width={500}
                height={500}
                className="rounded-xl hidden max-lg:block max-sm:hidden"
              />
              <Image
                src={earphones?.gallery?.first?.mobile}
                quality={100}
                alt={earphones.name}
                width={500}
                height={500}
                className="rounded-xl hidden max-sm:block"
              />
              <div className="max-lg:text-left">
                <h2
                  className={`text-[#D87D4A] text-[14px] tracking-[8px] mb-5`}
                >
                  {earphones.new ? "NEW PRODUCT" : ""}
                </h2>
                <h2 className="text-black text-[40px] font-bold mb-10 max-sm:text-[28px]">
                  {earphones.name}
                  <br />
                  {/* EARPHONES */}
                </h2>
                <p className="text-gray-500 text-[15px] w-[360px] mb-10 max-lg:w-[100%]">
                  {earphones.description}
                </p>
                <p className="text-[18px] font-bold mb-10">
                  $ {earphones.price}
                </p>
                <div className="flex items-center gap-5">
                  <div className="bg-[#F1F1F1] flex items-center gap-5 px-6 py-3">
                    <button>-</button>
                    <span>1</span>
                    <button>+</button>
                  </div>
                  <Link
                    href="/"
                    className="text-white font-bold bg-[#D87D4A] px-7 py-3 hover:brightness-130"
                  >
                    ADD TO CART
                  </Link>
                </div>
              </div>
            </div>
            {/* features */}
            <div className="flex justify-around gap-96 mt-52 px-32 max-xl:px-16 max-lg:flex-col max-lg:gap-36 max-lg:px-10 max-sm:mt-24">
              <div className="flex-1">
                <h2 className="text-[32px] font-bold mb-10">FEATURES</h2>
                <p className="text-[15px] text-gray-500">
                  {earphones.features}
                </p>
              </div>
              <div className="flex-1 max-lg:flex max-lg:gap-72 max-md:gap-48 max-sm:flex-col max-sm:gap-0">
                <h2 className="text-[32px] font-bold mb-10 whitespace-nowrap">
                  IN THE BOX
                </h2>
                <div>
                  <ul>
                    {earphones.includes.map((inc) => (
                      <li key={inc.item} className="whitespace-nowrap">
                        <span className="text-[#D87D4A]">{inc.quantity}x</span>
                        <span className="ml-5">{inc.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}
export default EarphonesDetails;
