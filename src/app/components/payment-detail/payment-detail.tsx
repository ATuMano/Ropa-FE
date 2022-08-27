import React, { FunctionComponent } from "react";
import { ColumnTableSection, ColumnTableText, SectionText } from "styles/global-styles";

export interface IPaymentDetailProps {}

const PaymentDetail: FunctionComponent<IPaymentDetailProps> = _props => {
  return (
    <ColumnTableSection>
      <SectionText variant="h6">Detalles del pago</SectionText>
      <ColumnTableText>PRUEBA</ColumnTableText>
    </ColumnTableSection>
  );
};

export default PaymentDetail;
