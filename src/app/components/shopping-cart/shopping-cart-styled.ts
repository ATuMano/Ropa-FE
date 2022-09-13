import styled from "styled-components";

export const ShoppingCardContainer = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  min-width: 30%;
  right: 0;
  z-index: 10;
  padding: 2.5rem;
  border: solid 1px black;
`;

export const CartTitle = styled.h4`
  color: ${({ theme }) => theme.primaryColor};
  font-size: 24px;
`;

export const CartTable = styled.div`
  margin-top: 3rem;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const ProductTitle = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 600;
  width: 100%;
`;

export const ProductImage = styled.img`
  border: 1px solid #0bb3be;
  width: 150px;
  height: 150px;
`;
