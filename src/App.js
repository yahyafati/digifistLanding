import styled from '@emotion/styled';
import './App.css';
import HomeContent from './component/HomeContent';
import ImageBanner from './component/ImageBanner';

const StyledApp = styled('div')({
  display: 'flex',
  maxHeight: '100vh',
  // width: '100vw',
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
