import Link from "next/link";

function Navigation() {
  return (
    <nav className="z-10">
      <ul className="text-white text-[13px] font-bold tracking-widest flex items-center gap-10">
        <li>
          <Link href="/">HOME</Link>
        </li>
        <li>
          <Link href="/">HEADPHONES</Link>
        </li>
        <li>
          <Link href="/">SPEAKERS</Link>
        </li>
        <li>
          <Link href="/">EARPHONES</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
