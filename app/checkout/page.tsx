"use client";

import Image from "next/image";
import Link from "next/link";
import Checkout from "../_components/Checkout";
import Modal from "@/app/_components/Modal";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";

function Page() {
  const [activeCheckout, setActiveCheckout] = useState(false);

  const carts = useCartStore((state) => state.cart);

  return (
    <div className="py-20 max-lg:py-10">
      {/* Checkout */}
      <Modal
        isOpen={activeCheckout}
        onClose={() => setActiveCheckout(!activeCheckout)}
        style={"flex justify-center items-center max-md:block"}
      >
        <Checkout />
      </Modal>
      <Link
        href="/headphones/productdetails"
        className="text-[15px] text-gray-500 font-medium ml-32 mb-20 max-lg:mb-10 max-lg:ml-5"
      >
        Go Back
      </Link>
      {/* Checkout and Summary */}
      <div className="flex justify-between gap-10 px-30 pt-20 max-lg:pt-10 max-lg:px-5 max-lg:flex-col">
        {/* Checkout */}
        <div className="flex-1 rounded-xl shadow-xl p-20 max-lg:p-10 max-sm:p-5">
          <h2 className="text-[32px] font-bold mb-20 max-lg:mb-10">CHECKOUT</h2>
          <form action="">
            {/* Billing details */}
            <div className="mb-20 max-lg:mb-10">
              <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                BILLING DETAILS
              </h2>
              <div className="flex justify-between items-center gap-5 mb-5 max-sm:flex-col max-sm:items-start">
                {/* Name */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="alexei@mail.com"
                    className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                  />
                </div>
              </div>
              {/* Phone number */}
              <div className="flex flex-col">
                <label className="text-[12px] font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+1 202-555-0136"
                  className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                />
              </div>
            </div>
            {/* Shipping info */}
            <div className="mb-20 max-lg:mb-10">
              <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                SHIPPING INFO
              </h2>
              {/* Adress */}
              <div className="flex flex-col mb-5">
                <label className="text-[12px] font-bold mb-2">Address</label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                />
              </div>
              <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                {/* ZIP code */}
                <div className="flex flex-1 flex-col mb-5 w-full">
                  <label className="text-[12px] font-bold mb-2">ZIP Code</label>
                  <input
                    type="text"
                    placeholder="10001"
                    className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                  />
                </div>
                {/* City */}
                <div className="flex flex-1 flex-col mb-5 w-full">
                  <label className="text-[12px] font-bold mb-2">City</label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                  />
                </div>
              </div>
              {/* Country */}
              <div className="flex flex-col">
                <label className="text-[12px] font-bold mb-2">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                />
              </div>
            </div>
            {/* Payment details */}
            <div>
              <div className="mb-5">
                <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                  PAYMENT DETAILS
                </h2>
                <div className="flex justify-between gap-5 max-sm:flex-col">
                  <h2 className="flex-1">Payment Method</h2>
                  <div className="flex flex-1 flex-col gap-5">
                    <div className="flex items-center gap-5 max-sm:gap-2 border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3">
                      <input type="radio" />
                      <span>e-Money</span>
                    </div>
                    <div className="flex flex-1 items-center gap-5 max-sm:gap-2 border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3">
                      <input type="radio" />
                      <span>Cash on Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start">
                {/* E-money number */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    placeholder="238521993"
                    className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                  />
                </div>
                {/* E-money PIN */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">
                    e-Money PIN
                  </label>
                  <input
                    type="text"
                    placeholder="6891"
                    className="border border-gray-500 rounded-lg py-3 px-5 max-sm:py-2 max-sm:px-3"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Summary */}
        <div className="p-10 max-sm:p-5 rounded-xl shadow-xl w-125 self-start max-lg:w-full">
          {/* Header */}
          <h2 className="text-[18px] font-bold mb-10 max-sm:mb-5">Summary</h2>
          {/* Added Carts */}
          {carts.length === 0 ? (
            <p className="text-center mb-10 font-bold">Cart is Empty.</p>
          ) : (
            carts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-10 max-sm:mb-5"
              >
                <div className="flex items-center gap-5 max-sm:gap-2">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2 className="max-sm:text-sm font-bold">{item.name}</h2>
                    <p className="text-gray-500 text-[14px] font-bold">
                      $ {item.price * item.qty}
                    </p>
                  </div>
                </div>
                {/* quantity */}
                <span>X{item.qty}</span>
              </div>
            ))
          )}
          {carts.length === 0 ? null : (
            <>
              {/* Total */}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-gray-500 text-[15px] font-medium">Total</h2>
                <p className="text-[18px] font-bold">
                  $
                  {carts
                    .map((item) => item.price * item.qty)
                    .reduce((a, b) => a + b, 0)
                    .toFixed(0)}
                </p>
              </div>
              {/* Shipping*/}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-gray-500 text-[15px] font-medium">
                  Shipping
                </h2>
                <p className="text-[18px] font-bold">
                  {carts.length === 0 ? "$0" : "$50"}
                </p>
              </div>
              {/* VAT*/}
              <div className="flex justify-between items-center mb-2">
                <h2 className="text-gray-500 text-[15px] font-medium">
                  VAT (INCLUDED)
                </h2>
                <p className="text-[18px] font-bold">
                  $
                  {(
                    carts
                      .map((item) => item.price * item.qty)
                      .reduce((a, b) => a + b, 0) *
                      0.2 +
                    carts
                      .map((item) => item.price * item.qty)
                      .reduce((a, b) => a + b, 0)
                  ).toFixed(0)}
                </p>
              </div>
              {/* Grand total */}
              <div className="flex justify-between items-center mb-5">
                <h2 className="text-gray-500 text-[15px] font-medium">
                  Grand Total
                </h2>
                <p className="text-[18px] font-bold">
                  $
                  {(
                    carts.reduce((a, item) => a + item.price * item.qty, 0) *
                      1.2 +
                    (carts.length === 0 ? 0 : 50)
                  ).toFixed(0)}
                </p>
              </div>
              {/* Checkout button */}
              <button
                className="text-white bg-[#D87D4A] py-3 w-full cursor-pointer"
                onClick={() => setActiveCheckout(!activeCheckout)}
              >
                CONTINUE & PAY
              </button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
export default Page;
