import Link from "next/link";

import Transition from "@/app/_components/Transition";

import Logo from "@/app/_components/Navigation/Logo";

import { FaFacebookSquare } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className="bg-[#101010] py-20 px-30 max-lg:py-10 max-lg:px-5">
      <Transition>
        <div className="flex justify-between items-center mb-10 max-lg:mb-0 max-lg:block">
          <div className="max-sm:flex max-sm:place-content-center">
            <Logo />
          </div>
          <nav className="max-lg:mt-5">
            <ul className="text-white text-sm font-bold tracking-widest flex items-center gap-5 max-lg:mb-5 max-sm:flex-col max-sm:text-center">
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
        </div>
        <p className="text-gray-500 w-132.5 mb-20 max-lg:mb-5 max-lg:w-170 max-md:w-132.5 max-sm:text-sm max-sm:text-center max-sm:w-full">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <div className="flex items-center justify-between max-sm:flex max-sm:justify-center max-sm:flex-col-reverse">
          <p className="text-gray-500 text-center text-sm">
            Copyright {new Date().getFullYear()}. All Rights Reserved.
          </p>
          <div className="flex justify-end items-center gap-5 max-sm:justify-center mb-5">
            <Link href="/">
              <FaFacebookSquare className="text-white text-2xl lg:hover:text-[#D87D4A] max-sm:text-xl" />
            </Link>
            <Link href="/">
              <FaTwitter className="text-white text-2xl lg:hover:text-[#D87D4A] max-sm:text-xl" />
            </Link>
            <Link href="/">
              <FaInstagram className="text-white text-2xl lg:hover:text-[#D87D4A] max-sm:text-xl" />
            </Link>
          </div>
        </div>
      </Transition>
    </div>
  );
}

export default Footer;
