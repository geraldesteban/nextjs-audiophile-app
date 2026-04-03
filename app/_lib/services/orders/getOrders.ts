import { connectDB } from "../../config/mongodb";
import Orders from "../../models/orders";

export async function getOrders({ orderId }: { orderId: string }) {
  await connectDB();

  const data = await Orders.find(
    { orderId: orderId },
    {
      _id: 0,
      orderId: 1,
      customer: 1,
      status: 1,
      items: 1,
      createdAt: 1,
      updatedAt: 1,
    },
  ).lean();

  return data;
}
