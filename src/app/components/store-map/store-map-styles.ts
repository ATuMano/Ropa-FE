import styled, { css } from "styled-components";
import { Box } from "@material-ui/core";
import { getCssForMobileView } from "styles/responsive";

const mapStoresContainerMobile = css`
  flex-direction: column;
  margin-bottom: 1rem;
`;
export const MapStoresContainer = styled(Box)`
  height: 85vh;
  display: flex;
  flex-direction: row;
  ${getCssForMobileView(mapStoresContainerMobile)}
`;

export const MapSection = styled(Box)`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
  margin: 40px;
  justify-content: end;
`;
