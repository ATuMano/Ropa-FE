import { Box } from "@material-ui/core";
import styled, { css } from "styled-components";
import { getCssForMobileView, getCssForLargeView } from "styles/responsive";

export const PaymentTitle = styled.h4`
  color: #0bb3be;
  border: 1px solid #0bb3be;
  padding: 0.75rem;
  font-size: 18px;
  margin: 1.5rem 0;
`;

export const FieldsContainer = styled.div`
  padding: 8px 36px;

  .MuiFormControl-root {
    width: -webkit-fill-available;
  }
`;

const FieldLarge = css`
  width: 50%;
`;

export const Field = styled.div`
  display: inline-block;
  flex-direction: column;
  padding: 20px;
  ${getCssForLargeView(FieldLarge)};
`;

const buttonsContainerMobile = css`
  flex-direction: column;
  gap: 1em;
  float: none;
  width: 100%;
  align-self: unset;
  align-content: center;
`;

export const ButtonsContainer = styled(Box)`
  display: flex;
  align-self: self-end;
  float: right;
  ${getCssForMobileView(buttonsContainerMobile)}
`;
