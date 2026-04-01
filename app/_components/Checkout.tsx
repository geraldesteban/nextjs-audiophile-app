import Image from "next/image";
import Link from "next/link";
import ConfirmIcon from "@/app/_assets/Icons/icon-order-confirmation.svg";
import { useCartStore } from "@/app/store/cartStore";

function Checkout() {
  const carts = useCartStore(state => state.cart);

  return (
    <div className="bg-white shadow-xl p-5 rounded-xl max-sm:mx-5">
      <Image src={ConfirmIcon} alt="confirm Icon" className="mb-10" />
      <h2 className="text-3xl font-bold">THANK YOU FOR YOUR ORDER</h2>
      <p className="text-gray-500 text-[15px] font-medium mb-5">
        You will receive an email confirmation shortly.
      </p>
      <div className="flex items-stretch flex-col mb-10">
        {/* Item */}
        {carts.slice(0, 1).map(item => (
          <div
            key={item.id}
            className="bg-[#F1F1F1] flex flex-1 flex-col rounded-tl-xl rounded-tr-xl p-5 max-sm:pt-5"
          >
            <div className="flex justify-between border-b border-gray-500 pb-5">
              <div className="flex items-center">
                <Image
                  src={item.image}
                  alt={item.name}
                  width={50}
                  height={50}
                />
                <div className="flex flex-col">
                  <span className="font-bold text-nowrap">{item.name}</span>
                  <span className="text-gray-500 font-bold">${item.price}</span>
                </div>
              </div>
              <span className="text-gray-500 font-bold">x{item.qty}</span>
            </div>
            <span className="text-gray-500 text-[14px] font-bold text-center">
              {carts.length === 1 ? null : (
                <span>
                  and {carts.length - 1} other item
                  {carts.length === 1 ? "(s)" : ""}
                </span>
              )}
            </span>
          </div>
        ))}
        {/* Grand total */}
        <div className="bg-black flex flex-1 flex-col gap-2 rounded-br-xl rounded-bl-xl p-5 place-content-center">
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
  );
}

export default Checkout;
