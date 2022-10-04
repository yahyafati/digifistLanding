import styled from "@emotion/styled";
import React from "react";

const StyledImageBanner = styled("div")({
    // background: `url("./imgs/bg.png")`,
    // backgroundPosition: "center",
    background: "red",
    flex: 1,
});

const StyledImg = styled("img")({
    width: "100%",
    height: "100%",
    objectFit: "cover",
});

const ImageBanner = () => {
    return (
        <StyledImageBanner>
            <StyledImg src="./imgs/bg.png" />
        </StyledImageBanner>
    );
};

export default ImageBanner;
