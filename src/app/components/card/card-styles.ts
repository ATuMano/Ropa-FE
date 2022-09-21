import { Card } from "@material-ui/core";
import styled, { css } from "styled-components";
import { getCssForMobileView } from "styles/responsive";
import { AllowedPosition } from "./card";

const positionTop: { [key: string]: string } = {
  center: "50%",
  top: "20px",
  bottom: "80%"
};

export const TextOverlay = styled.div<{ positionText: AllowedPosition }>`
  position: absolute;
  top: ${({ positionText }) => positionTop[positionText]};
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  background-color: white;
  opacity: 0.75;
  font-size: 30px;
  font-weight: bold;
  text-align: center;
`;

const cardItemMobile = css`
  flex-basis: 100%;
  margin: 1em 0;
`;

export const CardItem = styled(Card)`
  position: relative;
  height: 300px;
  border-radius: unset !important;
  flex: 0 0 32%;
  margin: 0 0 10px 10px;
  cursor: pointer;
  border: 1px solid #0bb3be;
  ${getCssForMobileView(cardItemMobile)}
`;
