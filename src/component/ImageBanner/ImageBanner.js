import styled from '@emotion/styled';
import React from 'react';
import { StyledGradient, StyledImageBanner, StyledImg } from './ImageBanner.styled';

const ImageBanner = () => {
  return (
    <StyledImageBanner>
      <StyledGradient />
      <StyledImg src='./imgs/bg.png' />
    </StyledImageBanner>
  );
};

export default ImageBanner;
