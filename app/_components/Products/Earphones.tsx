"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
/* desktop */
import YX1 from "@/app/_assets/Earphones/desktop/image-product-YX1.jpg";
/* tablet */
import YX1Tablet from "@/app/_assets/Earphones/tablet/image-product-YX1.jpg";
/* mobile */
import YX1Mobile from "@/app/_assets/Earphones/mobile/image-product-YX1.jpg";

function Earphones() {
  return (
    <motion.div
      className={`flex justify-between items-center px-32 pt-32 gap-10 max-xl:px-16 max-lg:px-10 max-lg:flex-col max-lg:pt-20`}
      initial={{ opacity: 0, scale: 0.5 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 1 }}
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
      <div className="max-lg:text-center">
        <h2 className={`text-[#D87D4A] text-[14px] tracking-[8px] mb-5`}>
          NEW PRODUCT
        </h2>
        <h2 className="text-black text-[40px] font-bold mb-10 max-sm:text-[28px]">
          YX1 WIRELESS
          <br />
          EARPHONES
        </h2>
        <p className="text-gray-500 text-[15px] w-[360px] mb-10 max-lg:w-[60.5%] max-lg:mx-auto">
          Tailor your listening experience with bespoke dynamic drivers from the
          new YX1 Wireless Earphones. Enjoy incredible high-fidelity sound even
          in noisy environments with its active noise cancellation feature.
        </p>
        <Link
          href="/"
          className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130"
        >
          SEE PRODUCT
        </Link>
      </div>
    </motion.div>
  );
}
export default Earphones;
