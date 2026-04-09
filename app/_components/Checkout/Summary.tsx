"use client";

import { useCartStore } from "@/app/store/cartStore";
import Image from "next/image";

export default function Summary() {
  const carts = useCartStore(state => state.cart);

  return (
    <div className="p-5 rounded-xl shadow-xl w-100 self-start max-lg:w-full">
      <h2 className="font-bold mb-10 max-sm:mb-5 max-sm:text-sm">Summary</h2>
      {/* Added Carts */}
      {carts.length === 0 ? (
        <p className="text-center mb-10 font-bold">Cart is Empty.</p>
      ) : (
        carts.map(item => (
          <div
            key={item.id}
            className="flex justify-between items-center mb-10 gap-5 max-sm:gap-2"
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
                <h2 className="text-sm font-bold max-sm:text-xs">
                  {item.name.split(" ").slice(0, -1).join(" ")}
                </h2>
                <p className="text-gray-500 text-sm font-bold max-sm:text-xs">
                  $ {item.price * item.qty}
                </p>
              </div>
            </div>
            {/* quantity */}
            <span className="text-sm max-sm:text-xs">X{item.qty}</span>
          </div>
        ))
      )}
      {carts.length === 0 ? null : (
        <>
          {/* Total */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-gray-500 font-medium max-sm:text-sm">Total</h2>
            <p className="font-bold text-sm max-sm:text-xs">
              $
              {carts
                .map(item => item.price * item.qty)
                .reduce((a, b) => a + b, 0)
                .toFixed(0)}
            </p>
          </div>
          {/* Shipping*/}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-500 font-medium max-sm:text-sm">
              Shipping
            </h2>
            <p className="font-bold text-sm max-sm:text-xs">
              {carts.length === 0 ? "$0" : "$50"}
            </p>
          </div>
          {/* VAT*/}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-500 font-medium max-sm:text-sm">
              VAT (INCLUDED)
            </h2>
            <p className="font-bold text-sm max-sm:text-xs">
              $
              {(
                carts
                  .map(item => item.price * item.qty)
                  .reduce((a, b) => a + b, 0) *
                  0.2 +
                carts
                  .map(item => item.price * item.qty)
                  .reduce((a, b) => a + b, 0)
              ).toFixed(0)}
            </p>
          </div>
          {/* Grand total */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-gray-500 text-[15px] font-medium max-sm:text-sm">
              Grand Total
            </h2>
            <p className="font-bold text-sm max-sm:text-xs">
              $
              {(
                carts.reduce((a, item) => a + item.price * item.qty, 0) * 1.2 +
                (carts.length === 0 ? 0 : 50)
              ).toFixed(0)}
            </p>
          </div>
          {/* Checkout button */}
          <button
            className="text-white font-bold bg-[#D87D4A] py-3 w-full cursor-pointer max-sm:text-sm"
            type="submit"
          >
            CONTINUE & PAY
          </button>
        </>
      )}
    </div>
  );
}
