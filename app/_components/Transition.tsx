"use client";

import type { ReactNode } from "react";

import { motion } from "framer-motion";

export default function Transition({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        ease: "easeOut",
      }}
    >
      {children}
    </motion.div>
  );
}
