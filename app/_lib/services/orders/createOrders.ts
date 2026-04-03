import { connectDB } from "../../config/mongodb";
import Orders from "../../models/orders";

export async function createOrders(
  carts: CartItemDetails[],
  customer: CustomerDetails,
) {
  await connectDB();

  const order = {
    orderId: crypto.randomUUID(),
    items: carts,
    customer,
    status: "pending",
  };

  const storeOrder = await Orders.create(order);

  return storeOrder;
}
