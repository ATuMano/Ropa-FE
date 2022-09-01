import React from 'react';
import { TitleContainer, TopSectionContainer, Text } from 'styles';
import { ProductContainer, ProductTitle } from '../product-detail/product-detail-styles';
import { Cell, CellDescription, CellRight, CellTitle, Table, TotalPrice } from './review-order-styles';

const ReviewOrder = () => {
    return (
        <>
            <TopSectionContainer>
                <TitleContainer>
                    <Text>Revise los items que va a estar alquilando</Text>
                </TitleContainer>
            </TopSectionContainer>
            <ProductContainer>
                <ProductTitle>Resumen de alquiler</ProductTitle>
                <Table width='100'>
                    <tr>
                        <CellTitle >CAMISA OXFORD ROSA</CellTitle>
                        <CellRight rowSpan={2}>€ 1,00</CellRight>
                    </tr>
                    <tr>
                        <CellDescription>Camisa de cuello solapa y manga larga. Bolsill delantero</CellDescription>
                    </tr>
                    <tr>
                        <CellTitle>BLUSA ESTAMPADA BORDADOS</CellTitle>
                        <CellRight rowSpan={2}>€ 1,00</CellRight>
                    </tr>
                    <tr>
                        <CellDescription>Blusa estampada confeccionada en algodón. Cuello redondo</CellDescription>
                    </tr>
                    <tr>
                        <CellTitle>BLUSA FLUIDA ESTAMPADA</CellTitle>
                        <CellRight rowSpan={2}>€ 1,00</CellRight>
                    </tr>
                    <tr>
                        <CellDescription>Blusa confeccionada en viscosa. Escote pico con solapa y manga</CellDescription>
                    </tr>
                </Table>
                <TotalPrice>Total        € 3,00</TotalPrice>
                <ProductTitle>Retiro del producto</ProductTitle>
                <Table width='50'>
                    <tr>
                        <Cell>Local: </Cell>
                        <Cell>Barcelona local 1</Cell>
                    </tr>
                    <tr>
                        <Cell>Direccion: </Cell>
                        <Cell>C. del Pont del Treball Digne, 14, 08020</Cell>
                    </tr>
                    <tr>
                        <Cell>Fecha inicio viaje: </Cell>
                        <Cell>24/09/2022</Cell>
                    </tr>
                    <tr>
                        <Cell>Fecha fin viaje: </Cell>
                        <Cell>01/10/2022</Cell>
                    </tr>
                </Table>

                <ProductTitle>Detalles del pago</ProductTitle>
                <Table width='50'>
                    <tr>
                        <Cell>Nombre  en la tarjeta: </Cell>
                        <Cell>Adrian M. Dominguez</Cell>
                    </tr>
                    <tr>
                        <Cell>Tipo de tarjeta: </Cell>
                        <Cell>VISA</Cell>
                    </tr>
                    <tr>
                        <Cell>Número de tarjeta: </Cell>
                        <Cell>4000 0012 3456 7899</Cell>
                    </tr>
                    <tr>
                        <Cell>Fecha de vencimiento: </Cell>
                        <Cell>10/2024</Cell>
                    </tr>
                </Table>
            </ProductContainer>
        </>
    );
};

export default ReviewOrder;