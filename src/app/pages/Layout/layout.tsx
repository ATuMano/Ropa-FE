import React from "react";
import StickyFooter from "../footer/footer";
import Header from "../header/header";
import { LayoutContainer, MainContainer } from "./layout-styles";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      <MainContainer>{children}</MainContainer>
      <StickyFooter />
    </LayoutContainer>
  );
};

export default Layout;
