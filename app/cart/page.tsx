
'use client';

import React from 'react';
import { store } from '../lib/store';
import Image from 'next/image';
import PriceFormat from '../components/PriceFormat';
import toast from 'react-hot-toast';
import { checkoutAction } from '../checkout/checkout-action';

const CartPage = () => {
  const {
    cartProduct,
    removeFromCart,
    decreaseQuantity,
    addToCart,
    resetCart,
  } = store();

  const totalPrice = cartProduct.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  if (cartProduct.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">🛒 Your shopping cart is empty</h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">🛍️ Shopping cart</h2>

      {cartProduct.map((product) => (
        <div
          key={product.id}
          className="flex items-center justify-between border p-4 rounded-md shadow-sm"
        >
          <div className="flex items-center gap-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={60}
              height={60}
              className="rounded-md"
            />
            <div>
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">
                Quantity: {product.quantity}
              </p>
              <p className="text-sm">
                Price: <PriceFormat amount={product.price} />
              </p>
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => decreaseQuantity(product.id)}
              className="px-2 py-1 border rounded text-sm"
            >
              -
            </button>
            <button
              onClick={() => addToCart(product)}
              className="px-2 py-1 border rounded text-sm"
            >
              +
            </button>
            <button
              onClick={() => {
                removeFromCart(product.id);
                toast.success('The product has been removed from the cart');
              }}
              className="px-2 py-1 bg-red-500 text-white rounded text-sm"
            >
              Delete
            </button>
          </div>
        </div>
      ))}

      <div className="text-right font-semibold text-lg">
        Total: <PriceFormat amount={totalPrice} />
      </div>

      <div>
        <button
          onClick={() => {
            resetCart();
            toast.success('Cart emptied');
          }}
          className="mt-4 px-4 py-2 bg-red-600 text-white rounded"
        >
          Empty the basket
        </button>

        <form action={checkoutAction}>
          <button
            onClick={async () => {
              const fakeFormData = new FormData();
              fakeFormData.append('cartProduct', JSON.stringify(cartProduct));
              await checkoutAction(fakeFormData);
            }}
            className="mt-4 px-4 py-2 bg-black text-white rounded"
          >
            Proceed to Payment
          </button>
        </form>
      </div>
    </div>
  );
};

export default CartPage;
