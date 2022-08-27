import { Typography, Box } from "@material-ui/core";
import styled from "styled-components";

export const ProductSection = styled(Box)`
  display: flex;
  justify-content: space-between;
  padding: 1.5em 2em;
`;

export const ProductDetailSection = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 0.5em;
`;

export const ProductPriceSection = styled(Box)`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TotlaSectionText = styled(Typography)`
  color: black;
  padding: 0.5em 2em;
  border: 1px solid ${({ theme }) => theme.primaryColor};
`;

export const ProductText = styled(Typography)`
  color: ${({ theme }) => theme.darkColor};
`;

export const ProductDetailText = styled(Typography)`
  color: ${({ theme }) => theme.greyColor};
`;