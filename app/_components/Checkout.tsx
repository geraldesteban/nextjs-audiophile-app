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
  const clearCart = useCartStore((state) => state.clearCart);

  useEffect(() => {
    clearCart();
  }, []);

  return (
    <div className="bg-white shadow-xl p-5 rounded-xl max-sm:mx-5">
      <Image src={ConfirmIcon} alt="confirm Icon" className="mb-10" />

      <h2 className="text-3xl font-bold">THANK YOU FOR YOUR ORDER</h2>

      <p className="text-gray-500 text-[15px] font-medium mb-5">
        You will receive an email confirmation shortly.
      </p>

      <div className="flex items-stretch flex-col mb-10">
        {/* ITEMS */}
        <div className="bg-[#F1F1F1] flex flex-col rounded-tl-xl rounded-tr-xl p-5">
          {items.slice(0, 1).map((item, i) => (
            <div key={i} className="flex justify-between border-b pb-5">
              <div className="flex items-center gap-3">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />

                <div className="flex flex-col">
                  <span className="font-bold">{item.name}</span>
                  <span className="text-gray-500 font-bold">${item.price}</span>
                </div>
              </div>

              <span className="text-gray-500 font-bold">x{item.qty}</span>
            </div>
          ))}
          {orders?.[0]?.items?.length > 1 && (
            <span className="text-gray-500 text-[14px] font-bold text-center">
              and {orders[0].items.length - 1} other item
              {orders[0].items.length - 1 > 1 ? "s" : ""}
            </span>
          )}
        </div>

        {/* GRAND TOTAL */}
        <div className="bg-black flex flex-col gap-2 rounded-br-xl rounded-bl-xl p-5">
          <span className="text-gray-500 text-[15px] font-medium">
            GRAND TOTAL
          </span>

          <span className="text-white text-[18px] font-bold">
            $
            {(
              items.reduce((a, item) => a + item.price * item.qty, 0) * 1.2 +
              50
            ).toFixed(0)}
          </span>
        </div>
      </div>

      <Link href="/">
        <button className="text-white bg-[#D87D4A] py-3 w-full cursor-pointer">
          BACK TO HOME
        </button>
      </Link>
    </div>
  );
}
