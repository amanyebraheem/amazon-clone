

'use client';

import React from 'react';
import type { Product } from '@/app/lib/Type';
import Image from 'next/image';
import ProductIcon from './ProductIcon';
import PriceFormat from './PriceFormat';
import AddToCartButton from './AddToCartButton';
import Link from 'next/link';

const ProductCard = ({ product }: { product: Product }) => {
  if (!product) return null;

  return (
    <div className='border border-gray-200 bg-white overflow-hidden'>
      <div className='relative group overflow-hidden h-72'>
        <Link href={`/product/${product.id}`}>
          {product?.images?.[0] ? (
            <Image
              src={product.images[0]}
              alt='product-image'
              width={600}
              height={600}
              className='w-full h-full object-contain bg-[#f8f8f8] group-hover:scale-110 duration-200'
            />
          ) : (
            <p>No image available</p>
          )}
        </Link>

        <div>
          <ProductIcon product={product} />
        </div>
      </div>

      <div className='py-2 px-4 flex flex-col gap-2 justify-between'>
        <div className='flex flex-col gap-1'>
          <h2 className='line-clamp-1'>{product.title}</h2>
          <p className='text-sm text-[#131921] line-clamp-3'>{product.description}</p>
          <PriceFormat amount={product.price} />
          <p>
            Category: <span className='font-semibold'>{product.category}</span>
          </p>
        </div>
        <AddToCartButton product={product} />
      </div>
    </div>
  );
};

export default ProductCard;

