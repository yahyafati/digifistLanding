import styled from '@emotion/styled';
import { Swiper } from 'swiper/react';
import { breakpoints } from '../../../utils/breakpoints';

export const StyledBox = styled('div')(({ theme }) => ({
  // paddingLeft: '120px',
  paddingLeft: '16%',
  paddingRight: '24px',
  overflowX: 'hidden',

  [breakpoints.down(600)]: {
    paddingLeft: 24,
    paddingRight: 12,
  },
}));

export const StyledSwiper = styled(Swiper)(({ theme }) => ({
  overflow: 'visible',
  width: '100%',
  margin: 0,

  '& .swiper-slide': {
    width: 'auto',
    height: 'auto',
  },
}));

export const StyledCardWrapper = styled('div')({
  height: '100%',
  paddingRight: '30px',

  [breakpoints.down(600)]: {
    paddingRight: '12px',
  },
});
