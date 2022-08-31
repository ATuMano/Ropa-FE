import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  MainSectionContainer,
  Text,
  TitleContainer,
  GoBackButton,
  TopSectionContainer
} from "styles";
import CTAButton from "../shared/cta-button/cta-button";
import {
  ButtonsContainer,
  Field,
  FieldsContainer,
  PaymentTitle
} from "./payment-styles";
import { TextField } from "@material-ui/core";
import { paymentInitialData } from "features/payment/payment-reducer";
import { setPaymentData } from "features/payment/payment-actions";

const Payment = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [
    { cardHolder, cardNumber, cardExpiration, cardCVV },
    setPaymentDataState
  ] = useState(paymentInitialData);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPaymentDataState({
      cardHolder,
      cardNumber,
      cardExpiration,
      cardCVV,
      [event.target.id]: event.target.value
    });
  };

  const handleConfirmClick = () => {
    dispatch(
      setPaymentData({ cardHolder, cardNumber, cardExpiration, cardCVV })
    );
    navigate("/summary");
  };

  const handleGoBackClick = () => {
    navigate(-1);
  };

const isButtonEnabled = () => {
  return cardHolder && cardNumber && cardExpiration && cardCVV;
};

  return (
    <>
      <TopSectionContainer>
        <TitleContainer>
          <Text>
            Ingresar los datos de tu tarjeta para realizar el pago del alquier
          </Text>
        </TitleContainer>
      </TopSectionContainer>
      <MainSectionContainer>
        <PaymentTitle>METODO DE PAGO DEL ALQUILER</PaymentTitle>
        <FieldsContainer>
          <Field>
            <TextField
              id="cardHolder"
              placeholder="ej: Juan Sanchez"
              label="Nombre en la tarjeta"
              variant="outlined"
              value={cardHolder}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              id="cardNumber"
              placeholder="ej: 4000 0012 3456 7899"
              label="Número de tarjeta"
              variant="outlined"
              value={cardNumber}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              id="cardExpiration"
              placeholder="MM/AA ej: 10/22"
              label="Fecha de vencimiento"
              variant="outlined"
              value={cardExpiration}
              onChange={handleChange}
            />
          </Field>
          <Field>
            <TextField
              id="cardCVV"
              placeholder="ej: 000"
              label="Código de seguridad (CVV)"
              variant="outlined"
              value={cardCVV}
              onChange={handleChange}
            />
          </Field>
        </FieldsContainer>
        <ButtonsContainer>
          <GoBackButton onClick={handleGoBackClick}>VOLVER</GoBackButton>
          <CTAButton
            text="CONFIRMAR PAGO"
            onClick={handleConfirmClick}
            isMain={true}
            disabled={!isButtonEnabled()}
          />
        </ButtonsContainer>
      </MainSectionContainer>
    </>
  );
};

export default Payment;
