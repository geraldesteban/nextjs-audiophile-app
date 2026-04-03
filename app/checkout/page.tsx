import Image from "next/image";
import Link from "next/link";
import Checkout from "../_components/Checkout";
import PaymentForm from "../_components/PaymentForm";

function Page() {
  return (
    <div className="py-20 max-lg:py-10">
      <Link
        href="/"
        className="text-[15px] text-gray-500 font-medium ml-32 mb-20 max-lg:mb-10 max-lg:ml-5 hover:text-[#D87D4A]"
      >
        Go Home
      </Link>
      {/* Payment */}
      <PaymentForm />
    </div>
  );
}
export default Page;
