import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Theme, Title } from "styles";

export const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  height: 70px;
  background: ${({ theme }: { theme: Theme }) => theme.lightColor};
  border: 1px solid black;
`;

export const PageBox = styled(Box)`
  display: flex;
`;

export const MainText = styled(Title)`
  align-self: center;
`;
