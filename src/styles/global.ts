import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar-track {
    background: none;
    }

    
    body {
        background: linear-gradient(${theme.colors.background.primary}, ${theme.colors.background.secondary});
        font-family: sans-serif;
        height: 100vh;
        margin: 0;
    }
`;
