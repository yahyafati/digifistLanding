import React from 'react';

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
  return <div>ProductsSwiper</div>;
};

export default ProductsSwiper;
