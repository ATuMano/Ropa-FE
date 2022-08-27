import { DATE_FORMAT, END_TRIP, START_TRIP } from "app/constants";
import { selectFiltersTrip } from "features/filters/selectors/filter-selector";
import moment from "moment";
import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { TopSectionContainer, Text, MainButton } from "styles/global-styles";
import CountryFilter from "../country-filter/country-filter";
import DateFilter from "../country-filter/dates-filter";
import { FiltersContainer } from "./filter-trip-styles";

export const FiltersTrip = () => {
  const navigate = useNavigate();
  const { country, start_trip, end_trip } = useSelector(selectFiltersTrip);

  const handleSearch = () => {
    if (
      country &&
      moment(start_trip, DATE_FORMAT, true).isValid() &&
      moment(end_trip, DATE_FORMAT, true).isValid()
    ) {
      navigate("/genders");
    }
  };

  return (
    <TopSectionContainer>
      <FiltersContainer>
        <Text variant="h4">A donde quieres ir?</Text>
        <CountryFilter />
        <DateFilter fieldId={START_TRIP} placeholder="Fecha inicio viaje" />
        <DateFilter fieldId={END_TRIP} placeholder="Fecha fin viaje" />
        <MainButton onClick={handleSearch}>BUSCAR</MainButton>
      </FiltersContainer>
    </TopSectionContainer>
  );
};
