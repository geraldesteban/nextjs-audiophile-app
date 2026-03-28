"use client";

import { motion } from "framer-motion";

import Image from "next/image";
import Link from "next/link";

import { EarphonesProps } from "@/app/types/earphones";

function EarphonesClient({ earphones }: EarphonesProps) {
  return (
    <>
      {earphones.map((earphones, i) => (
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
          <div className="max-lg:text-center">
            <h2
              className={`text-[#D87D4A] text-[14px] tracking-[8px] mb-5 ${
                i === 0 ? "block" : "hidden"
              }`}
            >
              NEW PRODUCT
            </h2>
            <h2 className="text-black text-[40px] font-bold mb-10 max-sm:text-[28px]">
              {earphones.name}
              <br />
              speakers
            </h2>
            <p className="text-gray-500 text-[15px] w-90 mb-10 max-lg:w-[60.5%] max-lg:mx-auto">
              {earphones.description}
            </p>
            <Link
              href={`/earphones/${earphones?.slug}`}
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
export default EarphonesClient;
