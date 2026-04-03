import { updateOrderStatus } from "@/app/_lib/services/orders/updateOrderStatus";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const event = body?.data?.attributes?.type;

    const orderId = body?.data?.attributes?.data?.attributes?.metadata?.orderId;

    const isPaidEvent =
      event === "checkout_session.payment.paid" || event === "payment.paid";

    if (isPaidEvent) {
      if (orderId) {
        await updateOrderStatus({
          orderId,
          status: "paid",
        });
      }
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    return NextResponse.json({ error: "Webhook error" }, { status: 400 });
  }
}
