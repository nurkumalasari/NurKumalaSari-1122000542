import React from "react";
import styled from "styled-components";

interface LinkProps {
    href?: string;
    target?: string;
    label?: string;
}

  const StkLink = styled.a<LinkProps>`
    color: #1177D1;
    text-decoration: none;
    flex: 1;
    &:hover {
        text-decoration: underline;
    }
`;

export default function Link({ href, target, label }: LinkProps) {
    return (
        <StkLink href={href} target={target}>{label}</StkLink>
    )
}