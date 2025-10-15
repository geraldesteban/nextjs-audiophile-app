import Link from "next/link";

function Navigation() {
  return (
    <nav className="max-lg:hidden">
      <ul className="text-white text-[13px] font-bold tracking-widest flex items-center gap-10 max-xl:-tracking-wider max-xl:gap-5">
        <li className="lg:hover:text-[#D87D4A]">
          <Link href="/">HOME</Link>
        </li>
        <li className="lg:hover:text-[#D87D4A]">
          <Link href="/headphones">HEADPHONES</Link>
        </li>
        <li className="lg:hover:text-[#D87D4A]">
          <Link href="/speakers">SPEAKERS</Link>
        </li>
        <li className="lg:hover:text-[#D87D4A]">
          <Link href="/earphones">EARPHONES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
