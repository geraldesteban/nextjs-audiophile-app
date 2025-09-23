import Image from "next/image";
import cart from "@/public/icon-cart.svg";

interface CartIconProps {
  activeCart: boolean;
  setActiveCart: React.Dispatch<React.SetStateAction<boolean>>;
}

function CartIcon({ activeCart, setActiveCart }: CartIconProps) {
  return (
    <button
      className="max-sm:ml-10 cursor-pointer"
      onClick={() => setActiveCart(!activeCart)}
    >
      <Image src={cart} quality={100} alt="Cart icon" />
    </button>
  );
}

export default CartIcon;
