import { selectProductsInChart } from "features/products/product-selectors";
import React, { FunctionComponent } from "react";
import { useSelector } from "react-redux";
import { SectionText } from "styles/global-styles";
import database from "ropa_ddbb.json";
import {
  ProductDetailSection,
  ProductDetailText,
  ProductPriceSection,
  ProductSection,
  ProductText,
  TotlaSectionText
} from "./renting-detail-styles";

export interface IRentingDetailProps {}

const RentingDetail: FunctionComponent<IRentingDetailProps> = _props => {
  const productsInChart = useSelector(selectProductsInChart);
  const productDetails = productsInChart.map(
    id => (database.Products_details[id as keyof Object] as unknown) as Product
  );
  const totalPrice = productDetails.reduce(
    (acc, { price }) => acc + parseFloat(price),
    0
  );
  const totalCurrency = productDetails[0]?.currency;
  const productDetailSection = (
    name: string,
    detail: string,
    price: string,
    currency: string
  ) => (
    <>
      <ProductDetailSection>
        <ProductText variant="button">{name}</ProductText>
        <ProductDetailText>{detail}</ProductDetailText>
      </ProductDetailSection>
      <ProductPriceSection>
        <ProductText variant="button">{`${currency} ${price}`}</ProductText>
      </ProductPriceSection>
    </>
  );
  return (
    <>
      <SectionText variant="h6">Resumen del alquiler</SectionText>
      <ProductSection>
        {productDetails.map(({ detail, name, price, currency }) =>
          productDetailSection(name, detail, price, currency)
        )}
      </ProductSection>
      <TotlaSectionText variant="h6">{`Total ${totalCurrency} ${totalPrice}`}</TotlaSectionText>
    </>
  );
};

export default RentingDetail;
