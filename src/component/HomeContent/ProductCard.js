import styled from "@emotion/styled";
import React from "react";

const StyledProductCard = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "230px",
});
const StyledImageWrapper = styled("div")({});
const StyledImg = styled("img")({
    width: "100%",
});
const StyledCardDetails = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "4px",
    fontSize: "12.8px",

    "& .name": {
        lineHeight: "160%",
    },
});
const StyledPriceWrapper = styled("div")({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    "& .price": {
        fontWeight: "600",
    },
    "& .colors-wrapper": {
        display: "flex",
        gap: "8px",
    },
});

const StyledColorSelect = styled("div")({
    width: "12px",
    height: "12px",
    borderRadius: "12px",
    background: "#99C4CC",
});

const ProductCard = ({ img, name, price }) => {
    return (
        <StyledProductCard>
            <StyledImageWrapper>
                <StyledImg src={img} />
            </StyledImageWrapper>
            <StyledCardDetails>
                <p className="name">{name}</p>
                <StyledPriceWrapper>
                    <p className="price">{price}</p>
                    <div className="colors-wrapper">
                        <StyledColorSelect />
                        <StyledColorSelect />
                        <StyledColorSelect />
                        <StyledColorSelect />
                        <StyledColorSelect />
                    </div>
                </StyledPriceWrapper>
            </StyledCardDetails>
        </StyledProductCard>
    );
};

export default ProductCard;
