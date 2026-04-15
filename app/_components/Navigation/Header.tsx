"use client";

import Link from "next/link";
import { useState } from "react";

import Transition from "@/app/_components/Transition";

import { IoMdMenu } from "react-icons/io";

import Logo from "@/app/_components/Navigation/Logo";
import Navigation from "@/app/_components/Navigation/Navigation";
import AccountIcon from "@/app/_components/Navigation/AccountIcon";
import CartIcon from "@/app/_components/Navigation/CartIcon";
import MobileNavigation from "@/app/_components/Navigation/MobileNavigation";

function Header() {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative bg-black border-b border-gray-500 py-10 px-30 max-lg:px-5 max-sm:py-5">
      <Transition>
        <header className="flex justify-between items-center">
          {/* LEFT */}
          <div className="flex items-center max-lg:gap-5">
            <button className="cursor-pointer" onClick={() => setOpen(!open)}>
              <IoMdMenu className="hidden max-lg:block text-white text-3xl max-sm:text-xl" />
            </button>

            <div className="max-sm:hidden">
              <Logo />
            </div>
          </div>
          {/* CENTER NAV (desktop) */}
          <Navigation />
          {/* MOBILE LOGO */}
          <div className="hidden max-sm:block">
            <Logo />
          </div>
          {/* RIGHT */}
          <div className="flex items-center gap-5 max-lg:gap-2">
            <Link href="/account">
              <AccountIcon />
            </Link>
            <Link href="/cart">
              <CartIcon />
            </Link>
          </div>
        </header>
      </Transition>
      {/* MOBILE MENU */}
      <div
        className={`absolute hidden max-lg:block left-0 top-full w-full bg-white rounded-bl-xl rounded-br-xl transition-all duration-300 pt-10 shadow-xl ${
          open
            ? "opacity-100 pointer-events-auto z-50"
            : "opacity-0 pointer-events-none z-[-1]"
        } max-lg:block`}
      >
        <MobileNavigation />
      </div>
    </div>
  );
}

export default Header;
