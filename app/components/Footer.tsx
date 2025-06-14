'use client'

import React from 'react';
import Container from './Container';
import { footerData } from '../conects';
import FooterMiddleList from './FooterMiddleList';

const Footer = () => {
    return (
        
            <footer className='bg-[#232f3d] text-[#ccc]}  px-7'>

            <Container className='py-10 grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4 gap--5' >
           {footerData?.map((item)=>(

            <FooterMiddleList   key={item?._id}   title={item?.title} listItem={item?.listItem}  />
           ))}
            </Container>
<div className='flex flex-col justify-center items-center bg-[#131A22] py-2'  >
<div >
<ul className='text-gray-300 text-sm gap-4 py-2 flex' >

<li className='font-normal text-[12px] hover:underline crsor-pointer text-[#DDD] leading-3'>
Conditions of Use
</li>
<li className='font-normal text-[12px] hover:underline crsor-pointer text-[#DDD] leading-3'>
    Privacy Notice
</li>


<li className='font-normal text-[12px] hover:underline crsor-pointer text-[#DDD] leading-3'>
 Your Ads   Privacy Choices
</li>


</ul>

</div>
<div>
    <p className='font-normal text-[12px] hover:underline crsor-pointer text-[#DDD] leading-3'>

1996-2024,  Amazon.com, Inc. or its affiliates
    </p>
</div>
</div>


        </footer>
    );
}

export default Footer;
