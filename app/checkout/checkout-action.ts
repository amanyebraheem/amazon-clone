"use server";

import { redirect } from "next/navigation";
import {stripe} from  "../lib/stripe"

interface CartProduct {
  title: string;
  price: number;
  quantity: number;
}

export const checkoutAction = async (formData: FormData): Promise<void> => {
  const itemsJson = formData.get("cartProduct") as string;
  const cartProduct: CartProduct[] = JSON.parse(itemsJson);

  const line_items = cartProduct.map((item) => ({
    price_data: {
      currency: "usd",
      product_data: { name: item.title },
      unit_amount: Math.round(item.price * 100),
    },
    quantity: item.quantity || 1,
  }));

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items,
    mode: "payment",
    success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/success`,
    cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL}/checkout`,
  });

  redirect(session.url!);
};
