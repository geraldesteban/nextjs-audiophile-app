import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/_components/Modal";

interface ModalCartProps {
  activeCart: boolean;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function Cart({ activeCart, setActiveCart }: ModalCartProps) {
  return (
    <Modal
      isOpen={activeCart}
      onClose={() => setActiveCart(!activeCart)}
      style={""}
    >
      <div className="relative max-md:mx-5">
        <div className="absolute top-40 bg-white right-30 p-10 rounded-xl shadow-xl w-[500px] max-xl:right-15 max-lg:right-10 max-md:right-0 max-md:w-full">
          <div className="flex justify-between items-center mb-10">
            {/* Header */}
            <h2 className="text-[18px] font-bold">
              Cart<span>(3)</span>
            </h2>
            <button className="text-gray-500 text-[15px] underline">
              Remove all
            </button>
          </div>
          {/* Added Carts */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <div className="relative">
                <Image src="" alt="Added Cart" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold">XX99 MK II</h2>
                <p className="text-gray-500 text-[14px] font-bold">$ 2,999</p>
              </div>
            </div>
            <div className="bg-[#F1F1F1] flex items-center gap-5 px-6 py-3">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          {/* Test one */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <div className="relative">
                <Image src="" alt="Added Cart" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold">XX99 MK II</h2>
                <p className="text-gray-500 text-[14px] font-bold">$ 2,999</p>
              </div>
            </div>
            <div className="bg-[#F1F1F1] flex items-center gap-5 px-6 py-3">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          {/* Test two */}
          <div className="flex justify-between items-center mb-10">
            <div className="flex items-center">
              <div className="relative">
                <Image src="" alt="Added Cart" />
              </div>
              <div>
                <h2 className="text-[15px] font-bold">XX99 MK II</h2>
                <p className="text-gray-500 text-[14px] font-bold">$ 2,999</p>
              </div>
            </div>
            <div className="bg-[#F1F1F1] flex items-center gap-5 px-6 py-3">
              <button>-</button>
              <span>1</span>
              <button>+</button>
            </div>
          </div>
          {/* Total */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-gray-500 text-[15px] font-medium">Total</h2>
            <p className="text-[18px] font-bold">$ 5,396</p>
          </div>
          {/* Checkout button */}
          <Link href="/checkout">
            <button
              className="text-white bg-[#D87D4A] py-3 w-full cursor-pointer"
              onClick={() => setActiveCart(!activeCart)}
            >
              CHECKOUT
            </button>
          </Link>
        </div>
      </div>
    </Modal>
  );
}
export default Cart;
