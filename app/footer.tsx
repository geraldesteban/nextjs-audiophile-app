import Logo from "@/app/_components/Logo";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/app/_assets/SocialMedia/icon-facebook.svg";
import instagram from "@/app/_assets/SocialMedia/icon-instagram.svg";
import twitter from "@/app/_assets/SocialMedia/icon-twitter.svg";

function Footer() {
  return (
    <div className="bg-[#101010] pt-20 pb-10 px-32 max-xl:px-16 max-lg:p-10">
      <div className="flex justify-between items-center mb-10 max-lg:block">
        <div className="max-sm:flex max-sm:place-content-center">
          <Logo />
        </div>
        <nav className="max-lg:mt-10">
          <ul className="text-white text-[13px] font-bold tracking-widest flex items-center gap-10 max-xl:-tracking-wider max-xl:gap-5 max-sm:block max-sm:text-center">
            <li className="mb-5 lg:hover:text-[#D87D4A]">
              <Link href="/">HOME</Link>
            </li>
            <li className="mb-5 lg:hover:text-[#D87D4A]">
              <Link href="/headphones">HEADPHONES</Link>
            </li>
            <li className="mb-5 lg:hover:text-[#D87D4A]">
              <Link href="/speakers">SPEAKERS</Link>
            </li>
            <li className="mb-5 lg:hover:text-[#D87D4A]">
              <Link href="/earphones">EARPHONES</Link>
            </li>
          </ul>
        </nav>
      </div>
      <p className="text-gray-500 text-[15px] w-[530px] mb-20 max-lg:w-[680px] max-md:w-[530px] max-sm:text-center max-sm:w-[100%]">
        Audiophile is an all in one stop to fulfill your audio needs. We&apos;re
        a small team of music lovers and sound specialists who are devoted to
        helping you get the most out of personal audio. Come and visit our demo
        facility - we&apos;re open 7 days a week.
      </p>
      <div className="flex items-center justify-between max-sm:block max-sm:justify-center">
        <p className="text-gray-500 text-[15px] font-bold text-center">
          Copyright 2025. All Rights Reserved
        </p>
        <div className="flex justify-end items-center gap-10 max-lg:gap-5 max-sm:justify-center max-sm:mt-10">
          <Link href="/">
            <Image
              src={facebook}
              quality={100}
              alt="Facebook"
              className="text-[#D87D4A]"
            />
          </Link>
          <Link href="/">
            <Image
              src={instagram}
              quality={100}
              alt="Instagram"
              className="text-[#D87D4A]"
            />
          </Link>
          <Link href="/">
            <Image
              src={twitter}
              quality={100}
              alt="Twitter"
              className="text-[#D87D4A]"
            />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
