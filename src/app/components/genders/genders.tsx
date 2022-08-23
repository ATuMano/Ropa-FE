import { setSelectedGender } from "features/gender/gender-actions";
import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  MainButton,
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
  const history = useHistory();
  const genders = database.Genders.map(g => ({
    id: g.__id__,
    imageURL: g.photo,
    text: g.name
  }))!;

  const handleOnClick = (card: CardItem) => {
    dispatch(setSelectedGender(card.text));
    history.push("/categories");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text>Define tu género</Text>
          <MainButton onClick={goBack}>NUEVA BUSQUEDA</MainButton>
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
