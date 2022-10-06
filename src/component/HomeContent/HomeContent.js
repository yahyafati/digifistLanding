import styled from '@emotion/styled';
import React from 'react';
import { breakpoints } from '../../utils/breakpoints';
import ProductsSwiper from './ProductsSwiper';

const StyledHomeContent = styled('div')({
  flex: 1,
  // paddingLeft: "120px",
  paddingTop: '96px',
  maxWidth: '50%',
  zIndex: 3,

  [breakpoints.down(600)]: {
    paddingTop: '0',
    maxWidth: 'unset',
    marginTop: '-189px',
  },
});

const StyledTextContentContainer = styled('div')({
  // paddingLeft: '120px',
  paddingLeft: '16%',

  [breakpoints.down(600)]: {
    padding: '0 24px 0 24px',
    color: 'white',
  },
});

const StyledHeader = styled('h1')({
  fontSize: '31.25px',
  lineHeight: '40.62px',
  maxWidth: '494px',

  marginBottom: '12px',

  [breakpoints.down(600)]: {
    fontSize: '20px',
    lineHeight: '26px',
  },
});

const StyledSubtitle = styled('p')({
  fontFamily: 'Avenir, sans-serif',
  color: '#666666',
  lineHeight: '160%',
  maxWidth: '432px',

  marginBottom: '32px',

  [breakpoints.down(600)]: {
    display: 'none',
  },
});

const StyledLink = styled('a')({
  display: 'flex',
  fontWeight: 900,
  fontSize: '12.8px',
  lineHeight: '17px',
  textTransform: 'capitalize',
  textDecoration: 'underline',
  textUnderlineOffset: '8px',
  marginBottom: '68px',

  [breakpoints.down(600)]: {
    marginBottom: '32px',
  },
});

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
