import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import styled from '@emotion/styled';
import { breakpoints } from '../../utils/breakpoints';

const StyledBox = styled('div')(({ theme }) => ({
  paddingLeft: '120px',
  paddingRight: '24px',
  overflowX: 'hidden',

  [breakpoints.down(600)]: {
    paddingLeft: 24,
    paddingRight: 12,
  },
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  overflow: 'visible',
  width: '100%',
  margin: 0,

  '& .swiper-slide': {
    width: 'auto',
    height: 'auto',
  },
}));

const StyledCardWrapper = styled('div')({
  height: '100%',
  paddingRight: '30px',

  [breakpoints.down(600)]: {
    paddingRight: '12px',
  },
});
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
