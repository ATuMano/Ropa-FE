import { FiltersTrip } from "app/components/filters-trip/filter-trip";
import React from "react";
import { useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();
  const isInLanding = location.pathname === "/";
  return isInLanding ? <FiltersTrip /> : null;
};

export default Header;
