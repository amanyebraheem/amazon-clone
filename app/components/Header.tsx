"use server"
import Link from 'next/link';
import React from 'react';
import Image from 'next/image';
import logo from "../assests/logo.png"
import { FaLocationDot } from "react-icons/fa6";
import SearchInput from './SearchInput';
import SignInButton from './SignInButton';
import FavoriteButton from './FavoriteButton';
import CartButton from './CartButton';
import HeaderBottom from './HeaderBottom';

import { fetchData } from '../lib';


const Header = async () => {

const endpoint ='https://dummyjson.com/products/category-list'

const categories = await fetchData(endpoint);
  
    return (
  
<header className='sticky top-0 z-50'>


        <div className='w-full h-20 bg-[#131921] text-[#ccc]'>
<div className='h-full  w-full mx-auto  inline-flex items-center  gap-1 md:gap-3 px-4'>



           
           <Link href={"/"}>
           <Image src={logo} alt=""  className='w-28 object-cover mt-1'/>
           </Link>
          
            <div className='headerItem hidden lg:inline-flex gap-1'>
<FaLocationDot  className='text-lg text-white'  />
<div className='text-xs'>
<p>Deliver to</p>
<p className='text-white font-bold uppercase'>USA</p>
</div>

            </div>

<SearchInput categories={categories} />

<SignInButton />

<FavoriteButton />
<CartButton />

</div>
<div>
  </div>  

           


</div>

 

<HeaderBottom />

</header>
    );
}

export default Header;
