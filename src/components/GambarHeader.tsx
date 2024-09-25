import React from "react";
import styled from "styled-components";

const StkGambarHeader = styled.div `
        background-color: #FFFFFF;
        border-radius: 5px;
        flex: 1;
        padding: 25px 0px;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
        text-align: center;
    `;

  export default function GambarHeader() {
    return (
        <StkGambarHeader>
          <h2>Image 1</h2>
        </StkGambarHeader>
    )
}  