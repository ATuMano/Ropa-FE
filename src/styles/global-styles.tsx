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
  cursor: pointer;
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  height: 44px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  text-align: center;
  transition-duration: 0.4s;
  overflow: hidden;
  box-shadow: 0 5px 15px #193047;
  border-radius: 4px;

  &:active {
    animation: gradient 100ms;
    background: #f88;
    color: #fff;
    box-shadow: none;
  }
  @keyframes gradient {
    0% {
      background: radial-gradient(
        circle at center,
        rgba(255, 125, 125, 0) 0%,
        #fff 0%,
        #fff 100%
      );
    }
    25% {
      background: radial-gradient(
        circle at center,
        rgba(255, 125, 125, 0.3) 24%,
        #fff 25%,
        #fff 100%
      );
    }
    50% {
      background: radial-gradient(
        circle at center,
        rgba(255, 125, 125, 0.5) 49%,
        #fff 50%,
        #fff 100%
      );
    }
    75% {
      background: radial-gradient(
        circle at center,
        rgba(255, 125, 125, 0.8) 74%,
        #fff 75%,
        #fff 100%
      );
    }
    100% {
      color: #fff;
      background: radial-gradient(
        circle at center,
        #f88 99%,
        #fff 100%,
        #fff 100%
      );
    }
  }
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

export const Text = styled(Typography)`
  color: ${({ theme }) => theme.lightColor};
`;

export const TopSectionContainer = styled.div`
  height: 180px;
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
  padding: 4em 8em;
`;

export const SectionText = styled(Typography)`
  color: ${({ theme }) => theme.primaryColor};
  padding: 0.5em 2em;
  border: 1px solid black;
`;

export const ColumnTableSection = styled(Box)`
  width: 50%;
`;

export const ColumnTableText = styled(Typography)`
  color: black;
  padding: 0.5em 2em;
  border: 1px solid ${({ theme }) => theme.primaryColor};
`;
