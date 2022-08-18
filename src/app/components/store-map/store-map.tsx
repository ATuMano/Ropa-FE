import { selectFiltersTrip } from "features/filters/selectors/filter-selector";
import React from "react";
import { useSelector } from "react-redux";
import MapWrapper from "./map/map";
import { MapStoresContainer } from "./store-map-styles";
import stores from "./stores.json";
import StoreList from "./stores/store-list";

type StoreType = { [key in string]: any };
const StoreMap = () => {
  const { country } = useSelector(selectFiltersTrip);
  if (!country) return <></>;

  const countryStores: Store[] = (stores as StoreType)[country];
  return (
    <MapStoresContainer>
      <StoreList stores={countryStores} />
      <MapWrapper markers={countryStores} />
    </MapStoresContainer>
  );
};

export default StoreMap;
