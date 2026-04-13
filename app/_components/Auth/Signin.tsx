"use client";

import Transition from "@/app/_components/Transition";
import LogoBlack from "@/app/_components/Auth/LogoBlack";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

type Login = {
  email: string;
  password: string;
};

export default function Login() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const router = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Login>();

  const onSubmit = async (data: Login) => {
    try {
      const response = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message);
        return;
      }

      router.push("/account");
      router.refresh();
    } catch {
      setMessage("Unable to connect. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <Transition>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen flex flex-col justify-center items-center gap-4 w-100 mx-auto max-sm:w-full max-sm:my-10"
      >
        <LogoBlack />
        <h2 className="text-4xl font-semibold mr-auto">Login</h2>
        {/* Email */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs font-bold">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="text-base border border-gray-500 rounded-lg py-3 pl-5 focus:outline-none focus:border-[#D87D4A]"
          />
          {errors.email && (
            <span className="text-red-500 text-xs">{errors.email.message}</span>
          )}
        </div>

        {/* Password */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs font-bold">Password</label>
          <input
            type="password"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
            className="text-base border border-gray-500 rounded-lg py-3 pl-5 focus:outline-none focus:border-[#D87D4A]"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* Message for success or error */}
        {message && (
          <span
            className={`mr-auto max-sm:text-xs ${messageType === "success" ? "text-green-500" : "text-red-500"}`}
          >
            {message}
          </span>
        )}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#D87D4A] text-white font-bold py-3 px-5 mr-auto disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Signing in..." : "SIGN IN"}
        </button>

        <Link
          href="/account/signup"
          className="mr-auto text-sm lg:hover:text-[#D87D4A]"
        >
          Create Account
        </Link>
        <Link href="/" className="mr-auto text-sm lg:hover:text-[#D87D4A]">
          Return to Home
        </Link>
      </form>
    </Transition>
  );
}
