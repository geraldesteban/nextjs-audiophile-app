"use client";

import { useEffect } from "react";
import Checkout from "../../_components/Checkout";
import { useParams } from "next/navigation";

function Page() {
  const params = useParams();
  const orderId = params.orderId;
  console.log(orderId);
  useEffect(() => {
    if (!orderId) return;

    fetch(`/api/orders/${orderId}`)
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, [orderId]);

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Checkout />
    </div>
  );
}
export default Page;
