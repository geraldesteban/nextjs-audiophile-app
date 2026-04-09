"use client";

import { useState } from "react";

import Image from "next/image";

import Transition from "@/app/_components/Transition";

import { ProductsProps } from "@/app/types/products";
import { useCartStore } from "@/app/store/cartStore";

function ProductDetails({ products }: ProductsProps) {
  const [count, setCount] = useState(1);
  const addToCart = useCartStore(state => state.addToCart);

  return (
    <>
      {products
        .filter(product => product.slug)
        .map(product => (
          <div key={product.id} className="flex flex-col gap-20 max-lg:gap-10">
            {/* Products Details */}
            <Transition>
              <div
                className={`flex justify-between items-center gap-10 px-30 max-lg:px-5 max-lg:flex-col`}
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
                <div className="max-lg:text-left">
                  <h2
                    className={`text-[#D87D4A] text-sm max-sm:text-xs tracking-[8px] mb-5`}
                  >
                    {product.new ? "NEW PRODUCT" : ""}
                  </h2>
                  <h2 className="text-black text-4xl font-bold mb-10 max-sm:mb-2 uppercase">
                    {product.name.split(" ").slice(0, -1).join(" ")}
                    <br />
                  </h2>
                  <p className="text-gray-500 w-90 mb-10 max-sm:text-sm max-lg:w-full max-lg:mx-auto max-sm:mb-5">
                    {product.description}
                  </p>
                  <p className="font-bold mb-10 max-sm:mb-5 max-sm:text-sm">
                    $ {product.price}
                  </p>
                  <div className="flex items-center gap-5 max-sm:gap-2">
                    <div className="bg-[#F1F1F1] flex items-center gap-5 px-7 py-3 max-sm:px-2">
                      <button
                        className="cursor-pointer hover:text-[#D87D4A]"
                        onClick={() => setCount(prev => Math.max(1, prev - 1))}
                      >
                        -
                      </button>
                      <span>{count}</span>
                      <button
                        className="cursor-pointer hover:text-[#D87D4A]"
                        onClick={() => setCount(prev => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                    <button
                      className="text-white font-bold bg-[#D87D4A] w-35 py-3 max-sm:px-2 hover:brightness-130 cursor-pointer hover:opacity-90"
                      onClick={() => {
                        addToCart({
                          id: product.id,
                          name: product.name,
                          price: product.price,
                          qty: count,
                          image: product.cart.image,
                        });
                      }}
                    >
                      ADD TO CART
                    </button>
                  </div>
                </div>
              </div>
            </Transition>
            {/* Features */}
            <Transition>
              <div className="flex justify-around px-30 max-lg:px-5 max-lg:flex-col gap-20 max-lg:gap-10">
                <div>
                  <h2 className="text-4xl font-bold mb-10 max-sm:mb-5">
                    FEATURES
                  </h2>
                  <p className="text-gray-500 w-[70%] max-lg:w-full">
                    {product.features}
                  </p>
                </div>
                <div className="flex-1">
                  <h2 className="text-4xl font-bold mb-10 max-sm:mb-5 text-nowrap">
                    IN THE BOX
                  </h2>
                  <div>
                    <ul>
                      {product.includes.map(inc => (
                        <li key={inc.item} className="text-nowrap">
                          <span className="text-[#D87D4A]">
                            {inc.quantity}x
                          </span>
                          <span className="ml-2">{inc.item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </Transition>
          </div>
        ))}
    </>
  );
}

export default ProductDetails;
