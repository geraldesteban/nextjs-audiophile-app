import Logo from "@/app/_components/Logo";
import Navigation from "./_components/Navigation";
import Link from "next/link";
import Image from "next/image";
import facebook from "@/app/_assets/SocialMedia/icon-facebook.svg";
import instagram from "@/app/_assets/SocialMedia/icon-instagram.svg";
import twitter from "@/app/_assets/SocialMedia/icon-twitter.svg";

function Footer() {
  return (
    <div className="bg-[#101010] flex justify-between p-32">
      <div>
        <Logo />
        <p className="text-gray-500 text-[15px] w-[530px] mt-10 mb-20">
          Audiophile is an all in one stop to fulfill your audio needs.
          We&apos;re a small team of music lovers and sound specialists who are
          devoted to helping you get the most out of personal audio. Come and
          visit our demo facility - we&apos;re open 7 days a week.
        </p>
        <span className="text-gray-500 text-[15px]">
          Copyright 2025. All Rights Reserved
        </span>
      </div>
      <div>
        <Navigation />
        <div className="flex justify-end items-center gap-10 mt-32">
          <Link href="/">
            <Image src={facebook} quality={100} alt="Facebook" />
          </Link>
          <Link href="/">
            <Image src={instagram} quality={100} alt="Instagram" />
          </Link>
          <Link href="/">
            <Image src={twitter} quality={100} alt="Twitter" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Footer;
