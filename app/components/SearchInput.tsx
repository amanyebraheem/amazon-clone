

'use client';

import React, { useEffect, useState } from 'react';
import { HiOutlineSearch } from 'react-icons/hi';
import { MdOutlineClose } from 'react-icons/md';
import { fetchData } from '../lib';
import Link from 'next/link';
import { CiSearch } from 'react-icons/ci';
import { Product } from '@/app/lib/Type';

interface SearchInputProps {
  categories: string[]; // نتركها معرفة لكن لا نستخدمها
}

const SearchInput: React.FC<SearchInputProps> = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]);

  useEffect(() => {
    const getData = async () => {
      const endpoint = 'https://dummyjson.com/products';
      try {
        const data = await fetchData(endpoint);
        setProducts(data?.products || []);
      } catch (error) {
        console.error('Error fetching data', error);
      }
    };

    getData();
  }, []);

  useEffect(() => {
    const filtered = products.filter((item) =>
      item?.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchQuery, products]);

  return (
    <div className="flex-1 h-10 mx-4 hidden md:inline-flex items-center justify-between relative">
      <input
        type="text"
        placeholder="Search amazon products"
        className="w-full h-full rounded-md px-2 placeholder:text-sm text-base text-black border-[3px] bg-white border-transparent outline-none focus-visible:border-[#fba41c]"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />

      {searchQuery && (
        <MdOutlineClose
          onClick={() => setSearchQuery('')}
          className="text-xl text-[#232F3E] hover:text-red-600 absolute right-14 duration-200 cursor-pointer"
        />
      )}

      <span className="w-12 h-full bg-[#fba41c] hover:bg-[#fa8900] duration-200 cursor-pointer text-black text-2xl flex justify-center items-center rounded-tr-md rounded-br-md absolute right-0">
        <HiOutlineSearch />
      </span>

      {searchQuery && (
        <div className="absolute left-0 top-12 w-full max-h-96 bg-white rounded-md shadow-md z-50 border border-[#fa8900]/50 overflow-y-auto">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/product/${product.id}`}
                onClick={() => setSearchQuery('')}
                className="flex items-center gap-x-2 text-base font-medium hover:bg-gray-100 px-3 py-1.5"
              >
                <CiSearch className="text-lg" />
                <span>{product.title}</span>
              </Link>
            ))
          ) : (
            <p className="px-4 py-2 text-gray-500 text-sm">Nothing matched.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchInput;
