import React from "react";
import styled from "styled-components";

const StkGambarItem = styled.div `
        background-color: #FFFFFF;
        border-radius: 5px;
        flex: 1;
        box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
        text-align: center;
    `;

  export default function GambarItem() {
    return (
        <StkGambarItem>
          <h2>Image 1</h2>
        </StkGambarItem>
    )
}  