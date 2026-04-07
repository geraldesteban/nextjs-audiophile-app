"use client";

import Transition from "@/app/_components/Transition";

import { useForm } from "react-hook-form";

import Link from "next/link";
import { useRouter } from "next/navigation";

type Login = {
  email: string;
  password: string;
};

export default function Login() {
  const router = useRouter();
  const {
    register,
    handleSubmit,
    setError,
    formState: { errors, isSubmitting },
  } = useForm<Login>();

  const onSubmit = async (data: Login) => {
    try {
      const res = await fetch("/api/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",
        body: JSON.stringify(data),
      });

      const result = await res.json();

      if (!res.ok) {
        setError("root", {
          message: result.message,
        });
        return;
      }

      router.push("/account");
      router.refresh();
    } catch {
      setError("root", {
        message: "Network error",
      });
    }
  };

  return (
    <Transition>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen flex flex-col justify-center items-center gap-4 w-100 mx-auto max-sm:w-full"
      >
        <h2 className="text-4xl font-semibold mr-auto">Login</h2>

        {/* Email */}
        <div className="flex flex-col gap-2 w-full">
          <label className="text-xs font-bold">Email</label>
          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="text-sm border border-gray-500 rounded-lg py-3 pl-5"
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
            className="text-sm border border-gray-500 rounded-lg py-3 pl-5"
          />
          {errors.password && (
            <span className="text-red-500 text-xs">
              {errors.password.message}
            </span>
          )}
        </div>

        {/* Message */}
        {errors.root && (
          <p className="text-sm text-center mr-auto">{errors.root.message}</p>
        )}

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-[#D87D4A] text-white font-bold py-3 px-5 mr-auto disabled:opacity-50 cursor-pointer"
        >
          {isSubmitting ? "Signing in..." : "SIGN IN"}
        </button>

        <Link href="/account/register" className="mr-auto text-sm">
          Create Account
        </Link>

        <Link href="/" className="mr-auto text-sm">
          Return to Home
        </Link>
      </form>
    </Transition>
  );
}
