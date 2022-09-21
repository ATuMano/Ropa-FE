import styled, { css } from "styled-components";
import { getCssForMobileView } from "styles/responsive";

const tableContainerMobile = css`
flex-direction: column;
margin-bottom: 1rem;
`;

export const TablesContainer = styled.div`
  display: flex;
  ${getCssForMobileView(tableContainerMobile)}
`;

export const TableContainer = styled.div`
  width: 100%;
`;

export const Table = styled.table`
  width: 100%;
  padding: 0px 20px;
  border: none;
`;

export const TableInfo = styled.table`
  width: 100%;
  border: 1px solid #0bb3be;
`;

export const TitleTable = styled.h4`
  color: #0bb3be;
  border: 1px solid #0bb3be;
  padding: 0.75rem;
  font-size: 18px;
`;

export const Cell = styled.td`
  min-width: 150px;
  padding: 0.5rem;
  font-size: 18px;
  line-height: 22px;
`;

export const RowTable = styled.tr``;

export const CellTitle = styled(Cell)`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  color: #000000;
`;

export const CellDescription = styled(Cell)`
  font-weight: 400;
  color: #999999;
`;

export const CellRight = styled(Cell)`
  text-align: right;
  font-weight: 400;
  color: #000000;
`;

export const TotalPrice = styled.div`
  font-family: ${({ theme }) => theme.fontFamily};
  font-weight: 600;
  font-size: 24px;
  line-height: 22px;
  color: #000000;
  border: 1px solid ${({ theme }) => theme.primaryColor};
  padding: 0.75rem;
  margin: 1.5rem 0;
  text-align: right;
`;
