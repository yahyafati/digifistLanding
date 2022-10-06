import React, { useMemo } from 'react';
import { SwiperSlide } from 'swiper/react';
import ProductCard from '../productCard/ProductCard';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode } from 'swiper';
import { StyledBox, StyledCardWrapper, StyledSwiper } from './ProductSwiper.styled';

const ProductsSwiper = () => {
  const options = useMemo(
    () => [
      {
        id: 1,
        img: './imgs/bg-1.png',
        name: '365 Signature Hoodie',
        price: '€33.95',
      },
      {
        id: 2,
        img: './imgs/bg-1-1.png',
        name: 'Organic Skinny High Waist Jeans',
        price: '€33.95',
      },
      {
        id: 3,
        img: './imgs/bg-1-2.png',
        name: 'Organic Skinny High Waist Jeans',
        price: '€33.95',
      },
    ],
    []
  );

  return (
    <StyledBox>
      <StyledSwiper slidesPerView={'auto'} freeMode={true} modules={[FreeMode]}>
        {options.map((item) => (
          <SwiperSlide key={item.id}>
            <StyledCardWrapper>
              <ProductCard img={item.img} name={item.name} price={item.price} />
            </StyledCardWrapper>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledBox>
  );
};

export default ProductsSwiper;
