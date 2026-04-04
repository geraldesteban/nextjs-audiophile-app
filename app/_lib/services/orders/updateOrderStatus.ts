import { connectDB } from "@/app/_lib/config/mongodb";
import Orders from "@/app/_lib/models/orders";

type UpdateOrderStatus = {
  orderId: string;
  status: string;
};

export async function updateOrderStatus({
  orderId,
  status,
}: UpdateOrderStatus) {
  await connectDB();

  const data = await Orders.findOneAndUpdate(
    { orderId },
    { status },
    { returnDocument: "after" },
  );

  return data;
}
