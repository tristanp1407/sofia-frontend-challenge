import { createGlobalStyle } from "styled-components";

import { theme } from "./theme";

export const GlobalStyle = createGlobalStyle`

/* @import url('https://fonts.googleapis.com/css2?family=Work+Sans:wght@300;400;500;600&display=swap'); */

    body {
        font-family: 'Work Sans', sans-serif;
        background: linear-gradient(${theme.background.primary}, ${theme.background.secondary});
        height: 100vh;
    }
`;
