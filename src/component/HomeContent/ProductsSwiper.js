import React, { useMemo } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import ProductCard from './ProductCard';

import 'swiper/css';
import 'swiper/css/bundle';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { FreeMode, Pagination } from 'swiper';
import styled from '@emotion/styled';

const StyledBox = styled('div')(({ theme }) => ({
  paddingLeft: '120px',
  paddingRight: '48px',
  overflowX: 'hidden',
}));

const StyledSwiper = styled(Swiper)(({ theme }) => ({
  overflow: 'visible',
  width: '100%',
  margin: 0,

  '& .swiper-slide': {
    width: 'auto',
  },
}));
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
      <StyledSwiper slidesPerView={'auto'} freeMode={true} showPagination={false} modules={[FreeMode]}>
        {options.map((item) => (
          <SwiperSlide>
            <div style={{ padding: '0 30px 0 0', background: '#00ffff00' }}>
              <ProductCard img={item.img} name={item.name} price={item.price} />
            </div>
          </SwiperSlide>
        ))}
      </StyledSwiper>
    </StyledBox>
  );
};

export default ProductsSwiper;
