import Image from "next/image";
import Link from "next/link";
/* desktop */
import XXMARKI from "@/app/_assets/YouMayAlsoLike/desktop/image-xx99-mark-one-headphones.jpg";
import XX59 from "@/app/_assets/YouMayAlsoLike/desktop/image-xx59-headphones.jpg";
import ZX9 from "@/app/_assets/YouMayAlsoLike/desktop/image-zx9-speaker.jpg";
/* tablet */
import XXMARKITablet from "@/app/_assets/YouMayAlsoLike/tablet/image-xx99-mark-one-headphones.jpg";
import XX59Tablet from "@/app/_assets/YouMayAlsoLike/tablet/image-xx59-headphones.jpg";
import ZX9Tablet from "@/app/_assets/YouMayAlsoLike/tablet/image-zx9-speaker.jpg";
/* mobile */
import XXMARKIMobile from "@/app/_assets/YouMayAlsoLike/mobile/image-xx99-mark-one-headphones.jpg";
import XX59Mobile from "@/app/_assets/YouMayAlsoLike/mobile/image-xx59-headphones.jpg";
import ZX9Mobile from "@/app/_assets/YouMayAlsoLike/mobile/image-zx9-speaker.jpg";

function YouMayAlsoLike() {
  return (
    <div>
      <h2 className="text-center text-3xl max-sm:text-2xl font-bold mb-10 max-lg:mb-5">
        YOU MAY ALSO LIKE
      </h2>
      <div className="flex justify-between items-center gap-10 px-30 max-lg:px-5 max-lg:gap-5 max-sm:flex-col">
        <div>
          <div className="relative">
            <Image
              src={XXMARKI}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-10 w-full max-lg:hidden"
            />
            <Image
              src={XXMARKITablet}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-10 w-full hidden max-lg:block max-sm:hidden"
            />
            <Image
              src={XXMARKIMobile}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-5 w-full hidden max-sm:block"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[24px] font-bold mb-10 whitespace-nowrap max-sm:mb-5">
              XX99 MARK I
            </h2>
            <Link
              href="/"
              className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130 whitespace-nowrap"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        {/* Test one */}
        <div>
          <div className="relative">
            <Image
              src={XX59}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-10 w-full max-lg:hidden"
            />
            <Image
              src={XX59Tablet}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-10 w-full hidden max-lg:block max-sm:hidden"
            />
            <Image
              src={XX59Mobile}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-5 w-full hidden max-sm:block"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[24px] font-bold mb-10 whitespace-nowrap max-sm:mb-5">
              XX59
            </h2>
            <Link
              href="/"
              className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130 whitespace-nowrap"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
        {/* Test two */}
        <div>
          <div className="relative">
            <Image
              src={ZX9}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-10 w-full max-lg:hidden"
            />
            <Image
              src={ZX9Tablet}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-10 w-full hidden max-lg:block max-sm:hidden"
            />
            <Image
              src={ZX9Mobile}
              width={500}
              height={500}
              alt="Headphone"
              className="object-cover rounded-xl mb-5 w-full hidden max-sm:block"
            />
          </div>
          <div className="flex flex-col items-center">
            <h2 className="text-[24px] font-bold mb-10 whitespace-nowrap max-sm:mb-5">
              ZX9 SPEAKER
            </h2>
            <Link
              href="/"
              className="text-white font-bold bg-[#D87D4A] px-7 py-3 lg:hover:brightness-130 whitespace-nowrap"
            >
              SEE PRODUCT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default YouMayAlsoLike;
