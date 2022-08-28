import PaymentDetail from "app/components/payment-detail/payment-detail";
import RentingDetail from "app/components/renting-detail/renting-detail";
import StoreRentingDetail from "app/components/store-renting-detail/store-renting-detail";
import React from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { setSelectedProductId } from "features/products/products-actions";
import {
  TopSectionContainer,
  TitleContainer,
  Text,
  MainSectionContainer
} from "styles";
import { TableSection } from "./confirm-rent-styles";
// import { selectSelectedCategory } from "features/category/category-selector";
// import database from "ropa_ddbb.json";
// import { selectSelectedGender } from "features/gender/gender-selector";
// import { useNavigate } from "react-router-dom";

const ConfirmRent = () => {
  // const dispatch = useDispatch();
  // const navigate = useNavigate();
  // const gender = useSelector(selectSelectedGender);
  // const categorySelected = useSelector(selectSelectedCategory);
  // const productsFiltered = database.Genders.filter(
  //   data => data.name === gender
  // )[0].Categories?.filter(categories => categories.name === categorySelected)[0]
  //   .Products_summary;
  // const products = productsFiltered?.map(p => ({
  //   id: p.__id__,
  //   imageURL: p.photo,
  //   text: p.name
  // }))!;

  // const handleOnClick = (card: CardItem) => {
  //   dispatch(setSelectedProductId(card.id));
  //   navigate(`/product/${card.id}`);
  // };

  // const handleGoBack = () => {
  //   dispatch(setSelectedProductId(""));
  //   navigate(-1);
  // };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text variant="h4">Revise los items que va a estar alquilando</Text>
        </TitleContainer>
      </TopSectionContainer>
      <MainSectionContainer>
        <RentingDetail />
        <TableSection>
          <StoreRentingDetail />
          <PaymentDetail />
        </TableSection>
      </MainSectionContainer>
    </>
  );
};

export default ConfirmRent;
