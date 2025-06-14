

'use client' ;
import Image from 'next/image';
import React, {  useState } from 'react';
import { Product } from '../lib/Type';


interface Props{

product:Product

}


const ProductImage = ({product}:Props) => {

const [imgUrl , setImgUrl] = useState(product?.images[0]);






    return (
     

 <div className='flex flex-start px-10'>

  <div >

            {/* rightSide */}
            {product?.images?.map((item,index)=>(

<Image 
onClick={()=>setImgUrl(item)}
src={item}
alt='productImage'
 key={index} 
 width={200} 
 height={200} 
 
 className={`w-24 h-24 object-contain cursor-pointer opacity-80 hover:opacity-100 duration-200 border border-gray-200 mb-1 bg-gray-100 p-1  ${imgUrl === item && "border-gray-500 rounded-sm opacity-100 " }`}
 />
  

            ))}
            </div>
            {/* leftSide */}
          <div className='bg-gray-100 rounded-md  ml-5 w-full max-h-[550px]'>


             <Image src={imgUrl}   alt='mainImage'
           
           width={500}
           height={500}
           className='w-full h-full  object-contain '
           />
          </div>
        


       </div>
    );
}

export default ProductImage;
