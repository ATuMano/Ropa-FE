import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

export const StoresListContainer = styled(Box)`
  display: flex;
  overflow-y: auto;
  flex: 0 0 30%;
  flex-direction: column;
`;

export const Card = styled(Box)`
  display: flex;
  flex-direction: column;
  padding: 1rem 0 0.3rem;
  cursor: pointer;
  background-color: white;
  box-shadow: inset 0px -3px 0px #e5e5e5;
`;

export const StoreListCard = styled(Card)`
  box-shadow: inset 0px -3px 0px ${({ theme }) => theme.primaryColor};
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
  padding: 1rem;
`;

export const CardRow = styled(Box)`
  display: flex;
  align-items: center;
  margin: 0 1rem;
  padding: 5px 0;
`;

export const CardTitle = styled(Typography)`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 600 !important;
  font-size: 18px !important;
  line-height: 24px !important;
  color: #000000;
`;

export const CardText = styled(Typography)`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
`;

export const CardCircle = styled(Box)`
  display: flex;
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  border-radius: 50%;
  font-size: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 28px;
  height: 28px;
  font-weight: 700;
  margin-right: 1rem;
`;

export const IconContainer = styled(Box)`
  margin-right: 1rem;
  margin-left: 5px;
`;
