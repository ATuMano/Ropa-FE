import React from "react";
import { selectFiltersTrip } from "features/filters/selectors/filter-selector";
import { selectSelectPaymentData } from "features/payment/payment-selector";
import { useSelector } from "react-redux";
import {
  TitleContainer,
  TopSectionContainer,
  Text,
  GoBackButton
} from "styles";
import { ProductContainer } from "../product-detail/product-detail-styles";
import {
  Cell,
  CellDescription,
  CellRight,
  CellTitle,
  RowTable,
  Table,
  TableInfo,
  TitleTable,
  TablesContainer,
  TableContainer,
  TotalPrice
} from "./review-order-styles";
import database from "ropa_ddbb.json";
import { selectSelectedStore } from "features/selected-store/selectors/selected-store-selector";
import { selectShoppingCart } from "features/shopping-cart/shopping-cart-selector";
import { Product } from "features/shopping-cart/shopping-cart.types";
import { ButtonsContainer } from "../store-map/store-map-styles";
import CTAButton from "../shared/cta-button/cta-button";
import { useNavigate } from "react-router-dom";

interface ProductProps {
  name: string;
  detail: string;
  price: string;
}

const ProductItem = (props: ProductProps) => {
  const { name, detail, price } = props;
  return (
    <>
      <RowTable key={name}>
        <CellTitle>{name}</CellTitle>
        <CellRight rowSpan={2}>{price}</CellRight>
      </RowTable>
      <RowTable key={detail}>
        <CellDescription>{detail}</CellDescription>
      </RowTable>
    </>
  );
};

const productOrderRow = (productsShopping: Product[]) => {
  const productsOrder = productsShopping.map(product => {
    return <ProductItem key={product.name} {...product} />;
  });
  return productsOrder;
};

const getTotalPrice = (productsShopping: Product[]): string => {
  const totalPrice = productsShopping
    .map(product => product.price)
    .reduce((accum, p) => {
      const acc = Number(accum);
      const value = Number(p);
      return (acc + value).toString();
    });
  return Number(totalPrice).toFixed(2);
};

const ReviewOrder = () => {
  const navigate = useNavigate();
  const tripData = useSelector(selectFiltersTrip);
  const paymentData = useSelector(selectSelectPaymentData);
  const storeId = useSelector(selectSelectedStore);
  const productsShopping = useSelector(selectShoppingCart).products;
  const storeData = database.Cities.filter(
    city => city.name === tripData.country
  )[0].Stores.filter(store => store.__id__ === storeId)[0];

  const handleConfirmClick = () => {
    navigate("/purchase-confirmation");
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text>Revise los items que va a estar alquilando</Text>
        </TitleContainer>
      </TopSectionContainer>
      <ProductContainer>
        <TitleTable>Resumen de alquiler</TitleTable>
        <Table id="productsOrder">
          <tbody>{productOrderRow(productsShopping)}</tbody>
        </Table>
        <TotalPrice>Total € {getTotalPrice(productsShopping)}</TotalPrice>
        <TablesContainer>
          <TableContainer>
            <TitleTable>Retiro del producto</TitleTable>
            <TableInfo>
              <tbody>
                <tr>
                  <Cell>Local: </Cell>
                  <Cell>{storeData.name}</Cell>
                </tr>
                <tr>
                  <Cell>Direccion: </Cell>
                  <Cell>{storeData.address}</Cell>
                </tr>
                <tr>
                  <Cell>Fecha inicio viaje: </Cell>
                  <Cell>{tripData.start_trip}</Cell>
                </tr>
                <tr>
                  <Cell>Fecha fin viaje: </Cell>
                  <Cell>{tripData.end_trip}</Cell>
                </tr>
              </tbody>
            </TableInfo>
          </TableContainer>
          <TableContainer>
            <TitleTable>Detalles del pago</TitleTable>
            <TableInfo>
              <tbody>
                <tr>
                  <Cell>Nombre en la tarjeta: </Cell>
                  <Cell>{paymentData.cardHolder}</Cell>
                </tr>
                <tr>
                  <Cell>Tipo de tarjeta: </Cell>
                  <Cell>VISA</Cell>
                </tr>
                <tr>
                  <Cell>Número de tarjeta: </Cell>
                  <Cell>{paymentData.cardNumber}</Cell>
                </tr>
                <tr>
                  <Cell>Fecha de vencimiento: </Cell>
                  <Cell>{paymentData.cardExpiration}</Cell>
                </tr>
              </tbody>
            </TableInfo>
          </TableContainer>
        </TablesContainer>
      </ProductContainer>
      <ButtonsContainer>
        <GoBackButton onClick={handleGoBackClick}>VOLVER</GoBackButton>
        <CTAButton
          text="CONFIRMAR ALQUILER"
          onClick={handleConfirmClick}
          isMain={true}
        />
      </ButtonsContainer>
    </>
  );
};

export default ReviewOrder;
