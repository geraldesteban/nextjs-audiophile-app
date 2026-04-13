import { connectDB } from "@/app/_lib/config/mongodb";
import Orders from "@/app/_lib/models/orders";

export async function getUserOrders({ userId }: { userId: string }) {
  await connectDB();

  const data = await Orders.find(
    {
      userId: userId,
    },
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
