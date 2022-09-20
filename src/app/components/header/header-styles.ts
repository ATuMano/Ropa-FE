import { Box } from "@material-ui/core";
import styled, { css } from "styled-components";
import { Theme, Title } from "styles";
import { getCssForMobileView } from "styles/responsive";

const headerContainerMobile = css`
  padding: 0;
  gap: 10px;
`;

export const HeaderContainer = styled(Box)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 17px;
  height: 70px;
  background: ${({ theme }: { theme: Theme }) => theme.lightColor};
  border: 1px solid black;
  gap: 20px;
  ${getCssForMobileView(headerContainerMobile)}
`;

export const UserInfo = styled(Box)`
  display: flex;
  flex-direction: row;
  gap: 1em;
`;

export const PageBox = styled(Box)`
  display: flex;
`;

export const MainText = styled(Title)`
  align-self: center;
`;

const shoppingCartIconMobile = css`
  width: 60px;
  margin-right: 10px;
`;

export const ShoppingCartIcon = styled.div`
  width: 53px;
  height: 50px;
  background-image: url("/assets/images/cart.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  cursor: pointer;
  ${getCssForMobileView(shoppingCartIconMobile)}
`;

export const ItemsCount = styled.div`
  position: absolute;
  bottom: 1px;
  right: 1px;
  background-color: ${({ theme }) => theme.warningColor};
  color: ${({ theme }) => theme.lightColor};
  border-radius: 10px;
  min-width: 25px;
  text-align: center;
`;
