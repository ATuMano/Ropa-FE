import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import {
  MainButton,
  MainSectionContainer,
  Text,
  TitleContainer,
  TopSectionContainer
} from "styles";
import ImageCard, { AllowedPosition, CardItem } from "../card/card";
import { CardContainer } from "./categories-styles";
import database from "ropa_ddbb.json";
import { selectSelectedGender } from "features/gender/gender-selector";
import { setSelectedCategory } from "features/category/category-actions";

const Categories = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const gender = useSelector(selectSelectedGender);
  const categories = database.Genders.filter(g => g.name === gender)[0]
    .Categories;
  const cards = categories?.map(c => ({
    id: c.__id__,
    imageURL: c.photo,
    text: c.name
  }))!;

  const handleOnClick = (card: CardItem) => {
    dispatch(setSelectedCategory(card.text));
    history.push("/products");
  };

  const goBack = () => {
    history.goBack();
  };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text>Categorias</Text>
          <MainButton onClick={goBack}>VOLVER AL ESTILO</MainButton>
        </TitleContainer>
      </TopSectionContainer>
      <MainSectionContainer>
        <CardContainer>
          {cards.map((card: CardItem) => (
            <ImageCard
              key={card.id}
              card={card}
              positionText={"center" as AllowedPosition}
              onClick={() => handleOnClick(card)}
            />
          ))}
        </CardContainer>
      </MainSectionContainer>
    </>
  );
};

export default Categories;