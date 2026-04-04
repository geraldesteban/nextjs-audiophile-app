import Image from "next/image";
import Link from "next/link";

import { ProductsProps } from "@/app/types/products";

import Transition from "@/app/_components/Transition";

function Products({ products }: ProductsProps) {
  return (
    <div className="flex flex-col gap-10 mb-10">
      {products.map((product, i) => (
        <Transition key={i}>
          <div
            className={`flex justify-between items-center px-30 max-lg:px-10 gap-10 max-lg:gap-5 ${
              i + 1 === 2 ? "flex-row-reverse" : ""
            } max-lg:flex-col`}
          >
            <Image
              src={product?.image?.desktop}
              quality={100}
              alt={product.name}
              width={500}
              height={500}
              priority
              className="rounded-xl w-[50%] max-lg:hidden"
            />
            <Image
              src={product?.image?.tablet}
              quality={100}
              alt={product.name}
              width={500}
              height={500}
              priority
              className="rounded-xl hidden max-lg:block w-full max-sm:hidden"
            />
            <Image
              src={product?.image?.mobile}
              quality={100}
              alt={product.name}
              width={500}
              height={500}
              priority
              className="rounded-xl hidden w-full max-sm:block"
            />
            <div className="max-lg:text-center mb-10">
              <h2
                className={`text-[#D87D4A] text-sm tracking-[8px] mb-5 max-sm:text-xs ${
                  product.new ? "block" : "hidden"
                }`}
              >
                NEW PRODUCT
              </h2>
              <h2 className="text-black text-4xl font-bold mb-10 max-sm:mb-2 uppercase">
                {product.name.split(" ").slice(0, -1).join(" ")}
              </h2>
              <p className="text-gray-500 w-90 mb-10 max-sm:text-sm max-lg:w-full max-lg:mx-auto max-sm:mb-5">
                {product.description}
              </p>
              <Link
                href={`/${product.category}/${product?.slug}`}
                className="text-white font-bold bg-[#D87D4A] px-5 py-3 lg:hover:brightness-130 max-sm:text-sm"
              >
                SEE PRODUCT
              </Link>
            </div>
          </div>
        </Transition>
      ))}
    </div>
  );
}

export default Products;
