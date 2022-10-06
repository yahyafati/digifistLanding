import styled from '@emotion/styled';
import React from 'react';
import { breakpoints } from '../../utils/breakpoints';

const StyledImageBanner = styled('div')({
  position: 'relative',
  // background: `url("./imgs/bg.png")`,
  // backgroundPosition: "center",
  minWidth: '50%',
  flex: 1,

  [breakpoints.down(600)]: {
    width: '100%',
    height: '437px',
  },
});

const StyledImg = styled('img')({
  display: 'block',
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  [breakpoints.down(600)]: {},
});

const StyledGradient = styled('div')({
  display: 'none',

  [breakpoints.down(600)]: {
    display: 'block',
    position: 'absolute',
    zIndex: 2,
    width: '100%',
    bottom: '0',
    height: '218px',
    left: '0',
    right: '0',
    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, #000000 78.65%)',
    opacity: 0.5,
  },
});

const ImageBanner = () => {
  return (
    <StyledImageBanner>
      <StyledGradient />
      <StyledImg src='./imgs/bg.png' />
    </StyledImageBanner>
  );
};

export default ImageBanner;
