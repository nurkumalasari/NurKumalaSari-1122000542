import React from "react";
interface LinkProps {
    href?: string;
    target?: string;
    label?: string;
}
export default function Link({ href, target, label }: LinkProps): React.JSX.Element;
export {};
