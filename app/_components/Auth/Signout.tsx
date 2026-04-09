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
    <button onClick={handleLogout} className="cursor-pointer">
      Logout
    </button>
  );
}
