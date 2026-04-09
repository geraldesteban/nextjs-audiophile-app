import { Suspense } from "react";

import { getHeadphones } from "@/app/_lib/services/headphones/getHeadphones";

import Transition from "@/app/_components/Transition";

import Title from "@/app/_components/PageTitle";
import ProductsSection from "../_components/Products/ProductsSection";
import Spinner from "@/app/_components/Spinners/Spinner";

export const metadata = {
  title: "Headphones",
};

export default function Page() {
  return (
    <>
      <div className="bg-black py-20 max-md:py-10">
        <Transition>
          <Title>HEADPHONES</Title>
        </Transition>
      </div>
      <div className="py-20 max-lg:py-10">
        <Suspense
          fallback={
            <div className="min-h-screen">
              <Spinner />
            </div>
          }
        >
          <ProductsSection getData={getHeadphones} />
        </Suspense>
      </div>
    </>
  );
}
