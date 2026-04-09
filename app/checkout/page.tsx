import Link from "next/link";

import PaymentForm from "@/app/_components/Checkout/PaymentForm";

function Page() {
  return (
    <div className="py-20 max-lg:py-10">
      <Link
        href="/cart"
        className="text-[15px] text-gray-500 font-medium ml-5 mb-20 max-lg:mb-10 lg:hover:text-[#D87D4A]"
      >
        Go Cart
      </Link>
      {/* Payment */}
      <PaymentForm />
    </div>
  );
}
export default Page;
