import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Select } from "../select/select";
import {
  TopSectionContainer,
  TitleContainer,
  GoBackButton,
  Text
} from "styles";
import {
  ProductContainer,
  ProductImagesContainer,
  ProductImage,
  ProductTitle,
  ProductInfoContainer,
  ProductTable,
  SelectContainer,
  AddToCartButton
} from "./product-detail-styles";
import { ActionTypes, Option, SelectActions } from "../select/select-types";
import { MultiValue } from "react-select";
import database from "ropa_ddbb.json";
import { setSelectedProductId } from "features/products/products-actions";
import { addProduct } from "features/shopping-cart/shopping-cart-actions";
import { useNotification } from "features/notifications/use-notification";

interface ProductDetailParams {
  productId: string;
}

interface Product {
  brand: string;
  color: string;
  currency: string;
  detail: string;
  id: string;
  name: string;
  photo1: string;
  photo2: string;
  photo3: string;
  price: string;
  size: string[];
}

const ProductDetail = () => {
  const { productId } = (useParams() as unknown) as ProductDetailParams;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(false);
  const { showNotification, Notification } = useNotification();

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
    setIsButtonDisabled(false);
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

  const dispatch = useDispatch();

  const navigate = useNavigate();

  const handleGoBackClick = () => {
    dispatch(setSelectedProductId(""));
    navigate("/products");
  };

  const handleOnClick = () => {
    if (!selectedSize) return;

    const id = productDetail?.id || productId;

    const product = {
      ...productDetail,
      size: selectedSize,
      quantity: 1,
      id
    };

    showNotification("Producto agregado");
    setIsButtonDisabled(true);
    dispatch(addProduct(product));
  };

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text>Detalle Producto</Text>
          <GoBackButton onClick={handleGoBackClick}>
            VOLVER A PRODUCTOS
          </GoBackButton>
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
                {productDetail.price} {productDetail.currency}
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
        <AddToCartButton disabled={isButtonDisabled} onClick={handleOnClick}>
          AGREGAR AL CARRITO
        </AddToCartButton>
      </ProductContainer>
      <Notification />
    </>
  );
};

export default ProductDetail;
