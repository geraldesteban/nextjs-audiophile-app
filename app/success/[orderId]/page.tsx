import { getOrders } from "@/app/_lib/services/orders/getOrders";

import Checkout from "@/app/_components/Checkout";

export default async function Page({
  params,
}: {
  params: { orderId: string };
}) {
  const { orderId } = await params;

  const orders = await getOrders({ orderId: orderId });

  return (
    <div className="min-h-screen flex justify-center items-center">
      <Checkout orders={orders} />
    </div>
  );
}
