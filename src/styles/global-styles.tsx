import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from "styled-components";

import { Theme } from "./types";
import defaultTheme from "./default-theme";
import { Box, Typography, Container } from "@material-ui/core";
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
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  height: 44px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`;

export const GoNextButton = styled.button`
  background-color: ${({ theme }) => theme.lightColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  height: 44px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`;

export const GoBackButton = styled.button`
  background-color: ${({ theme }) => theme.lightColor};
  color: ${({ theme }) => theme.primaryColor};
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  height: 44px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.secondaryColor};
`;

export const AuthorizationContainer = styled(Container)`
  padding: 10% 0;
`;

export const FormBox = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1em;
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
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  padding: 32px;
  justify-content: space-between;
`;

export const MainSectionContainer = styled(Box)`
  padding: 2em;
`;
