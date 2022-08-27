import React, { FunctionComponent } from "react";
import { ColumnTableSection, ColumnTableText, SectionText } from "styles/global-styles";

export interface IStoreRentingDetailProps {}

const StoreRentingDetail: FunctionComponent<IStoreRentingDetailProps> = _props => {
  return (
    <ColumnTableSection>
      <SectionText variant="h6">Retiro del producto</SectionText>
      <ColumnTableText>PRUEBA</ColumnTableText>
    </ColumnTableSection>
  );
};

export default StoreRentingDetail;
