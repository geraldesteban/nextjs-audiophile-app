import Image from "next/image";
import Link from "next/link";
import ConfirmIcon from "@/app/_assets/Icons/icon-order-confirmation.svg";

function Checkout() {
  return (
    <div className="relative max-md:mx-5">
      <div className="bg-white shadow-xl p-10 rounded-xl w-[500px] max-md:mx-auto max-md:w-full max-md:absolute max-md:top-40">
        <Image src={ConfirmIcon} alt="Confirm Icon" className="mb-5" />
        <h2 className="text-[32px] font-bold mb-5">
          THANK YOU
          <br />
          FOR YOUR ORDER
        </h2>
        <p className="text-gray-500 text-[15px] font-medium mb-10">
          You will receive an email confirmation shortly.
        </p>
        <div className="flex items-stretch mb-10">
          {/* Item */}
          <div className="bg-[#F1F1F1] flex flex-1 flex-col gap-2 rounded-tl-xl rounded-bl-xl p-5">
            <div className="flex justify-between border-b border-gray-500 pb-3">
              <div className="flex items-center">
                <Image src="" alt="Item" />
                <div className="flex flex-col">
                  <span className="text-[15px] font-bold whitespace-nowrap">
                    XX99 MK II
                  </span>
                  <span className="text-gray-500 text-[14px] font-bold">
                    $ 2,999
                  </span>
                </div>
              </div>
              <span className="text-gray-500 text-[15px] font-bold">x1</span>
            </div>
            <span className="text-gray-500 text-[14px] font-bold text-center whitespace-nowrap">
              and 2 other item(s)
            </span>
          </div>
          {/* Grand total */}
          <div className="bg-black flex flex-1 flex-col gap-2 rounded-tr-xl rounded-br-xl p-5 place-content-center">
            <span className="text-gray-500 text-[15px] font-medium">
              GRAND TOTAL
            </span>
            <span className="text-white text-[18px] font-bold">$ 5,446</span>
          </div>
        </div>
        <Link href="/">
          <button className="text-white bg-[#D87D4A] py-3 w-full cursor-pointer">
            BACK TO HOME
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Checkout;
