"use client";

import { motion } from "framer-motion";

function Title({ children }: { children: string }) {
  return (
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: false, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      className="text-white text-[40px] font-bold text-center max-sm:text-[28px]"
    >
      {children}
    </motion.h2>
  );
}

export default Title;
