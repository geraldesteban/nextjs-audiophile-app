import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/_components/Modal";
import { useCartStore } from "@/app/store/cartStore";

type ModalCartProps = {
  activeCart: boolean;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ activeCart, setActiveCart }: ModalCartProps) {
  const carts = useCartStore((state) => state.cart);
  const clearCart = useCartStore((state) => state.clearCart);
  const increasedCart = useCartStore((state) => state.increaseQty);
  const decreasedCart = useCartStore((state) => state.decreaseQty);

  return (
    <Modal
      isOpen={activeCart}
      onClose={() => setActiveCart(!activeCart)}
      style={""}
    >
      <div className="relative max-md:mx-5">
        <div className="absolute top-40 bg-white right-30 p-10 rounded-xl shadow-xl w-125 max-xl:right-15 max-lg:right-10 max-md:right-0 max-md:w-full">
          <div className="flex justify-between items-center mb-10">
            {/* Header */}
            <h2 className="text-[18px] font-bold">
              Cart<span>({carts.length})</span>
            </h2>
            <button
              className="text-gray-500 text-[15px] underline cursor-pointer hover:text-[#D87D4A]"
              onClick={clearCart}
            >
              Remove all
            </button>
          </div>
          {/* Added Carts */}
          {carts.length === 0 ? (
            <p className="text-center font-bold">Cart is empty.</p>
          ) : (
            carts.map((item) => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-10"
              >
                <div className="flex items-center gap-5">
                  <div className="relative">
                    <Image
                      src={item.image}
                      alt={item.name}
                      width={50}
                      height={50}
                    />
                  </div>
                  <div>
                    <h2 className="text-[15px] font-bold">{item.name}</h2>
                    <p className="text-gray-500 text-[14px] font-bold">
                      $ {item.price * item.qty}
                    </p>
                  </div>
                </div>
                <div className="bg-[#F1F1F1] flex items-center gap-5 px-6 py-3">
                  <button
                    className="cursor-pointer hover:hover:text-[#D87D4A]"
                    onClick={() => decreasedCart(item.id)}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="cursor-pointer hover:text-[#D87D4A]"
                    onClick={() => increasedCart(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Checkout button */}
          {carts.length === 0 ? null : (
            <>
              {/* Total price of all carts */}
              <div className="flex justify-between items-center mb-10">
                <h2 className="text-gray-500 text-[15px] font-medium">Total</h2>
                <p className="text-[18px] font-bold">
                  $
                  {carts
                    .map((item) => item.price * item.qty)
                    .reduce((a, b) => a + b, 0)}
                </p>
              </div>
              {/*   // Checkout */}
              <Link href="/checkout" className="flex flex-col gap-5">
                <button
                  className="text-white bg-[#D87D4A] py-3 w-full cursor-pointer hover:opacity-80"
                  onClick={() => setActiveCart(!activeCart)}
                >
                  CHECKOUT
                </button>
              </Link>
            </>
          )}
        </div>
      </div>
    </Modal>
  );
}
export default Cart;
