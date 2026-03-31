"use client";

import Image from "next/image";

import { ProductsProps } from "@/app/types/products";

import { useParams } from "next/navigation";
import useMoveBack from "@/app/hooks/useMoveback";
import { useCartStore } from "@/app/store/cartStore";
import { useState } from "react";

function ProductDetails({ products }: ProductsProps) {
  const [count, setCount] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const params = useParams();
  const { productName } = params;

  const moveBack = useMoveBack();

  return (
    <div className="">
      <button
        className="text-[15px] py-10 text-gray-500 font-medium ml-32 max-xl:ml-16 max-lg:ml-10 cursor-pointer hover:text-[#D87D4A]"
        onClick={moveBack}
      >
        Go Back
      </button>
      {products
        .filter((product) => product.slug === productName)
        .map((product) => (
          <div key={product.id} className="py-20">
            <div
              className={`flex justify-between items-center px-32 gap-10 max-xl:px-16 max-lg:px-10 max-lg:flex-col`}
            >
              <Image
                src={product?.image?.desktop}
                quality={100}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-xl w-[45%] max-lg:hidden"
              />
              <Image
                src={product?.image?.tablet}
                quality={100}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-xl hidden max-lg:block max-sm:hidden"
              />
              <Image
                src={product?.image?.mobile}
                quality={100}
                alt={product.name}
                width={500}
                height={500}
                className="rounded-xl hidden max-sm:block"
              />
              <div className="max-lg:text-left">
                <h2
                  className={`text-[#D87D4A] text-[14px] tracking-[8px] mb-5`}
                >
                  {product.new ? "NEW PRODUCT" : ""}
                </h2>
                <h2 className="text-black text-[40px] font-bold mb-10 max-sm:text-[28px]">
                  {product.name}
                  <br />
                </h2>
                <p className="text-gray-500 text-[15px] w-90 mb-10 max-lg:w-full">
                  {product.description}
                </p>
                <p className="text-[18px] font-bold mb-10">$ {product.price}</p>
                <div className="flex items-center gap-5">
                  <div className="bg-[#F1F1F1] flex items-center gap-5 px-6 py-3">
                    <button
                      className="cursor-pointer hover:text-[#D87D4A]"
                      onClick={() => setCount((prev) => Math.max(1, prev - 1))}
                    >
                      -
                    </button>
                    <span>{count}</span>
                    <button
                      className="cursor-pointer hover:text-[#D87D4A]"
                      onClick={() => setCount((prev) => prev + 1)}
                    >
                      +
                    </button>
                  </div>
                  <button
                    className="text-white font-bold bg-[#D87D4A] px-7 py-3 hover:brightness-130 cursor-pointer hover:opacity-90"
                    onClick={() =>
                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        qty: count,
                        image: product.cart.image,
                      })
                    }
                  >
                    ADD TO CART
                  </button>
                </div>
              </div>
            </div>
            {/* features */}
            <div className="flex justify-around gap-96 mt-52 px-32 max-xl:px-16 max-lg:flex-col max-lg:gap-36 max-lg:px-10 max-sm:mt-24">
              <div className="flex-1">
                <h2 className="text-[32px] font-bold mb-10">FEATURES</h2>
                <p className="text-[15px] text-gray-500">{product.features}</p>
              </div>
              <div className="flex-1 max-lg:flex max-lg:gap-72 max-md:gap-48 max-sm:flex-col max-sm:gap-0">
                <h2 className="text-[32px] font-bold mb-10 whitespace-nowrap">
                  IN THE BOX
                </h2>
                <div>
                  <ul>
                    {product.includes.map((inc) => (
                      <li key={inc.item} className="whitespace-nowrap">
                        <span className="text-[#D87D4A]">{inc.quantity}x</span>
                        <span className="ml-5">{inc.item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

export default ProductDetails;
