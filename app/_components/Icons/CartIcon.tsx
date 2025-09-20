import Image from "next/image";
import cart from "@/public/icon-cart.svg";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="max-sm:ml-10">
      <Image src={cart} quality={100} alt="Cart icon" />
    </Link>
  );
}

export default Logo;
