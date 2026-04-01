import Image from "next/image";
import Link from "next/link";
import ConfirmIcon from "@/app/_assets/Icons/icon-order-confirmation.svg";
import { useCartStore } from "@/app/store/cartStore";

function Checkout() {
  const carts = useCartStore((state) => state.cart);

  return (
    <div className="max-sm:mx-5">
      <div className="bg-white shadow-xl p-5 max-sm:p-5 rounded-xl w-125 max-sm:w-full max-sm:mx-auto">
        <Image src={ConfirmIcon} alt="confirm Icon" />
        <h2 className="text-3xl max-sm:text-xl font-bold">
          THANK YOU FOR YOUR ORDER
        </h2>
        <p className="text-gray-500 text-[15px] font-medium mb-5">
          You will receive an email confirmation shortly.
        </p>
        <div className="flex items-stretch mb-5">
          {/* Item */}
          <div className="bg-[#F1F1F1] flex flex-1 flex-col gap-2 rounded-tl-xl rounded-bl-xl p-5">
            <div className="flex justify-between border-b border-gray-500 pb-3">
              <div className="flex items-center">
                {/* <Image src="" alt="Item" />  */}
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
              {carts.length === 1 ? null : <span>and other item(s)</span>}
            </span>
          </div>
          {/* Grand total */}
          <div className="bg-black flex flex-1 flex-col gap-2 rounded-tr-xl rounded-br-xl p-5 place-content-center">
            <span className="text-gray-500 text-[15px] font-medium">
              GRAND TOTAL
            </span>
            <span className="text-white text-[18px] font-bold">
              $
              {(
                carts.reduce((a, item) => a + item.price * item.qty, 0) * 1.2 +
                (carts.length === 0 ? 0 : 50)
              ).toFixed(0)}
            </span>
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
