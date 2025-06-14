
'use client'

import Link from "next/link";
 

export default function SuccessPage() {




  return (
    <div className="text-center p-10">
      <h1 className="text-2xl font-bold text-green-600">Payment Successful!</h1>
      <p>Thank you for your purchase. Your order is being processed.</p>
      <Link href={"/"}>
        Continue Shopping
      </Link>
    </div>
  );
}
