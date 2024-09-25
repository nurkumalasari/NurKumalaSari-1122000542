import React from "react";
import styled from "styled-components";

const TopHeaderHd = styled.div `
    background: #FBEEAC;
    display: flex;
    justify-content: space-between;
    padding: 1 em 12 em;
`;

export default function TopHeader() {
    return (
        <TopHeaderHd></TopHeaderHd>
    )
}