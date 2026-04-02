"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { useParams } from "next/navigation";
import { ProductsProps } from "@/app/types/products";
import useMoveBack from "@/app/hooks/useMoveback";
import { useCartStore } from "@/app/store/cartStore";

function ProductDetails({ products }: ProductsProps) {
  const [isAdding, setIsAdding] = useState(false);
  const [count, setCount] = useState(1);
  const addToCart = useCartStore((state) => state.addToCart);

  const params = useParams();
  const { productName } = params;

  const moveBack = useMoveBack();

  return (
    <div className="">
      <button
        className="text-gray-500 font-medium ml-32 mb-20 max-lg:mb-10 max-lg:ml-5 cursor-pointer hover:text-[#D87D4A]"
        onClick={moveBack}
      >
        Go Back
      </button>
      {products
        .filter((product) => product.slug === productName)
        .map((product) => (
          <div key={product.id} className="flex flex-col gap-20 max-lg:gap-10">
            <motion.div
              className={`flex justify-between items-center gap-10 px-30 max-lg:px-5 max-lg:flex-col`}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: false, amount: 0.5 }}
              transition={{ duration: 0.5 }}
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
                className="rounded-xl hidden max-lg:block max-sm:hidden"
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
                <h2 className={`text-[#D87D4A] tracking-[8px] mb-5`}>
                  {product.new ? "NEW PRODUCT" : ""}
                </h2>
                <h2 className="text-black text-4xl font-bold mb-10 max-sm:text-3xl max-sm:mb-2">
                  {product.name}
                  <br />
                </h2>
                <p className="text-gray-500 w-90 mb-10 max-lg:w-full max-lg:mx-auto max-sm:mb-5">
                  {product.description}
                </p>
                <p className="text-[18px] font-bold mb-10 max-sm:mb-5">
                  $ {product.price}
                </p>
                <div className="flex items-center gap-5 max-sm:gap-2">
                  <div className="bg-[#F1F1F1] flex items-center gap-5 px-7 py-3 max-sm:px-2">
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
                    className="text-white font-bold bg-[#D87D4A] w-35 py-3 max-sm:px-2 hover:brightness-130 cursor-pointer hover:opacity-90"
                    onClick={async () => {
                      setIsAdding(true);

                      await new Promise((resolve) => setTimeout(resolve, 500));

                      addToCart({
                        id: product.id,
                        name: product.name,
                        price: product.price,
                        qty: count,
                        image: product.cart.image,
                      });

                      setIsAdding(false);
                    }}
                  >
                    {isAdding ? "ADDING..." : "ADD TO CART"}
                  </button>
                </div>
              </div>
            </motion.div>
            {/* features */}
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
                    {product.includes.map((inc) => (
                      <li key={inc.item} className="text-nowrap">
                        <span className="text-[#D87D4A]">{inc.quantity}x</span>
                        <span className="ml-2">{inc.item}</span>
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
