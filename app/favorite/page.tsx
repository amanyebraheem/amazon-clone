
'use client';

import React from 'react';
import { store } from '../lib/store';
import Image from 'next/image';
import { MdFavorite } from 'react-icons/md';
import toast from 'react-hot-toast';
import PriceFormat from '../components/PriceFormat';

const FavoritePage = () => {
  const favoriteProduct = store((state) => state.favoriteProduct);
  const removeFromFavorite = store((state) => state.removeFromFavorite);

  if (favoriteProduct.length === 0) {
    return (
      <div className="p-6 text-center">
        <h2 className="text-xl font-semibold">❤️ No products in Favorites</h2>
      </div>
    );
  }

  return (
    <div className="p-6 space-y-4">
      <h2 className="text-2xl font-bold mb-4">❤️ Favorites List</h2>

      {favoriteProduct.map((product) => (
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
              className="rounded-md object-cover"
            />
            <div>
              <h3 className="font-semibold">{product.title}</h3>
              <p className="text-sm text-gray-600">
                <PriceFormat amount={product.price} />
              </p>
            </div>
          </div>

          <button
            onClick={() => {
              removeFromFavorite(product.id);
              toast.success(`"${product.title.substring(0, 20)}" removed from Favorites`);
            }}
            className="text-red-500 text-xl"
          >
            <MdFavorite />
          </button>
        </div>
      ))}
    </div>
  );
};

export default FavoritePage;
