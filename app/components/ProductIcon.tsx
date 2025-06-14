'use client';

import React, { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { MdFavoriteBorder, MdFavorite } from 'react-icons/md';
import { store } from '../lib/store';
import { Product } from '../lib/Type';

const ProductIcon = ({ product }: { product: Product }) => {
  const { favoriteProduct, addToFavorite, removeFromFavorite } = store();
  const [isFavorite, setIsFavorite] = useState(false);

  useEffect(() => {
    const found = favoriteProduct.some((item) => item.id === product.id);
    setIsFavorite(found);
  }, [favoriteProduct, product.id]);

  const handleFavorite = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.preventDefault();

    if (isFavorite) {
      removeFromFavorite(product.id);
      toast.success(`"${product.title.substring(0, 10)}" removed from favorites!`);
    } else {
      addToFavorite(product);
      toast.success(`"${product.title.substring(0, 10)}" added to favorites!`);
    }
  };

  return (
    <div className='absolute top-2 right-2 flex items-center gap-2'>
      <p className='bg-transparent text-[#131921] border border-[#131921] group-hover:bg-[#131921] group-hover:text-white duration-200 text-xs rounded-full py-1 px-2'>
        {product?.discountPercentage}%
      </p>
      <span className='text-xl z-40 cursor-pointer' onClick={handleFavorite}>
        {isFavorite ? <MdFavorite className='text-red-500' /> : <MdFavoriteBorder />}
      </span>
    </div>
  );
};

export default ProductIcon;
