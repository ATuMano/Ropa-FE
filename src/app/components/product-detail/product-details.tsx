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

interface ProductDetailParams {
  productId: string;
}

interface Product {
  title: string;
  description: string;
  brand: string;
  color: string;
  price: number;
  sizes: string[];
  images: string[];
}

const fakeProduct = {
  title: "Camisa Oxford",
  description: "Camisa adsgfkgj flkjg oisjdioa djsiao jdaos nfme",
  brand: "Zara",
  color: "Rosa",
  price: 1,
  sizes: ["S", "M", "L"],
  images: [
    "/assets/images/male.png",
    "/assets/images/male.png",
    "/assets/images/male.png"
  ]
} as Product;

const ProductDetail = () => {
  const { productId } = useParams() as ProductDetailParams;
  const [selectedSize, setSelectedSize] = useState<string | null>(null);

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
    return fakeProduct.sizes.map(size => ({ label: size, value: size }));
  };

  const getSelectedValue = () => {
    return selectedSize ? { label: selectedSize, value: selectedSize } : null;
  };

  return (
    <ProductContainer>
      <ProductImagesContainer>
        {fakeProduct.images.map(image => (
          <ProductImage src={image} />
        ))}
      </ProductImagesContainer>
      <ProductTitle>
        {fakeProduct.title} {productId}
      </ProductTitle>
      <ProductInfoContainer>
        <ProductTable>
          <tr>
            <td>Descripción:</td>
            <td>{fakeProduct.description}</td>
          </tr>
          <tr>
            <td>Marca:</td>
            <td>{fakeProduct.brand}</td>
          </tr>
          <tr>
            <td>Color:</td>
            <td>{fakeProduct.color}</td>
          </tr>
          <tr>
            <td>Color:</td>
            <td>{fakeProduct.price}€ al día</td>
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
