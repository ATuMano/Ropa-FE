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

const titleContainerMobile = css`
  flex-direction: column;
  gap: 10px;
`;

export const TitleContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  gap: 5%;
  padding: 32px;
  ${getCssForMobileView(titleContainerMobile)}
`;

export const SelectContainer = styled.div`
  display: flex;
`;