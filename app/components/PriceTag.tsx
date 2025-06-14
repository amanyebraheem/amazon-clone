import React from 'react';
import PriceFormat from './PriceFormat';
import { twMerge } from 'tailwind-merge';


interface Props {
    regularPrice?: number ;
discountedPrice?: number;
className?: string ;
    


}

const PriceTag = ({regularPrice , discountedPrice,className }:Props) => {
    return (
        <div className={twMerge('flex items-center gap-2' , className)}>
  <PriceFormat
  className='line-through text-gray-500 font-medium '
  amount={regularPrice} />

  <PriceFormat  
  className='font-bold text-sky-600'
  amount={discountedPrice}    />
        </div>
    );
}

export default PriceTag;
