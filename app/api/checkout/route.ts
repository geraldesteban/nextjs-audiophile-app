import { createOrders } from "@/app/_lib/services/createOrders";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  // Get carts details and customer details
  const { carts, customer } = await req.json();
  // PayMongo Secret Key
  const secret = process.env.PAYMONGO_SECRET_KEY;

  if (!secret) {
    return NextResponse.json(
      { error: "Missing PAYMONGO_SECRET_KEY" },
      { status: 500 },
    );
  }

  // Store to the Database
  const storeOrder = await createOrders(carts, customer);

  // STEP 2: COD FLOW
  if (customer.paymentMethod === "cod") {
    return NextResponse.json({
      success: true,
      orderId: storeOrder.id,
    });
  }

  // STEP 3: PAYMONGO
  const auth = Buffer.from(secret + ":").toString("base64");

  const response = await fetch(
    "https://api.paymongo.com/v1/checkout_sessions",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Basic ${auth}`,
      },
      body: JSON.stringify({
        data: {
          attributes: {
            line_items: carts.map((item: any) => ({
              id: item.id,
              name: item.name,
              quantity: item.qty,
              amount: item.price * 100,
              currency: "PHP",
              type: "item",
            })),

            customer_details: {
              email: customer.email,
              name: customer.name,
              phone: customer.phone,
              address: customer.address,
              zipcode: customer.zipcode,
              city: customer.city,
              country: customer.country,
              paymentMethod: customer.paymentMethod,
            },

            payment_method_types: ["gcash", "card", "paymaya"],

            success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/`,
            cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,

            metadata: {
              orderId: storeOrder.id,
            },
          },
        },
      }),
    },
  );

  const data = await response.json();

  if (!response.ok) {
    return NextResponse.json({ error: data }, { status: 400 });
  }

  return NextResponse.json({
    url: data.data.attributes.checkout_url,
    orderId: storeOrder.id,
  });
}
