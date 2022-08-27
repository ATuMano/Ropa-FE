import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Select } from "../select/select";
import { TopSectionContainer, TitleContainer, MainButton, Text } from "styles";
import {
  ProductContainer,
  ProductImagesContainer,
  ProductImage,
  ProductTitle,
  ProductInfoContainer,
  ProductTable,
  SelectContainer
} from "./product-detail-styles";
import { ActionTypes, Option, SelectActions } from "../select/select-types";
import { MultiValue } from "react-select";
import database from "ropa_ddbb.json";
import { setSelectedProductId } from "features/products/products-actions";
import { useDispatch } from "react-redux";

interface ProductDetailParams {
  productId: string;
}

const ProductDetail = () => {
  const { productId } = (useParams() as unknown) as ProductDetailParams;
  const dispatch = useDispatch();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const productDetail = (database.Products_details[
    productId as keyof Object
  ] as unknown) as Product;

  const onClearSelection = () => {
    setSelectedSize(null);
  };

  const onSelectValue = (selectedOption: Option | MultiValue<Option>) => {
    const values = Array.isArray(selectedOption)
      ? selectedOption.map(item => item.value)
      : [(selectedOption as Option | null)?.value];
    setSelectedSize(values.toString());
  };

  const handleChange = (
    selectedOption: Option | MultiValue<Option> | null,
    { action }: { action: ActionTypes }
  ) => {
    if (action === SelectActions.SELECT && selectedOption) {
      onSelectValue(selectedOption);
    } else if (action === SelectActions.CLEAR) {
      onClearSelection();
    }
  };

  const hasSizeAvailable = (): boolean => {
    return productDetail.size.length > 0;
  };

  const getSizeOptions = () => {
    return productDetail.size.map(size => ({ label: size, value: size }));
  };

  const getSelectedValue = () => {
    return selectedSize ? { label: selectedSize, value: selectedSize } : null;
  };

  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1);
  };

  const handleAddToChart = () => {
    dispatch(setSelectedProductId(productId));
    navigate("/confirmation");
  };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text variant="h4">Detalle Producto</Text>
          <MainButton onClick={handleGoBack}>VOLVER A PRODUCTOS</MainButton>
        </TitleContainer>
      </TopSectionContainer>
      <ProductContainer>
        <ProductImagesContainer>
          <ProductImage src={productDetail.photo1} />
          <ProductImage src={productDetail.photo2} />
          <ProductImage src={productDetail.photo3} />
        </ProductImagesContainer>
        <ProductTitle>{productDetail.name}</ProductTitle>
        <ProductInfoContainer>
          <ProductTable>
            <tr>
              <td>Descripción:</td>
              <td>{productDetail.detail}</td>
            </tr>
            <tr>
              <td>Marca:</td>
              <td>{productDetail.brand}</td>
            </tr>
            <tr>
              <td>Color:</td>
              <td>{productDetail.color}</td>
            </tr>
            <tr>
              <td>Precio:</td>
              <td>
                {productDetail.price} {productDetail.currency} al día
              </td>
            </tr>
          </ProductTable>
          <SelectContainer>
            {hasSizeAvailable() && (
              <Select
                placeholder={"Elige tu talla"}
                options={getSizeOptions()}
                noOptionsMessage={() => "No se encuentra resultados"}
                onChange={handleChange}
                name="size"
                inputId="size"
                value={getSelectedValue()}
              />
            )}
          </SelectContainer>
        </ProductInfoContainer>
        <MainButton onClick={handleAddToChart}>Añadir a la cesta</MainButton>
      </ProductContainer>
    </>
  );
};

export default ProductDetail;
