import React from "react";
import {
  ImageContainer,
  LandingText,
  LandingtextContainer,
} from "./landing-styles";

const Landing = () => (
  <ImageContainer>
    <LandingtextContainer>
      <LandingText variant="h4">Disfruta tus vacas</LandingText>
      <LandingText variant="body2" paragraph>
        Sabemos el estres de armar la valija. Es por eso que te solucionamos
        para que puedas enfocarte en disfrutar!
      </LandingText>
      <LandingText variant="body2" paragraph>
        Preparate el pasaporte y el itinerario del viaje. Nosotros nos ocupamos
        de la ropa!
      </LandingText>
    </LandingtextContainer>
  </ImageContainer>
);

export default Landing;
