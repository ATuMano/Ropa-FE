import { FiltersTrip } from "app/components/filters-trip/filter-trip";
import React from "react";
import {
  ImageContainer,
  LandingText,
  LandingtextContainer
} from "./landing-styles";

const Landing = () => {
  return (
    <>
    <FiltersTrip />
      <ImageContainer data-testid="landing-imagen-container">
        <LandingtextContainer data-testid="landing-text-container">
          <LandingText data-testid="landing-title" variant="h4">
            Disfruta tus vacas
          </LandingText>
          <LandingText
            data-testid="landing-paragraph-1"
            variant="body2"
            paragraph
          >
            Sabemos el estres de armar la valija. Es por eso que te solucionamos
            para que puedas enfocarte en disfrutar!
          </LandingText>
          <LandingText
            data-testid="landing-paragraph-2"
            variant="body2"
            paragraph
          >
            Preparate el pasaporte y el itinerario del viaje. Nosotros nos
            ocupamos de la ropa!
          </LandingText>
        </LandingtextContainer>
      </ImageContainer>
    </>
  );
};

export default Landing;
