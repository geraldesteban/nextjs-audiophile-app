import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo-black.svg";

export default function LogoBlack() {
  return (
    <Link href="/">
      <Image src={logo} quality={100} alt="audiophile logo" className="my-10" />
    </Link>
  );
}
