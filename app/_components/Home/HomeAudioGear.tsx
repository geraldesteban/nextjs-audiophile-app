"use client";

import { motion } from "framer-motion";
import Image from "next/image";
/* Desktop */
import bestGear from "@/app/_assets/SectionFour/image-best-gear.jpg";
/* Tablet */
import bestGearTablet from "@/app/_assets/SectionFour/tablet/image-best-gear.jpg";
/* Mobile */
import bestGearMobile from "@/app/_assets/SectionFour/mobile/image-best-gear.jpg";

function HomeAudioGear() {
  return (
    <div className="flex justify-between items-center px-32 pb-32 max-xl:px-16 max-lg:block max-lg:px-10 max-sm:pb-20">
      <div className="max-xl:text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={bestGearTablet}
            quality={100}
            alt="Best Gear"
            className="rounded-xl hidden mb-16 max-lg:block max-sm:hidden"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
        >
          <Image
            src={bestGearMobile}
            quality={100}
            alt="Best Gear"
            className="rounded-xl hidden mb-16 max-sm:block"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-black text-[40px] font-bold mb-10 max-sm:text-[28px]"
        >
          BRINGING YOU THE
          <br />
          <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 1 }}
          className="text-gray-500 text-[15px] w-[445px] max-lg:w-[560px] max-lg:mx-auto max-sm:w-[100%]"
        >
          Located at the heart of New York City, Audiophile is the premier store
          for high end headphones, earphones, speakers, and audio accessories.
          We have a large showroom and luxury demonstration rooms available for
          you to browse and experience a wide range of our products. Stop by our
          store to meet some of the fantastic people who make Audiophile the
          best place to buy your portable audio equipment.
        </motion.p>
      </div>
      <motion.div
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: false, amount: 0.5 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={bestGear}
          quality={100}
          alt="Best Gear"
          className="rounded-xl max-lg:hidden"
        />
      </motion.div>
    </div>
  );
}
export default HomeAudioGear;
