import { setSelectedGender } from "features/gender/gender-actions";
import React from "react";
import { useDispatch } from "react-redux";
import ImageCard, { AllowedPosition, CardItem } from "../card/card";
import { CardContainer } from "./genders-styles";

const Genders = () => {
  const dispatch = useDispatch();
  const cards = [
    {
      text: "Femenino",
      imageURL: "/assets/images/female.png"
    },
    {
      text: "Masculino",
      imageURL: "/assets/images/male.png"
    },
    {
      text: "Niños",
      imageURL: "/assets/images/children.png"
    }
  ];

  const handleOnClick = (card: CardItem) => {
    dispatch(setSelectedGender(card.text));
  };

  return (
    <CardContainer>
      {cards.map((card: CardItem) => (
        <ImageCard
          card={card}
          positionText={"top" as AllowedPosition}
          onClick={() => handleOnClick(card)}
        />
      ))}
    </CardContainer>
  );
};

export default Genders;
