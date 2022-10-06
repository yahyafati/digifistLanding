import styled from '@emotion/styled';
import React from 'react';

const StyledImageBanner = styled('div')({
  // background: `url("./imgs/bg.png")`,
  // backgroundPosition: "center",
  minWidth: '50%',
  flex: 1,

  '@media only screen and (max-width: 600px)': {
    width: '100%',
    height: '437px',
  },
});

const StyledImg = styled('img')({
  width: '100%',
  height: '100%',
  objectFit: 'cover',

  '@media only screen and (max-width: 600px)': {},
});

const ImageBanner = () => {
  return (
    <StyledImageBanner>
      <StyledImg src='./imgs/bg.png' />
    </StyledImageBanner>
  );
};

export default ImageBanner;
