import Image from "next/image";
import cart from "@/public/icon-cart.svg";
import { useCartStore } from "@/app/store/cartStore";

interface CartIconProps {
  activeCart: boolean;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartIcon({ activeCart, setActiveCart }: CartIconProps) {
  const carts = useCartStore((state) => state.cart);

  return (
    <div className="relative flex items-center mr-5">
      <button
        className="cursor-pointer"
        onClick={() => setActiveCart(!activeCart)}
      >
        <Image src={cart} quality={100} alt="cart icon" />
      </button>
      {cart.length === 0 ? null : (
        <span className="absolute bottom-1 left-4 bg-[#D87D4A]/50 text-white p-0.5 px-3 rounded-full">
          {carts.length}
        </span>
      )}
    </div>
  );
}

export default CartIcon;
