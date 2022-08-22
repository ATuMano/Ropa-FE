import React from "react";
import { useDispatch } from "react-redux";
import { setSelectedProduct } from "features/products/products-actions";
import ImageCard, { AllowedPosition, CardItem } from "../card/card";
import { CardContainer } from "../genders/genders-styles";
import { MainButton, TopSectionContainer, HeaderContainer, Text } from "styles";

const Products = () => {
    const dispatch = useDispatch();
    const products = [
        {
            text: "CAMISA OXFORD ROSA",
            imageURL: "/assets/images/products/CAMISA_OXFORD_ROSA.png"
        },
        {
            text: "CAMISA OXFORD AZUL",
            imageURL: "/assets/images/products/CAMISA_OXFORD_AZUL.png"
        },
        {
            text: "CAMISA POPELÍN CROP",
            imageURL: "/assets/images/products/CAMISA_POPELÍN_CROP.png"
        },
        {
            text: "BLUSA ESTAMPADA BORDADOS",
            imageURL: "/assets/images/products/BLUSA_ESTAMPADA_BORDADOS.png"
        },
        {
            text: "BLUSA FLUIDA ESTAMPADA",
            imageURL: "/assets/images/products/BLUSA_FLUIDA_ESTAMPADA.png"
        },
        {
            text: "BLUSA LUNARES ESCOTE FLUIDO",
            imageURL: "/assets/images/products/BLUSA_LUNARES_ESCOTE_FLUIDO.png"
        },
        {
            text: "CAMISA SEMITRANSPARENTE",
            imageURL: "/assets/images/products/CAMISA_SEMITRANSPARENTE.png"
        },
        {
            text: "CAMISA SATINADA ASIMÉTRICA",
            imageURL: "/assets/images/products/CAMISA_SATINADA_ASIMÉTRICA.png"
        },
        {
            text: "CAMISA ESTAMPADA ABALORIOS",
            imageURL: "/assets/images/products/CAMISA_ESTAMPADA_ABALORIOS.png"
        },

    ];

    const handleOnClick = (card: CardItem) => {
        dispatch(setSelectedProduct(card.text));
    };

    return (
        <>
            <TopSectionContainer>
                <HeaderContainer>
                    <Text>Productos</Text>
                    <MainButton>VOLVER A CATEGORIAS</MainButton>
                </HeaderContainer>
            </TopSectionContainer>
            <CardContainer>
                {products.map((card: CardItem) => (
                    <ImageCard
                        card={card}
                        positionText={"center" as AllowedPosition}
                        onClick={() => handleOnClick(card)}
                    />
                ))}
            </CardContainer>
        </>
    );
};

export default Products;
