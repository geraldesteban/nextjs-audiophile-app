import Logo from "@/app/_components/Logo";
import Navigation from "@/app/_components/Navigation";
import CartIcon from "@/app/_components/Icons/CartIcon";

function Header() {
  return (
    <header className="border-b border-[#979797] bg-black">
      <div className="flex justify-between items-center px-32 py-10">
        <Logo />
        <Navigation />
        <CartIcon />
      </div>
    </header>
  );
}

export default Header;
