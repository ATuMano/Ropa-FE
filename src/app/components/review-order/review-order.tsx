import React from "react";
import { selectFiltersTrip } from 'features/filters/selectors/filter-selector';
import { selectSelectPaymentData } from 'features/payment/payment-selector';
import { useSelector } from 'react-redux';
import { TitleContainer, TopSectionContainer, Text } from "styles";
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
import { selectSelectedStore } from 'features/selected-store/selectors/selected-store-selector';

const productsShopping = [
  {
    brand: "ZARA",
    color: "NEGRO",
    currency: "€",
    detail:
      "Camiseta de cuello redondo y manga corta. Estampación combinada a contraste en delantero.",
    name: "CAMISA OXFORD ROSA",
    photo1: "",
    photo2: "",
    photo3: "",
    price: "1.33",
    size: "XS"
  },
  {
    brand: "ZARA",
    color: "NEGRO",
    currency: "€",
    detail:
      "Camiseta de cuello redondo y manga corta. Estampación combinada a contraste en delantero.",
    name: "BLUSA ESTAMPADA BORDADOS",
    photo1: "",
    photo2: "",
    photo3: "",
    price: "1.56",
    size: "XS"
  },
  {
    brand: "ZARA",
    color: "NEGRO",
    currency: "€",
    detail:
      "Camiseta de cuello redondo y manga corta. Estampación combinada a contraste en delantero.",
    name: "BLUSA FLUIDA ESTAMPADA",
    photo1: "",
    photo2: "",
    photo3: "",
    price: "1.30",
    size: "XS"
  }
];

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

const productOrderRow = () => {
  const productsOrder = productsShopping.map(product => {
    return <ProductItem key={product.name} {...product} />;
  });
  return productsOrder;
};

const getTotalPrice = () =>
  productsShopping
    .map(product => product.price)
    .reduce((accum, p) => {
      const acc = Number(accum);
      const value = Number(p);
      return (acc + value).toString();
    });

const ReviewOrder = () => {
  const tripData = useSelector(selectFiltersTrip);
  const paymentData = useSelector(selectSelectPaymentData);
  const storeId = useSelector(selectSelectedStore);
  const storeData = database.Cities.filter(city => city.name === tripData.country)[0].Stores.filter(store => store.__id__ === storeId)[0];
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
          <tbody>{productOrderRow()}</tbody>
        </Table>
        <TotalPrice>Total € {getTotalPrice()}</TotalPrice>
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
    </>
  );
};

export default ReviewOrder;
