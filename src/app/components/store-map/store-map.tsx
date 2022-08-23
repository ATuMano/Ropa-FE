import { selectFiltersTrip } from "features/filters/selectors/filter-selector";
import { setSelectedStore } from "features/selected-store/actions/selected-store-actions";
import { selectSelectedStore } from "features/selected-store/selectors/selected-store-selector";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import CTAButton from "../shared/cta-button/cta-button";
import MapWrapper from "./map/map";
import {
  ButtonsContainer,
  MapSection,
  MapStoresContainer
} from "./store-map-styles";
import stores from "./stores.json";
import StoreList from "./stores/store-list";

type StoreType = { [key in string]: any };
const StoreMap = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const { country } = useSelector(selectFiltersTrip);
  const selectedStore = useSelector(selectSelectedStore);
  if (!country) return <></>;

  const handleGoBackClick = () => {
    dispatch(setSelectedStore(null));
    // TO DO this should go to another root
    history.push("/");
  };

  const handleConfirmClick = () => {
    console.log("confirm!");
  };

  const countryStores: Store[] = (stores as StoreType)[country];
  return (
    <MapStoresContainer>
      <StoreList stores={countryStores} />
      <MapSection>
        <MapWrapper markers={countryStores} />
        <ButtonsContainer>
          <CTAButton text="VOLVER" onClick={handleGoBackClick} isMain={false} />
          <CTAButton
            text="CONFIRMAR LOCAL"
            onClick={handleConfirmClick}
            isMain={true}
            disabled={!selectedStore}
          />
        </ButtonsContainer>
      </MapSection>
    </MapStoresContainer>
  );
};

export default StoreMap;
