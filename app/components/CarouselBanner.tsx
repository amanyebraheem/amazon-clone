
'use client';

import useEmblaCarousel from 'embla-carousel-react';
import Autoplay from 'embla-carousel-autoplay';
import Image from 'next/image';
import React from 'react';

import { products } from '../assests/product';
Autoplay.globalOptions = { delay: 8000 };

const bannerImages = [
  { title: "Banner 1", source: products.bannerimgOne },
  { title: "Banner 2", source: products.bannerimgTwo },
  { title: "Banner 3", source: products.bannerimgThree },
  { title: "Banner 4", source: products.bannerimgFour },
  { title: "Banner 5", source: products.bannerimgFive },
];

const CarouselBanner = () => {
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay()]);

  return (
    <div ref={emblaRef} className="embla overflow-hidden">
      <div className="embla__container flex ">
        {bannerImages.map((item, index) => (
          <div className="embla__slide flex-[0_0_100%]" key={index}>
            <Image
              src={item.source}
              alt={item.title}
              
              height={1080}
              className="w-full h-auto object-cover w-full"
              priority
            />
          </div>
         ))} 
      </div>

<div className='absolute top-0 left-0 inset-0 bg-gradient-to-b from-gray-900/10 via-gray-900/30  to-gray-300 dark:to-mainColor'>


</div>


    </div>
  );
};

export default CarouselBanner;
