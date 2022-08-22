import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { Select } from "../select/select";
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
  const { productId } = useParams() as ProductDetailParams;
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

  const getSizeOptions = () => {
    return productDetail.size.map(size => ({ label: size, value: size }));
  };

  const getSelectedValue = () => {
    return selectedSize ? { label: selectedSize, value: selectedSize } : null;
  };

  return (
    <ProductContainer>
      <ProductImagesContainer>
        <ProductImage src={productDetail.photo1} />
        <ProductImage src={productDetail.photo2} />
        <ProductImage src={productDetail.photo3} />
      </ProductImagesContainer>
      <ProductTitle>
        {productDetail.name} {productId}
      </ProductTitle>
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
            <td>Color:</td>
            <td>{productDetail.price}€ al día</td>
          </tr>
        </ProductTable>
        <SelectContainer>
          <Select
            placeholder={"Elige tu talla"}
            options={getSizeOptions()}
            noOptionsMessage={() => "No se encuentra resultados"}
            onChange={handleChange}
            name="size"
            inputId="size"
            value={getSelectedValue()}
          />
        </SelectContainer>
      </ProductInfoContainer>
    </ProductContainer>
  );
};

export default ProductDetail;
