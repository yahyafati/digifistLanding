import styled from '@emotion/styled';
import './App.css';
import HomeContent from './component/HomeContent';
import ImageBanner from './component/ImageBanner';

const StyledApp = styled('div')({
  display: 'flex',
  maxHeight: '100vh',
  // width: '100vw',

  '@media only screen and (max-width: 600px)': {
    flexDirection: 'column',
    maxHeight: 'unset',
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
