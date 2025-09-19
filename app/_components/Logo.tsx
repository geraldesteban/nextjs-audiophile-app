import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";

function Logo() {
  return (
    <Link href="/" className="z-10">
      <Image src={logo} quality={100} alt="Audiophile logo" />
    </Link>
  );
}

export default Logo;
