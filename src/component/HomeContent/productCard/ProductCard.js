import React, { useState } from 'react';
import ColorSelect from './ColorSelect';
import {
  StyledCardDetails,
  StyledImageWrapper,
  StyledImg,
  StyledPriceWrapper,
  StyledProductCard,
} from './ProductCard.styled';

const ProductCard = ({ img, name, price }) => {
  const [colors, setColors] = useState([
    { id: 1, color: '#99c4cc', selected: true },
    { id: 2, color: '#CC9999', selected: false },
    { id: 3, color: '#CB99CC', selected: false },
    { id: 4, color: '#A6CC99', selected: false },
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
        <p className='name'>{name}</p>
        <StyledPriceWrapper>
          <p className='price'>{price}</p>
          <div className='colors-wrapper'>
            {colors.map(({ color, id, selected }) => (
              <ColorSelect key={id} selected={selected} color={color} onClick={() => toggleColor(id)} />
            ))}
          </div>
        </StyledPriceWrapper>
      </StyledCardDetails>
    </StyledProductCard>
  );
};

export default ProductCard;
