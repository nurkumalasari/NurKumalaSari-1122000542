import React from "react";
import styled from "styled-components";

const ItemCard = styled.div `
    background-color: #FFFFFF;
    border-radius: 20px;
    padding: 2em;
    flex: 1;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
    text-align: center;
`;

export default function CardItem() {
    return (
        <ItemCard>
            <h2>CARD</h2>
            <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </ItemCard>
    )
}