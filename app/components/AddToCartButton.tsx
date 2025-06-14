'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { twMerge } from 'tailwind-merge';
import { store } from '../lib/store';
import { FaMinus, FaPlus } from 'react-icons/fa6';
import PriceFormat from './PriceFormat';
import type { Product, CartProduct } from '@/app/lib/Type';

interface Props {
  product: Product;
  className?: string;
  showSubtotal?: boolean;
}

const AddToCartButton = ({ product, className, showSubtotal = true }: Props) => {
  // هنا نستخدم CartProduct عشان فيه quantity
  const [existingProduct, setExistingProduct] = useState<CartProduct | null>(null);
  const { addToCart, cartProduct, decreaseQuantity } = store();

  useEffect(() => {
    const availableItem = cartProduct?.find((item) => item.id === product.id);
    setExistingProduct(availableItem || null);
  }, [product, cartProduct]);

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
      toast.success(`${product.title.substring(0, 12)}... added successfully!`);
    }
  };

  const handleIncrease = () => {
    addToCart(product);
    toast.success(`${product.title.substring(0, 12)}... increased!`);
  };

  const handleDecrease = () => {
    if (existingProduct && existingProduct.quantity > 1) {
      decreaseQuantity(product.id);
      toast.success(`${product.title.substring(0, 12)} decreased successfully!`);
    } else {
      toast.error('You cannot decrease below 1');
    }
  };

  return (
    <>
      {existingProduct ? (
        <div className="flex self-start items-center justify-center gap-2 py-2 mb-2">
          <button
            disabled={existingProduct.quantity === 1}
            onClick={handleDecrease}
            className={twMerge(
              'bg-[#f7f7f7] text-black p-2 border hover:border-sky-600 rounded-full text-sm hover:bg-white duration-200 cursor-pointer',
              existingProduct.quantity === 1 &&
                'bg-gray-200 text-gray-300 hover:bg-transparent hover:border-transparent'
            )}
          >
            <FaMinus />
          </button>
          <p className="text-base font-semibold w-6 text-center">{existingProduct.quantity}</p>
          <button
            onClick={handleIncrease}
            className="bg-[#f7f7f7] text-black p-2 border hover:border-sky-600 rounded-full text-sm hover:bg-white duration-200 cursor-pointer"
          >
            <FaPlus />
          </button>

          {showSubtotal && (
            <div>
              <p>Subtotal:</p>
              <PriceFormat amount={existingProduct.quantity * existingProduct.price} />
            </div>
          )}
        </div>
      ) : (
        <button
          onClick={handleAddToCart}
          className={twMerge(
            'text-sm tracking-wide font-medium mb-2 border border-[#131921]/50 py-2 rounded-full bg-[#232F3E]/10 hover:bg-[#f7ca00] duration-200',
            className
          )}
        >
          Add to cart
        </button>
      )}
    </>
  );
};

export default AddToCartButton;
