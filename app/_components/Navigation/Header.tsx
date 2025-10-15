"use client";

import { useState } from "react";
import Image from "next/image";
import menu from "@/app/_assets/Icons/icon-hamburger.svg";
import Logo from "@/app/_components/Navigation/Logo";
import Navigation from "@/app/_components/Navigation/Navigation";
import CartIcon from "@/app/_components/Navigation/CartIcon";
import Cart from "@/app/_components/Navigation/Cart";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";

function Header() {
  const [active, setActive] = useState(false);
  const [activeCart, setActiveCart] = useState(false);

  return (
    <div className="fixed w-full z-50">
      <header className="bg-black border-b border-gray-500">
        <div className="flex justify-between items-center px-32 py-10 max-xl:px-16 max-lg:px-10">
          <div className="flex items-center">
            <button
              className="cursor-pointer"
              onClick={() => setActive(!active)}
            >
              <Image
                src={menu}
                quality={100}
                alt="Menu"
                className="hidden mr-10 max-lg:block"
              />
            </button>
            <Logo />
          </div>
          <Navigation />
          <CartIcon activeCart={activeCart} setActiveCart={setActiveCart} />
        </div>
      </header>
      {/* Modal Cart */}
      <Cart activeCart={activeCart} setActiveCart={setActiveCart} />
      <div
        className={`bg-white rounded-bl-xl rounded-br-xl shadow-xl transition-all duration-1000 hidden max-lg:block ${
          active
            ? "max-lg:w-full max-lg:opacity-100"
            : "max-lg:w-[1px] max-lg:opacity-0"
        }`}
      >
        <HomeNavigation />
      </div>
    </div>
  );
}

export default Header;
