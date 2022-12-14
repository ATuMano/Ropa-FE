/* eslint-disable @typescript-eslint/no-unused-vars */
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
  TotalPrice,
  ButtonsContainer
} from "./review-order-styles";
import database from "ropa_ddbb.json";
import { selectSelectedStore } from "features/selected-store/selectors/selected-store-selector";
import { selectShoppingCart } from "features/shopping-cart/shopping-cart-selector";
import { Product } from "features/shopping-cart/shopping-cart.types";
import CTAButton from "../shared/cta-button/cta-button";
import { useNavigate } from "react-router-dom";
import {
  collection,
  addDoc,
  doc,
  getFirestore,
  serverTimestamp
} from "firebase/firestore";

interface ProductProps {
  name: string;
  size: string;
  detail: string;
  price: string;
}

const ProductItem = (props: ProductProps) => {
  const { name, size, detail, price } = props;
  return (
    <>
      <RowTable key={name}>
        <CellTitle>
          {name} - Talle: {size}
        </CellTitle>
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

  const handleConfirmClick = async () => {
    const docRef = await addDoc(collection(getFirestore(), "orders"), {
      trip: tripData,
      payment: (({ cardCVV, ...payment }) => payment)(paymentData),
      products: productsShopping.map(({ photo2, photo3, ...prod }) => prod),
      store: { name: storeData.name, address: storeData.address },
      timeStamp: serverTimestamp()
    });
    navigate(`/purchase-confirmation/${docRef.id}`);
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
        <TotalPrice>Total ??? {getTotalPrice(productsShopping)}</TotalPrice>
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
                  <Cell>Fecha retiro: </Cell>
                  <Cell>{tripData.start_trip}</Cell>
                </tr>
                <tr>
                  <Cell>Fecha devoluci??n: </Cell>
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
                  <Cell>N??mero de tarjeta: </Cell>
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
