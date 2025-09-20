import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import CartIcon from "@/app/_components/Icons/CartIcon";
import menu from "@/app/_assets/Icons/icon-hamburger.svg";
import Image from "next/image";

function Header() {
  return (
    <header className="border-b border-[#979797] bg-black">
      <div className="flex justify-between items-center px-32 py-10 max-lg:px-10">
        <div className="flex items-center">
          <Image
            src={menu}
            quality={100}
            alt="Menu"
            className="z-10 hidden mr-10 max-lg:block"
          />
          <Logo />
        </div>
        <Navigation />
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
