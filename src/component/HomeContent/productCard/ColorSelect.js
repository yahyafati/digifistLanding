import { StyledColorSelect } from './ProductCard.styled';

const ColorSelect = ({ selected, color, onClick }) => {
  return (
    <StyledColorSelect selected={selected} onClick={onClick} color={color}>
      <div />
    </StyledColorSelect>
  );
};

export default ColorSelect;
