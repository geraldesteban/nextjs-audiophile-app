import Image from "next/image";
import cart from "@/public/icon-cart.svg";
import { useCartStore } from "@/app/store/cartStore";

interface CartIconProps {
  activeCart: boolean;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartIcon({ activeCart, setActiveCart }: CartIconProps) {
  const carts = useCartStore(state => state.cart);

  return (
    <div className="relativeflex items-center">
      <button
        className="max-sm:ml-10 cursor-pointer"
        onClick={() => setActiveCart(!activeCart)}
      >
        <Image src={cart} quality={100} alt="Cart icon" />
      </button>
      {cart.length === 0 ? null : (
        <span className="absolute top-7 right-27 bg-[#D87D4A]/70 text-white p-0.5 px-2 rounded-full">
          {carts.length}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
