import React from "react";
import styled from "styled-components";

interface LabelProps {
    primary?: boolean;
}

const Label = styled.label<LabelProps>`
    display: block;
    margin-bottom; 5px;
    font-weight: bold;
    color: ${props => props.primary ? "#1177D1" : "black"};
`;

export default function LabelForm({ primary }: LabelProps) {
    return (
        <Label primary={primary}>Username:</Label>
    )
} 