import Image from "next/image";
import Link from "next/link";
import Modal from "@/app/_components/Modal";
import { useCartStore } from "@/app/store/cartStore";

type ModalCartProps = {
  activeCart: boolean;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
};

function Cart({ activeCart, setActiveCart }: ModalCartProps) {
  const cart = useCartStore(state => state.cart);
  const clearCart = useCartStore(state => state.clearCart);
  const increasedCart = useCartStore(state => state.increaseQty);
  const decreasedCart = useCartStore(state => state.decreaseQty);

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
              Cart<span>({cart.length})</span>
            </h2>
            <button
              className="text-gray-500 text-[15px] underline cursor-pointer hover:text-red-500"
              onClick={clearCart}
            >
              Remove all
            </button>
          </div>
          {/* Added Carts */}
          {cart.length === 0 ? (
            <p className="text-center">Cart is empty.</p>
          ) : (
            cart.map(item => (
              <div
                key={item.id}
                className="flex justify-between items-center mb-10"
              >
                <div className="flex items-center">
                  <div className="relative">
                    {/* <Image src="" alt="Added Cart" /> */}
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
                    className="cursor-pointer hover:opacity-50"
                    onClick={() => decreasedCart(item.id)}
                  >
                    -
                  </button>
                  <span>{item.qty}</span>
                  <button
                    className="cursor-pointer hover:opacity-50"
                    onClick={() => increasedCart(item.id)}
                  >
                    +
                  </button>
                </div>
              </div>
            ))
          )}

          {/* Total */}
          <div className="flex justify-between items-center mb-10">
            <h2 className="text-gray-500 text-[15px] font-medium">Total</h2>
            <p className="text-[18px] font-bold">
              ${" "}
              {cart
                .map(item => item.price * item.qty)
                .reduce((a, b) => a + b, 0)}
            </p>
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
