import React from "react";
import styled from "styled-components";

const CloseButton = styled.div`
    margin-left: 15px;
    color: white;
    font-weight: bold;
    float: right;
    font-size: 22px;
    line-height: 20px;
    cursor: pointer;
    transition: 0.3s;
    &:hover {
        color: black;
    }
`;

export default function CloseButtonAlert() {
    return (
        <CloseButton>&timess;</CloseButton>
    )
} 