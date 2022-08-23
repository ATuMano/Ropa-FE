import PhoneIcon from "app/components/icons/phone-icon";
import PinIcon from "app/components/icons/pin-icon";
import { setSelectedStore } from "features/selected-store/actions/selected-store-actions";
import { selectSelectedStore } from "features/selected-store/selectors/selected-store-selector";
import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Card,
  CardCircle,
  CardRow,
  CardText,
  CardTitle,
  IconContainer
} from "./stores-styles";

const StoreCard: FC<{ store: Store; index: number }> = ({ store, index }) => {
  const selectedStoreID = useSelector(selectSelectedStore);
  const isSelected = selectedStoreID && selectedStoreID === store.__id__;
  const dispatch = useDispatch();
  const onClickCard = () => {
    dispatch(setSelectedStore(store.__id__));
  };

  return (
    <Card selected={!!isSelected} onClick={onClickCard}>
      <CardRow>
        <CardCircle>{index}</CardCircle>
        <CardTitle variant="h5">{store.name}</CardTitle>
      </CardRow>
      <CardRow>
        <IconContainer>
          <PinIcon />
        </IconContainer>
        <CardText variant="body2">{store.address}</CardText>
      </CardRow>
      <CardRow>
        <IconContainer>
          <PhoneIcon />
        </IconContainer>
        <CardText variant="body2">{store.phone}</CardText>
      </CardRow>
    </Card>
  );
};

export default StoreCard;
