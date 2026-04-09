"use client";

import { useCartStore } from "@/app/store/cartStore";

import { IoCartOutline } from "react-icons/io5";

function CartIcon() {
  const carts = useCartStore(state => state.cart);

  return (
    <div className="relative flex items-center mr-5">
      <button className="cursor-pointer">
        <IoCartOutline className="text-white text-3xl lg:hover:text-[#D87D4A] max-sm:text-2xl" />
        <span className="pointer-events-none absolute bottom-2 left-4 bg-[#D87D4A]/50 w-7 h-7 rounded-full flex items-center justify-center text-white">
          {carts.length}
        </span>
      </button>
    </div>
  );
}

export default CartIcon;
