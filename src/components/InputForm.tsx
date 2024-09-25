import React from "react";
import styled from "styled-components";

const Input = styled.input `
    width: 100%;
    padding; 10px;
    border: 1px solid #1177D1;
    border-radius: 5px;
`;

export default function InputForm() {
    return (
        <Input type="text"></Input>
    )
} 