import styled, {
  createGlobalStyle,
  GlobalStyleComponent,
  css
} from "styled-components";

import { Theme } from "./types";
import defaultTheme from "./default-theme";
import { Box, Typography, Container } from "@material-ui/core";
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

export const MainButton = styled.button<{ disabled?: boolean }>`
  background-color: ${({ theme, disabled }) =>
    disabled ? theme.disabled : theme.primaryColor};
  color: white;
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  height: 44px;
  font-weight: 500;
  font-size: 0.875rem;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
  margin-left: auto;
  cursor: ${({ disabled }) => (disabled ? "not-allowed" : "pointer")};
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

const goBackButtonMobile = css`
  width: 150px;
  margin: 0 auto;
  align-self: unset;
  align-content: center;
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
  ${getCssForMobileView(goBackButtonMobile)}
`;

const titleMobile = css`
  font-size: 1rem !important;
`;

export const Title = styled(Typography)`
  color: ${({ theme }) => theme.secondaryColor};
  ${getCssForMobileView(titleMobile)}
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
  color: ${({ theme }) => theme.lightColor};
`;

const topSectionContainerMobile = css`
  height: auto;
  padding-bottom: 2rem;
`;

export const TopSectionContainer = styled.div`
  height: 100px;
  display: flex;
  justify-content: center;
  background-color: ${({ theme }) => theme.primaryColor};
  ${getCssForMobileView(topSectionContainerMobile)}
`;

const titleContainerMobile = css`
  flex-direction: column;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  padding: 32px;
  justify-content: space-between;
  ${getCssForMobileView(titleContainerMobile)}
`;

export const MainSectionContainer = styled(Box)`
  padding: 2em;
`;
