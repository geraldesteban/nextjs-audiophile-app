import { connectDB } from "../../config/mongodb";
import Orders from "../../models/orders";

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

  console.log("DB UPDATE RESULT:", data);

  return data;
}
