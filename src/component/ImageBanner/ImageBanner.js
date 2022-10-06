import styled from '@emotion/styled';
import React from 'react';
import { breakpoints } from '../../utils/breakpoints';

const StyledImageBanner = styled('div')({
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
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  [breakpoints.down(600)]: {},
});

const ImageBanner = () => {
  return (
    <StyledImageBanner>
      <StyledImg src='./imgs/bg.png' />
    </StyledImageBanner>
  );
};

export default ImageBanner;
