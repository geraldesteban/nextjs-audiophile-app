"use client";

import { useEffect, useState } from "react";

import Transition from "@/app/_components/Transition";
import Signout from "@/app/_components/Auth/Signout";
import Image from "next/image";

type Item = {
  name: string;
  price: number;
  qty: number;
  image: string;
};

type Order = {
  orderId: string;
  status: string;
  createdAt: string;
  items: Item[];
};

export default function Page() {
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(() => {
    const fetchOrders = async () => {
      const res = await fetch("/api/orders", {
        method: "GET",
        credentials: "include",
      });
      const data = await res.json();

      setOrders(data);
    };

    fetchOrders();
  }, []);

  return (
    <Transition>
      <div className="min-h-screen my-10 px-30 max-lg:px-5">
        <div className="flex justify-between">
          <h2 className="text-4xl font-semibold">My Account</h2>
          <Signout />
        </div>
        <div className="flex flex-col gap-10">
          {/* Orders */}
          <div>
            <h2 className="font-bold text-nowrap my-10 max-sm:text-sm">
              Order History
            </h2>
            {orders.length === 0 ? (
              <span className="max-sm:text-sm">
                You haven't placed any orders yet.
              </span>
            ) : (
              <div className="flex flex-col gap-5">
                {/* render your orders here */}
                {orders.map((order) => (
                  <div
                    key={order.orderId}
                    className="border p-5 flex flex-col gap-5"
                  >
                    {/* Status */}
                    <div className="flex items-center gap-2 max-sm:text-sm">
                      <span className="font-bold">Status:</span>
                      <span>{order.status}</span>
                    </div>
                    {/* Date Order */}
                    <div className="flex items-center gap-2 text-sm max-sm:text-xs">
                      <span>
                        {new Date(order.createdAt).toLocaleDateString("en-US", {
                          month: "2-digit",
                          day: "2-digit",
                          year: "numeric",
                        })}
                      </span>
                      <span>|</span>
                      <span>Order no. {order.orderId}</span>
                    </div>
                    {/* Orders */}
                    {order.items.map((item, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-5 max-sm:text-sm"
                      >
                        {/* Order image */}
                        <Image
                          src={item.image}
                          alt={item.name}
                          width={50}
                          height={50}
                        />
                        <div>
                          <p>{item.name}</p>
                          <div className="flex items-center gap-2">
                            <p>{item.price}</p>
                            <p>x</p>
                            <p>{item.qty}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                ))}
              </div>
            )}
          </div>
          {/* Account Details */}
          <div>
            <h2 className="font-bold text-nowrap mb-10 max-sm:text-sm">
              Account Details
            </h2>
            <ul>
              <li className="font-semibold">Name:</li>
              <li className="font-semibold">Email:</li>
              <li className="font-semibold">Phone:</li>
              <li className="font-semibold">Address:</li>
              <li className="font-semibold">Zipcode:</li>
              <li className="font-semibold">City:</li>
              <li className="font-semibold">Country:</li>
            </ul>
          </div>
        </div>
      </div>
    </Transition>
  );
}
