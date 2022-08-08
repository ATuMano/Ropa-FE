import * as React from "react";
import {
  CopyrightText,
  FooterContentContainer,
  FooterDivider,
  FooterLink,
  FooterLinksContainer,
  FooterMainContainer,
} from "./footer-styles";

const Copyright = () => {
  return (
    <CopyrightText variant="body2">
      {new Date().getFullYear()} Ropa a tu mano - Todos los derechos reservados
    </CopyrightText>
  );
};

const StickyFooter = () => {
  return (
    <FooterMainContainer
      component="footer"
      sx={{
        px: 2,
        mt: "auto",
      }}
    >
      <FooterContentContainer>
        <FooterLinksContainer>
          <FooterLink variant="body2">COMO FUNCIONA</FooterLink>
          <FooterLink variant="body2">Politicas de privacidad</FooterLink>
        </FooterLinksContainer>

        <FooterDivider variant="fullWidth" />
        <Copyright />
      </FooterContentContainer>
    </FooterMainContainer>
  );
};

export default StickyFooter;
