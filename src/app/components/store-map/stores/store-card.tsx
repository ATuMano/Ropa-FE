import PhoneIcon from "app/components/icons/phone-icon";
import PinIcon from "app/components/icons/pin-icon";
import React, { FC } from "react";
import {
  Card,
  CardCircle,
  CardRow,
  CardText,
  CardTitle,
  IconContainer,
} from "./stores-styles";

const StoreCard: FC<{ store: Store; index: number }> = ({ store, index }) => {
  return (
    <Card>
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
