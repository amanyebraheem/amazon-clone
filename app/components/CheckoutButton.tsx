
'use client';
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";


const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2023-10-16",
});


type CartItem = {
  title: string;
  thumbnail: string;
  price: number;
  quantity: number;
};

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { items }: { items: CartItem[] } = body;

  try {
    const line_items = items.map((item: CartItem) => ({
      price_data: {
        currency: "usd",
        product_data: {
          name: item.title,
          images: [item.thumbnail],
        },
        unit_amount: Math.round(item.price * 100),
      },
      quantity: item.quantity,
    }));

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items,
      mode: "payment",
      success_url: `${req.headers.get("origin")}/success`,
      cancel_url: `${req.headers.get("origin")}/cancel`,
    });

    return NextResponse.json({ id: session.id });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
