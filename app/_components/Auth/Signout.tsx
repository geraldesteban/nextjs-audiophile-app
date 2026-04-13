"use client";

import { useRouter } from "next/navigation";

export default function Signout() {
  const router = useRouter();

  async function handleLogout() {
    await fetch("/api/auth/signout", {
      method: "POST",
    });

    router.push("/");
  }

  return (
    <button
      onClick={handleLogout}
      className="bg-[#D87D4A] text-white font-bold py-3 px-5 lg:hover:opacity-80 cursor-pointer"
    >
      Logout
    </button>
  );
}
