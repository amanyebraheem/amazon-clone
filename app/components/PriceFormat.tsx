
interface Props {

    amount?:number;
    className?: string;


}

import React from 'react';
import { twMerge } from 'tailwind-merge';

const PriceFormat = ({amount ,className}: Props) => {

   const formatteAmount = new Number(amount).toLocaleString('en-Us',{
    style:'currency',
    currency:'USD' ,
    minimumFractionDigits:2 ,
   });
    return (
        <span className={twMerge("font-semibold" , className)}  >{formatteAmount}</span>
    );
}

export default PriceFormat;
