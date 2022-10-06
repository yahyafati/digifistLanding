import React from 'react';
import ProductsSwiper from './productSwiper/ProductsSwiper';
import {
  StyledHeader,
  StyledHomeContent,
  StyledLink,
  StyledSubtitle,
  StyledTextContentContainer,
} from './HomeContent.styled';

const HomeContent = () => {
  return (
    <StyledHomeContent>
      <StyledTextContentContainer>
        <StyledHeader>Everyday items, we have something to suit every occasion.</StyledHeader>
        <StyledSubtitle>
          At suspendisse augue lectus arcu, accumsan ut sit posuere vitae sit tincidunt semper eu proin leo gravida
          cursus.
        </StyledSubtitle>
        <StyledLink>Shop all everyday items</StyledLink>
      </StyledTextContentContainer>
      {/* <ProductsSlider /> */}
      <ProductsSwiper />
    </StyledHomeContent>
  );
};

export default HomeContent;
