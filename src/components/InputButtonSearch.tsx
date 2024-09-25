import React from "react";
import styled from "styled-components";

const InputButton = styled.input `
    width: 5%;
    padding; 10px;
    border: 1px solid #1177D1;
    cursor: pointer;
    background: #1177D1;
`;

export default function InputButtonSearch() {
    return (
        <InputButton type="submit">Submit</InputButton>
    )
} 