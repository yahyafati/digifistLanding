import styled from "@emotion/styled";
import React from "react";
import ProductsSlider from "./ProductsSlider";

const StyledHomeContent = styled("div")({
    flex: 1,
    paddingLeft: "120px",
    paddingTop: "96px",
});

const StyledHeader = styled("h1")({
    fontSize: "31.25px",
    lineHeight: "40.62px",
    maxWidth: "494px",

    marginBottom: "12px",
});

const StyledSubtitle = styled("p")({
    fontFamily: "Avenir, sans-serif",
    color: "#666666",
    lineHeight: "160%",
    maxWidth: "432px",

    marginBottom: "32px",
});

const StyledLink = styled("a")({
    display: "flex",
    fontWeight: 900,
    fontSize: "12.8px",
    lineHeight: "17px",
    textTransform: "capitalize",
    textDecoration: "underline",
    textUnderlineOffset: "8px",
    marginBottom: "68px",
});

const HomeContent = () => {
    return (
        <StyledHomeContent>
            <StyledHeader>
                Everyday items, we have something to suit every occasion.
            </StyledHeader>
            <StyledSubtitle>
                At suspendisse augue lectus arcu, accumsan ut sit posuere vitae
                sit tincidunt semper eu proin leo gravida cursus.
            </StyledSubtitle>
            <StyledLink>Shop all everyday items</StyledLink>
            <ProductsSlider />
        </StyledHomeContent>
    );
};

export default HomeContent;
