import React from "react";
import StickyFooter from "../footer/footer";
import Header from "../header/header";
import { LayoutContainer } from "./layout-styles";

const Layout = ({ children }: any) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
      <StickyFooter />
    </LayoutContainer>
  );
};

export default Layout;
