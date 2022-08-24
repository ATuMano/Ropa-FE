import { Box, Typography } from "@material-ui/core";
import styled from "styled-components";

export const FormContainer = styled(Box)`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

export const TitleLogin = styled(Typography)`
  color: ${({ theme }) => theme.secondaryColor};
`;

export const LinkBox = styled(Box)`
  display: flex;
  justify-content: space-between;
`;

export const MainButton = styled.button`
  background-color: ${({ theme }) => theme.primaryColor};
  color: white;
  padding: 5px 15px;
  border: 1px solid rgba(0, 0, 0, 0.23);
  height: 44px;
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.75;
  letter-spacing: 0.02857em;
  text-transform: uppercase;
`;
