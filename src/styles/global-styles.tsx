import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from "styled-components";

import { Theme } from "./types";
import defaultTheme from "./default-theme";
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

export const MainButton = styled.button`
  width: 153px;
  height: 46px;
  font-family: "Inter";
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 19px;
  color: ${({ theme }) => theme.primaryColor};
  background-color: ${({ theme }) => theme.lightColor};
  cursor: pointer;
  border: none;
  &:hover {
    color: ${({ theme }) => theme.lightColor};
    border: 2px solid ${({ theme }) => theme.lightColor};
    background-color: ${({ theme }) => theme.primaryColor};
  }
`;

export const Text = styled.label`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600;
  font-size: 30px;
  line-height: 38px;
  white-space: nowrap;
  color: ${({ theme }) => theme.lightColor};
`;

export const TopSectionContainer = styled.div`
  height: 180px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
`;
