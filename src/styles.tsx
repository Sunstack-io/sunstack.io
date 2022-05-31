export const breakPoints = {
  tablet: 940,
  smallTablet: 760,
  mobile: 556,
};

export const mediaQuery = (breakpoint = breakPoints.tablet) =>
  `@media screen and (max-width: ${breakpoint}px), print`;

export const mediaQueryTablet = () => mediaQuery(breakPoints.tablet);
export const mediaQuerySmallTablet = () => mediaQuery(breakPoints.smallTablet);
export const mediaQueryMobile = () => mediaQuery(breakPoints.mobile);

export const avoidBlurryImages = () => `
image-rendering: -moz-crisp-edges; /* Firefox */
image-rendering: -o-crisp-edges; /* Opera */
image-rendering: -webkit-optimize-contrast; /* Webkit (non-standard naming) */
image-rendering: crisp-edges;
-ms-interpolation-mode: nearest-neighbor; /* IE (non-standard property) */
`;
