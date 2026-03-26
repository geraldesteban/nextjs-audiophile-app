"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { HeadphonesProps } from "@/app/types/headphones";

function HeadphonesClient({ headphones }: HeadphonesProps) {
  if (!headphones) {
    return <div>Loading...</div>;
  }

  return (
    <>
      {headphones.map((headphone, i) => (
        <motion.div
          className={`flex justify-between items-center px-32 max-xl:px-16 max-lg:px-10 pt-32 gap-10 ${
            i + 1 === 2 ? "flex-row-reverse" : ""
          } max-lg:px-10 max-lg:flex-col max-lg:pt-20`}
          key={i}
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={headphone?.gallery?.first?.desktop}
            quality={100}
            alt={headphone.name}
            width={500}
            height={500}
            className="rounded-xl w-[45%] max-lg:hidden"
          />
          <Image
            src={headphone?.gallery?.first?.tablet}
            quality={100}
            alt={headphone.name}
            width={500}
            height={500}
            className="rounded-xl hidden max-lg:block max-sm:hidden"
          />
          <Image
            src={headphone?.gallery?.first?.mobile}
            quality={100}
            alt={headphone.name}
            width={500}
            height={500}
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
              {headphone.name}
              <br />
              HEADPHONES
            </h2>
            <p className="text-gray-500 text-[15px] w-[360px] mb-10 max-lg:w-[60.5%] max-lg:mx-auto">
              {headphone.description}
            </p>
            <Link
              href={`/headphones/${headphone?.slug}`}
              className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130"
            >
              SEE PRODUCT
            </Link>
          </div>
        </motion.div>
      ))}
    </>
  );
}
export default HeadphonesClient;
