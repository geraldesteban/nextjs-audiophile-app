"use client";

import { useEffect } from "react";

import Image from "next/image";
import Link from "next/link";

import { useCartStore } from "@/app/store/cartStore";

import ConfirmIcon from "@/app/_assets/Icons/icon-order-confirmation.svg";

type Item = {
  name: string;
  price: number;
  qty: number;
  image: string;
};

type Order = {
  items: Item[];
};

export default function Checkout({ orders }: { orders: Order[] }) {
  const items = orders?.[0]?.items ?? [];
  const clearCart = useCartStore(state => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="bg-white shadow-xl p-10 max-sm:p-5 rounded-xl max-lg:mx-5">
      <Image src={ConfirmIcon} alt="confirm Icon" className="mb-10" />
      <h2 className="text-4xl font-bold mb-5">THANK YOU FOR YOUR ORDER</h2>
      <p className="text-gray-500 font-medium mb-5 max-sm:text-xs">
        You will receive an email confirmation shortly.
      </p>

      <div className="flex items-stretch flex-col mb-10">
        {/* ITEMS */}
        <div className="bg-[#F1F1F1] flex flex-col rounded-tl-xl rounded-tr-xl p-5">
          {items.slice(0, 1).map((item, i) => (
            <div key={i} className="flex justify-between border-b pb-5">
              <div className="flex items-center gap-5 max-sm:gap-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />

                <div className="flex flex-col">
                  <span className="font-bold text-sm max-sm:text-xs">
                    {item.name.split(" ").slice(0, -1).join(" ")}
                  </span>
                  <span className="text-gray-500 font-bold text-sm max-sm:text-xs">
                    ${item.price}
                  </span>
                </div>
              </div>

              <span className="text-gray-500 font-bold text-sm max-sm:text-xs">
                x{item.qty}
              </span>
            </div>
          ))}
          {orders?.[0]?.items?.length > 1 && (
            <span className="text-gray-500 font-bold text-center text-sm max-sm:text-xs mt-5">
              and {orders[0].items.length - 1} other item
              {orders[0].items.length - 1 > 1 ? "s" : ""}
            </span>
          )}
        </div>
        {/* GRAND TOTAL */}
        <div className="bg-black flex flex-col gap-2 rounded-br-xl rounded-bl-xl p-5">
          <span className="text-gray-500 font-medium max-sm:text-xs">
            GRAND TOTAL
          </span>
          <span className="text-white font-bold text-sm max-sm:text-xs">
            $
            {(
              items.reduce((a, item) => a + item.price * item.qty, 0) * 1.2 +
              50
            ).toFixed(0)}
          </span>
        </div>
      </div>
      <Link href="/">
        <button className="text-white font-bold bg-[#D87D4A] py-3 w-full cursor-pointer lg:hover:opacity-80 max-sm:text-sm">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
}
