import React from "react";
import styled from "styled-components";

const HeaderHd = styled.header `
    background: #1177d1;
    display: flex;
    justify-content: space-between;
    padding: 1em 12 em;
`;

export default function Header() {
    return (
        <HeaderHd></HeaderHd>
    )
}