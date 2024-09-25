import React from "react";
import styled from "styled-components";

interface ButtonProps {
    isPrimary?: boolean;
    color?: string;
    txt?: string;
}

  const StyledButton = styled.button<ButtonProps>`
    background: ${props => props.color === undefined ? "green" : props.color};
    color: ${props => props.isPrimary ? "white" : "black"};
    padding: 1em;
    border: none;
    border-radius: 10px;
    cursor: pointer;
    font-family: montsserat;
    &:hover {
      box-shadow: 0 0 10px 10px #1177D1;
      color: #FFFFFF;
    }
    @media (max-width: 768px) {
      background: #1177D1;
    }
  `;

export default function StkButton({ isPrimary, color, txt }: ButtonProps) {
    return (
        <StyledButton isPrimary={isPrimary} color={color}>{txt}</StyledButton>
    )
}