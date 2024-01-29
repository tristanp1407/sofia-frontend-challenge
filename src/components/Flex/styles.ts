import styled from "styled-components";

import { FlexProps } from ".";

export const StyledFlex = styled.div<FlexProps>`
  ${(p) => p.alignContent && `align-content: ${p.alignContent};`}
  ${(p) => p.alignItems && `align-items: ${p.alignItems};`}
    ${(p) => p.alignSelf && `align-self: ${p.alignSelf};`}
    display: flex;
  ${(p) => p.flexBasis && `flex-basis: ${p.flexBasis};`}
  ${(p) => p.flexDirection && `flex-direction: ${p.flexDirection};`}
    ${(p) => p.flexGrow && `flex-grow: ${p.flexGrow};`}
    ${(p) => p.flexWrap && `flex-wrap: ${p.flexWrap};`}
    ${(p) => p.gap && `gap: ${p.gap}rem;`}
    ${(p) => p.justifyContent && `justify-content: ${p.justifyContent};`}
`;
