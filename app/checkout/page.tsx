import Image from "next/image";
import Link from "next/link";
import CheckoutModal from "../_components/CheckoutModal";

function Page() {
  return (
    <div className="py-20 max-lg:py-10">
      {/* Checkout */}
      <CheckoutModal />
      <Link
        href="/headphones/productdetails"
        className="text-[15px] text-gray-500 font-medium ml-32 max-xl:ml-16 max-lg:ml-10"
      >
        Go Back
      </Link>
      {/* Checkout and Summary */}
      <div className="flex justify-between gap-10 px-32 pt-32 max-lg:pt-20 max-sm:pt-10 max-xl:px-16 max-lg:px-10 max-lg:flex-col">
        {/* Checkout */}
        <div className="flex-1 rounded-xl shadow-xl p-20 max-md:p-10">
          <h2 className="text-[32px] font-bold mb-20">CHECKOUT</h2>
          <form action="">
            {/* Billing details */}
            <div className="mb-20">
              <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                BILLING DETAILS
              </h2>
              <div className="flex justify-between items-center gap-5 mb-5 max-sm:flex-col max-sm:items-start">
                {/* Name */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">Name</label>
                  <input
                    type="text"
                    placeholder="Alexei Ward"
                    className="border border-gray-500 rounded-lg py-3 px-5"
                  />
                </div>
                {/* Email */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">
                    Email Address
                  </label>
                  <input
                    type="text"
                    placeholder="alexei@mail.com"
                    className="border border-gray-500 rounded-lg py-3 px-5"
                  />
                </div>
              </div>
              {/* Phone number */}
              <div className="flex flex-col">
                <label className="text-[12px] font-bold mb-2">
                  Phone Number
                </label>
                <input
                  type="text"
                  placeholder="+1 202-555-0136"
                  className="border border-gray-500 rounded-lg py-3 px-5"
                />
              </div>
            </div>
            {/* Shipping info */}
            <div className="mb-20">
              <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                SHIPPING INFO
              </h2>
              {/* Adress */}
              <div className="flex flex-col mb-5">
                <label className="text-[12px] font-bold mb-2">Address</label>
                <input
                  type="text"
                  placeholder="1137 Williams Avenue"
                  className="border border-gray-500 rounded-lg py-3 px-5"
                />
              </div>
              <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start max-sm:gap-0">
                {/* ZIP code */}
                <div className="flex flex-1 flex-col mb-5 w-full">
                  <label className="text-[12px] font-bold mb-2">ZIP Code</label>
                  <input
                    type="text"
                    placeholder="10001"
                    className="border border-gray-500 rounded-lg py-3 px-5"
                  />
                </div>
                {/* City */}
                <div className="flex flex-1 flex-col mb-5 w-full">
                  <label className="text-[12px] font-bold mb-2">City</label>
                  <input
                    type="text"
                    placeholder="New York"
                    className="border border-gray-500 rounded-lg py-3 px-5"
                  />
                </div>
              </div>
              {/* Country */}
              <div className="flex flex-col">
                <label className="text-[12px] font-bold mb-2">Country</label>
                <input
                  type="text"
                  placeholder="United States"
                  className="border border-gray-500 rounded-lg py-3 px-5"
                />
              </div>
            </div>
            {/* Payment details */}
            <div>
              <div className="mb-5">
                <h2 className="text-[#D87D4A] text-[13px] font-bold mb-5">
                  PAYMENT DETAILS
                </h2>
                <div className="flex justify-between gap-5 max-sm:flex-col">
                  <h2 className="flex-1">Payment Method</h2>
                  <div className="flex flex-1 flex-col gap-5">
                    <div className="flex items-center gap-5 border border-gray-500 rounded-lg py-3 px-5">
                      <input type="radio" />
                      <span>e-Money</span>
                    </div>
                    <div className="flex flex-1 items-center gap-5 border border-gray-500 rounded-lg py-3 px-5">
                      <input type="radio" />
                      <span>Cash on Delivery</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center gap-5 max-sm:flex-col max-sm:items-start">
                {/* E-money number */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">
                    e-Money Number
                  </label>
                  <input
                    type="text"
                    placeholder="238521993"
                    className="border border-gray-500 rounded-lg py-3 px-5"
                  />
                </div>
                {/* E-money PIN */}
                <div className="flex flex-1 flex-col w-full">
                  <label className="text-[12px] font-bold mb-2">
                    e-Money PIN
                  </label>
                  <input
                    type="text"
                    placeholder="6891"
                    className="border border-gray-500 rounded-lg py-3 px-5"
                  />
                </div>
              </div>
            </div>
          </form>
        </div>
        {/* Summary */}
        <div className="p-10 rounded-xl shadow-xl w-[500px] self-start max-lg:w-full">
          {/* Header */}
          <h2 className="text-[18px] font-bold mb-10">Summary</h2>
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
            {/* quantity */}
            <span>X1</span>
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
            {/* quantity */}
            <span>X2</span>
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
            {/* quantity */}
            <span>X1</span>
          </div>
          {/* Total */}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-500 text-[15px] font-medium">Total</h2>
            <p className="text-[18px] font-bold">$ 5,396</p>
          </div>
          {/* Shipping*/}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-500 text-[15px] font-medium">Shipping</h2>
            <p className="text-[18px] font-bold">$ 50</p>
          </div>
          {/* VAT*/}
          <div className="flex justify-between items-center mb-2">
            <h2 className="text-gray-500 text-[15px] font-medium">
              VAT (INCLUDED)
            </h2>
            <p className="text-[18px] font-bold">$ 1,079</p>
          </div>
          {/* Grand total */}
          <div className="flex justify-between items-center mb-5">
            <h2 className="text-gray-500 text-[15px] font-medium">
              Grand Total
            </h2>
            <p className="text-[18px] font-bold">$ 5,446</p>
          </div>
          {/* Checkout button */}
          <Link href="/checkout">
            <button className="text-white bg-[#D87D4A] py-3 w-full cursor-pointer">
              CONTINUE & PAY
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
export default Page;
