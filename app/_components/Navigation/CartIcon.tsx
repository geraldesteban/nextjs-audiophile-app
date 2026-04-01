import Image from "next/image";
import cart from "@/public/icon-cart.svg";

function CartIcon() {
  return (
    <div className="relative flex items-center mr-5">
      <button className="cursor-pointer">
        <Image src={cart} quality={100} alt="cart icon" />
      </button>
    </div>
  );
}

export default CartIcon;
