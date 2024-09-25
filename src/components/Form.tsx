import React from "react";
import styled from "styled-components";

const WrapperForm = styled.form`
    background-color: #FFFFFF;
    border-radius: 20px;
    border: 1px solid #1177D1;
    padding: 2em;
    margin-left: 30%;
    flex: 1;
    width: 30%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);  
`;

export default function Form() {
    return (
        <WrapperForm></WrapperForm>
    )
} 