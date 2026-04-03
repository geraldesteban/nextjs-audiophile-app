import { createOrders } from "@/app/_lib/services/orders/createOrders";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  try {
    // Get carts details and customer details
    const { carts, customer } = await req.json();
    console.log(carts);
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

    // For Cash on delivery (COD)
    if (customer.paymentMethod === "cod") {
      return NextResponse.json({
        success: true,
        orderId: storeOrder.orderId,
      });
    }

    // For PayMongo payment
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
                amount: item.price * 100,
                quantity: item.qty,
                image: item.image,
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

              success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success/${storeOrder.orderId}`,
              cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/cart`,

              metadata: {
                orderId: storeOrder.orderId,
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
      orderId: storeOrder.orderId,
    });
  } catch (error: any) {
    return NextResponse.json(
      {
        error: "Internal Server Error",
        message: error?.message || "Unknown error",
      },
      { status: 500 },
    );
  }
}
