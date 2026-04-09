"use client";

import Transition from "@/app/_components/Transition";
import Link from "next/link";
import { useState } from "react";
import { useForm } from "react-hook-form";

type Signup = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

export default function Signup() {
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState<"success" | "error" | "">("");
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<Signup>();

  const onSubmit = async (data: Signup) => {
    try {
      const response = await fetch("/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        setMessage(result.message);
        return;
      }

      setMessage("Verification email sent. Please check your inbox.");
      setMessageType("success");
    } catch {
      setMessage("Unable to connect. Please try again.");
      setMessageType("error");
    }
  };

  return (
    <Transition>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen flex flex-col justify-center items-center gap-4 w-100 mx-auto max-sm:w-full"
      >
        <h2 className="text-4xl font-semibold mr-auto">Create Account</h2>
        {/* First Name */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs font-bold">First Name</label>
          <input
            type="text"
            placeholder="First Name"
            {...register("firstName", { required: "First name is required" })}
            className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
          />
          {errors.firstName && (
            <span className="text-red-500 text-xs">
              {errors.firstName.message}
            </span>
          )}
        </div>
        {/* Last Name */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs font-bold">Last Name</label>
          <input
            type="text"
            placeholder="Last Name"
            {...register("lastName", { required: "Last name is required" })}
            className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
          />
          {errors.lastName && (
            <span className="text-red-500 text-xs">
              {errors.lastName.message}
            </span>
          )}
        </div>
        {/* Email */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs font-bold">Email</label>
          <input
            type="text"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email",
              },
            })}
            className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
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
            {...register("password", {
              required: "Password is required",
              minLength: {
                value: 6,
                message: "Password must be at least 6 characters",
              },
            })}
            className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>
        {/* Create account button */}
        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#D87D4A] text-white font-bold py-3 px-5 lg:hover:opacity-80 cursor-pointer mr-auto"
        >
          {isSubmitting ? "Creating account..." : "CREATE"}
        </button>
        {/* Message for success or error */}
        {message && (
          <span
            className={`mr-auto max-sm:text-xs ${messageType === "success" ? "text-green-500" : "text-red-500"}`}
          >
            {message}
          </span>
        )}
        <Link
          href="/account/signin"
          className="mr-auto max-sm:text-xs lg:hover:text-[#D87D4A]"
        >
          Login
        </Link>
        <Link
          href="/"
          className="mr-auto max-sm:text-xs lg:hover:text-[#D87D4A]"
        >
          Return to Home
        </Link>
      </form>
    </Transition>
  );
}
