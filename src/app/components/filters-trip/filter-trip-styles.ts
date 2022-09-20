import styled, { css } from "styled-components";
import { getCssForMobileView } from "styles/responsive";

const filtersContainerMobile = css`
  flex-direction: column;
  gap: 10px;
`;

export const FiltersContainer = styled.div`
  display: flex;
  width: 90%;
  align-items: center;
  gap: 5%;
  padding: 32px;
  ${getCssForMobileView(filtersContainerMobile)}
`;

export const SelectContainer = styled.div`
  display: flex;
`;
