import styled from '@emotion/styled';
import { breakpoints } from '../../../utils/breakpoints';

export const StyledProductCard = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  gap: '12px',
  width: '230px',
  flexShrink: 0,
  height: '100%',

  [breakpoints.down(600)]: {
    width: '148px',
  },
});
export const StyledImageWrapper = styled('div')({
  width: '100%',
  objectFit: 'cover',
});
export const StyledImg = styled('img')({
  width: '100%',
});
export const StyledCardDetails = styled('div')({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  gap: '4px',
  fontSize: '12.8px',
  flex: 1,

  '& .name': {
    lineHeight: '160%',
  },
});
export const StyledPriceWrapper = styled('div')({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  '& .price': {
    fontWeight: '600',
  },
  '& .colors-wrapper': {
    display: 'flex',
    gap: '8px',
  },

  [breakpoints.down(600)]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 8,
  },
});

export const StyledColorSelect = styled('div')(({ color, selected }) => ({
  width: '13px',
  height: '13px',
  borderRadius: '13px',
  cursor: 'pointer',
  background: color,
  // outline: ({ selected }) => (selected ? "1px solid #000000" : ""),
  border: selected ? '1px solid #000000' : 'none',

  '& > div': {
    width: '100%',
    height: '100%',
    borderRadius: '100px',
    border: '1.5px solid #ffffff',
  },
}));
