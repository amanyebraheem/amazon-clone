
'use client'


interface Props{
products:Product[];
}

import React from 'react';
import Container from './Container';
import ProductCard from './ProductCard';


const ProductList = ({products}: Props) => {

    return (
        <Container className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 container'  >
         {products?.map((item)=>(
            <ProductCard key={item?.id} product={item}/>
         ))}
        </Container>
    );
}

export default ProductList;



