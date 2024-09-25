import React from "react";
import styled from "styled-components";

const Hover = styled.button `
    border: none;
    color: black;
    padding: 16px 32px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin: 4px 2px;
    transition-duration: 0.4s;
    cursor: pointer;
    border: 2px solid #1177D1;
    font-family: montsserat;
    &:hover {
      background-color: #1177D1;
      color: white;
    }
  `;

  export default function ButtonHover() {
    return (
        <Hover>Hover</Hover>
    )
}  