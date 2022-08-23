import { FiltersTrip } from "app/components/filters-trip/filter-trip";
import React from "react";
import { useLocation } from "react-router-dom";
import { HeaderContainer } from "./header-styles";

const Header = () => {
  const location = useLocation();
  const isInLanding = location.pathname === "/";
  return isInLanding ? <FiltersTrip /> : <HeaderContainer />;
};

export default Header;
