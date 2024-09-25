// import React from "react";
// import styled from "styled-components";

// interface ListProps {
//     href?: string;
//     label?: string;
//     hasLink?: string;
// }

// const StkLink({ label, hasLink, href=""}) {
//     if (hasLink) {
//         return (
//             <li className="item">
//                 <StkLink href={href} label={label}></StkLink>
//             </li>
//         );
//     }
//     return <li className="item">{label}</li>
// }

// export default function Link({ href, hasLink, label }: ListProps) {
//     return (
//         <StkLink href={href} label={label} hasLink={hasLink}></StkLink>
//     )
// }