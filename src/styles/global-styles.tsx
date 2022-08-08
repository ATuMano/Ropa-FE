import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from "styled-components";
import { Link } from "react-router-dom";

import { ConfigModel } from "features/configuration/configuration-types";

import { Theme } from "./types";
import defaultTheme from "./default-theme";
import { getCssForMobileView } from "./responsive";
export const GlobalStyles: GlobalStyleComponent<
  { theme?: Theme },
  {}
> = createGlobalStyle`

${({ theme }: { theme?: Theme }) => css`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
    border: 0;
    margin: 0;
    padding: 0;
  }
  html,
  body {
    background: ${theme?.backgroundColor || defaultTheme.backgroundColor};
    height: 100%;
    margin: 0;
    font-size: ${theme?.fontSize || defaultTheme.fontSize};
    font-family: ${theme?.fontFamily ?? defaultTheme.fontFamily};
    font-weight: 300;
  }
`}`;

export const getTheme = ({ theme }: ConfigModel): Theme => ({
  ...defaultTheme,
  ...theme
});

export const MainAppContainer = styled.div`
  margin-top: 2em;

  ${getCssForMobileView(css`
    width: 100%;
    margin: 0;
  `)}
`;

export const ParagraphContainer = styled.div`
  margin-bottom: 40px ${getCssForMobileView(css`
      margin: 0;`)};
`;

export const Paragraph = styled.p`
  margin-block-start: 1em;
  margin-block-end: 1em;
  color: ${({ theme }) => theme.textColor};
  font-weight: 400;
  text-align: justify;
`;

export const SectionName = styled.a`
  font-weight: 700;
  color: ${({ theme }) =>
    theme.primaryColor === theme.headerBackgroundColor
      ? theme.lightColor
      : theme.primaryColor};
  display: block;
  cursor: pointer;
  text-decoration: none;
  ${getCssForMobileView(css`
    display: block;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0px 15px 0px 5px;
    font-weight: 700;
    color: #00008f;
  `)}
`;

export const StyledHeaderLink = styled(Link)`
  font-weight: 700;
  color: ${({ theme }) =>
    theme.primaryColor === theme.headerBackgroundColor
      ? theme.lightColor
      : theme.primaryColor};
  display: block;
  cursor: pointer;
  text-decoration: none;
  ${getCssForMobileView(css`
    display: block;
    width: 100%;
    margin-top: 0.5em;
    margin-bottom: 0.5em;
    padding: 0px 15px 0px 5px;
    font-weight: 700;
    color: #00008f;
  `)}
`;

export const BaseButtonLink = styled(Link)`
  cursor: pointer;
  text-decoration: none;
`;

export const BaseExternalButtonLink = styled.a`
  cursor: pointer;
  text-decoration: none;
`;

export const FieldDescription = styled.p`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 13px;
  line-height: 18px;
`;

export const FieldError = styled.p`
  font-size: 14px;
  font-weight: 600;
  color: #c91432;
`;

export const BaseH3 = styled.h3`
  font-family: PublicoHeadline;
  font-style: normal;
  font-weight: 700;
  font-size: 36px;
  line-height: 42px;
  ${getCssForMobileView(css`
    font-size: 32px;
    line-height: 37px;
  `)}
`;
