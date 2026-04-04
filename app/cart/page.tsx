"use client";

import Image from "next/image";
import Link from "next/link";

import Transition from "@/app/_components/Transition";

import { useCartStore } from "@/app/store/cartStore";

function Page() {
  const carts = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increasedCart = useCartStore((state) => state.increaseQty);
  const decreasedCart = useCartStore((state) => state.decreaseQty);

  return (
    <div className="py-20 max-lg:py-10 min-h-screen px-30 max-lg:px-5">
      <div className="mb-20 max-lg:mb-10">
        <Link
          href="/"
          className="text-gray-500 font-medium lg:hover:text-[#D87D4A]"
        >
          Go Home
        </Link>
      </div>
      <Transition>
        <div className="bg-white p-10 rounded-xl shadow-sm w-[50%] max-lg:w-full max-sm:mx-auto max-sm:p-5">
          <div className="flex justify-between items-center mb-10 gap-10">
            {/* Number of Carts */}
            <h2 className="font-bold max-sm:text-sm">
              Cart<span>({carts.length})</span>
            </h2>
            {/* Remove all orders */}
            <button
              className="text-gray-500 underline cursor-pointer lg:hover:text-[#D87D4A] max-sm:text-sm"
              onClick={clearCart}
            >
              Remove all
            </button>
          </div>
          {/* Added Carts */}
          <div className="">
            {carts.length === 0 ? (
              <p className="text-center font-bold max-sm:text-sm">
                Cart is empty.
              </p>
            ) : (
              carts.map((item) => (
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
                      <h2 className="font-bold text-sm max-sm:text-xs">
                        {item.name.split(" ").slice(0, -1).join(" ")}
                      </h2>
                      <p className="text-gray-500 font-bold text-sm max-sm:text-xs">
                        $ {item.price * item.qty}
                      </p>
                    </div>
                  </div>
                  <div className="bg-[#F1F1F1] flex items-center gap-5 px-5 py-3">
                    <button
                      className="cursor-pointer lg:hover:text-[#D87D4A]"
                      onClick={() => decreasedCart(item.id)}
                    >
                      -
                    </button>
                    <span className="text-sm max-sm:text-xs">{item.qty}</span>
                    <button
                      className="cursor-pointer lg:hover:text-[#D87D4A]"
                      onClick={() => increasedCart(item.id)}
                    >
                      +
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
          {/* Checkout button */}
          {carts.length === 0 ? null : (
            <>
              {/* Total price of all carts */}
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-gray-500 font-medium max-sm:text-sm">
                  Total
                </h2>
                <p className="font-bold text-sm max-sm:text-xs">
                  $
                  {carts
                    .map((item) => item.price * item.qty)
                    .reduce((a, b) => a + b, 0)}
                </p>
              </div>
              {/*   // Checkout */}
              <Link href="/checkout" className="flex flex-col gap-5">
                <button className="text-white font-bold bg-[#D87D4A] py-3 cursor-pointer lg:hover:opacity-80 max-sm:text-sm">
                  CHECKOUT
                </button>
              </Link>
            </>
          )}
        </div>
      </Transition>
    </div>
  );
}
export default Page;
