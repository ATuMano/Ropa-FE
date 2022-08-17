import React from "react";
import StickyFooter from "../footer/footer";
import { LayoutContainer, MainContainer } from "./layout-styles";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <MainContainer>{children}</MainContainer>
      <StickyFooter />
    </LayoutContainer>
  );
};

export default Layout;
