import { Card } from "@material-ui/core";
import styled from "styled-components";
import { AllowedPosition } from "./card";

const positionTop: { [key: string]: string } = {
  center: "50%",
  top: "20px",
  bottom: "80%",
};

export const TextOverlay = styled.div<{ positionText: AllowedPosition }>`
  position: absolute;
  top: ${({ positionText }) => positionTop[positionText]};
  left: 50%;
  transform: translate(-50%, -50%);
  color: black;
  font-size: 18px;
  font-weight: bold;
`;

export const CardItem = styled(Card)`
  position: relative;
  height: 250px;
  margin: 1em;
  border-radius: unset !important;
  flex: 0 0 30%;
`;
