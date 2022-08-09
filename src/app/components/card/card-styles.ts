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
  font-size: 30px;
  font-weight: bold;
`;

export const CardItem = styled(Card)`
  position: relative;
  height: 300px;
  border-radius: unset !important;
  flex: 0 0 30%;
  cursor: pointer;
  border: 1px solid #0bb3be;
`;
