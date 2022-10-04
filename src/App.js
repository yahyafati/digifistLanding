import styled from "@emotion/styled";
import "./App.css";
import HomeContent from "./component/HomeContent";
import ImageBanner from "./component/ImageBanner";

const StyledApp = styled("div")({
    display: "flex",
    height: "100vh",
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
