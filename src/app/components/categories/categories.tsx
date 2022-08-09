import React from "react";
import ImageCard, { AllowedPosition, CardItem } from "../card/card";
import { CardContainer } from "./categories-styles";

const Categories = () => {
  const cards = [
    {
      text: "Femenino",
      imageURL: "/assets/images/female.png",
    },
    {
      text: "Masculino",
      imageURL: "/assets/images/male.png",
    },
    {
      text: "Niños",
      imageURL: "/assets/images/children.png",
    },
  ];
  return (
    <CardContainer>
      {cards.map((card: CardItem) => (
        <ImageCard card={card} positionText={"top" as AllowedPosition} />
      ))}
    </CardContainer>
  );
};

export default Categories;
