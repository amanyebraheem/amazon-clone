'use client';

import Link from 'next/link';
import React from 'react';
import { store } from '../lib/store';

const FavoriteButton = () => {
  const favoriteProduct = store((state) => state.favoriteProduct);

  return (
    <div>
      <Link
        href="/favorite"
        className="headerItem text-xs text-gray-100 hidden lg:inline-flex flex-col justify-center items-start relative"
      >
        <p>Marked</p>
        <p className="text-white font-bold">& Favorite</p>
        <span className="absolute right-1 top-1 w-4 h-4 border border-gray-400 px-0 text-xs text-[#Fa8900] font-medium rounded-sm text-center">
          {favoriteProduct.length}
        </span>
      </Link>
    </div>
  );
};

export default FavoriteButton;
