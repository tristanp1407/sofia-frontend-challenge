import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap');

    ::-webkit-scrollbar-track {
    background: none;
    }

    
    body {
        background: linear-gradient(${theme.colors.background.primary}, ${theme.colors.background.secondary});
        font-family: 'Work Sans', sans-serif;
        height: 100vh;
        margin: 0;
    }
`;
