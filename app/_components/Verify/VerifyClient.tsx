"use client";

import { useEffect, useState } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Spinner from "@/app/_components/Spinners/Spinner";

export default function VerifyClient() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const token = searchParams.get("token");
  const [status, setStatus] = useState("verifying");

  useEffect(() => {
    const verifyEmail = async () => {
      if (!token) {
        setStatus("invalid");
        return;
      }

      try {
        const res = await fetch(`/api/auth/verify?token=${token}`);
        const data = await res.json();

        if (!res.ok) {
          setStatus("failed");
          console.error(data.message);
          return;
        }

        setStatus("success");
      } catch (err) {
        console.error(err);
        setStatus("failed");
      }
    };

    verifyEmail();
  }, [token]);

  return (
    <div className="min-h-screen flex justify-center items-center flex-col gap-4">
      {status === "verifying" && <Spinner />}

      {status === "success" && (
        <>
          <p>Email verified successfully!</p>
          <button
            onClick={() => router.push("/account/login")}
            className="px-7 py-2 bg-[#D87D4A] text-white font-bold cursor-pointer lg:hover:opacity-80"
          >
            Go to Login
          </button>
        </>
      )}

      {status === "failed" && <p>Verification failed.</p>}
      {status === "invalid" && <p>Invalid link.</p>}
    </div>
  );
}
