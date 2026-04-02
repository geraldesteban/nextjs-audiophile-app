"use client";

import Image from "next/image";
import cart from "@/public/icon-cart.svg";
import { useCartStore } from "@/app/store/cartStore";

function CartIcon() {
  const carts = useCartStore((state) => state.cart);

  return (
    <div className="relative flex items-center mr-5">
      <button className="cursor-pointer">
        <Image src={cart} quality={100} alt="cart icon" />
        <span className="absolute bottom-1 left-3 bg-[#D87D4A]/50 w-8 h-8 rounded-full flex items-center justify-center text-white">
          {carts.length}
        </span>
      </button>
    </div>
  );
}

export default CartIcon;
