"use client";

import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import CartIcon from "@/app/_components/Icons/CartIcon";
import menu from "@/app/_assets/Icons/icon-hamburger.svg";
import Image from "next/image";
import SectionTwo from "./Home/SectionTwo";
import { useState } from "react";

function Header() {
  const [active, setActive] = useState(false);

  return (
    <div className="relative">
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
          <CartIcon />
        </div>
      </header>
      <div
        className={`absolute left-0 bg-white w-full rounded-bl-xl rounded-br-xl z-20 hidden ${
          active ? "" : "max-lg:block"
        }`}
      >
        <SectionTwo />
      </div>
    </div>
  );
}

export default Header;
