"use client";

import { useRouter } from "next/navigation";

function useMoveBack(): () => void {
  const router = useRouter();

  const moveBack = (): void => {
    router.back();
  };

  return moveBack;
}

export default useMoveBack;
