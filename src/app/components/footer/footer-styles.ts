import { Box, Container, Divider, Typography } from "@material-ui/core";
import styled from "styled-components";

export const FooterMainContainer = styled(Box)`
  background-color: ${({ theme }) => theme.secondaryColor};
`;

export const FooterContentContainer = styled(Container)``;

export const CopyrightText = styled(Typography)`
  color: white;
  text-align: end;
  padding: 5px;
`;

export const FooterLinksContainer = styled(Box)`
  display: flex;
  align-items: center;
  height: 40px;
`;

export const FooterLink = styled(Typography)`
  color: white;
  font-weight: 600 !important;
  padding: 0 5px;
  border-inline-end: 1px solid rgba(255, 255, 255, 0.15);
  &:last-child {
    border-inline-end: none;
  }
`;

export const FooterDivider = styled(Divider)`
  color: white;
`;
