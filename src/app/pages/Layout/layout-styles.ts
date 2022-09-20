import { Box } from "@material-ui/core";
import styled, { css } from "styled-components";
import { getCssForMobileView } from "styles/responsive";

const layoutContainerMobile = css`
  min-height: unset;
`;

export const LayoutContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  ${getCssForMobileView(layoutContainerMobile)}
`;

export const MainContainer = styled(Box)`
  display: flex;
  flex-direction: column;
`;
