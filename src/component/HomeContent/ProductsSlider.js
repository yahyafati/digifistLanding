import styled from '@emotion/styled';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import 'swiper/css';

import ProductCard from './ProductCard';

const StyledBox = styled('div')({
  // position: "relative",
  display: 'flex',
  gap: '32px',
  width: 'calc(100% )',
  overflowX: 'auto',
  scrollbarWidth: 0,
  paddingLeft: '120px',
  paddingRight: '30px',

  '&::-webkit-scrollbar': {
    display: 'none',
  },
});

const StyledNavigationButton = styled('button')({
  alignSelf: 'center',
  minWidth: '40px',
  height: '40px',
  cursor: 'pointer',
  border: '1px solid rgba(0, 0, 0, 0.1)',
  outline: 'none',
  background: 'none',
  // border: "1px solid rgba(0, 0, 0)",

  position: 'absolute',
  top: '135px',
  zIndex: 1000,
});

const ProductsSlider = () => {
  const slider = useRef();
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(slider.current?.scrollLeft || 0);
  const [scrollStart, setScrollStart] = useState(true);
  const [scrollEnd, setScrollEnd] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const scrollValue = slider.current?.scrollLeft;
      const scrollWidth = slider.current?.scrollWidth;
      const clientWidth = slider.current?.clientWidth;
      const hasScrollbar = scrollWidth >= clientWidth;
      const width = slider.current?.offsetWidth;
      // setScrollStart(scrollValue === 0);
      // setScrollEnd(scrollWidth <= width + scrollValue);
      setScrollStart(scrollValue === 0 || !hasScrollbar);
      setScrollEnd(scrollWidth <= width + scrollValue || !hasScrollbar);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

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

  const mouseDown = (e) => {
    isDown.current = true;
    startX.current = e.pageX - slider.current?.offsetLeft;
    scrollLeft.current = slider.current?.scrollLeft;
    // console.log(slider.current?.scrollLeft);
  };

  const mouseLeave = (e) => {
    isDown.current = false;
  };
  const onMouseUp = (e) => {
    isDown.current = false;
  };
  const onMouseMove = (e) => {
    if (!isDown.current) return;
    e.preventDefault();
    const x = e.pageX - slider.current?.offsetLeft;
    const walk = (x - startX.current) * 3; //scroll-fast
    slider.current.scrollLeft = scrollLeft.current - walk;
  };

  const onScroll = (_e) => {
    const scrollValue = slider.current?.scrollLeft;
    const width = slider.current?.offsetWidth;
    const scrollWidth = slider.current?.scrollWidth;
    setScrollStart(scrollValue === 0);
    setScrollEnd(scrollWidth <= width + scrollValue);
  };

  const handleScrollBtnClick = (direction) => {
    if (direction === 'right') {
      slider.current.scrollLeft = slider.current.scrollLeft + 50;
    } else if (direction === 'left') {
      slider.current.scrollLeft = slider.current.scrollLeft - 50;
    }
  };

  return (
    <div style={{ position: 'relative' }}>
      <StyledBox
        ref={slider}
        onMouseDown={mouseDown}
        onMouseLeave={mouseLeave}
        onMouseUp={onMouseUp}
        onMouseMove={onMouseMove}
        onScroll={onScroll}
      >
        {!scrollStart && (
          <StyledNavigationButton style={{ left: '48px' }} onClick={() => handleScrollBtnClick('left')}>
            &lt;
          </StyledNavigationButton>
        )}
        {options.map((item) => (
          <ProductCard key={item.id} img={item.img} name={item.name} price={item.price} />
        ))}
        {!scrollEnd && (
          <StyledNavigationButton style={{ right: '48px' }} onClick={() => handleScrollBtnClick('right')}>
            &gt;
          </StyledNavigationButton>
        )}
      </StyledBox>
    </div>
  );
};

export default ProductsSlider;
