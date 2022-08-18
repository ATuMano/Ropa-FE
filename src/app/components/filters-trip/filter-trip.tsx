import { END_TRIP, START_TRIP } from "app/constants";
import React from "react";
import { TopSectionContainer, Text, MainButton } from "styles/global-styles";
import CountryFilter from "../country-filter/country-filter";
import DateFilter from "../country-filter/dates-filter";
import { FiltersContainer } from "./filter-trip-styles";

export const FiltersTrip = () => {
  return (
    <TopSectionContainer>
      <FiltersContainer>
        <Text>A donde quieres ir?</Text>
        <CountryFilter />
        <DateFilter fieldId={START_TRIP} placeholder="Fecha inicio viaje" />
        <DateFilter fieldId={END_TRIP} placeholder="Fecha fin viaje" />
        <MainButton onClick={() => {}}>BUSCAR</MainButton>
      </FiltersContainer>
    </TopSectionContainer>
  );
};
