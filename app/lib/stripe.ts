
import Stripe from "stripe";

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  // عشان تتجاوز مشكلة النوع مؤقتًا:
  // @ts-ignore
  apiVersion: "2023-10-16",
});
