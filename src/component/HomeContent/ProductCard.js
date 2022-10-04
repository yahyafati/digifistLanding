import styled from "@emotion/styled";
import React, { useState } from "react";

const StyledProductCard = styled("div")({
    display: "flex",
    flexDirection: "column",
    gap: "12px",
    width: "230px",
    flexShrink: 0,
});
const StyledImageWrapper = styled("div")({
    width: "100%",
    height: "310px",
    objectFit: "cover",
});
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

const StyledColorSelect = styled("div")(({ color, selected }) => ({
    width: "13px",
    height: "13px",
    borderRadius: "13px",
    cursor: "pointer",
    background: color,
    // outline: ({ selected }) => (selected ? "1px solid #000000" : ""),
    border: selected ? "1px solid #000000" : "none",

    "& > div": {
        width: "100%",
        height: "100%",
        borderRadius: "100px",
        border: "1.5px solid #ffffff",
    },
}));

const ColorSelect = ({ selected, color, onClick }) => {
    return (
        <StyledColorSelect selected={selected} onClick={onClick} color={color}>
            <div />
        </StyledColorSelect>
    );
};

const ProductCard = ({ img, name, price }) => {
    const [colors, setColors] = useState([
        { id: 1, color: "#99c4cc", selected: true },
        { id: 2, color: "#CC9999", selected: false },
        { id: 3, color: "#CB99CC", selected: false },
        { id: 4, color: "#A6CC99", selected: false },
    ]);

    const toggleColor = (id) => {
        const filtered = colors.map((item) => ({
            ...item,
            selected: item.id === id,
        }));
        setColors(filtered);
    };

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
                        {colors.map(({ color, id, selected }) => (
                            <ColorSelect
                                key={id}
                                selected={selected}
                                color={color}
                                onClick={() => toggleColor(id)}
                            />
                        ))}
                    </div>
                </StyledPriceWrapper>
            </StyledCardDetails>
        </StyledProductCard>
    );
};

export default ProductCard;
