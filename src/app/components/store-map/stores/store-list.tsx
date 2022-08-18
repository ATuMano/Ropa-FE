import { selectFiltersTrip } from "features/filters/selectors/filter-selector";
import React, { FC } from "react";
import { useSelector } from "react-redux";
import StoreCard from "./store-card";
import { StoresListContainer, StoreListCard } from "./stores-styles";

interface StoreListProps {
  stores: Store[];
}
const StoreList: FC<StoreListProps> = ({ stores }) => {
  const { country } = useSelector(selectFiltersTrip);
  return (
    <StoresListContainer>
      <StoreListCard selected={false}>{country}</StoreListCard>
      {stores.map((storeItem, idx) => (
        <StoreCard key={storeItem.__id__} index={idx + 1} store={storeItem} />
      ))}
    </StoresListContainer>
  );
};

export default StoreList;
