import React from "react";
import styled from "styled-components";

const Input = styled.input`
    padding: 10px;
    font-size: 17px;
    width: 80%;
`;

export default function InputSearch() {
    return (
        <Input type="text" placeholder="Search..."></Input>
    )
} 