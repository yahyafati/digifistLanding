import styled from "@emotion/styled";
import React from "react";

const StyledHomeContent = styled("div")({
    background: "yellow",
    flex: 1,
});

const HomeContent = () => {
    return <StyledHomeContent>HomeContent</StyledHomeContent>;
};

export default HomeContent;
