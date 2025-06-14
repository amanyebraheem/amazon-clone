'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import img from '../assests/iconsimge.png'
import { store } from '../lib/store';


const CartButton = () => {

const {cartProduct} = store();


    return (
        <div>
          <Link href={"/cart"}
          
          className='headerItem text-xs text-gray-100  lg:inline-flex 
            relative py-2  '
          
          >
          
         <Image src={img} alt='' className='w-auto h-8 object-cover' />
         <p className='text-xs text-white font-bold mt-3'>Cart</p>
         <span className='absolute text-[#Fa8900] text-sm bottom-7 left-[29px]'>

{cartProduct?.length > 0 ? cartProduct?.length : 0}

         </span>
          </Link>
        </div>
    );
}

export default CartButton;
