import { Box } from "@material-ui/core";
import styled from "styled-components";
import { Theme } from "styles";

export const HeaderContainer = styled(Box)`
  height: 60px;
  width: 100%;
  background: ${({ theme }: { theme: Theme }) => theme.lightColor};
`;