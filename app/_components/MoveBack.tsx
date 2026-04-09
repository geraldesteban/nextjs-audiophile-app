"use client";

import useMoveBack from "@/app/hooks/useMoveback";
import { ReactNode } from "react";

export default function MoveBack({ children }: { children: ReactNode }) {
  const moveBack = useMoveBack();

  return (
    <button
      className="self-start text-gray-500 font-medium cursor-pointer ml-30 max-lg:ml-5 lg:hover:text-[#D87D4A]"
      onClick={moveBack}
    >
      {children}
    </button>
  );
}
