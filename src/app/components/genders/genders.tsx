import { setSelectedGender } from "features/gender/gender-actions";
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  GoBackButton,
  MainSectionContainer,
  Text,
  TitleContainer,
  TopSectionContainer
} from "styles";
import ImageCard, { AllowedPosition, CardItem } from "../card/card";
import { CardContainer } from "./genders-styles";
import database from "ropa_ddbb.json";

const Genders = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const genders = database.Genders.map(g => ({
    id: g.__id__,
    imageURL: g.photo,
    text: g.name
  }))!;

  const handleOnClick = (card: CardItem) => {
    dispatch(setSelectedGender(card.text));
    navigate("/categories");
  };

  const handleGoBackClick = () => {
    navigate("/");
  };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text>Define tu género</Text>
          <GoBackButton onClick={handleGoBackClick}>
            NUEVA BUSQUEDA
          </GoBackButton>
        </TitleContainer>
      </TopSectionContainer>
      <MainSectionContainer>
        <CardContainer>
          {genders.map((card: CardItem) => (
            <ImageCard
              key={card.id}
              card={card}
              positionText={"top" as AllowedPosition}
              onClick={() => handleOnClick(card)}
            />
          ))}
        </CardContainer>
      </MainSectionContainer>
    </>
  );
};

export default Genders;
