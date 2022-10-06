import styled from '@emotion/styled';
import './App.css';
import HomeContent from './component/HomeContent';
import ImageBanner from './component/ImageBanner';
import { breakpoints } from './utils/breakpoints';

const StyledApp = styled('div')({
  display: 'flex',
  height: '100vh',
  // width: '100vw',

  [breakpoints.down(600)]: {
    flexDirection: 'column',
    height: 'unset',
  },
});
function App() {
  return (
    <StyledApp>
      <ImageBanner />
      <HomeContent />
    </StyledApp>
  );
}

export default App;
