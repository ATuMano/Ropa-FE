import { FiltersTrip } from "app/components/filters-trip/filter-trip";
import React from "react";
import {
  ImageContainer,
  LandingTextTitle,
  LandingTextSubTitle,
  LandingtextContainer
} from "./landing-styles";

const Landing = () => {
  return (
    <>
      <FiltersTrip />
      <ImageContainer data-testid="landing-imagen-container">
        <LandingtextContainer data-testid="landing-text-container">
          <LandingTextTitle data-testid="landing-title">
            Disfruta tus vacas, nosotros nos ocupamos de la ropa!
          </LandingTextTitle>
          <LandingTextSubTitle data-testid="landing-paragraph-1">
            Sabemos el estres de armar la valija.
          </LandingTextSubTitle>
          <LandingTextSubTitle data-testid="landing-paragraph-2">
            Por eso te lo solucionamos para que puedas enfocarte en disfrutar!
          </LandingTextSubTitle>
        </LandingtextContainer>
      </ImageContainer>
    </>
  );
};

export default Landing;
