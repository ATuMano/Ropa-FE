import React from "react";
import { TopSectionContainer, Text, MainButton } from "styles/global-styles";
import CountryFilter from "../country-filter/country-filter";
import { FiltersContainer } from "./filter-trip-styles";

export const FiltersTrip = () => {
  return (
    <TopSectionContainer>
      <FiltersContainer>
        <Text>A donde quieres ir?</Text>
        <CountryFilter />
        <MainButton onClick={() => {}}>BUSCAR</MainButton>
      </FiltersContainer>
    </TopSectionContainer>
  );
};
