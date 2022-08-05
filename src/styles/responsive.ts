import {
  css,
  FlattenSimpleInterpolation,
  ThemeProps,
  Interpolation
} from "styled-components";

import { Theme } from "./types";

type ThemeInterpolation =
  | FlattenSimpleInterpolation
  | Interpolation<ThemeProps<Theme>>;

export const getCssForLargeView = (cssForLargeView: ThemeInterpolation) => css`
  @media screen and (min-width: ${({ theme }) =>
      `${theme.largeBreakPoint}${theme.breakPointUnit}`}) {
    ${cssForLargeView}
  }
`;

export const getCssForExtraLargeView = (
  cssForExtraLargeView: ThemeInterpolation
) => css`
  @media screen and (min-width: ${({ theme }) =>
      `${theme.extraLargeBreakPoint}${theme.breakPointUnit}`}) {
    ${cssForExtraLargeView}
  }
`;

export const getCssForMobileView = (cssForLargeView: ThemeInterpolation) => css`
  @media screen and (max-width: ${({ theme }) =>
      `${theme.mobileBreakPoint}${theme.breakPointUnit}`}) {
    ${cssForLargeView}
  }
`;

export const getCssForTabletView = (
  cssForTabletView: ThemeInterpolation
) => css`
  @media (min-width: ${({ theme }) =>
      `${theme.mobileBreakPoint}${theme.breakPointUnit}`}) and (max-width: ${({
      theme
    }) => `${theme.mediumBreakPoint}${theme.breakPointUnit}`}) {
    ${cssForTabletView}
  }
`;
