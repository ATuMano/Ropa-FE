import styled, { css } from "styled-components";
import { MainButton } from "styles";
import { getCssForMobileView } from "styles/responsive";

export const ProductContainer = styled.section`
  width: 80%;
  margin: 2rem auto;
  padding-bottom: 36px;
`;

export const ProductImagesContainer = styled.div`
  display: flex;
  gap: 5%;
`;

export const ProductImage = styled.img`
  border: 1px solid #0bb3be;
  width: 30%;
`;

const productInfoContainerMobile = css`
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const ProductInfoContainer = styled.div`
  display: flex;
  ${getCssForMobileView(productInfoContainerMobile)}
`;

export const ProductTitle = styled.h4`
  color: #0bb3be;
  border: 1px solid #0bb3be;
  padding: 0.75rem;
  font-size: 18px;
  margin: 1.5rem 0;
`;

export const ProductTable = styled.table`
  border: none;
  td {
    min-width: 150px;
    padding: 0.5rem;
  }
`;

export const SelectContainer = styled.div`
  margin-left: auto;
`;

export const AddToCartButton = styled(MainButton)`
  float: right;
`;
