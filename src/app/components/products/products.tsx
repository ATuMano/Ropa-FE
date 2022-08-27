import React from "react";
import { useSelector } from "react-redux";
import ImageCard, { AllowedPosition, CardItem } from "../card/card";
import { CardContainer } from "../genders/genders-styles";
import {
  MainButton,
  TopSectionContainer,
  TitleContainer,
  Text,
  MainSectionContainer
} from "styles";
import { selectSelectedCategory } from "features/category/category-selector";
import database from "ropa_ddbb.json";
import { selectSelectedGender } from "features/gender/gender-selector";
import { useNavigate } from "react-router-dom";

const Products = () => {
  const navigate = useNavigate();
  const gender = useSelector(selectSelectedGender);
  const categorySelected = useSelector(selectSelectedCategory);
  const productsFiltered = database.Genders.filter(
    data => data.name === gender
  )[0].Categories?.filter(categories => categories.name === categorySelected)[0]
    .Products_summary;
  const products = productsFiltered?.map(p => ({
    id: p.__id__,
    imageURL: p.photo,
    text: p.name
  }))!;

  const handleOnClick = (card: CardItem) => {
    navigate(`/product/${card.id}`);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text variant="h4">Productos</Text>
          <MainButton onClick={handleGoBack}>VOLVER A CATEGORIAS</MainButton>
        </TitleContainer>
      </TopSectionContainer>
      <MainSectionContainer>
        <CardContainer>
          {products.map((card: CardItem) => (
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

export default Products;
