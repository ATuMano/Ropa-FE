import React from 'react';
import { TitleContainer, TopSectionContainer, Text } from 'styles';
import { TitleTable } from '../review-order/review-order-styles';
import { ProductContainer } from "../product-detail/product-detail-styles";
import { Label, LabelContainer } from './purchase-confirmation-styles';
import { ButtonsContainer } from '../store-map/store-map-styles';
import CTAButton from '../shared/cta-button/cta-button';
import { useNavigate } from 'react-router-dom';

const PurchaseConfirmation = () => {
    const navigate = useNavigate();

    const handleConfirmClick = () => {
        navigate("/");
    };

    return (
        <>
            <TopSectionContainer>
                <TitleContainer>
                    <Text>Confirmación de compra</Text>
                </TitleContainer>
            </TopSectionContainer>
            <ProductContainer>
                <TitleTable>Gracias por tu orden</TitleTable>
                <LabelContainer>
                    <Label>Tu número de compra es #22-0123456789.</Label>
                    <Label>Podrás pasar a retirar tu orden por el local elegido, en la fecha de inicio de tu viaje.</Label>
                </LabelContainer>
                <ButtonsContainer>
                    <CTAButton
                        text="PAGINA PRINCIPAL"
                        onClick={handleConfirmClick}
                        isMain={true}
                    />
                </ButtonsContainer>
            </ProductContainer>
        </>
    );
};

export default PurchaseConfirmation;