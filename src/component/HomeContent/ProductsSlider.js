import styled from "@emotion/styled";
import React from "react";
import ProductCard from "./ProductCard";

const StyledBox = styled("div")({
    display: "flex",
    gap: "32px",
});

const ProductsSlider = () => {
    return (
        <StyledBox>
            <ProductCard />
            <ProductCard />
            <ProductCard />
        </StyledBox>
    );
};

export default ProductsSlider;
