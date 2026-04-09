"use client";

import Image from "next/image";

import Transition from "@/app/_components/Transition";

import { useForm } from "react-hook-form";
import { useCartStore } from "@/app/store/cartStore";

import gcash from "@/app/_assets/Payment/gcash.B8fyM1U4.svg";
import paymaya from "@/app/_assets/Payment/maya.svg";
import visa from "@/app/_assets/Payment/visa.svg";
import mastercard from "@/app/_assets/Payment/mastercard.svg";
import Summary from "./Summary";

export default function CheckoutForm() {
  const carts = useCartStore(state => state.cart);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<CustomerDetails>();

  const onSubmit = async (data: CustomerDetails) => {
    if (!carts || carts.length === 0) {
      console.error("Cart is empty");

      alert("Your cart is empty. Please add items before checking out.");
      return;
    }

    const res = await fetch("/api/checkout", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        carts,
        customer: data,
      }),
    });

    const result = await res.json();

    if (!res.ok) {
      console.error("Server error:", result);
      return;
    }

    // PAYMONGO FLOW
    if (data.paymentMethod === "paymongo") {
      if (result.url) {
        window.location.href = result.url;
      } else {
        console.error("Checkout failed: missing PayMongo URL");
      }
      return;
    }

    // COD FLOW
    if (data.paymentMethod === "cod") {
      console.log("COD order placed successfully");

      window.location.href = "/";

      return;
    }
  };

  return (
    <Transition>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="flex justify-between gap-10 pt-20 px-5 max-lg:pt-10 max-lg:flex-col"
      >
        <div className="flex-1 rounded-xl shadow-xl p-5">
          <h2 className="text-4xl font-bold mb-20 max-lg:mb-10">CHECKOUT</h2>
          <div>
            {/* Billing details */}
            <div className="mb-20 max-lg:mb-10">
              <h2 className="text-[#D87D4A] font-bold mb-5 text-sm max-sm:text-xs">
                BILLING DETAILS
              </h2>
              <div className="flex justify-between items-center gap-5 mb-5 max-sm:flex-col max-sm:items-start">
                {/* Name */}
                <div className="flex flex-1 flex-col w-full gap-2">
                  <label className="text-xs font-bold">Name</label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    {...register("name", { required: "Name is required" })}
                    className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-xs">
                      {errors.name.message}
                    </p>
                  )}
                </div>
                {/* Email */}
                <div className="flex flex-1 flex-col w-full gap-2">
                  <label className="text-xs font-bold">Email Address</label>
                  <input
                    type="email"
                    placeholder="alexei@mail.com"
                    {...register("email", { required: "Email is required" })}
                    className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-xs">
                      {errors.email.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Phone number */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold">Phone Number</label>
                <input
                  type="tel"
                  placeholder="+1 202-555-0136"
                  {...register("phone", {
                    required: "Phone number is required",
                  })}
                  className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 w-[49%] max-sm:w-full focus:outline-none focus:border-[#D87D4A]"
                />
                {errors.phone && (
                  <p className="text-red-500 text-xs">{errors.phone.message}</p>
                )}
              </div>
            </div>
            {/* Shipping info */}
            <div className="mb-20 max-lg:mb-10">
              <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                SHIPPING INFO
              </h2>
              {/* Address */}
              <div className="flex flex-col mb-5 gap-2">
                <label className="text-xs font-bold">Address</label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  {...register("address", {
                    required: "Address is required",
                  })}
                  className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 w-[49%] max-sm:w-full focus:outline-none focus:border-[#D87D4A]"
                />
                {errors.address && (
                  <p className="text-red-500 text-xs">
                    {errors.address.message}
                  </p>
                )}
              </div>
              <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                {/* ZIP code */}
                <div className="flex flex-1 flex-col mb-5 w-full gap-2">
                  <label className="text-xs font-bold">ZIP Code</label>
                  <input
                    type="number"
                    placeholder="10001"
                    {...register("zipcode", {
                      required: "Zipcode is required",
                    })}
                    className="text-base border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3 focus:outline-none focus:border-[#D87D4A]"
                  />
                  {errors.zipcode && (
                    <p className="text-red-500 text-xs">
                      {errors.zipcode.message}
                    </p>
                  )}
                </div>
                {/* City */}
                <div className="flex flex-1 flex-col mb-5 w-full gap-2">
                  <label className="text-xs font-bold">City</label>
                  <input
                    type="text"
                    placeholder="New York"
                    {...register("city", {
                      required: "City is required",
                    })}
                    className="text-base border border-gray-500 rounded-lg py-3 pl-5 max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
                  />
                  {errors.city && (
                    <p className="text-red-500 text-xs">
                      {errors.city.message}
                    </p>
                  )}
                </div>
              </div>
              {/* Country */}
              <div className="flex flex-col gap-2">
                <label className="text-xs font-bold">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  {...register("country", {
                    required: "Country is required",
                  })}
                  className="text-base border border-gray-500 rounded-lg py-3 pl-5 w-[49%] max-sm:w-full max-sm:py-2 max-sm:pl-3 focus:outline-none focus:border-[#D87D4A]"
                />
                {errors.country && (
                  <p className="text-red-500 text-xs">
                    {errors.country.message}
                  </p>
                )}
              </div>
            </div>
            {/* Payment details */}
            <div>
              <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                PAYMENT DETAILS
              </h2>
              <label className="text-xs font-bold">Payment Method</label>
              <div className="flex flex-col gap-5 mt-2">
                {/* PayMongo */}
                <label className="flex justify-between items-center gap-5 border border-gray-500 has-[input:checked]:border-[#D87D4A] rounded-lg py-3 px-5 w-[49%] max-sm:w-full max-sm:py-2 max-sm:px-3 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="paymongo"
                      {...register("paymentMethod", {
                        required: "Please select a payment method",
                      })}
                      className="accent-[#D87D4A]"
                    />
                    <span className="text-base font-bold">PayMongo</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Image src={gcash} alt="gcash logo" />
                    <Image src={paymaya} alt="paymaya logo" />
                    <Image src={visa} alt="visa logo" />
                    <Image src={mastercard} alt="mastercard logo" />
                  </div>
                </label>
                {/* COD */}
                <label className="flex items-center gap-5 border border-gray-500 has-[input:checked]:border-[#D87D4A] rounded-lg py-3 px-5 w-[49%] max-sm:w-full max-sm:py-2 max-sm:px-3 cursor-pointer">
                  <div className="flex items-center gap-2">
                    <input
                      type="radio"
                      value="cod"
                      {...register("paymentMethod")}
                      className="accent-[#D87D4A]"
                    />
                    <span className="text-base font-bold">
                      Cash on Delivery
                    </span>
                  </div>
                </label>
              </div>
              <p className="text-red-500 text-xs mt-2">
                {errors.paymentMethod?.message}
              </p>
            </div>
          </div>
        </div>
        {/* Summary */}
        <Summary />
      </form>
    </Transition>
  );
}
