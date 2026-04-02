"use client";

import { useForm } from "react-hook-form";
import { useCartStore } from "../store/cartStore";

import gcash from "@/app/_assets/Payment/gcash.B8fyM1U4.svg";
import paymaya from "@/app/_assets/Payment/maya.svg";
import visa from "@/app/_assets/Payment/visa.svg";
import mastercard from "@/app/_assets/Payment/mastercard.svg";
import Image from "next/image";

function PaymentForm() {
  const carts = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerDetails>();

  const onSubmit = async (data: CustomerDetails) => {
    // ❌ CART EMPTY CHECK
    if (!carts || carts.length === 0) {
      console.error("Cart is empty");

      // optional UI alert (better UX than console)
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
    <div className="flex-1 rounded-xl shadow-xl p-10 max-sm:p-5">
      <h2 className="text-[32px] font-bold mb-20 max-lg:mb-10">CHECKOUT</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Billing details */}
        <div className="mb-20 max-lg:mb-10">
          <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
            BILLING DETAILS
          </h2>
          <div className="flex justify-between items-center gap-5 mb-5 max-sm:flex-col max-sm:items-start">
            {/* Name */}
            <div className="flex flex-1 flex-col w-full gap-2">
              <label className="text-[12px] font-bold">Name</label>
              <input
                type="text"
                placeholder="Alexei Ward"
                {...register("name", { required: "Name is required" })}
                className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
              />
              {errors.name && (
                <p className="text-red-500 text-sm">{errors.name.message}</p>
              )}
            </div>
            {/* Email */}
            <div className="flex flex-1 flex-col w-full gap-2">
              <label className="text-[12px] font-bold">Email Address</label>
              <input
                type="email"
                placeholder="alexei@mail.com"
                {...register("email", { required: "Email is required" })}
                className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
              />
              {errors.email && (
                <p className="text-red-500 text-sm">{errors.email.message}</p>
              )}
            </div>
          </div>
          {/* Phone number */}
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold">Phone Number</label>
            <input
              type="tel"
              placeholder="+1 202-555-0136"
              {...register("phone", {
                required: "Phone number is required",
              })}
              className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
            />
            {errors.phone && (
              <p className="text-red-500 text-sm">{errors.phone.message}</p>
            )}
          </div>
        </div>
        {/* Shipping info */}
        <div className="mb-20 max-lg:mb-10">
          <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
            SHIPPING INFO
          </h2>
          {/* Adress */}
          <div className="flex flex-col mb-5 gap-2">
            <label className="text-[12px] font-bold">Address</label>
            <input
              type="text"
              placeholder="1137 Williams Avenue"
              {...register("address", {
                required: "Address is required",
              })}
              className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
            />
            {errors.address && (
              <p className="text-red-500 text-sm">{errors.address.message}</p>
            )}
          </div>
          <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-0">
            {/* ZIP code */}
            <div className="flex flex-1 flex-col mb-5 w-full gap-2">
              <label className="text-[12px] font-bold">ZIP Code</label>
              <input
                type="number"
                placeholder="10001"
                {...register("zipcode", {
                  required: "Zipcode is required",
                })}
                className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
              />
              {errors.zipcode && (
                <p className="text-red-500 text-sm">{errors.zipcode.message}</p>
              )}
            </div>
            {/* City */}
            <div className="flex flex-1 flex-col mb-5 w-full gap-2">
              <label className="text-[12px] font-bold">City</label>
              <input
                type="text"
                placeholder="New York"
                {...register("city", {
                  required: "City is required",
                })}
                className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
              />
              {errors.city && (
                <p className="text-red-500 text-sm">{errors.city.message}</p>
              )}
            </div>
          </div>
          {/* Country */}
          <div className="flex flex-col gap-2">
            <label className="text-[12px] font-bold">Country</label>
            <input
              type="text"
              placeholder="United States"
              {...register("country", {
                required: "Country is required",
              })}
              className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>
        </div>
        {/* Payment details */}
        <div>
          <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
            PAYMENT DETAILS
          </h2>
          <label className="text-[12px] font-bold">Payment Method</label>
          <div className="flex flex-col gap-5 mt-2">
            {/* PayMongo */}
            <label className="flex items-center gap-5 border border-gray-500 rounded-lg py-3 px-5">
              <input
                type="radio"
                value="paymongo"
                {...register("paymentMethod", {
                  required: "Please select a payment method",
                })}
              />
              <span>Payment via PayMongo</span>

              <div className="flex items-center gap-2">
                <Image src={gcash} alt="gcash logo" />
                <Image src={paymaya} alt="paymaya logo" />
                <Image src={visa} alt="visa logo" />
                <Image src={mastercard} alt="mastercard logo" />
              </div>
            </label>
            {/* COD */}
            <label className="flex items-center gap-5 border border-gray-500 rounded-lg py-3 px-5">
              <input type="radio" value="cod" {...register("paymentMethod")} />
              <span>Cash on Delivery (COD)</span>
            </label>
            {/* Error */}
            <p className="text-red-500 text-sm">
              {errors.paymentMethod?.message}
            </p>
          </div>
        </div>
        <button type="submit" className="cursor-pointer">
          Continue to Payment
        </button>
      </form>
    </div>
  );
}

export default PaymentForm;
