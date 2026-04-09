import Image from "next/image";
import Link from "next/link";

import Transition from "@/app/_components/Transition";

import menu from "@/app/_assets/Icons/icon-hamburger.svg";

import { MdAccountCircle } from "react-icons/md";

import Logo from "@/app/_components/Navigation/Logo";
import Navigation from "@/app/_components/Navigation/Navigation";
import CartIcon from "@/app/_components/Navigation/CartIcon";
import HomeNavigation from "@/app/_components/Home/HomeNavigation";

function Header() {
  return (
    <div className="bg-black border-b border-gray-500 py-10 px-30 max-lg:px-5 max-sm:py-5">
      <Transition>
        <header className="flex justify-between items-center">
          <div className="flex items-center max-lg:gap-5">
            <button className="cursor-pointer">
              <Image
                src={menu}
                quality={100}
                alt="Menu"
                className="hidden max-lg:block"
              />
            </button>
            <div className="max-sm:hidden">
              <Logo />
            </div>
          </div>
          <Navigation />
          <div className="hidden max-sm:block">
            <Logo />
          </div>
          <div className="flex items-center gap-5">
            <Link href="/account/login">
              <MdAccountCircle className="text-white text-3xl lg:hover:text-[#D87D4A] cursor-pointer" />
            </Link>
            <Link href="/cart">
              <CartIcon />
            </Link>
          </div>
        </header>
        <div
          className={`bg-white rounded-bl-xl rounded-br-xl shadow-xl transition-all duration-1000 hidden max-lg:block`}
        >
          <HomeNavigation />
        </div>
      </Transition>
    </div>
  );
}

export default Header;
