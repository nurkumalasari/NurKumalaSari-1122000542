import React from "react";
import styled from "styled-components";

interface TableProps {
    tabelData?: string;
    tableHeaderColumn?: string;
}

const TableWrapper = styled.div <TableProps> `
    margin: 0px 20%;
    font-family: montserrat;
    color: black;
    border: 1px solid #1177D1;
    border-radius: 5px;
    flex: 1;
    padding: 1em;
    box-shadow: 0 0 10px 0 rgba(0,0,0,.5);
`;

export default function Table({ tabelData, tableHeaderColumn }: TableProps) {
    return (
        <TableWrapper></TableWrapper>
    )
}