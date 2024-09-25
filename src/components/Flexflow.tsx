// import React from "react";
// import styled from "styled-components";

// interface FlexRowProps {
//     gap?: boolean;
//     padding?: boolean;
// }

// const StkFlexRow = styled.div<FlexRowProps>`
//     display: flex;
//     flex-direction: row;
//     align-items: center;
//     gap: ${ gap === undefined ? "0" : gap };
//     padding: ${ padding === undefined ? "0" : padding};
// `;

// export default function FlexFlow({ gap, padding, props }: FlexRowProps) {
//     return (
//         <StkFlexRow gap={gap} padding={padding}>{props.children}</StkFlexRow>
//     )
// }