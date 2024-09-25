import React from "react";
import styled from "styled-components";

const Background = styled.button `
    border: none;
    color: white;
    padding: 15px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    cursor: pointer;
    background-color: #1177D1;
    font-family: montsserat;
  `;

  export default function ButtonBackground() {
    return (
        <Background>Background</Background>
    )
}  