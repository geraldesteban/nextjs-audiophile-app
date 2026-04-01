"use client";

import Image from "next/image";

import { ProductsProps } from "@/app/types/products";

import { useParams } from "next/navigation";

function Gallery({ products }: ProductsProps) {
  const params = useParams();
  const { productName } = params;

  return (
    <>
      {products
        .filter(product => product.slug === productName)
        .map(product => (
          <div key={product.id}>
            {/* Desktop */}
            <div className="grid grid-cols-2 gap-10 px-30 max-lg:px-5 max-lg:grid-cols-1 max-lg:hidden">
              {/* Left side images */}
              <div className="flex flex-col gap-10">
                <div className="relative w-full">
                  <Image
                    src={product?.gallery?.first?.desktop}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    src={product?.gallery?.second?.desktop}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right side image */}
              <div className="relative w-full">
                <Image
                  src={product?.gallery?.third?.desktop}
                  alt={product.name}
                  width={1200}
                  height={1200}
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  className="rounded-xl w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Tablet */}
            <div className="hidden max-lg:grid max-sm:hidden grid-cols-2 max-lg:grid-cols-1 gap-10 px-30 max-lg:px-5">
              {/* Left side images */}
              <div className="flex flex-col gap-10">
                <div className="relative w-full">
                  <Image
                    src={product?.gallery?.first?.tablet}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    src={product?.gallery?.second?.tablet}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right image */}
              <div className="relative w-full">
                <Image
                  src={product?.gallery?.third?.tablet}
                  alt={product.name}
                  width={1200}
                  height={1200}
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  className="rounded-xl w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
            {/* Mobile */}
            <div className="hidden max-sm:grid grid-cols-2 gap-10 px-30 max-lg:px-5 max-lg:grid-cols-1 max-lg:hidden">
              {/* Left side images */}
              <div className="flex flex-col gap-10">
                <div className="relative w-full">
                  <Image
                    src={product?.gallery?.first?.mobile}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
                <div className="relative w-full">
                  <Image
                    src={product?.gallery?.second?.mobile}
                    alt={product.name}
                    width={1000}
                    height={1000}
                    quality={100}
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                    className="rounded-xl w-full h-auto object-cover"
                  />
                </div>
              </div>
              {/* Right side image */}
              <div className="relative w-full">
                <Image
                  src={product?.gallery?.third?.mobile}
                  alt={product.name}
                  width={1200}
                  height={1200}
                  quality={100}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, 50vw"
                  className="rounded-xl w-full h-full object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        ))}
    </>
  );
}

export default Gallery;
