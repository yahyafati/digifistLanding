import styled from '@emotion/styled';
import { breakpoints } from '../../utils/breakpoints';

export const StyledHomeContent = styled('div')({
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

export const StyledTextContentContainer = styled('div')({
  // paddingLeft: '120px',
  paddingLeft: '16%',

  [breakpoints.down(600)]: {
    padding: '0 24px 0 24px',
    color: 'white',
  },
});

export const StyledHeader = styled('h1')({
  fontSize: '31.25px',
  lineHeight: '40.62px',
  maxWidth: '494px',

  marginBottom: '12px',

  [breakpoints.down(600)]: {
    fontSize: '20px',
    lineHeight: '26px',
  },
});

export const StyledSubtitle = styled('p')({
  fontFamily: 'Avenir, sans-serif',
  color: '#666666',
  lineHeight: '160%',
  maxWidth: '432px',

  marginBottom: '32px',

  [breakpoints.down(600)]: {
    display: 'none',
  },
});

export const StyledLink = styled('a')({
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
