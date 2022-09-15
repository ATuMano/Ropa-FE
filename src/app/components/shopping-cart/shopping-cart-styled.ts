import styled from "styled-components";

export const ShoppingCartContainer = styled.div`
  position: absolute;
  height: 100%;
  background-color: ${({ theme }) => theme.backgroundColor};
  min-width: 35%;
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
  margin: 2rem 0 2rem 0;
  overflow: auto;
  max-height: 80%;
`;

export const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  margin-top: 1rem;
`;

export const ProductTitle = styled.p`
  font-size: 20px;
  color: black;
  font-weight: 600;
  width: 100%;
  margin-top: 1rem;
`;

export const ProductImage = styled.img`
  border: 1px solid #0bb3be;
  width: 150px;
  height: 150px;
  margin-left: auto;
`;

export const ProductDescriptionContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;

export const ButtonsContainer = styled.div`
  display: flex;
  gap: 30px;
`;

export const CartButton = styled.button`
  width: 30px;
  height: 30px;
  border: solid 1px black;
  cursor: pointer;
`;

export const TotalPrice = styled.span`
  margin-left: 20px;
  font-weight: 600;
`;

export const ProductQuantity = styled.span`
  font-weight: 600;
`;
