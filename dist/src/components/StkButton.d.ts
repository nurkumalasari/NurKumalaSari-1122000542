import React from "react";
interface ButtonProps {
    isPrimary?: boolean;
    color?: string;
    txt?: string;
}
export default function StkButton({ isPrimary, color, txt }: ButtonProps): React.JSX.Element;
export {};
