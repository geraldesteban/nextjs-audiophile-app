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
    <div className="flex justify-between items-center gap-10 px-30 max-lg:px-5 max-lg:block">
      <div className="max-lg:text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={bestGearTablet}
            quality={100}
            alt="Best Gear"
            className="rounded-xl hidden mb-10 max-lg:block max-sm:hidden"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
        >
          <Image
            src={bestGearMobile}
            quality={100}
            alt="Best Gear"
            className="rounded-xl hidden mb-5 max-sm:block"
          />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-black text-4xl font-bold mb-10 max-sm:text-3xl max-sm:mb-5"
        >
          BRINGING YOU THE
          <br />
          <span className="text-[#D87D4A]">BEST</span> AUDIO GEAR
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          className="text-gray-500 w-111.5 max-lg:w-140 max-lg:mx-auto max-sm:w-full"
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
        transition={{ duration: 0.5 }}
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
