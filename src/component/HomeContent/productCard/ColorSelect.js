import { StyledColorSelect } from './ProductCard.styled';

export default ({ selected, color, onClick }) => {
  return (
    <StyledColorSelect selected={selected} onClick={onClick} color={color}>
      <div />
    </StyledColorSelect>
  );
};
