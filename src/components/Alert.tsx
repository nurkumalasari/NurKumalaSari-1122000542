import React from "react";
import styled from "styled-components";

const WrapperAlert = styled.div `
    padding: 20px;
    background-color: #1177D1;
    color: white;
    margin-left: 25%;
    margin-left: 30%;
    flex: 1;
    width: 25%;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5); 
    border: 1px solid #1177D1;
    text-align: center;
`;

export default function Alert() {
    return (
        <WrapperAlert>Anda Yakin Ingin Keluar Dari Halaman Ini? </WrapperAlert>
    )
}  