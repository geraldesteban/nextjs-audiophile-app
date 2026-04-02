"use client";

import Image from "next/image";
import Link from "next/link";
import Checkout from "../_components/Checkout";
import Modal from "@/app/_components/Modal";
import { useState } from "react";
import { useCartStore } from "../store/cartStore";
import PaymentForm from "../_components/PaymentForm";

function Page() {
  const [activeCheckout, setActiveCheckout] = useState(false);

  const carts = useCartStore((state) => state.cart);

  return (
    <div className="py-20 max-lg:py-10">
      {/* Checkout */}
      <Modal
        isOpen={activeCheckout}
        onClose={() => setActiveCheckout(!activeCheckout)}
      >
        <Checkout />
      </Modal>
      <Link
        href="/"
        className="text-[15px] text-gray-500 font-medium ml-32 mb-20 max-lg:mb-10 max-lg:ml-5 hover:text-[#D87D4A]"
      >
        Go Home
      </Link>
      {/* Checkout and Summary */}
      <div className="flex justify-between gap-10 px-30 pt-20 max-lg:pt-10 max-lg:px-5 max-lg:flex-col">
        {/* Checkout */}
        <PaymentForm />
        {/* Summary */}
        <div className="p-5 rounded-xl shadow-xl w-125 self-start max-lg:w-full">
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
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2 className="text-sm font-bold">{item.name}</h2>
                    <p className="text-gray-500 font-bold">
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
              <div className="flex justify-between items-center mb-5">
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
