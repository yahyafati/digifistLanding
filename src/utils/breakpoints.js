export const breakpoints = {
  down: (number) => `@media only screen and (max-width: ${number - 0.05}px)`,
  up: (number) => `@media only screen and (min-width: ${number - 0.05}px)`,
  between: (small, large) => `@media only screen and (min-width: ${small}px) and (max-width:${large}px)`,
};
