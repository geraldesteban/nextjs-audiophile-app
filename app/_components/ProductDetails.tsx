"use client";

import Link from "next/link";
import Image from "next/image";
/* desktop */
import YX1 from "@/app/_assets/Earphones/desktop/image-product-YX1.jpg";
/* tablet */
import YX1Tablet from "@/app/_assets/Earphones/tablet/image-product-YX1.jpg";
/* mobile */
import YX1Mobile from "@/app/_assets/Earphones/mobile/image-product-YX1.jpg";
import useMoveBack from "@/app/hooks/useMoveback";

function ProductDetails() {
  const moveBack = useMoveBack();

  return (
    <div className="pt-40 pb-20 max-lg:py-10">
      <button
        className="text-[15px] text-gray-500 font-medium ml-32 max-xl:ml-16 max-lg:ml-10 cursor-pointer"
        onClick={moveBack}
      >
        Go Back
      </button>
      <div
        className={`flex justify-between items-center px-32 pt-32 gap-10 max-xl:px-16 max-lg:px-10 max-lg:flex-row max-lg:pt-20 max-sm:pt-10 max-sm:flex-col`}
      >
        <Image
          src={YX1}
          quality={100}
          alt="YX1 WIRELESS"
          className="rounded-xl w-[45%] max-lg:hidden"
        />
        <Image
          src={YX1Tablet}
          quality={100}
          alt="YX1 WIRELESS"
          className="rounded-xl hidden max-lg:block max-sm:hidden"
        />
        <Image
          src={YX1Mobile}
          quality={100}
          alt="YX1 WIRELESS"
          className="rounded-xl hidden max-sm:block"
        />
        <div className="max-lg:text-left">
          <h2 className={`text-[#D87D4A] text-[14px] tracking-[8px] mb-5`}>
            NEW PRODUCT
          </h2>
          <h2 className="text-black text-[40px] font-bold mb-10 max-sm:text-[28px]">
            YX1 WIRELESS
            <br />
            EARPHONES
          </h2>
          <p className="text-gray-500 text-[15px] w-[360px] mb-10 max-lg:w-[100%]">
            Tailor your listening experience with bespoke dynamic drivers from
            the new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound
            even in noisy environments with its active noise cancellation
            feature.
          </p>
          <p className="text-[18px] font-bold mb-10">$ 2,999</p>
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
          <p className="text-[15px] text-gray-500 mb-10">
            Featuring a genuine leather head strap and premium earcups, these
            headphones deliver superior comfort for those who like to enjoy
            endless listening. It includes intuitive controls designed for any
            situation. Whether you’re taking a business call or just in your own
            personal space, the auto on/off and pause features ensure that
            you’ll never miss a beat.
          </p>
          <p className="text-[15px] text-gray-500">
            The advanced Active Noise Cancellation with built-in equalizer allow
            you to experience your audio world on your terms. It lets you enjoy
            your audio in peace, but quickly interact with your surroundings
            when you need to. Combined with Bluetooth 5. 0 compliant
            connectivity and 17 hour battery life, the XX99 Mark II headphones
            gives you superior sound, cutting-edge technology, and a modern
            design aesthetic.
          </p>
        </div>
        <div className="flex-1 max-lg:flex max-lg:gap-72 max-md:gap-48 max-sm:flex-col max-sm:gap-0">
          <h2 className="text-[32px] font-bold mb-10 whitespace-nowrap">
            IN THE BOX
          </h2>
          <div>
            <ul>
              <li className="whitespace-nowrap">
                <span className="text-[#D87D4A]">1x</span>
                <span className="ml-5">Headphone Unit</span>
              </li>
              <li className="whitespace-nowrap">
                <span className="text-[#D87D4A]">2x</span>
                <span className="ml-5">Replacement Earcups</span>
              </li>
              <li className="whitespace-nowrap">
                <span className="text-[#D87D4A]">1x</span>
                <span className="ml-5">User Manual</span>
              </li>
              <li className="whitespace-nowrap">
                <span className="text-[#D87D4A]">1x</span>
                <span className="ml-5">3.5mm 5m Audio Cable</span>
              </li>
              <li className="whitespace-nowrap">
                <span className="text-[#D87D4A]">1x</span>
                <span className="ml-5">Travel Bag</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default ProductDetails;
