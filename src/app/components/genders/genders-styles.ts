import { Box } from "@material-ui/core";
import styled, { css } from "styled-components";
import { getCssForMobileView } from "styles/responsive";

const cardContainerMobile = css`
  margin: 1em 10px;
`;

export const CardContainer = styled(Box)`
  display: flex;
  flex-wrap: wrap;
  padding: 1em;
  ${getCssForMobileView(cardContainerMobile)}
`;
