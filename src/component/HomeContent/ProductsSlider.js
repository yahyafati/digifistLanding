import styled from "@emotion/styled";
import React from "react";
import ProductCard from "./ProductCard";

const StyledBox = styled("div")({
    display: "flex",
    gap: "32px",
    width: "fit-content",
});

const ProductsSlider = () => {
    return (
        <StyledBox>
            <ProductCard
                img="./imgs/bg-1.png"
                name="365 Signature Hoodie"
                price="€33.95"
            />
            <ProductCard
                img="./imgs/bg-1-1.png"
                name="Organic Skinny High Waist Jeans"
                price="€33.95"
            />
            <ProductCard
                img="./imgs/bg-1-2.png"
                name="Organic Skinny High Waist Jeans"
                price="€33.95"
            />
        </StyledBox>
    );
};

export default ProductsSlider;
