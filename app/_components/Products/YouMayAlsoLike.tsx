import Image from "next/image";
import Link from "next/link";
import Transition from "@/app/_components/Transition";

import { getHeadphones } from "@/app/_lib/services/headphones/getHeadphones";
import { getSpeakers } from "@/app/_lib/services/speakers/getSpeakers";
import { getEarphones } from "@/app/_lib/services/earphones/getEarphones";

export default async function YouMayAlsoLike({
  productName,
}: {
  productName: string;
}) {
  const headphones = await getHeadphones();
  const speakers = await getSpeakers();
  const earphones = await getEarphones();

  const base = [...headphones, ...speakers, ...earphones];

  let youMayAlsoLike = [];

  if (productName === "xx99-mark-two-headphones") {
    youMayAlsoLike = base.filter(
      (item) =>
        item.slug === "xx99-mark-one-headphones" ||
        item.slug === "xx59-headphones" ||
        item.slug === "zx9-speaker",
    );
  } else if (productName === "xx99-mark-one-headphones") {
    youMayAlsoLike = base.filter(
      (item) =>
        item.slug === "xx99-mark-two-headphones" ||
        item.slug === "xx59-headphones" ||
        item.slug === "zx9-speaker",
    );
  } else if (productName === "xx59-headphones") {
    youMayAlsoLike = base.filter(
      (item) =>
        item.slug === "xx99-mark-two-headphones" ||
        item.slug === "xx99-mark-one-headphones" ||
        item.slug === "zx9-speaker",
    );
  } else if (productName === "zx9-speaker") {
    youMayAlsoLike = base.filter(
      (item) =>
        item.slug === "zx7-speaker" ||
        item.slug === "xx99-mark-one-headphones" ||
        item.slug === "xx59-headphones",
    );
  } else if (productName === "zx7-speaker") {
    youMayAlsoLike = base.filter(
      (item) =>
        item.slug === "zx9-speaker" ||
        item.slug === "xx99-mark-one-headphones" ||
        item.slug === "xx59-headphones",
    );
  } else if (productName === "yx1-earphones") {
    youMayAlsoLike = base.filter(
      (item) =>
        item.slug === "xx99-mark-one-headphones" ||
        item.slug === "xx59-headphones" ||
        item.slug === "zx9-speaker",
    );
  } else {
    youMayAlsoLike = base;
  }

  return (
    <Transition>
      <h2 className="text-center text-4xl font-bold mb-10 max-lg:mb-5 max-sm:text-2xl">
        YOU MAY ALSO LIKE
      </h2>
      <div className="flex justify-between items-center gap-10 px-30 max-lg:px-5 max-lg:gap-5 max-lg:flex-col">
        {youMayAlsoLike?.map((item) => {
          return (
            <div key={item.slug} className="w-full">
              <Image
                src={item.image.desktop}
                width={500}
                height={500}
                alt={item.name}
                className="rounded-xl mb-10 w-full mx-auto max-lg:hidden"
              />
              <Image
                src={item.image.tablet}
                width={500}
                height={500}
                alt={item.name}
                className="rounded-xl mb-10 w-full hidden max-lg:block max-sm:hidden"
              />
              <Image
                src={item.image.mobile}
                width={500}
                height={500}
                alt={item.name}
                className="rounded-xl mb-5 w-full hidden max-sm:block"
              />
              <div className="flex flex-col items-center">
                <h2 className="text-4xl font-bold uppercase mb-10 text-nowrap max-sm:mb-5">
                  {item.name.split(" ").slice(0, -1).join(" ")}
                </h2>
                <Link
                  href={`/${item.category}/${item.slug}`}
                  className="text-white font-bold bg-[#D87D4A] px-5 py-3 lg:hover:brightness-130 whitespace-nowrap max-sm:text-sm"
                >
                  SEE PRODUCT
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </Transition>
  );
}
